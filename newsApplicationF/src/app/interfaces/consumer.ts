export interface Consumer {
  getNews(pageSize, location);
  getSportsArticles(pageSize, location);
  getPoliticsArticles(pageSize, location);
}
