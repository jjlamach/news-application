package com.cdm.depaul.news.pojos;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

/*
  @JsonIgnoreProperties: ignores keys-values from JSON object that are not listed
  as fields in the POJO model. Won't complain.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class NewsResponse {

  private String status;

  private List<Results> results;

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public List<Results> getResults() {
    return results;
  }

  public void setResults(List<Results> results) {
    this.results = results;
  }
}
