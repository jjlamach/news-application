import {URL} from "url";

export class Fields {
  private _thumbnail:URL;

  constructor() {

  }

  get thumbnail(): URL {
    return this._thumbnail;
  }

  set thumbnail(value: URL) {
    this._thumbnail = value;
  }
}
