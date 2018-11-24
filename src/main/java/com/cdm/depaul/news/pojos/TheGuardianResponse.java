package com.cdm.depaul.news.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TheGuardianResponse {

  private GuardianAPIResponse response;

  public TheGuardianResponse() { }

  public GuardianAPIResponse getResponse() {
    return response;
  }

  public void setResponse(GuardianAPIResponse response) {
    this.response = response;
  }
}
