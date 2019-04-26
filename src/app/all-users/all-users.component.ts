import { Component, OnInit } from '@angular/core';
import {ServicePourUsers} from '../MesServices/service-pour-users.service' ;
import {Utilisateur} from '../myclasses/user.component';
import {NavigationEnd, Router} from '@angular/router' ;
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit  {
  public Utilisateurs: Utilisateur[] ;
  public User: Utilisateur ;
  navigationSubscription: any ;
  constructor(private myService: ServicePourUsers, private router: Router) {
    console.log('$$$$$$$$$$$$$$$ in AllUsersComponent component') ;
    // modif :  this.mainGetUsers() ;
    this.myService.getAllUsers().subscribe(users => {
      this.Utilisateurs = users ;
      console.log('constructor "AllUsersComponent" >>>>>>>>>>>>>>>>>>>>>>>>>> this.Utilisateurs.length ' + this.Utilisateurs.length )   ;
      this.myService.listBackEndUsers('in constructor') ;
    });
  }

  ngOnInit() {
    console.log('AllUsersComponent > ngOnInit() > this.mainGetUsers()') ;
    this.mainGetUsers() ;
  }

  mainGetUsers(): void {
    this.myService.getAllUsers()
      .subscribe(
         users => this.Utilisateurs = users
      );
  }

  mainRemoveUser(argUser: Utilisateur): void {

    this.myService.removeUser(argUser).subscribe(
      (strRetour: string) => {  this.Utilisateurs = this.myService.listBackEndUsers('in mainRemoveUser') ;
                                console.log('AllUsersComponent > mainRemoveUser(argUser: Utilisateur) > strLogDelete : ' + strRetour ) ;
                                this.mainGetUsers() ;
    },

      err => console.log('AllUsersComponent > mainRemoveUser > HTTP Error', err),

      () => console.log('AllUsersComponent > mainRemoveUser : terminé')


    ) ;
  }




}
