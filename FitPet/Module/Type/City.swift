//
//  City.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation

/*
 서울: 37.541° 126.986°
 시카고: 위도: 41.8379, 경도: -87.6828
 런던: 위도: 51.5072, 경도: -0.1275

 https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=alerts,hourly,minutely&units=metric&appid=8f990b2d27d96ba3d5607bc4994853d3
 */

typealias Coordinate = (lat: Double, lon: Double)

enum City: CaseIterable {
  case seoul
  case london
  case chicago

  var coordinate: Coordinate {
    switch self {
    case .seoul:
      return (37.541, 126.986)
    case .london:
      return (51.507, -0.127)
    case .chicago:
      return (41.837, -87.682)
    }
  }
}
