import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from "@angular/common/http";
import {News} from "../models/News";
import {NewsFetcher} from "../interfaces/news-fetcher";

@Injectable({
  providedIn: 'root'
})

export class NewsService implements NewsFetcher{

  constructor(private httpClient: HttpClient) {}

  /*
    Retrieves general news.
   */
  getGeneralNews(location, pageSize) {
    return this.httpClient.get<News[]>("http://localhost:8080/guardianNews/news",
      {params: new HttpParams().set("production-office", location).set("page-size", pageSize)});
  }
  /*
    Retrieves articles about politics.
   */
  getPoliticsArticles(location, pageSize) {

  }
  /*
    Retrieves articles about sports.
   */
  getSportsArticles(location, pageSize) {
    return this.httpClient.get<News[]>("http://localhost:8080/guardianNews/sports",
      {params: new HttpParams().set("production-office", location).set("page-size",pageSize)});
  }

  /*
    Retrieves articles about the environment.
   */
  getEnvironmentalArticles(location, pageSize) {

  }
}
