//
//  Navigator+Transitionable.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import UIKit

// MARK: - TransitionType

enum TransitionType {
  case root(in: UIWindow)
  case navigation
}

// MARK: - Transitionable

protocol Transitionable {
  associatedtype Scene

  func show(scene: Scene, sender: UIViewController?, transitionType: TransitionType)
  func dismiss(sender: UIViewController?, completion: (() -> Void)?)
}

// MARK: - Navigator + Transitionable

extension Navigator: Transitionable {

  func show(
    scene: SceneType,
    sender: UIViewController?,
    transitionType: TransitionType
  ) {

    let target = get(for: scene)

    switch transitionType {
    case let .root(window):
      window.rootViewController = target
      return
    default:
      break
    }

    guard let sender = sender else {
      fatalError(".navigation, .modal transition에 대한 sender가 필요.")
    }

    switch transitionType {
    case .navigation:
      if let nav = sender.navigationController {
        nav.pushViewController(target, animated: true)
      }
    default:
      break
    }
  }

  func dismiss(sender: UIViewController?, completion: (() -> Void)? = nil) {
    sender?.navigationController?.dismiss(animated: true, completion: completion)
  }
}
