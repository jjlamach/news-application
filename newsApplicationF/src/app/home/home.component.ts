import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/news";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }
  private getNews() {
    this.newsService.getNews().subscribe((news: News[]) => {
      this.news = news;
    });
  }

}
