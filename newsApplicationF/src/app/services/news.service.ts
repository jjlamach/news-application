import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from "@angular/common/http";
import {News} from "../models/News";
import { Observable} from "rxjs";
import {Consumer} from "../interfaces/consumer";


@Injectable({
  providedIn: 'root'
})
/**
 * Service that retrieves data from the backend API.
 */
export class NewsService implements Consumer{

  /*  DI, by adding it as a parameter in the constructor.*/
  constructor(private HttpClient: HttpClient) { }

  public getNews(pageSize, location): Observable <News[]> {
    return this.HttpClient.get<News[]>("http://localhost:8080/guardianNews/news",
      {params: new HttpParams().set("page-size", pageSize).set("production-office",location)});
  }

  getPoliticsArticles(pageSize, location) {

  }

  getSportsArticles(pageSize, location) {

  }
}
