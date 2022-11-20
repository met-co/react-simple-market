//
//  Observable+Rx.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import RxCocoa
import RxSwift

extension SharedSequenceConvertibleType {

  func mapToVoid() -> SharedSequence<SharingStrategy, Void> {
    map { _ in }
  }
}

extension ObservableType {

  func asDriverOnErrorJustComplete() -> Driver<Element> {
    asDriver { _ in
      Driver.empty()
    }
  }

  func mapToVoid() -> Observable<Void> {
    map { _ in }
  }
}
