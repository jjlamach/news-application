package com.cdm.depaul.news.interfaces;

import com.cdm.depaul.news.pojos.GuardianResponse;
import feign.RequestLine;

public interface News {
  @RequestLine("GET /search?q=news&api-key=1889ecf3-6a0b-414b-af86-15c06ef74894")
  GuardianResponse getAllNews();
}
