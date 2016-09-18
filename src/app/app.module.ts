import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {IntroComponent} from "./intro/intro.component";
import {ProjectsComponent} from "./projects/projects.component";
import {HeadingComponent} from "./heading/heading.component";
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        IntroComponent,
        ProjectsComponent,
        HeadingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}