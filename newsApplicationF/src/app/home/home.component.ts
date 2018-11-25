import { Component, OnInit } from '@angular/core';
import { NewsService} from "../services/news.service";
import { News} from "../models/News";
import { NewsProvider} from "../interfaces/news-provider";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, NewsProvider {

  news: News[] = <News[]> [];

  countries = ["us", "uk"];

  selectedCountry: string = this.countries[1];

  isHidden: boolean = true;

  private pageSize = 6; // Determines the amount of news the API should retrieve.

  basic: boolean;

  newsArticleInModal: any = {
    webTitle: String,
    bodyText: String
  };


  constructor(private service: NewsService) {}

  ngOnInit() {
    this.getNews(this.selectedCountry, this.pageSize);
  }

  changeCountryNews(location) {
    this.selectedCountry = location;
    this.getNews(this.pageSize, this.selectedCountry);
    this.isHidden = false;
  }

  getNews(location, pageSize) {
      this.service.getGeneralNews(location, pageSize).subscribe((articleNews: News[]) => {
        this.news = articleNews;
        this.news.forEach(function (article: News) {
          let dateObject: Date = new Date(article.webPublicationDate);
          article.webPublicationDate = dateObject.toDateString();
        })
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
