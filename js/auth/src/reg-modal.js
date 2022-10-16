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
