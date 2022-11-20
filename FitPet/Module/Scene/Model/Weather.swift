//
//  Weather.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation

struct Weather: Codable {
  let timezone: String
  let daily: [Daily]

  struct Daily: Codable {
    let dt: Int
    let temp: Temp
    let weatherInfo: [WeatherInfo]

    enum CodingKeys: String, CodingKey {
      case dt
      case temp
      case weatherInfo = "weather"
    }
  }

  struct WeatherInfo: Codable {
    let id: Int
    let main: String
    let description: String
    let icon: String
  }

  struct Temp: Codable {
    let min: Double
    let max: Double
  }
}
