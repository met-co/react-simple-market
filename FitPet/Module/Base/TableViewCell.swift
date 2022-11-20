//
//  TableViewCell.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import UIKit
import SnapKit

class TableViewCell: UITableViewCell {

  //MARK: - Initializse

  override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
    super.init(style: style, reuseIdentifier: reuseIdentifier)

    setupUI()
    setupConstraints()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }


  //MARK: - Methods

  func setupUI() {
    selectionStyle = .none
  }

  func setupConstraints() { }
}
