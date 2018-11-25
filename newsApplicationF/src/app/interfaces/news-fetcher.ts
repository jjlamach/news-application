export interface NewsFetcher {
  getGeneralNews            (location, pageSize);
  getPoliticsArticles       (location, pageSize);
  getSportsArticles         (location, pageSize);
  getEnvironmentalArticles  (location, pageSize);
}
