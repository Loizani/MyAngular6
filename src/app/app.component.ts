import {Component, OnInit} from '@angular/core';
import {ServicePourUsers} from './MesServices/service-pour-users.service' ;
import {Utilisateur} from './user/user.component' ;
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string;
  public Utilisateurs: any ;
  private attrQuotes: object;

  constructor(private myService: ServicePourUsers) {

  }

  ngOnInit() {
    this.title = 'SecANg4App';
    this.mainGetUsers() ;
  }


  mainGetUsers(): void {
    this.myService.getUsers()
      .subscribe(users => console.log(this.Utilisateurs = users));
  }

}








