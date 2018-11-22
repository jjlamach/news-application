package com.cdm.depaul.news.interfaces;

import com.cdm.depaul.news.pojos.GuardianResponse;
import feign.Param;
import feign.RequestLine;

/*
   /search?section=news&order-by=newest&show-elements=all&show-fields=thumbnail&page-size=6&rights=developer-community&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894
 */
public interface NewsClient {


  /**
    @Param: puts the argument of the parameter into the URL. It binds whatever your argument is to the URL.
        Will bind to whatever the input given by the front end. At "home.component.ts"
   */
//  @RequestLine("GET /search?section=news&order-by=newest&show-elements=all&show-fields=thumbnail&page-size={size}&rights=developer-community&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
  @RequestLine("GET /search?section=news&order-by=newest&show-elements=all&show-fields=thumbnail&page-size={size}&production-office={location}&rights=developer-community&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
  GuardianResponse getNumberOfNewsDefinedByUser(@Param("size") String size,
                                                @Param("location") String location);



}
