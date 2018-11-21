package com.cdm.depaul.news.interfaces;

import com.cdm.depaul.news.pojos.GuardianResponse;
import feign.Param;
import feign.RequestLine;

/*
  q=news&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894"

  q=category&theApiKey



 */
public interface NewsClient {
  /**
   *
   * @return all the news regardless of category.
   */
  @RequestLine("GET /search?section=news&page-size=5&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
  GuardianResponse getAllNews();


  /*
    @Param: puts the argument of the parameter into the URL.
   */
  @RequestLine("GET /search?section=news&page-size={size}&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
  GuardianResponse getNewsFromUserPageSize(@Param("size") String size);


}
