import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {IntroComponent} from "./intro/intro.component";
import {ProjectsComponent} from "./projects/projects.component";
import {HeadingComponent} from "./heading/heading.component";
import {ImageDisplayBlockComponent} from "./imagedisplayblock/image-display-block.component";
import {HttpModule} from "@angular/http";
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        IntroComponent,
        ProjectsComponent,
        HeadingComponent,
        ImageDisplayBlockComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}