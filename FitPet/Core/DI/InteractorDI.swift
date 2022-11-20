//
//  InteractorDI.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import Resolver

extension Resolver {

  static func registerInteractor() {

    register(WeatherInteractorable.self) {
      WeatherInteractor(networkService: $0.resolve(NetworkService<WeatherRouter>.self)) }.scope(.cached)
  }
}
