import { makeRegBtn } from './js/auth/reg-btn.js'
import { makeLoginBtn } from './js/auth/login-btn.js'

const regBtn = makeRegBtn()
const loginBtn = makeLoginBtn()

document.getElementById('reg-btn').replaceWith(regBtn)
document.getElementById('login-btn').replaceWith(loginBtn)
