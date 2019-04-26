import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: ‘reload’})],

import {FirstUserComponent} from './first-user/first-user.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {UsereditComponent} from './useredit/useredit.component';
import {FooterComponent} from './footer/footer.component';
import {NewsComponent} from './news/news.component';
import {AdduserComponent} from './adduser/adduser.component';
import {ErrorpageComponent} from './errorpage/errorpage.component' ;

const appRoutes: Routes = [
  {path: 'pathFirstUser', component: FirstUserComponent , runGuardsAndResolvers: 'always'},
  {path: 'pathAllUsers', component: AllUsersComponent , runGuardsAndResolvers: 'always'},
  {path: 'pathAddUser', component: AdduserComponent , runGuardsAndResolvers: 'always'},
  {path: 'pathFooter', component: FooterComponent , runGuardsAndResolvers: 'always'},
  {path: 'pathNews', component: NewsComponent , runGuardsAndResolvers: 'always' },
  {path: 'pathUserEdit/:indicepath', component: UsereditComponent , runGuardsAndResolvers: 'always'},
  {path: 'angpageError', component: ErrorpageComponent , runGuardsAndResolvers: 'always'},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
