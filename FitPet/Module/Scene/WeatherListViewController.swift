//
//  WeatherListViewController.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import RxCocoa
import RxSwift
import RxDataSources

final class WeatherListViewController: ViewController {

  // MARK: - Constant

  private enum Metric {
    static let basicMargin: CGFloat = 8
    static let headerHeight: CGFloat = 70
    static let rowHeight: CGFloat = 100
  }

  // MARK: - UI Properties

  private let indicatorView = UIActivityIndicatorView(style: .large)

  private lazy var tableView = UITableView(frame: .zero, style: .grouped).then {
    indicatorView.center = view.center
    $0.delegate = self
    $0.backgroundColor = Theme.color.white
    $0.estimatedSectionHeaderHeight = Metric.headerHeight
    $0.estimatedRowHeight = Metric.rowHeight
    $0.separatorStyle = .singleLine
    $0.separatorColor = Theme.color.line
    $0.separatorInset = .init(top: 0, left: Metric.basicMargin, bottom: 0, right: Metric.basicMargin)
    $0.refreshControl = UIRefreshControl()

    $0.register(WeatherHeaderCell.self, forHeaderFooterViewReuseIdentifier: WeatherHeaderCell.reuseIdentifier)
    $0.register(WeatherInfoCell.self, forCellReuseIdentifier: WeatherInfoCell.reuseIdentifier)
  }

  // MARK: - Properties

  var dataSource: RxTableViewSectionedReloadDataSource<WeathersData>!

  // MARK: - Life cycle

  // MARK: - Setup

  override func setupUI() {
    super.setupUI()
    view.addSubviews([tableView, indicatorView])
  }

  override func setupConstraints() {
    super.setupConstraints()

    tableView.snp.makeConstraints {
      $0.top.equalTo(view.safeAreaLayoutGuide.snp.top)
      $0.leading.trailing.bottom.equalToSuperview()
    }
  }

  // MARK: - Binding methods

  override func bindViewModel() {
    super.bindViewModel()
    guard let viewModel = viewModel as? WeatherListViewModel else { return }

    // DataSource
    dataSource = RxTableViewSectionedReloadDataSource<WeathersData> { _, tableView, indexPath, item in
      guard let cell = tableView.dequeueReusableCell(
        withIdentifier: WeatherInfoCell.reuseIdentifier,
        for: indexPath
      ) as? WeatherInfoCell else { return .init() }

      cell.bind(viewModel: .init(item: item))

      return cell
    }

    // MARK: Input -->

    let input = WeatherListViewModel.Input(
      viewWillAppear: rx.viewWillAppear.mapToVoid(),
      didPullToRefresh: tableView.refreshControl!.rx.controlEvent(.valueChanged).asObservable()
    )

    // MARK: Output <--

    let output = viewModel.transform(input: input)

    output.isLoading
      .drive(onNext: { [weak self] in
        self?.showIndicatorView($0)
      }).disposed(by: disposeBag)

    output.weathersData
      .drive(tableView.rx.items(dataSource: dataSource))
      .disposed(by: disposeBag)
  }
}

// MARK: - TableView delegate

extension WeatherListViewController: UITableViewDelegate {

  func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
    guard let header = tableView.dequeueReusableHeaderFooterView(
      withIdentifier: WeatherHeaderCell.reuseIdentifier
    ) as? WeatherHeaderCell else {
      return .init()
    }

    let headerViewModel = WeatherHeaderCellViewModel(title: dataSource.sectionModels[section].model)
    header.bind(viewModel: headerViewModel)

    return header
  }
}

// MARK: - Helper methods

extension WeatherListViewController {

  private func showIndicatorView(_ isLoading: Bool) {
    if !isLoading {
      indicatorView.stopAnimating()
      tableView.refreshControl?.endRefreshing()
    } else if !tableView.refreshControl!.isRefreshing {
      indicatorView.startAnimating()
    }
  }
}
