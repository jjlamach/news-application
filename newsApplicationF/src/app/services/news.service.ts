import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {News} from "../models/news";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
/**
 * Service that retrieves data from the backend API.
 */
export class NewsService {

  /*  DI, by adding it as a parameter in the constructor.*/
  constructor(private HttpClient: HttpClient) { }

  getNews() {
    return this.HttpClient.get<News[]>("http://localhost:8080/guardianNews/news");
  }

}
