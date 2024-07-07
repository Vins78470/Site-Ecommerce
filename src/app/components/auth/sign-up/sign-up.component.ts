import { Component } from '@angular/core';
import { Person } from '../../../../models/person';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-up',

  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  people: Person[] = [];
  idx: number = 0;
  

  constructor(private userService: UserService) {
    this.people = this.userService.getUsers(); // Récupération des utilisateurs au chargement du composant
  }
  // Updated addPerson method to accept parameters
  addPerson(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): void {
    if (password === confirmPassword) {
      this.people.push(new Person(firstName, lastName, email, password, confirmPassword));
      console.log("enregistré")
    } else {
      alert('Passwords do not match');
    }
  }

}