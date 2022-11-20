//
//  WeatherInteractor.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import RxSwift

protocol WeatherInteractorable {
  
  func fetchWeather(city: City) -> Observable<Weather>
}

class WeatherInteractor: WeatherInteractorable {

  // MARK: - Properties

  let networkService: NetworkService<WeatherRouter>

  init(networkService: NetworkService<WeatherRouter>) {
    self.networkService = networkService
  }

  // MARK: - fetch

  func fetchWeather(city: City) -> Observable<Weather> {
    return self.networkService.request(to: .forecast(city), decode: Weather.self).asObservable()
  }
}
