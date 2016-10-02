import {Component, OnInit} from  "@angular/core";
import {ImageService} from "../imagedisplayblock/image.service";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'image-display-block',
    templateUrl: './image-display-block.component.html',
    styles: [require('./image-display-block.component.scss')],
    providers: [ImageService]
})

export class ImageDisplayBlockComponent implements OnInit{

    @Input() imageList: string;
    @Input() title: string;
    imageFiles : string[];

    constructor(private imageService: ImageService) {
    }

    ngOnInit(): void {
        this.imageService.getSoftwareImagePaths( this.imageList ).subscribe(
            imageFiles => this.imageFiles = imageFiles,
            error => console.log(error)
        )
    }
}