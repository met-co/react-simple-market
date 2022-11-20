//
//  SceneDelegate.swift
//  FitPet
//
//  Created by buzz on 2022/11/19.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

  var window: UIWindow?

  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let scene = (scene as? UIWindowScene) else { return }

    window = UIWindow(windowScene: scene)
    App.shared.presentInitialScreen(in: window, withWindowScene: scene, options: connectionOptions)
  }

  func sceneDidDisconnect(_ scene: UIScene) {}

  func sceneDidBecomeActive(_ scene: UIScene) {}

  func sceneWillResignActive(_ scene: UIScene) {}

  func sceneWillEnterForeground(_ scene: UIScene) {}

  func sceneDidEnterBackground(_ scene: UIScene) {}
}

