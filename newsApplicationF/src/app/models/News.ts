import {Fields} from "./fields";

export interface News {
  id:                 string;
  type:               string;
  sectionId:          string;
  sectionName:        string;
  webPublicationDate: string;
  webTitle:           string;
  webUrl:             string;
  apiUrl:             string;
  pillarId:           string;
  pillarName:         string;
  fields:             Fields;
  hosted:             boolean;
}
