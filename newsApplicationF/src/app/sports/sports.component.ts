import { Component, OnInit } from '@angular/core';
import { NewsProvider} from "../interfaces/news-provider";
import { News} from "../models/News";
import { NewsService} from "../services/news.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit, NewsProvider {

  newsResponse: HttpResponse<News[]> = new HttpResponse<News[]>();

  countries = ["us", "uk"];

  selectedCountry: string = this.countries[1];

  isInfoModalHidden: boolean = true;

  private pageSize = 6; // Determines the amount of news the API should retrieve.

  basic: boolean;


  newsArticleInModal: any = {
    webTitle: String,
    bodyText: String
  };


  constructor(private service: NewsService) { }

  ngOnInit() {
    this.isInfoModalHidden = false;
    this.getNews(this.selectedCountry, this.pageSize);
  }

  changeCountryNews(location) {
    this.getNews(location, this.pageSize);
    this.isInfoModalHidden = false;
  }

  getNews(location, pageSize) {
    this.service.getSportsArticles(location,pageSize).subscribe((sportsArticles: HttpResponse<News[]>) => {
      this.newsResponse = sportsArticles;
        // Modify the received date.
        this.newsResponse.body.forEach(function (article) {
          let dateObject: Date = new Date(article.webPublicationDate);
          article.webPublicationDate = dateObject.toDateString();
        });
    });
  }

  goToNewsSite(url) {
    window.location.href = url;
  }

  incrementNewsOnPage() {
    this.getNews( this.selectedCountry,this.pageSize += 3);
  }

  /*
    Shows the modal that has information about a News.
 */
  public showModal(card: News) {
    this.newsArticleInModal.bodyText = card.fields.bodyText;
    this.newsArticleInModal.webTitle = card.webTitle;
    this.basic = true;
  }
}
