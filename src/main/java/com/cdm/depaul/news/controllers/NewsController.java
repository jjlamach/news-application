package com.cdm.depaul.news.controllers;

import com.cdm.depaul.news.interfaces.NewsClient;
import com.cdm.depaul.news.pojos.GuardianAPIResponse;
import com.cdm.depaul.news.pojos.Results;
import com.cdm.depaul.news.pojos.TheGuardianResponse;
import feign.Feign;
import feign.jackson.JacksonDecoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@RestController
@RequestMapping(value = "/guardianNews")
public class NewsController {
  /**
   * @RequestParam we can retrieve the value of the parameter by using this annotation.
   * @param location
   * @param pageSize
   * @return
   */
  @GetMapping(value = {"/news"}, params = {"production-office", "page-size"}, produces = "application/json")
  List <Results> getNewsArticles(@RequestParam(value = "production-office") String location,
                                 @RequestParam(value = "page-size") Integer pageSize) {

    NewsClient newsClient = Feign.builder()
            .decoder(new JacksonDecoder())
            .target(NewsClient.class, "https://content.guardianapis.com");

    TheGuardianResponse guardianResponse = newsClient.getNews(location, pageSize);
    GuardianAPIResponse guardianAPIResponse = guardianResponse.getResponse();
    return guardianAPIResponse.getResults();
  }


  @GetMapping(value = {"/sports"}, params = {"production-office", "page-size"}, produces = "application/json")
  List<Results> getSportsArticles(@RequestParam(value = "production-office") String location,
                                  @RequestParam(value = "page-size") Integer pageSize) {

    NewsClient newsClient = Feign.builder()
      .decoder(new JacksonDecoder())
      .target(NewsClient.class, "https://content.guardianapis.com");

    TheGuardianResponse guardianResponse = newsClient.getSportsArticles(location, pageSize);
    GuardianAPIResponse guardianAPIResponse = guardianResponse.getResponse();
    return guardianAPIResponse.getResults();
  }


}
