export interface NewsProvider {
  getNews                 (location, pageSize);
  goToNewsSite            (url);
  incrementNewsOnPage     ();
  changeCountryNews       (location);
}
