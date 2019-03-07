import { Component } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SecANg4App';
  private Utilisateurs: any;
  private argRes: any ;

  constructor(private httpClient: HttpClient ) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*' ,
       'Access-Control-Allow-Methods' : 'DELETE, POST, GET, OPTIONS' ,
      'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })
    };

    this.httpClient.get( 'http://localhost:8080/users', httpOptions ).subscribe((res) => {
       console.log(res);
       this.Utilisateurs = res;
     }) ;

  }




}







