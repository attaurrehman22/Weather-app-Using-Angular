import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'wheatherapp';

  constructor(private weatherService: WeatherService) { }

  temperatureData: any;

  getWeather(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((response) => {
      console.warn(response);
      this.temperatureData = response;
    });
  }
}
