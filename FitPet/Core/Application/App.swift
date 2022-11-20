//
//  App.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import Resolver

final class App: NSObject {

  // MARK: - Properties

  static let shared = App()

  var window: UIWindow?
  var windowScene: UIWindowScene?
  let navigator: Navigator
  let networkService: NetworkService<WeatherRouter>
  let configuration: AppConfiguration

  // MARK: - Initialize

  private override init() {
    self.navigator = Resolver.resolve(Navigator.self)
    self.networkService = Resolver.resolve(NetworkService<WeatherRouter>.self)
    self.configuration = Resolver.resolve(AppConfiguration.self)
    super.init()
  }
}

// MARK: - InitialScreen

extension App {

  func presentInitialScreen(in window: UIWindow?, withWindowScene windowScene: UIWindowScene, options connectionOptions: UIScene.ConnectionOptions) {
    self.window = window
    self.windowScene = windowScene
    self.window?.backgroundColor = Theme.color.white
    self.window?.makeKeyAndVisible()

    navigator.show(scene: .weatherList, sender: nil, transitionType: .root(in: self.window!))
  }
}
