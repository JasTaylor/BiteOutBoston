'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}
const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    data: formData,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getRestaurants = function () {
  return $.ajax({
    url: config.apiUrl + '/restaurants'
  })
}

const deleteRestaurant = (restaurantId) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restaurantId,
    method: 'DELETE'
  })
}
const updateRestaurant = (formData, id) => {
  console.log('api update check')
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createRestaurant = formData => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getRestaurants,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant
}
