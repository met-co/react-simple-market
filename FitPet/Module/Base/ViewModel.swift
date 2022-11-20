//
//  ViewModel.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import RxCocoa
import RxSwift

class ViewModel: NSObject {

  let errorMessage = PublishRelay<String>()

  override init() {
    super.init()
  }

  deinit {
    print("\(type(of: self)): Deinited")
  }
}
