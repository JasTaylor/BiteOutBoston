'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onGuest = event => {
  event.preventDefault()
  const guestInfo = {
    'credentials': {
      'email': 'j@j',
      'password': 'j'
    }
  }
  api.signIn(guestInfo)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}
const onGetRestaurants = (event) => {
  event.preventDefault()
  api.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.failure)
}

const onClearRestaurants = (event) => {
  event.preventDefault()
  ui.clearRestaurants()
}

const onDeleteRestaurant = (event) => {
  event.preventDefault()
  const restaurantId = $(event.target).closest('section').data('id')
  api.deleteRestaurant(restaurantId)
    .then(() => onGetRestaurants(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getRestaurantsButton').on('click', onGetRestaurants)
  $('#clearRestaurantsButton').on('click', onClearRestaurants)
  $('.content').on('click', '.delete-restaurant', onDeleteRestaurant)
  $('.content').on('submit', '.update-restaurant', onUpdateRestaurant)
}

const onCreateRestaurant = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRestaurant(formData)
    .then(ui.createRestaurantSuccessful)
    .catch(ui.createRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const restaurantId = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateRestaurant(formData, restaurantId)
    .then(() => onGetRestaurants(event))
    .then(ui.onUpdateRestaurantSuccess)
    .catch(ui.onUpdateRestaurantFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers,
  onCreateRestaurant,
  onUpdateRestaurant,
  onGuest
}
