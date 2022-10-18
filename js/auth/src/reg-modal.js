export const regModal = {
  show() { modal.showModal() },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './reg-form.js'

const modal = makeModal()
const regForm = makeForm(descriptor)

modal.append(regForm)

regForm.onsubmit = async () => {
  const users = JSON.parse(localStorage.getItem('test_auth_module_users')) || []
  const newUser = {name: regForm.username.value}

  users.push(newUser)

  localStorage.setItem('test_auth_module_users', JSON.stringify(users))

  modal.close()
}
