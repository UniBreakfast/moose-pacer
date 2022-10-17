import { makeRegBtn } from './js/auth/reg-btn.js'
import { makeLoginBtn } from './js/auth/login-btn.js'
import { makeLogoutBtn } from './js/auth/logout-btn.js'
import { isLoggedIn } from './js/auth/is-logged-in.js'
import { getUserData } from './js/auth/get-user-data.js'

const headerSwitch = document.getElementById('header-switch')
const userLabel = document.querySelector('.user-bar>h2')
const regBtn = makeRegBtn()
const loginBtn = makeLoginBtn()
const logoutBtn = makeLogoutBtn()

document.getElementById('reg-btn').replaceWith(regBtn)
document.getElementById('login-btn').replaceWith(loginBtn)
document.getElementById('logout-btn').replaceWith(logoutBtn)

loginBtn.onlogin = async () => {
  const {name} = await getUserData()
  userLabel.innerText = name
  headerSwitch.checked = true
}

logoutBtn.onlogout = () => headerSwitch.checked = false

main()

async function main() {
  headerSwitch.checked = await isLoggedIn()
}
