export const regModal = {
  show() { modal.showModal() },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './reg-form.js'
import { getUsers } from './get-users.js'
import { storeUsers } from './store-users.js'

const modal = makeModal()
const regForm = makeForm(descriptor)

modal.append(regForm)

regForm.onsubmit = async () => {
  const users = await getUsers()
  const newUser = {name: regForm.username.value}

  users.push(newUser)

  await storeUsers(users)
  
  modal.close()
}
