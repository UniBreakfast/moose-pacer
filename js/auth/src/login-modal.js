export const loginModal = {
  show() {
    informer.textContent = "Log in if you have an account."
    modal.showModal()
  },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './login-form.js'

const modal = makeModal()
const loginForm = makeForm(descriptor)
const informer = loginForm.querySelector('.inform-output')

modal.append(loginForm)

loginForm.onsubmit = async () => {
  const user = { name: loginForm.username.value }
  const users = JSON.parse(localStorage.getItem('test_auth_module_users')) || []

  if (users.some(u => u.name === user.name)) {
    localStorage.setItem('test_auth_module_user', JSON.stringify(user))
    modal.close()
    loginModal.onlogin?.()
  }
  else {
    informer.textContent = 'User not found'
  }
}
