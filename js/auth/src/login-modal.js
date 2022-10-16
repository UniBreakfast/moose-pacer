export const loginModal = {
  show() { modal.showModal() },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './login-form.js'

const modal = makeModal()
const loginForm = makeForm(descriptor)

modal.append(loginForm)
