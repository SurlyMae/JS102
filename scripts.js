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

function AnimalTestUser (username) {
  let otherArgs = []
  if (arguments.length > Function.length) {
    otherArgs = [].slice.call(arguments, 1)
    }
  return {
    username: username,
    otherArgs: otherArgs
  }
}

var testSheep = AnimalTestUser('Cottonball', {'loves dancing': true}, [1,2,3])

function AnimalCreator (username, species, tagline, noises) {
  let animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
  return animal
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew'])

function addFriend (animal, friend) {
  animal.friends.push(friend.username)
  friend.friends.push(animal.username)
}

var blackSheep = AnimalCreator('Black Sheep', 'sheep', 'You know you want to!!', ['baaaaaaad'])

addFriend(sheep, blackSheep)

var pig = AnimalCreator('Babe', 'pig', 'Not by the hair on my chinny chin chin!', ['oink', 'wee', 'squeal'])

var myFarm = [sheep, blackSheep, pig]
addFriend(pig, sheep)

function addMatchesArray (farm) {
  farm.forEach(animal => {
    animal.matches = []
  })
}

addMatchesArray(myFarm)

function giveMatches (farm) {
  farm.forEach(animal => {
    animal.matches.push(animal.friends[0])
  })
}

giveMatches(myFarm)
