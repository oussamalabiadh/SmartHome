import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  temperature$: Observable<number>; // Observable pour la température
  humidity$: Observable<number>; // Observable pour l'humidité
  gaz$: Observable<number>; 
  distance$: Observable<number>; 
  constructor(private db: AngularFireDatabase) {
    // Récupérer les données de température et d'humidité depuis Firebase Realtime Database
    this.temperature$ = this.db.object<number>('temperature').valueChanges().pipe(
      map(value => value || 0) // Remplacer les valeurs null par 0
    );
    this.humidity$ = this.db.object<number>('humidity').valueChanges().pipe(
      map(value => value || 0) // Remplacer les valeurs null par 0
    );
    this.gaz$ = this.db.object<number>('gaz').valueChanges().pipe(
      map(value => value || 0) // Remplacer les valeurs null par 0
    );
    this.distance$ = this.db.object<number>('distance').valueChanges().pipe(
      map(value => value || 0) // Remplacer les valeurs null par 0
    );
  }
   getBuzzerState(): Observable<any> {
    return this.db.object('buzzer').valueChanges();
  }

  updateBuzzerState(state: string): Promise<void> {
    return this.db.object('buzzer').set(state);
  }
  getPorteState(): Observable<any> {
    return this.db.object('servo').valueChanges();
  }

  updatePorteState(state: string): Promise<void> {
    return this.db.object('servo').set(state);
  }
  updateLampState(roomId: string, state: number): Promise<void> {
    return this.db.object(`rooms/${roomId}/led`).set(state);
  }
  getLampState(roomId: string): Observable<number> {
    return this.db.object<number>(`rooms/${roomId}/led`).valueChanges().pipe(
      map(state => state || 0) // Si la valeur est null, retourne 0
    );
  }
  // Méthode pour écouter les changements dans la valeur de gazdetecte dans Firebase
  getGazDetecte(): Observable<string> {
    return this.db.object<string>('gazdetecte').valueChanges().pipe(
      map(value => value || '') // Remplacer la valeur null par une chaîne vide
    );
  }
}
