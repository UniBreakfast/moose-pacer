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
import { isKnown } from './is-known-user.js'
import { aknowledge } from './aknowledge-user.js'

const modal = makeModal()
const loginForm = makeForm(descriptor)
const informer = loginForm.querySelector('.inform-output')

modal.append(loginForm)

loginForm.onsubmit = async () => {
  const user = { name: loginForm.username.value }
  
  if (await isKnown(user)) {
    await aknowledge(user)
    modal.close()
    loginModal.onlogin?.()
  }
  else {
    informer.textContent = 'User not found'
  }
}
