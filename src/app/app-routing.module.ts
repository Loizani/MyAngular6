import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstUserComponent} from './first-user/first-user.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {UsereditComponent} from './useredit/useredit.component';
import {FooterComponent} from './footer/footer.component';
import {NewsComponent} from './news/news.component';

const appRoutes: Routes = [
  {path: 'pathFirstUser', component: FirstUserComponent},
  {path: 'pathAllUsers', component: AllUsersComponent },
  {path: 'pathFooter', component: FooterComponent},
  {path: 'pathNews', component: NewsComponent },
  {path: 'pathUserEdit/:indicepath', component: UsereditComponent},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
