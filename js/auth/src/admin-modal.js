export const adminModal = {
  show() { modal.showModal() },
  hide() { modal.close() },
}

import { makeModal } from './modal.js'
import { makeForm } from './form.js'
import { descriptor } from './admin-form.js'

const modal = makeModal()
const adminForm = makeForm(descriptor)

modal.append(adminForm)

adminForm.onsubmit = async () => {
  
}
