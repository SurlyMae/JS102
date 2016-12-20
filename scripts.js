'use strict';

const animal = {}

animal.username = 'Daffy'

animal['tagline'] = 'I like ducks.'

var noises = []

animal.noises = noises

var count = 0
for (var key in animal) {
  count++;
  if (key === 'username') {
    console.log(`Hey, my name is ${animal[key]}.`)
  } else if (key === 'tagline') {
    console.log(`I say ${animal[key]}`)
  }
}

var noiseArray = ['neigh']

noiseArray.unshift('baaa')

noiseArray.push('quack')

noiseArray[3] = 'moo'

animal.noises = noiseArray

var animals = []

animals.push(animal)

var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
}

animals.unshift(quackers)

var scratchers = {
  username: 'Hugo',
  tagline: 'I am a cat who is basically a dog.',
  noises: ['growl', 'meow', 'purr']
}

var barkers = {
  username: 'Malto',
  tagline: 'I am a bully.',
  noises: ['woof', 'whimper', 'grr']
}

animals.push(scratchers, barkers)
