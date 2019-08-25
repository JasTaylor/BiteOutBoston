'use strict'
const authEvents = require('././auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#guest').on('click', authEvents.onGuest)
  $('#create-restaurant').on('submit', authEvents.onCreateRestaurant)
  authEvents.addHandlers()
})
