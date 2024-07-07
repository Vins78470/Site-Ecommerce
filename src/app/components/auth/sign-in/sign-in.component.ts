import { Component } from '@angular/core';
import { Person } from '../../../../models/person';
import { UserService } from '../../../services/user.service';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

 
  people: Person[] = [];
  email: string = '';
  password: string = '';



  constructor(private userService: UserService) {
    this.loadUsers(); // Charger les utilisateurs au chargement du composant
  }

  // Méthode pour charger les utilisateurs depuis le service
  loadUsers(): void {
    this.people = this.userService.getUsers();
  }
  ngOnInit(): void {
    // Initialize component
  }

  onSubmit(email: string, password: string): void {
    const accountExists = this.checkIfAccountExist(email, password);
    if (accountExists) {
      // Account exists, proceed with login logic
      console.log('Account exists, proceed with login');
    } else {
      // Account does not exist, handle accordingly
      console.log('Account does not exist');
    }
  }

  checkIfAccountExist(email: string, password: string): boolean {
    return this.people.some(person => person.email === email && person.password === password);
  }

}
