package com.cdm.depaul.news.interfaces;

import com.cdm.depaul.news.pojos.TheGuardianResponse;
import feign.Param;
import feign.RequestLine;

public interface NewsClient {

    /***
     * @param location puts the argument of the parameter into the URL. It binds whatever your argument is to the URL.
     * @param size
     * @return general news articles.
     */
    @RequestLine("GET /search?production-office={location}&order-by=newest&show-elements=all&show-fields=all&page-size={size}&rights=developer-community&q=politics&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
    TheGuardianResponse getNews(@Param("location") String location,
                                @Param("size") Integer size);


    /**
     * @param location
     * @param size
     * @return articles about sports.
     */
    @RequestLine("GET /search?production-office={location}&order-by=newest&use-date=published&show-elements=all&show-fields=all&page-size={size}&q=sports&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
    TheGuardianResponse getSportsArticles(@Param("location") String location,
                                          @Param("size") Integer size);
}
