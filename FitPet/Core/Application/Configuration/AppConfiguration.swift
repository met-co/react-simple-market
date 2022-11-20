//
//  AppConfiguration.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit

// MARK: - AppConfiguration

struct AppConfiguration {

  var configurations: [AnyHashable: Any]?

  private enum Keys: String {
    case configuration = "AppConfiguration"
  }

  init() {
    configurations = getConfigure()
  }

  var scheme: String? {
    Bundle.main.infoDictionary?[Keys.configuration.rawValue] as? String
  }

  private func getConfigure() -> [AnyHashable: Any]? {
    let fileName = "AppConfiguration"
    let fileExtension = "plist"

    guard let filePath = Bundle.main.url(forResource: fileName, withExtension: fileExtension),
          let configuration = try? NSDictionary(contentsOf: filePath, error: ()) as? [AnyHashable: Any]
    else { return nil }

    return configuration
  }
}
