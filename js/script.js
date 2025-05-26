// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

function longDivide () {
  let dividend = parseInt(document.getElementById('dividend').value)
  const divisor = parseInt(document.getElementById('divisor').value)
  let quotient = 0
  let steps = ''

  // Loop to subtract divisor from dividend
  while (true) {
    if (dividend >= divisor) {
      steps += `${dividend} - ${divisor} = ${dividend - divisor}<br>`
      dividend -= divisor
      quotient++
    } else {
      break
    }
  }

  document.getElementById('sum-result').innerHTML =
    `<p><strong>Steps:</strong><br>${steps}</p>
    <p><strong>Result:</strong> Quotient = ${quotient}, Remainder = ${dividend}</p>`
}
