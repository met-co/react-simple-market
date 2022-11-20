//
//  ViewController.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

import RxCocoa
import RxSwift
import UIKit
import SnapKit
import Then

class ViewController: UIViewController {

  // MARK: - Properties

  let disposeBag = DisposeBag()

  var viewModel: ViewModel
  var navigator: Navigator

  // MARK: - Initialize

  init(viewModel: ViewModel, navigator: Navigator) {
    self.viewModel = viewModel
    self.navigator = navigator
    super.init(nibName: nil, bundle: nil)
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  // MARK: - Life cycle

  override func viewDidLoad() {
    super.viewDidLoad()
    setupUI()
    setupConstraints()
    bindViewModel()
  }

  deinit {
    print("\(type(of: self)): Deinited")
  }

  // MARK: - Setup

  func setupUI() {
    view.backgroundColor = .white
  }

  func setupConstraints() {}

  // MARK: - Binding methods

  func bindViewModel() {

    viewModel.errorMessage.asDriverOnErrorJustComplete()
      .drive(onNext: { [weak self] message in
        print("❌ Error: ", message)
      }).disposed(by: disposeBag)
  }
}

// MARK: - Helper methods

extension ViewController {}
