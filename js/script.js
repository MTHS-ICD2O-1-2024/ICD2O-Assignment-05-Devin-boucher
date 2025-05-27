// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

function sumDivisibleBy3or5() {
  let numberInput = document.getElementById('userNumber').value
  let number = parseInt(numberInput)
  
  let sum = 0
  let counter = 1

  while (counter <= number) {
    let temp3 = counter
    while (temp3 >= 3) {
      temp3 = temp3 - 3
    }

    let temp5 = counter
    while (temp5 >= 5) {
      temp5 = temp5 - 5
    }

    if ((temp3 === 0) || (temp5 === 0)) {
      sum = sum + counter
    }

    counter = counter + 1
  }

  document.getElementById('sum-result').innerText =
    'Sum of numbers divisible by 3 or 5 up to ' + number + ' is: ' + sum
}
