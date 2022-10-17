export { makeLoginBtn }

import { loginModal } from './src/login-modal.js'

function makeLoginBtn() {
  const loginBtn = document.createElement('button')

  loginBtn.textContent = 'Log In'
  loginBtn.id = 'login-btn'

  loginBtn.onclick = loginModal.show
  
  Object.defineProperty(loginBtn, 'onlogin', {
    set: handler => loginModal.onlogin = handler,
    get: () => loginModal.onlogin,
  })

  return loginBtn
}
