import { Observable, of } from 'rxjs'
import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'
// We're leveraging the existing ICurrentWeather interface to
// ensure the fake data is correctly shaped
export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }
  // also must turn it into Observable.This is easily achieved using of,
  // which creates an observable sequence, given the provided arguments.
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
