import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CallUsComponent } from './call-us/call-us.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'callus', component: CallUsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CallUsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
