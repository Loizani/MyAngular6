import { Component, OnInit } from '@angular/core';
import {ServicePourUsers} from '../MesServices/service-pour-users.service';
import {Utilisateur} from '../myclasses/user.component';
import { ActivatedRoute } from '@angular/router';
import {FormGroup} from '@angular/forms' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  public Utilisateur: Utilisateur;
  private attrIndex: string;
  private bSuccessUserUpdated: boolean ;
  private UtilisateurUpdated: Utilisateur;

  constructor(private myService: ServicePourUsers, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.attrIndex = this.route.snapshot.paramMap.get('indicepath') ;
    this.mainGetUserInfos();
  }

  mainGetUserInfos(): any {
    let index: number ;
    index = Number(this.attrIndex) ;
    console.log('useredit.component.ts > mainGetUserInfos > index = ' + index) ;
    this.myService.getOneUserInfo(index).subscribe(user => {console.log('useredit.component.ts > mainGetUserInfos > subscribe ' + user);
                                                            this.Utilisateur = user ;
                                                            return this.Utilisateur ; });
  }

  mainUpdateUserInfos(argUser: Utilisateur): any {
    console.log('useredit.component.ts > mainUpdateUserInfos') ;
    let index: number ;
    index =  argUser.id ;
    this.myService.updateUserInfo(argUser, index).subscribe(
      userUpdated => {console.log('useredit.component.ts > mainUpdateUserInfos > subscribe bSuccess ' + userUpdated);
                      this.UtilisateurUpdated = userUpdated ; }) ;
    }

  mainUpdateUser(): void {
   // alert('onSubmit() > JSON.stringify(this.Utilisateur) = ' + JSON.stringify(this.Utilisateur)) ;
    let index: number ;
    index =  this.Utilisateur.id ;
    // La souscription renvoi le user modifié
    this.myService.updateUserInfo(this.Utilisateur, index).subscribe(
      returnUserUpdated       => {console.log('useredit.component.ts > mainUpdateUserInfos > subscribe userUpdated ' + returnUserUpdated);
                                  this.UtilisateurUpdated = returnUserUpdated ; },
      errorReturnUserUpdated  => console.error('Error : ', errorReturnUserUpdated)
    ) ;
  }

  onSubmit() {
    this.mainUpdateUser();
    this.router.navigateByUrl('pathAllUsers');
  }

}
