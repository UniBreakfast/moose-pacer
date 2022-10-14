export const regModal = {
  show() { modal.showModal() },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './reg-form.js'

const modal = makeModal()
const regForm = makeForm(descriptor)
const cancelBtn = regForm.querySelector('.cancel-btn')

document.body.append(modal)
modal.append(regForm)

modal.onclick = e => {
  if (e.target === modal) modal.close()
}

modal.onkeydown = e => {
  if (e.key === 'Escape') modal.close()
}

cancelBtn.onclick = () => modal.close()
