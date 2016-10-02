import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ImageService {

    imageFolder: string;
    imageJSONPaths: Object = {
        "software": "../../../public/images/tech/software/",
        "tools": "../../../public/images/tech/tools/"
    };

    constructor(private http: Http) {
    }

    //use assignment and the new arrow operator to avoid scoping issues
    private parseData = (res: Response) => {
        let data = res.json();
        let imageFolder: string = this.imageFolder;
        console.log(imageFolder);
        let imageArray: string[] = data.files.sort( ( a: string, b: string ) => { return a.charAt(0) < b.charAt(0) ? -1 : 1 });
        console.log(imageArray);
        imageArray.forEach( function ( value: string, key: number ) {
            console.log(key + " is being set to " + imageFolder + value);
            imageArray[key] = imageFolder + value;
        });
        return imageArray
    };

    private handleError(error: any) {
        let errMsg = error.message ? error.message : "";
        console.error(error);
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getSoftwareImagePaths( imageList: string ): Observable<string[]> {
        console.log(imageList);
        console.log(this.imageJSONPaths[imageList]);
        this.imageFolder = this.imageJSONPaths[imageList];
        return this.http.get(this.imageFolder + "filelist.json")
            .map(this.parseData)
            .catch(this.handleError)
    }

}