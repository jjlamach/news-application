package com.cdm.depaul.news.controllers;

import com.cdm.depaul.news.interfaces.News;
import com.cdm.depaul.news.pojos.GuardianResponse;
import com.cdm.depaul.news.pojos.NewsResponse;
import com.cdm.depaul.news.pojos.Results;
import feign.Feign;
import feign.jackson.JacksonDecoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/news-app")
public class NewsController {

  @GetMapping(value = {"/news"}, produces = "application/json")
  List<Results> getAllNews() {
    News news = Feign.builder()
      .decoder(new JacksonDecoder())
      .target(News.class, "https://content.guardianapis.com");

    GuardianResponse guardianResponse = news.getAllNews();
    NewsResponse newsResponse = guardianResponse.getResponse();
    return newsResponse.getResults();
  }
}
