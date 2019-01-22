import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

/* Routing */
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from './navigation/navigation.component';
import { SportsComponent } from './sports/sports.component';
import { NewsService} from "./services/news.service";
import { PoliticsComponent } from './politics/politics.component';

import { LocationStrategy, HashLocationStrategy} from '@angular/common';

// Routes
const routes :  Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'sports', component: SportsComponent},
  { path: 'politics', component: PoliticsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SportsComponent,
    PoliticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  /* Injecting the service.*/
  providers: [NewsService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
