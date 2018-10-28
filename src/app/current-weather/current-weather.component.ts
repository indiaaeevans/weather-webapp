import { Component, Input, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input()
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // this.weatherService.getCurrentWeather(27713).subscribe(data => (this.current = data))
    this.weatherService.currentWeather.subscribe(data => (this.current = data))
  }
}
