//
//  WeatherInfoCell.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit

final class WeatherInfoCell: TableViewCell {

  // MARK: - Metric

  private enum Metric {
    static let basicMargin: CGFloat = 16
    static let weatherImageSize: CGFloat = 50
  }

  // MARK: - UI Properties

  private let dateLabel = UILabel().then {
    $0.font = UIFont.systemFont(ofSize: 16, weight: .medium)
    $0.textColor = Theme.color.black
  }

  private let weatherImageView = UIImageView().then {
    $0.backgroundColor = Theme.color.line.withAlphaComponent(0.3)
    $0.contentMode = .scaleToFill
    $0.layer.cornerRadius = 8
    $0.layer.shadowOffset = .init(width: 0, height: 1)
    $0.layer.shadowOpacity = 0.2
    $0.layer.shadowColor = Theme.color.black.cgColor
  }

  private let weatherStateLabel = UILabel().then {
    $0.font = UIFont.systemFont(ofSize: 13, weight: .regular)
    $0.textColor = Theme.color.lightGray
  }

  private let maxTempLabel = UILabel().then {
    $0.font = UIFont.systemFont(ofSize: 13, weight: .medium)
    $0.textColor = Theme.color.black
  }

  private let minTempLabel = UILabel().then {
    $0.font = UIFont.systemFont(ofSize: 13, weight: .medium)
    $0.textColor = Theme.color.black
  }

  // MARK: - Setup

  override func setupUI() {
    super.setupUI()

    contentView.addSubviews([
      dateLabel, weatherImageView, weatherStateLabel, maxTempLabel, minTempLabel
    ])
  }

  override func setupConstraints() {
    super.setupConstraints()

    dateLabel.snp.makeConstraints {
      $0.top.leading.equalToSuperview().inset(Metric.basicMargin)
    }

    weatherImageView.snp.makeConstraints {
      $0.top.equalTo(dateLabel.snp.bottom).offset(Metric.basicMargin)
      $0.leading.bottom.equalToSuperview().inset(Metric.basicMargin)
      $0.size.equalTo(Metric.weatherImageSize)
    }

    weatherStateLabel.snp.makeConstraints {
      $0.leading.equalTo(weatherImageView.snp.trailing).offset(Metric.basicMargin)
      $0.bottom.equalTo(weatherImageView.snp.bottom)
      $0.trailing.equalTo(minTempLabel.snp.leading).offset(-Metric.basicMargin)
    }

    maxTempLabel.snp.contentHuggingHorizontalPriority = 1000
    maxTempLabel.snp.makeConstraints {
      $0.trailing.equalToSuperview().inset(Metric.basicMargin)
      $0.bottom.equalTo(minTempLabel.snp.top).offset(-Metric.basicMargin)
    }

    minTempLabel.snp.contentHuggingHorizontalPriority = 1000
    minTempLabel.snp.makeConstraints {
      $0.trailing.bottom.equalToSuperview().inset(Metric.basicMargin)
    }
  }
}

// MARK: - Binding

extension WeatherInfoCell {

  func bind(viewModel: WeatherInfoCellViewModel) {
    dateLabel.text = viewModel.dateString
    weatherImageView.image = viewModel.weatherImage
    weatherStateLabel.text = viewModel.weatherState
    maxTempLabel.text = viewModel.maxTemp
    minTempLabel.text = viewModel.minTemp
  }
}
