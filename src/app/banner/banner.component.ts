import { Component } from '@angular/core';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  icons = {
    playVideo: faCirclePlay
  }
  navigateToApp(){
    window.location.href = 'https://eq-quality-erp-app.vercel.app/auth/signup';
  }
}
