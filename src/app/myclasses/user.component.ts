export class Utilisateur {

  public id: number;
  public firstName: string;
  public lastName: string;

 constructor(argId: number, FirstName: string, argLastName: string) {
   this.id = argId ;
   this.firstName = FirstName ;
   this.lastName = argLastName ;

 }

   public viewUser(): void {
   console.log(  'id = [' + this.id  + '], firstName = [' + this.firstName + '], lastName = [' + this.lastName + ']') ;
 }
}

