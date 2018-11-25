import { Component, OnInit } from '@angular/core';
import { NewsProvider} from "../interfaces/news-provider";
import { News} from "../models/News";
import { NewsService} from "../services/news.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit, NewsProvider {

  news: News[] = <News[]> [];

  countries = ["us", "uk"];

  selectedCountry: string = this.countries[1];

  isHidden: boolean = true;

  private pageSize = 6; // Determines the amount of news the API should retrieve.

  basic: boolean;


  constructor(private service: NewsService) { }

  ngOnInit() {

  }

  changeCountryNews(location) {

  }

  getNews(location, pageSize) {

  }

  goToNewsSite(url) {

  }

  incrementNewsOnPage() {

  }
}
