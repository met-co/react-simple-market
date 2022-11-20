//
//  Networkable.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import Foundation
import RxSwift

public protocol Networkable {
  associatedtype Router

  func request<T: Decodable>(
    to router: Router,
    decode: T.Type
  ) -> Single<T>
}
