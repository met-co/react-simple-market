//
//  ViewModelType.swift
//  FitPet
//
//  Created by buzz on 2022/11/20.
//

protocol ViewModelType {
  associatedtype Input
  associatedtype Output

  func transform(input: Input) -> Output
}
