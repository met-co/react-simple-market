//
//  WeatherIconType.swift
//  FitPet
//
//  Created by buzz on 2022/11/21.
//

import UIKit

enum WeatherIconType: String {
  case day01 = "01d"
  case night01 = "01n"
  case day02 = "02d"
  case night02 = "02n"
  case day03 = "03d"
  case night03 = "03n"
  case day04 = "04d"
  case night04 = "04n"
  case day09 = "09d"
  case night09 = "09n"
  case day10 = "10d"
  case night10 = "10n"
  case day011 = "11d"
  case night11 = "11n"
  case day13 = "13d"
  case night13 = "13n"
  case day50 = "50d"
  case night50 = "50n"

  var image: UIImage? {
    switch self {
    case .day01:
      return Theme.image.day01
    case .night01:
      return Theme.image.night01
    case .day02:
      return Theme.image.day02
    case .night02:
      return Theme.image.night02
    case .day03:
      return Theme.image.day03
    case .night03:
      return Theme.image.night03
    case .day04:
      return Theme.image.day04
    case .night04:
      return Theme.image.night04
    case .day09:
      return Theme.image.day09
    case .night09:
      return Theme.image.night09
    case .day10:
      return Theme.image.day10
    case .night10:
      return Theme.image.night10
    case .day011:
      return Theme.image.day11
    case .night11:
      return Theme.image.night11
    case .day13:
      return Theme.image.day13
    case .night13:
      return Theme.image.night13
    case .day50:
      return Theme.image.day50
    case .night50:
      return Theme.image.night50
    }
  }
}
