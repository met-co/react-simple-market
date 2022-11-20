//
//  NetworkService.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import Alamofire
import Moya
import RxMoya
import RxCocoa
import RxSwift

// MARK: - NetworkService

public class NetworkService<Router: TargetType> {

  public var provider: MoyaProvider<Router>

  private let dispatchQueue = DispatchQueue(label: "queue.network.parser")

  public init() {
    provider = MoyaProvider<Router>(
      endpointClosure: MoyaProvider.defaultEndpointMapping,
      requestClosure: MoyaProvider<Router>.defaultRequestMapping,
      stubClosure: MoyaProvider.neverStub,
      callbackQueue: nil,
      session: AlamofireSession.configuration,
      plugins: [],
      trackInflights: false
    )
  }
}

// MARK: Networkable

extension NetworkService: Networkable {

  public func request<T: Decodable>(
    to router: Router,
    decode: T.Type
  ) -> Single<T> {
    return provider.rx.request(router, callbackQueue: dispatchQueue)
      .filterSuccessfulStatusCodes()
      .map(T.self)
  }
}
