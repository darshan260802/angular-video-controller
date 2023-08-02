import { Component } from '@angular/core';
import { VideoControllerComponent } from 'projects/angular-video-controller/src/lib/video-controller/video-controller.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-video-controller';
  Video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  log(d:VideoControllerComponent){
  d.playVideo()    
  }
}
