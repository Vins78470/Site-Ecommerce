import { Injectable } from '@angular/core';
import { Person } from '../../models/person'; // Assurez-vous que le chemin vers votre modèle Person est correct

@Injectable({
  providedIn: 'root'
})
export class UserService {

  people: Person[] = []; // Déclaration d'un tableau de personnes

  constructor() { }

  getUsers(): Person[] {
    return this.people; // Méthode pour obtenir la liste des personnes
  }

  // Vous pouvez ajouter d'autres méthodes ici pour gérer les utilisateurs (ajouter, supprimer, mettre à jour, etc.)
  
}
