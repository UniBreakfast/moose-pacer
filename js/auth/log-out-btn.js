export { makeLogoutBtn }

import { forgetUser } from './forget-user.js'

function makeLogoutBtn() {
  const logoutBtn = document.createElement('button')

  logoutBtn.textContent = 'Log Out'
  logoutBtn.id = 'logout-btn'

  logoutBtn.onclick = () => {
    forgetUser()
    logoutBtn.onlogout?.()
  }

  return logoutBtn
}
