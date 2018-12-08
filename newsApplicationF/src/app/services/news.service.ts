import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpResponse} from "@angular/common/http";
import { News} from "../models/News";
import { NewsFetcher} from "../interfaces/news-fetcher";
import { throwError} from "rxjs";
import {catchError,retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class NewsService implements NewsFetcher {

  constructor(private httpClient: HttpClient) {}

  /*
    Retrieves general news.
   */
  getGeneralNews(location, pageSize) {
    return this.httpClient.get("/guardianNews/news",
      {
        params: new HttpParams().set("production-office", location).set("page-size", pageSize),
        observe: 'response',// to get the full response; not just the body (JSON).
        reportProgress: true
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleHttpErrors) // then handle the error.
    );
  }


  /*
    Retrieves articles about politics.
   */
  getPoliticsArticles(location, pageSize) {
    return this.httpClient.get("/guardianNews/politics", {
      params: new HttpParams().set("production-office", location).set("page-size", pageSize),
      observe: 'response',
      reportProgress: true
    })
      .pipe(
        retry(3),
        catchError(this.handleHttpErrors)
      );
  }



  /*
    Retrieves articles about sports.
   */
  getSportsArticles(location, pageSize) {
    return this.httpClient.get<News[]>("/guardianNews/sports",
      {
        params: new HttpParams().set("production-office", location).set("page-size",pageSize),
        observe: 'response',
        reportProgress: true
      })
      .pipe(
        retry(3),
        catchError(this.handleHttpErrors)
      );
  }

  /*
    Retrieves articles about the environment.
   */
  getEnvironmentalArticles(location, pageSize) {

  }


  /**
   * Function to handle HttpResponse errors.
   * @param error
   */
  private  handleHttpErrors(error: HttpResponse<News[]>) {
    if (error instanceof ErrorEvent) {
      // client side error.
      console.error('An error occurred.' + error.error.message);
    } else {
      // backend side error.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.body}`);
    }
    /*
      Notice that this handler returns an RxJS ErrorObservable with a user-friendly error message.
      Consumers of the service expect service methods to return an Observable of some kind, even a "bad" one.
     */
    return throwError('Something went wrong, try again later?');
  };
}
