//
//  WeatherRouter.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import Moya
import Alamofire

enum WeatherRouter {
  case forecast(City)
}

// MARK: TargetType

extension WeatherRouter: TargetType {

  public var baseURL: URL {
    return URL(string: "https://api.openweathermap.org")!
  }

  public var path: String {
    switch self {
    case .forecast:
      return "/data/3.0/onecall"
    }
  }

  public var method: Alamofire.HTTPMethod {
    switch self {
    default:
      return .get
    }
  }

  public var sampleData: Data {
    "data".data(using: String.Encoding.utf8)!
  }

  public var task: Task {
    switch self {
    case let .forecast(city):
      return .requestParameters(
        parameters: [
          "lat": city.coordinate.lat,
          "lon": city.coordinate.lon,
          "exclude": "alerts,hourly,minutely",
          "units": "metric",
          "lang": "kr",
          "appid": App.shared.configuration.openWeatherApiKey ?? ""
        ],
        encoding: URLEncoding.default
      )
    }
  }

  public var headers: [String: String]? {
    [
      "Content-Type": "application/json",
      "Accept": "application/json"
    ]
  }
}
