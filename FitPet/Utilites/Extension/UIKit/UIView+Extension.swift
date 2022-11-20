//
//  UIView+Extension.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit

// MARK: reuseIdentifier

extension UIView {

  static var reuseIdentifier: String {
    let nameSpaceClassName = NSStringFromClass(self)
    guard let className = nameSpaceClassName.components(separatedBy: ".").last else {
      return nameSpaceClassName
    }
    return className
  }
}

// MARK: Add subviews

extension UIView {

  func addSubviews(_ views: [UIView]) {
    views.forEach {
      self.addSubview($0)
    }
  }
}
