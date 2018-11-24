package com.cdm.depaul.news.interfaces;

import com.cdm.depaul.news.pojos.TheGuardianResponse;
import feign.Param;
import feign.RequestLine;

/*
   /search?section=news&order-by=newest&show-elements=all&show-fields=thumbnail&page-size=6&rights=developer-community&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894
 */
public interface NewsClient {

    /**
     *
     * @param location puts the argument of the parameter into the URL. It binds whatever your argument is to the URL.
     * @param size
     * @return
     */
    @RequestLine("GET /search?production-office={location}&order-by=newest&show-elements=all&show-fields=all&page-size={size}&rights=developer-community&q=politics&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
    TheGuardianResponse getNews(@Param("location") String location,
                                @Param("size") String size);


}
