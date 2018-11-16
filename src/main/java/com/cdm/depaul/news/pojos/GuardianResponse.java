package com.cdm.depaul.news.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GuardianResponse {

  private NewsResponse response;

  public GuardianResponse () {

  }

  public NewsResponse getResponse() {
    return response;
  }

  public void setResponse(NewsResponse response) {
    this.response = response;
  }
}
