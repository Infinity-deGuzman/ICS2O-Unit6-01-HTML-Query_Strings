// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')

  // process
  const volume = 4 / 3 * 3.14159265 * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>radius = " + radius + "</li>\n<ul>"

  //output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}

function enterClicked () {
  // this code will calculate the volume of a sphere

  // input
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const volume = 4 / 3 * 3.14159265 * Math.pow(radius, 3)

  //output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³'
}
