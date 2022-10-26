export const adminModal = {
  show() {
    prepareForm()
    modal.showModal()
  },

  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './admin-form.js'
import { getUsers } from './get-users.js'

const modal = makeModal()
const adminForm = makeForm(descriptor)

modal.append(adminForm)


prepareForm()

async function prepareForm() {
  const tempList = await buildTempList()

  adminForm.querySelector('.list-placeholder, .user-list')
    .replaceWith(tempList)
}

async function buildTempList() {
  const list = document.createElement('ul')
  const users = await getUsers()

  list.className = 'user-list'
  list.append(...users.map(buildUserItem))

  return list
}

function buildUserItem(user) {
  const item = document.createElement('li')
  const nameSpan = document.createElement('span')

  nameSpan.textContent = user.name

  item.append(nameSpan)

  return item
}
