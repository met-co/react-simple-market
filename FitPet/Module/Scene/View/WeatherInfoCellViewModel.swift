//
//  WeatherInfoCellViewModel.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import UIKit

final class WeatherInfoCellViewModel {

  let item: Weather.Daily

  init(item: Weather.Daily) {
    self.item = item
  }

  var weatherImage: UIImage? {
    guard let info = item.weatherInfo.first else { return nil }
    return WeatherIconType(rawValue: info.icon)?.image
  }

  var weatherState: String {
    guard let info = item.weatherInfo.first else { return "정보 없음" }
    return info.description
  }

  var maxTemp: String {
    return "Max: \(floor(item.temp.max))℃"
  }

  var minTemp: String {
    return "Min: \(floor(item.temp.min))℃"
  }

  var dateString: String {
    let date = Date(timeIntervalSince1970: .init(item.dt))
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "MM/dd(E)"

    return dateFormatter.string(from: date)
  }
}
