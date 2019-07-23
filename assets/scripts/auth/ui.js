'use strict'
const store = require('../store')
const authEvents = require('./events.js')
const api = require('./api')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  $('#message').text('You have signed up succesfully, please now sign in and have fun!')
}

const signUpFailure = () => {
  failureMessage('You have not signed up, please try again.')
}

const signInSuccessful = responseData => {
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

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
