import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/src/internal/Subscription';
import {Utilisateur} from '../myclasses/user.component';

@Injectable({
  providedIn: 'root'
})


export class ServicePourUsers {

  // private Utilisateurs: UserClass[];
  public AttrSerUtilisateurs: Utilisateur[];
  private http: any;

  constructor(private httpClient: HttpClient) {

  }

  getUserInfo(indice: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>('http://localhost:8080/SecondLoizBootSpringDemo/users/' + indice) ;
  }

  getUsers(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>('http://localhost:8080/SecondLoizBootSpringDemo/users') ;
  }

  updateUserInfo(argUtilisateur: Utilisateur, indice: number): Observable<Utilisateur> {
    return this.httpClient.put<Utilisateur>('http://localhost:8080/SecondLoizBootSpringDemo/users/update/' + indice, argUtilisateur) ;
  }

  // postUser(argUser:Utilisateur) {
  //   this.httpClient.post<any>(this._url, argUser) ;
  // }

}


