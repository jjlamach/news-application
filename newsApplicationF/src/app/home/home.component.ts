import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/News";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[] = [];

  countries = ["us", "uk"];
  pickedCountry: string = this.countries[1];

  isHidden: boolean = true;

  private pageSize = 6; // Determines the amount of news the API should retrieve.


  basic: boolean;
  news_in_a_modal: News;


  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews(this.pageSize, this.pickedCountry);
  }

  /**
   * Accepts as parameter the variable that holds the default size for the backend API to retrieve.
   * @param size
   */
  private getNews(size, location) {
    this.newsService.getNews(size, location).subscribe((news: News[]) => {
      this.news = news;
      this.news.forEach(function (news: News) {
        let date: Date = new Date(news.webPublicationDate);
        /* Calls setter in Typescript.*/
        news.webPublicationDate = date.toDateString();
      })
    });
  }

  public goTo(link) {
    window.location.href = link;
  }

  public incrementNews() {
    this.getNews(this.pageSize+=3, this.pickedCountry);
  }

  public selectedCountry(selectedCountry:string) {
    this.pickedCountry = selectedCountry;
    this.getNews(this.pageSize, this.pickedCountry);
    this.isHidden = false;
  }

  public showModal(card: News) {
    this.basic = true;
    this.news_in_a_modal = card;
  }

}
