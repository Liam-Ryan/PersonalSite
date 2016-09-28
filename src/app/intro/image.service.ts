import { Injectable } from "@angular/core"
import {Http} from "@angular/http";

@Injectable()
export class ImageService {

    imageBase: string = "../../../images/";
    softwareImageFolder : string = this.imageBase + "software/";
    toolsImageFolder : string = this.imageBase + "tools/";

    constructor(private http: Http) {

    }


}