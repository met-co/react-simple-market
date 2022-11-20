//
//  WeatherListViewModel.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import RxCocoa
import RxSwift
import RxDataSources

typealias WeathersData = SectionModel<String, Weather.Daily>

final class WeatherListViewModel: ViewModel, ViewModelType {

  // MARK: - Properties

  private let interactor: WeatherInteractorable

  // MARK: - Initialize

  init(interactor: WeatherInteractorable) {
    self.interactor = interactor
  }

  // MARK: Input & Output

  struct Input {
    let viewWillAppear: Observable<Void>
    let didPullToRefresh: Observable<Void>
  }

  struct Output {
    let isLoading: Driver<Bool>
    let weathersData: Driver<[WeathersData]>
  }

  func transform(input: Input) -> Output {

    let onLoading = PublishRelay<Bool>()

    let weathersData = Observable<Void>
      .merge([input.viewWillAppear, input.didPullToRefresh])
      .do(onNext: { onLoading.accept(true) })
      .observe(on: ConcurrentDispatchQueueScheduler.init(qos: .default))
      .flatMapLatest { _ -> Observable<[Weather]> in
        Observable
          .concat(City.allCases.map { self.interactor.fetchWeather(city: $0) })
          .reduce([], accumulator: { $0 + [$1] })
          .retry(2)
          .catch { [weak self] error in
            onLoading.accept(false)
            self?.errorMessage.accept(error.localizedDescription)
            return .never()
          }
      }
      .map { $0.map { WeathersData(model: $0.timezone, items: $0.daily) } }
      .debug()
      .do(onNext: { _ in onLoading.accept(false) })
      .asDriverOnErrorJustComplete()

    return Output(
      isLoading: onLoading.asDriverOnErrorJustComplete(),
      weathersData: weathersData
    )
  }
}
