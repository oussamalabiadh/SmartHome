import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, LineController, PointElement, LinearScale, CategoryScale, LineElement, BarController, BarElement } from 'chart.js';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  temperatureChart: Chart | undefined;
  humidityChart: Chart | undefined;
  gazChart: Chart | undefined;
  distanceChart: Chart | undefined;

  constructor(private dataService: DataService) {}
  gazdetecte: string = ""; // Initialiser avec une valeur par défaut

  ngOnInit(): void {

      // Utiliser la méthode getGazDetecte() du service DataService pour écouter les changements dans gazdetecte
      this.dataService.getGazDetecte().subscribe((value: string) => {
        this.gazdetecte = value;
      });

    Chart.register(CategoryScale, LineController, LinearScale, PointElement, LineElement,BarController,BarElement);

    // Créer le graphique de température
    this.temperatureChart = new Chart('temperatureChart', {
      type: 'line',
      data: {
        labels: ['Temperature'],
        datasets: [{
          label: 'Temperature',
          data: [],
          backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Créer le graphique d'humidité
    this.humidityChart = new Chart('humidityChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Humidity',
          data: [],
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Créer le graphique de gaz
    this.gazChart = new Chart('gazChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Gaz',
          data: [],
          borderColor: 'green',
          backgroundColor: 'rgba(10, 180, 25, 0.1)',
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Créer le graphique de distance
    this.distanceChart = new Chart('distanceChart', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Distance',
          data: [],
          borderColor: 'red',
          backgroundColor: 'rgba(180, 160, 100, 0.1)',
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Mettre à jour les données chaque seconde
    setInterval(() => {
      // Récupérer la température
      this.dataService.temperature$.subscribe(temperature => {
        if (this.temperatureChart) {
          this.temperatureChart.data.datasets[0].data = [temperature];
          this.temperatureChart.update();
        }
      });

      // Récupérer l'humidité
      this.dataService.humidity$.subscribe(humidity => {
        if (this.humidityChart) {
          this.humidityChart.data.datasets[0].data.push(humidity);
          this.humidityChart.data.labels?.push(new Date().toLocaleTimeString());
          if (this.humidityChart.data.datasets[0].data.length > 10) {
            this.humidityChart.data.datasets[0].data.shift();
            this.humidityChart.data.labels?.shift();
          }
          this.humidityChart.update();
        }
      });

      // Récupérer le gaz
      this.dataService.gaz$.subscribe(gaz => {
        if (this.gazChart) {
          this.gazChart.data.datasets[0].data.push(gaz);
          this.gazChart.data.labels?.push(new Date().toLocaleTimeString());
          if (this.gazChart.data.datasets[0].data.length > 10) {
            this.gazChart.data.datasets[0].data.shift();
            this.gazChart.data.labels?.shift();
          }
          this.gazChart.update();
        }
      });

      // Récupérer la distance
      this.dataService.distance$.subscribe(distance => {
        if (this.distanceChart) {
          this.distanceChart.data.datasets[0].data.push(distance);
          this.distanceChart.data.labels?.push(new Date().toLocaleTimeString());
          if (this.distanceChart.data.datasets[0].data.length > 10) {
            this.distanceChart.data.datasets[0].data.shift();
            this.distanceChart.data.labels?.shift();
          }
          this.distanceChart.update();
        }
      });

    }, 10000); // Mettre à jour chaque seconde (1000 ms)
  }
}
