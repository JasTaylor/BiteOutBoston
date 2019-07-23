'use strict'
const store = require('../store')
const showRestaurantsTemplate = require('../templates/helpers/restaurant-listing.handlebars')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#changePassword').removeClass('hide')
  $('#sign-out').removeClass('hide')
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
}

const signUpFailure = () => {
  failureMessage('You have not signed up, please try again.')
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  successMessage('You have signed in, have fun!')
}

const signInFailure = () => {
  failureMessage('You have not signed in, please try again.')
}
const changePasswordSuccessful = responseData => {
  successMessage('You have changed your password succesfully')
}
const changePasswordFailure = () => {
  failureMessage('Failed to change password')
}
const signOutSuccessful = responseData => {
  $('#message').text('You have signed out succesfully')
  $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Failed to sign out')
}

const getRestaurantsSuccess = (data) => {
  console.log(data)
  const showRestaurantsHtml = showRestaurantsTemplate({ restaurants: data.restaurants })
  $('.content').html(showRestaurantsHtml)
}

const clearRestaurants = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
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
  failure
}
