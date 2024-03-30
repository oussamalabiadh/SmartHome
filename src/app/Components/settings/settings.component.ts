import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  buzzerImage: string = './assets/image/alarmenosonne.PNG'; // Chemin de l'image de la lampe éteinte
  buzzerState: any;
  porteImage: string = './assets/image/closedoor.PNG'; // Chemin de l'image de la lampe éteinte
  porteState: any;

  constructor(private dataService: DataService) {
    this.dataService.getBuzzerState().subscribe(state => {
      this.buzzerState = state;
      console.log('buzzer',this.buzzerState);
      this.updateBuzzerImage();
    });
    this.dataService.getPorteState().subscribe(state => {
      this.porteState = state;
      console.log('porte',this.porteState);
      this.updatePorteImage();
    });
  }

  toggleBuzzer() {
    const newState = this.buzzerState === 'OFF' ? 'ON' : 'OFF';
    this.dataService.updateBuzzerState(newState);
  }

  updateBuzzerImage() {
    this.buzzerImage = this.buzzerState === 'OFF' ? './assets/image/alarmenosonne.PNG' : './assets/image/alarme sonne.PNG';
  }
  togglePorte() {
    const newState = this.porteState === 'OFF' ? 'ON' : 'OFF';
    this.dataService.updatePorteState(newState);
  }

  updatePorteImage() {
    this.porteImage = this.porteState === 'OFF' ? './assets/image/closedoor.PNG' : './assets/image/opendoor.PNG';
  }

}
