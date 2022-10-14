export { makeRegBtn }

import { regModal } from './src/reg-modal.js'

function makeRegBtn() {
  const regBtn = document.createElement('button')

  regBtn.textContent = 'Register'
  regBtn.id = 'reg-btn'

  regBtn.onclick = regModal.show

  return regBtn
}
