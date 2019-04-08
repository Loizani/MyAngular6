import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ServicePourUsers} from './MesServices/service-pour-users.service';
import { Utilisateur } from './myclasses/user.component';
import { FirstUserComponent } from './first-user/first-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { UsereditComponent } from './useredit/useredit.component';
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstUserComponent,
    AllUsersComponent,
    NewsComponent,
    FooterComponent,
    UsereditComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicePourUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
