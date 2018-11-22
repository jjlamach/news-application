import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from "@angular/common/http";
import { News} from "../models/news";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
/**
 * Service that retrieves data from the backend API.
 */
export class NewsService {

  /*  DI, by adding it as a parameter in the constructor.*/
  constructor(private HttpClient: HttpClient) { }

  public getNews(pageSize, location): Observable <News[]> {
    return this.HttpClient.get<News[]>("http://localhost:8080/guardianNews/news",
      {params: new HttpParams().set("page-size", pageSize).set("production-office",location)});
  }
}
