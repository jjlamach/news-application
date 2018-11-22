import {Fields} from "./fields";

export class News {
  private _id: string;
  private _type: string;
  private _sectionId: string;
  private _sectionName: string;
  private _webPublicationDate: Date;
  private _webTitle: string;
  private _webUrl: string;
  private _apiUrl: string;
  private _isHosted: boolean;
  private _pillarId: string;
  private _pillarName: string;
  private _fields: Fields;

  constructor() {}


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get sectionId(): string {
    return this._sectionId;
  }

  set sectionId(value: string) {
    this._sectionId = value;
  }

  get sectionName(): string {
    return this._sectionName;
  }

  set sectionName(value: string) {
    this._sectionName = value;
  }


  get webPublicationDate(): Date {
    return this._webPublicationDate;
  }

  set webPublicationDate(value: Date) {
    this._webPublicationDate = value;
  }

  get webTitle(): string {
    return this._webTitle;
  }

  set webTitle(value: string) {
    this._webTitle = value;
  }

  get webUrl(): string {
    return this._webUrl;
  }

  set webUrl(value: string) {
    this._webUrl = value;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get isHosted(): boolean {
    return this._isHosted;
  }

  set isHosted(value: boolean) {
    this._isHosted = value;
  }

  get pillarId(): string {
    return this._pillarId;
  }

  set pillarId(value: string) {
    this._pillarId = value;
  }

  get pillarName(): string {
    return this._pillarName;
  }

  set pillarName(value: string) {
    this._pillarName = value;
  }

  get fields(): Fields {
    return this._fields;
  }

  set fields(value: Fields) {
    this._fields = value;
  }
}
