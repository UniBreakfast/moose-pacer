import { makeRegBtn } from './js/auth/reg-btn.js'
import { makeLoginBtn } from './js/auth/log-in-btn.js'
import { makeLogoutBtn } from './js/auth/log-out-btn.js'
import { isLoggedIn } from './js/auth/is-logged-in.js'
import { getUser } from './js/auth/get-user-data.js'

const headerSwitch = document.getElementById('header-switch')
const userLabel = document.querySelector('.user-bar>h2')
const regBtn = makeRegBtn()
const loginBtn = makeLoginBtn()
const logoutBtn = makeLogoutBtn()

document.getElementById('reg-btn').replaceWith(regBtn)
document.getElementById('login-btn').replaceWith(loginBtn)
document.getElementById('logout-btn').replaceWith(logoutBtn)

loginBtn.onlogin = async () => {
  const { name } = await getUser()
  userLabel.innerText = name
  headerSwitch.checked = true
}

logoutBtn.onlogout = () => headerSwitch.checked = false

main()

async function main() {
  if (await isLoggedIn()) {
    const { name } = await getUser()
    userLabel.innerText = name
    headerSwitch.checked = true
  }
}
