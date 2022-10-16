export { makeLoginBtn }

import { loginModal } from './src/login-modal.js'

function makeLoginBtn() {
  const loginBtn = document.createElement('button')

  loginBtn.textContent = 'Log In'
  loginBtn.id = 'login-btn'

  loginBtn.onclick = loginModal.show

  return loginBtn
}
