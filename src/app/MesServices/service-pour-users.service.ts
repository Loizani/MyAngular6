import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Utilisateur} from '../user/user.component' ;
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/src/internal/Subscription';

@Injectable({
  providedIn: 'root'
})


export class ServicePourUsers {

  // private Utilisateurs: UserClass[];
  public AttrSerUtilisateurs: Utilisateur[];
  private http: any;


  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>('http://localhost:8080/users') ;
  }




}


