import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Subscription} from 'rxjs/src/internal/Subscription';
import {Utilisateur} from '../myclasses/user.component';
import { Router } from '@angular/router' ;
import { environment } from '../../environments/environment';


@Injectable({  providedIn: 'root' })

export class ServicePourUsers {

  public AttrUtilisateurs: any ;
  public attrUser: Utilisateur ;
  private http: any;
  private attrUrlracine: string ;

  constructor(private httpClient: HttpClient, private router: Router) {
      this.attrUrlracine = environment.strUrlRacine ;
      console.log('*************************** ServicePourUsers > constructor > this.attrUrlracine = "' + this.attrUrlracine + '"') ;
  }

  getOneUserInfo(indice: number): Observable<Utilisateur> {
    console.log('ServicePourUsers > getOneUserInfo > this.attrUrlracine + "users/" + indice : ' + this.attrUrlracine + 'users/' + indice ) ;
    return this.httpClient.get<Utilisateur>(this.attrUrlracine + 'users/' + indice) ;
  }

  addOneUserInfo(argUser: Utilisateur ): Observable<Utilisateur> {
    console.log('ServicePourUsers > addOneUserInfo ') ;
    return this.httpClient.post<Utilisateur>(this.attrUrlracine + 'user/add', argUser );
  }

  updateUserInfo(argUtilisateur: Utilisateur, indice: number): Observable<Utilisateur> {
    console.log('ServicePourUsers > updateUserInfo ') ;
    return this.httpClient.put<Utilisateur>(this.attrUrlracine + 'users/update/' + indice, argUtilisateur) ;
  }

  removeUser(argUtilisateur: Utilisateur): Observable<boolean> {
    console.log('ServicePourUsers > removeUser > argUtilisateur.id ' + argUtilisateur.id) ;
    return  this.httpClient.delete<boolean>(this.attrUrlracine + 'users/remove/' + argUtilisateur.id) ;
  }

  gotoAllUsers(): void {
    console.log('ServicePourUsers > navigation gotoAllUsers() ') ;
    this.router
    .navigateByUrl('/pathAllUsers', {skipLocationChange: true})
    .then(() => this.router.navigate(['pathAllUsers']));
}
  mainAddUser(newUser: Utilisateur): Utilisateur[] {
    this.addOneUserInfo(newUser)
      .subscribe(users => {
                            console.log('ServicePourUsers > mainAddUser(newUser) > ' + users) ;
                            this.AttrUtilisateurs =  users  ;
      });
    return  this.AttrUtilisateurs ;
  }

  getAllUsers(): Observable<Utilisateur[]> {
    console.log('ServicePourUsers > getAllUsers(): Observable<Utilisateur[]> >' +
      ' this.attrUrlracine + \'users\' : ' + this.attrUrlracine + 'users') ;

    return this.httpClient.get<Utilisateur[]>(this.attrUrlracine + 'users') ;
  }

  listBackEndUsers(strLog: string): Utilisateur[]  {
    console.log('ServicePourUsers > listBackEndUsers > ' + strLog) ;
    this.getAllUsers()
      .subscribe(
        users => {
        console.log('ServicePourUsers > listBackEndUsers(strLog: string) > renvoi liste des users : ' + users) ;
        this.AttrUtilisateurs = users ; },

        error => console.error(error),

        () => {	console.log('completed') ;

        }

        );

    return  this.AttrUtilisateurs ;

  }

}
