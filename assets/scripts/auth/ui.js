'use strict'
const store = require('../store')
const showRestaurantsTemplate = require('../templates/helpers/restaurant-listing.handlebars')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#changePassword').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#create-restaurant').removeClass('hide')
  $('.cpModal').removeClass('hide')
  $('#modalButton').addClass('hide')
  $('#content').removeClass('hide')
  $('#update').removeClass('hide')
  $('.sidenav').removeClass('hide')
  $('#getRestaurantsButton').removeClass('hide')
  $('#clearRestaurantsButton').removeClass('hide')
  $('#get-clear-rest').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  store.user = responseData.user
  $('#message').text('You have signed up succesfully, please now sign in and have fun!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  failureMessage('You have not signed up, please try again.')
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  successMessage('You have signed in, have fun!')
  $('form').trigger('reset')
  $('.myModal').modal('hide')
  $('#guest').addClass('hide')
  $('#cpModal').removeClass('hide')
  $('#createModal').removeClass('hide')
  $('.bar').addClass('hide')
  $('#carouselExampleCaptions').addClass('hide')
  $('.createRestaurant').removeClass('hide')
  $('.navbar-signin').removeClass('hide')
  $('.navbar-brand').addClass('hide')
}

const signInFailure = () => {
  failureMessage('You have not signed in, please try again.')
  $('form').trigger('reset')
}
const changePasswordSuccessful = responseData => {
  $('#messageSeven').text('You have changed your password succesfully')
  $('form').trigger('reset')
}
const changePasswordFailure = () => {
  failureMessage('Failed to change password')
  $('form').trigger('reset')
}
const signOutSuccessful = responseData => {
  $('#message').text('You have signed out succesfully')
  $('#changePassword').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#get-clear-rest').addClass('hide')
  $('#getRestaurantsButton').addClass('hide')
  $('#messageFour').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#clearRestaurantsButton').addClass('hide')
  $('#create-restaurant').addClass('hide')
  $('#content').addClass('hide')
  $('#update').addClass('hide')
  $('#modalButton').removeClass('hide')
  $('#guest').removeClass('hide')
  $('.cpModal').addClass('hide')
  $('#carouselExampleCaptions').removeClass('hide')
  $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Failed to sign out')
  $('form').trigger('reset')
}

const getRestaurantsSuccess = (data) => {
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: data.restaurants })
  $('.content').html(showRestaurantsHtml)
}

const clearRestaurants = () => {
  $('.content').empty()
}

const failure = () => {
  $('#messageFour').text('You have failed to delete a restaurant')
  $('form').trigger('reset')
}

const createRestaurantSuccessful = () => {
  $('#messageFour').text('You have created a new restaurant')
  $('form').trigger('reset')
}

const createRestaurantFailure = () => {
  $('#messageFour').text('You have NOT created a new restaurant')
  $('form').trigger('reset')
}

const onUpdateRestaurantFailure = () => {
  $('#messageFour').text('Something went wrong, you have not updated this restaurant')
  $('form').trigger('reset')
}

const onUpdateRestaurantSuccess = () => {
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  getRestaurantsSuccess,
  clearRestaurants,
  failure,
  createRestaurantSuccessful,
  createRestaurantFailure,
  onUpdateRestaurantFailure,
  onUpdateRestaurantSuccess
}
