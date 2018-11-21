package com.cdm.depaul.news.controllers;

import com.cdm.depaul.news.interfaces.NewsClient;
import com.cdm.depaul.news.pojos.GuardianResponse;
import com.cdm.depaul.news.pojos.NewsResponse;
import com.cdm.depaul.news.pojos.Results;
import feign.Feign;
import feign.Param;
import feign.jackson.JacksonDecoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@RestController
@RequestMapping(value = "/guardianNews")
public class NewsController {

  /**
   *
   * @return Five news regardless of category.
   */
  @GetMapping(value = {"/news"}, produces = "application/json")
  List<Results> getAllNews() {
    NewsClient news = Feign.builder()
      .decoder(new JacksonDecoder())
      .target(NewsClient.class, "https://content.guardianapis.com");

    GuardianResponse guardianResponse = news.getAllNews();
    NewsResponse newsResponse = guardianResponse.getResponse();
    return newsResponse.getResults();
  }

  /**
   * @RequestParam We can retrieve the parameter value using this annotation.
   * @param size
   * @return amount of news selected by the user regardless of category.
   */
  @GetMapping(value = {"/news"}, params = {"page-size"},produces = "application/json")
  List<Results> getNewsByPageSize(@RequestParam("page-size") String size) {
    NewsClient news = Feign.builder()
      .decoder(new JacksonDecoder())
      .target(NewsClient.class, "https://content.guardianapis.com");

    GuardianResponse guardianResponse = news.getNewsFromUserPageSize(size);
    NewsResponse newsResponse = guardianResponse.getResponse();
    return newsResponse.getResults();
  }

}
