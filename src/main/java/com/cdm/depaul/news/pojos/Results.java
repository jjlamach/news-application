package com.cdm.depaul.news.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Results {
  private String id;
  private String type;
  private String sectionId;
  private String sectionName;
  private String webPublicationDate;
  private String webTitle;
  private String webUrl;
  private String apiUrl;
  private boolean isHosted;
  private String pillarId;
  private String pillarName;

  public Results() {

  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getSectionId() {
    return sectionId;
  }

  public void setSectionId(String sectionId) {
    this.sectionId = sectionId;
  }

  public String getSectionName() {
    return sectionName;
  }

  public void setSectionName(String sectionName) {
    this.sectionName = sectionName;
  }

  public String getWebPublicationDate() {
    return webPublicationDate;
  }

  public void setWebPublicationDate(String webPublicationDate) {
    this.webPublicationDate = webPublicationDate;
  }

  public String getWebTitle() {
    return webTitle;
  }

  public void setWebTitle(String webTitle) {
    this.webTitle = webTitle;
  }

  public String getWebUrl() {
    return webUrl;
  }

  public void setWebUrl(String webUrl) {
    this.webUrl = webUrl;
  }

  public String getApiUrl() {
    return apiUrl;
  }

  public void setApiUrl(String apiUrl) {
    this.apiUrl = apiUrl;
  }

  public boolean isHosted() {
    return isHosted;
  }

  public void setHosted(boolean hosted) {
    isHosted = hosted;
  }

  public String getPillarId() {
    return pillarId;
  }

  public void setPillarId(String pillarId) {
    this.pillarId = pillarId;
  }

  public String getPillarName() {
    return pillarName;
  }

  public void setPillarName(String pillarName) {
    this.pillarName = pillarName;
  }
}
