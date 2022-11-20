//
//  UIViewController+Rx.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import RxSwift
import RxCocoa

extension Reactive where Base: UIViewController {

  var viewDidLoad: ControlEvent<Void> {
    let source = self.methodInvoked(#selector(Base.viewDidLoad)).map { _ in }
    return ControlEvent(events: source)
  }

  var viewWillAppear: ControlEvent<Bool> {
    let source = self.methodInvoked(#selector(Base.viewWillAppear)).map { $0.first as? Bool ?? false }
    return ControlEvent(events: source)
  }
}
