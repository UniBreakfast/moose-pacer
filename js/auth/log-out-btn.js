export { makeLogoutBtn }

function makeLogoutBtn() {
  const logoutBtn = document.createElement('button')

  logoutBtn.textContent = 'Log Out'
  logoutBtn.id = 'logout-btn'

  logoutBtn.onclick = () => {
    localStorage.removeItem('test_auth_module_user')
    logoutBtn.onlogout?.()
  }

  return logoutBtn
}
