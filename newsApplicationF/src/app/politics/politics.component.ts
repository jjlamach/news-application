import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {HttpResponse} from "@angular/common/http";
import {News} from "../models/News";
import {NewsProvider} from "../interfaces/news-provider";

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit, NewsProvider {


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

  isMascotHidden:boolean = true;
  isPoliticsIconHidden: boolean = true;

  constructor(private service: NewsService) { }

  ngOnInit() {
    this.displaySmallIcons(this.selectedCountry);
    this.isInfoModalHidden = false;
    this.getNews(this.selectedCountry, this.pageSize);
  }

  changeCountryNews(location) {
    this.selectedCountry = location;
    this.displaySmallIcons(this.selectedCountry);
    this.getNews(this.selectedCountry, this.pageSize);
    this.isInfoModalHidden = false;
  }


  private displaySmallIcons(location) {
    this.selectedCountry = location;
    if (this.selectedCountry == 'us') {
      this.isMascotHidden = false;
      this.isPoliticsIconHidden = true;
    } else {
      this.isPoliticsIconHidden = false;
      this.isMascotHidden = true;
    }
  }

  getNews(location, pageSize) {
    this.service.getPoliticsArticles(location, pageSize).subscribe((politicsArticles: HttpResponse<News[]>) => {
      this.newsResponse = politicsArticles;

      this.newsResponse.body.forEach(function (politicsArticle) {
        let dateObject: Date = new Date(politicsArticle.webPublicationDate);
        politicsArticle.webPublicationDate = dateObject.toDateString();
      });
    });
  }

  goToNewsSite(url) {
    window.location.href = url;
  }

  incrementNewsOnPage() {
    this.getNews( this.selectedCountry,this.pageSize += 3);
  }

  public showModal(card: News) {
    this.newsArticleInModal.bodyText = card.fields.bodyText;
    this.newsArticleInModal.webTitle = card.webTitle;
    this.basic = true;
  }
}
