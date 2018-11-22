package com.cdm.depaul.news.controllers;

import com.cdm.depaul.news.interfaces.NewsClient;
import com.cdm.depaul.news.pojos.GuardianResponse;
import com.cdm.depaul.news.pojos.NewsResponse;
import com.cdm.depaul.news.pojos.Results;
import feign.Feign;
import feign.jackson.JacksonDecoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@RestController
@RequestMapping(value = "/guardianNews")
public class NewsController {


  /**
   * @RequestParam We can retrieve the value of parameter  using this annotation.
   * @param pageSize
   * @return amount of news selected by the user regardless of category.
   *
   *      /guardianNews/news&page-size=#
   */
  @GetMapping(value = {"/news"}, params = {"page-size", "production-office"}, produces = "application/json")
  List<Results> getNewsByPageSize(@RequestParam(value = "page-size") String pageSize,
                                  @RequestParam(value = "production-office") String location) {
    NewsClient news = Feign.builder()
      .decoder(new JacksonDecoder())
      .target(NewsClient.class, "https://content.guardianapis.com");

    /* We place the retrieved parameter value as an argument.*/
    GuardianResponse guardianResponse = news.getNumberOfNewsDefinedByUser(pageSize, location);
    NewsResponse newsResponse = guardianResponse.getResponse();
    return newsResponse.getResults();
  }

}
