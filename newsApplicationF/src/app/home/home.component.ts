import { Component, OnInit } from '@angular/core';
import { NewsService} from "../services/news.service";
import { News} from "../models/News";
import { NewsProvider} from "../interfaces/news-provider";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, NewsProvider {

  // HttpResponse from the backend of type  <News[]>
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


  constructor(private service: NewsService) {}

  ngOnInit() {
    this.isInfoModalHidden = false;
    this.getNews(this.selectedCountry, this.pageSize);
  }

  /*
    Changes the location of the News url.
   */
  changeCountryNews(location) {
    this.getNews(location, this.pageSize);
    this.isInfoModalHidden = false;
  }

  /*
    Gets any kind of News (UK news) to the "Home" view.
   */
  getNews(location, pageSize) {
      this.service.getGeneralNews(location, pageSize).subscribe((articleNews: HttpResponse<News[]>) => {
        this.newsResponse = articleNews;

        // Modify the received date.
        this.newsResponse.body.forEach(function (article) {
            let dateObject: Date = new Date(article.webPublicationDate);
            article.webPublicationDate = dateObject.toDateString();
        });
      });
  }


  /*
    To redirect to the real website of the News.
   */
  goToNewsSite(url) {
    window.location.href = url;
  }

  /*
    Increments the amount of News cards that are on the page by 3.
   */
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
