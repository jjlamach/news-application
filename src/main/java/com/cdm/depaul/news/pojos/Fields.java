package com.cdm.depaul.news.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Fields {
  private String thumbnail;
  private String headline;
  private String standfirst;
  private String trailText;
  private String byline;
  private String main;
  private String body;
  private Object wordCount;
  private String firstPublicationDate;
  private String isInappropriateForSponsorship;
  private String isPremoderated;
  private String lastModified;
  private String productionOffice;
  private String publication;
  private String legallySensitive;
  private String lang;
  private String bodyText;
  private String charCount;

  public String getThumbnail() {
    return thumbnail;
  }

  public void setThumbnail(String thumbnail) {
    this.thumbnail = thumbnail;
  }

  public String getHeadline() {
    return headline;
  }

  public void setHeadline(String headline) {
    this.headline = headline;
  }

  public String getStandfirst() {
    return standfirst;
  }

  public void setStandfirst(String standfirst) {
    this.standfirst = standfirst;
  }

  public String getTrailText() {
    return trailText;
  }

  public void setTrailText(String trailText) {
    this.trailText = trailText;
  }

  public String getByline() {
    return byline;
  }

  public void setByline(String byline) {
    this.byline = byline;
  }

  public String getMain() {
    return main;
  }

  public void setMain(String main) {
    this.main = main;
  }

  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }

  public Object getWordCount() {
    return wordCount;
  }

  public void setWordCount(Object wordCount) {
    this.wordCount = wordCount;
  }

  public String getFirstPublicationDate() {
    return firstPublicationDate;
  }

  public void setFirstPublicationDate(String firstPublicationDate) {
    this.firstPublicationDate = firstPublicationDate;
  }

  public String getIsInappropriateForSponsorship() {
    return isInappropriateForSponsorship;
  }

  public void setIsInappropriateForSponsorship(String isInappropriateForSponsorship) {
    this.isInappropriateForSponsorship = isInappropriateForSponsorship;
  }

  public String getIsPremoderated() {
    return isPremoderated;
  }

  public void setIsPremoderated(String isPremoderated) {
    this.isPremoderated = isPremoderated;
  }

  public String getLastModified() {
    return lastModified;
  }

  public void setLastModified(String lastModified) {
    this.lastModified = lastModified;
  }

  public String getProductionOffice() {
    return productionOffice;
  }

  public void setProductionOffice(String productionOffice) {
    this.productionOffice = productionOffice;
  }

  public String getPublication() {
    return publication;
  }

  public void setPublication(String publication) {
    this.publication = publication;
  }

  public String getLegallySensitive() {
    return legallySensitive;
  }

  public void setLegallySensitive(String legallySensitive) {
    this.legallySensitive = legallySensitive;
  }

  public String getLang() {
    return lang;
  }

  public void setLang(String lang) {
    this.lang = lang;
  }

  public String getBodyText() {
    return bodyText;
  }

  public void setBodyText(String bodyText) {
    this.bodyText = bodyText;
  }

  public String getCharCount() {
    return charCount;
  }

  public void setCharCount(String charCount) {
    this.charCount = charCount;
  }
}
