import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebookSquare, faTeamspeak, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faChartPie, faCirclePlay, faDollarSign, faListCheck, faListDots, faMoneyBill, faMoneyCheck, faPeopleGroup, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'eco-quality-landing';
  icons = {
    playVideo: faCirclePlay,
    twitter: faTwitter,
    youtube: faYoutubeSquare,
    facebook: faFacebookSquare,
    sales: faShop,
    checkList: faListCheck,
    humanRes: faPeopleGroup,
    projects: faChartPie,
    budget: faDollarSign
  }

  navigateToApp(){
    window.location.href = 'https://eq-quality-erp-app.vercel.app/auth/signup';
  }
}
