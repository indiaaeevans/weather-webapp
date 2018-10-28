import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { ICurrentWeather } from './interfaces'
import { WeatherService } from './weather/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather Finder'
  currentWeather: ICurrentWeather
  @ViewChild('sidenav')
  sidenav: MatSidenav

  reason = ''

  close(reason: string) {
    this.reason = reason
    this.sidenav.close()
  }

  constructor(private weatherService: WeatherService) {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => (this.currentWeather = data))
  }
}
