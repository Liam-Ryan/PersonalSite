import {Component} from "@angular/core";
import { SoftwareLogoPaths, ToolLogoPaths } from "./image.service"
@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})

export class IntroComponent{
    intro: string = `
        I'm a full-stack software developer with a background in customer services and IT. 
        This blend of past experience is surprisingly relevant when developing software.
        I excel at problem solving and I never pass up an opportunity to increase my knowledge.
        I have a keen interest in physics and mathematics, specifically astrophysics, robotics and AI (If you would like to see the robot I created
        while at University check out the projects section )
`;
}