//
//  Navigator.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import Resolver

// MARK: - Navigatable

public protocol Navigatable {
  associatedtype Scene

  func get(for scene: Scene) -> UIViewController
}

class Navigator: Navigatable {

  typealias Scene = SceneType

  /// singleton
  static let shared = Navigator()

  func get(for scene: Scene) -> UIViewController {
    switch scene {
    case .weatherList:
      return Resolver.resolve(WeatherListViewController.self)
    }
  }
}
