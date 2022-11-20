//
//  WeaterListDI.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import Resolver

extension Resolver {

  static func registerWeatherList() {

    register(WeatherListViewModel.self) {
      return WeatherListViewModel(interactor: $0.resolve(WeatherInteractorable.self))
    }

    register(WeatherListViewController.self) {
      return WeatherListViewController(
        viewModel: $0.resolve(WeatherListViewModel.self),
        navigator: $0.resolve(Navigator.self)
      )
    }
  }
}
