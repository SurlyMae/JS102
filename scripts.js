'use strict';

const animal = {}

animal.username = 'Daffy'

animal['tagline'] = 'I like ducks.'

var noises = []

animal.noises = noises

console.log('Animal: ', animal)

var count = 0
for (var key in animal) {
  count++;
  if (key === 'username') {
    console.log(`Hey, my name is ${animal[key]}.`)
  } else if (key === 'tagline') {
    console.log(`I say ${animal[key]}`)
  }
}
