//
//  WeatherHeaderCell.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit

final class WeatherHeaderCell: UITableViewHeaderFooterView {

  // MARK: - Metric

  private enum Metric {
    static let basicMargin: CGFloat = 16
  }

  //MARK: - UI Properties

  let titleLabel = UILabel().then {
    $0.textColor = Theme.color.black
    $0.font = UIFont.systemFont(ofSize: 24, weight: .semibold)
  }

  //MARK: - Initializse

  override init(reuseIdentifier: String?) {
    super.init(reuseIdentifier: reuseIdentifier)

    setupUI()
    setupConstraints()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }


  //MARK: - Methods

  func setupUI() {
    contentView.addSubview(titleLabel)
  }

  func setupConstraints() {

    titleLabel.snp.makeConstraints {
      $0.edges.equalToSuperview().inset(Metric.basicMargin)
    }
  }
}

//MARK: - bind

extension WeatherHeaderCell {

  func bind(viewModel: WeatherHeaderCellViewModel) {
    titleLabel.text = viewModel.title
  }
}

