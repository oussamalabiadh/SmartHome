import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Room {
  id: string;
  name: string;
  lampState: number;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [
    { id: '1', name: 'Sallon', lampState: 0 },
    { id: '2', name: 'Chambre 1', lampState: 0 },
    { id: '3', name: 'Chambre 2', lampState: 0 },
    { id: '4', name: 'Couloire', lampState: 0 },
    { id: '5', name: 'Cuisine ', lampState: 0 },
    { id: '6', name: 'Douche 2', lampState: 0 },
    { id: '7', name: 'Chambre 3', lampState: 0 },
    { id: '8', name: 'Chambre 4', lampState: 0 },
    // Ajoutez autant de chambres que nécessaire
  ];
  selectedRoom: Room | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Sélectionner la chambre "Sallon" par défaut
    this.selectedRoom = this.rooms.find(room => room.id === '1') || null;

    // Écouter les changements dans la base de données Firebase
    this.rooms.forEach(room => {
      this.dataService.getLampState(room.id).subscribe(state => {
        room.lampState = state;
      });
    });
  }

  selectRoom(roomId: string): void {
    this.selectedRoom = this.rooms.find(room => room.id === roomId) || null;
  }

  toggleLamp(roomId: string): void {
    const room = this.rooms.find(room => room.id === roomId);
    if (room) {
      const newState = room.lampState === 0 ? 1 : 0;
      this.dataService.updateLampState(roomId, newState).then(() => {
        room.lampState = newState;
      });
    }
  }
}
