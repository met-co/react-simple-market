//
//  ApplicationDI.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Resolver

extension Resolver: ResolverRegistering {

  public static func registerAllServices() {
    // Application
    register { Navigator() }.scope(.application)
    register { NetworkService<WeatherRouter>() }.scope(.application)
    register { AppConfiguration() }.scope(.application)

    // Interactor
    registerInteractor()

    // Scene
    registerWeatherList()
  }
}
