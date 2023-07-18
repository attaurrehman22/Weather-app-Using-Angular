import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
 
  getWeatherData(cityName: string) {
    const apiKey = "f56f24967aaf51182d1d4df628297c6d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    return this.http.get(apiUrl);
  }
  
}
