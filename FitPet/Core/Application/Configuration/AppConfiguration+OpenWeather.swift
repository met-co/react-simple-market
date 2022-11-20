//
//  AppConfiguration+OpenWeather.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation

extension AppConfiguration {

  private enum Keys: String {
    case openWeatherApi = "open-weather-key"
  }

  var openWeatherApiKey: String? {
    guard let id = configurations?[Keys.openWeatherApi.rawValue] as? String,
          !id.isEmpty else {
      return nil
    }

    return id
  }
}
