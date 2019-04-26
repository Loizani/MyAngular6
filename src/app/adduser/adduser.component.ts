import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../myclasses/user.component';
import {ServicePourUsers} from '../MesServices/service-pour-users.service';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  public attrUser: Utilisateur ;
  public Utilisateurs: Utilisateur[] ;
  constructor(private myService: ServicePourUsers, private router: Router) {
    console.log('in AdduserComponent component') ;
}

  ngOnInit() {
    console.log('ngOnInit() : debut') ;
    this.attrUser = new Utilisateur(0, 'Samir', 'BANOUT');
    // console.log('ngOnInit() > this.attrUser.lastName ' + this.attrUser.lastName) ;
  }

  onSubmit() {
    this.myService.mainAddUser(this.attrUser);
    // Navigation vers List Users
    this.myService.gotoAllUsers() ;
  }


}
