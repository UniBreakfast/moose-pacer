export { makeLogoutBtn }

function makeLogoutBtn() {
  const logoutBtn = document.createElement('button')

  logoutBtn.textContent = 'Log Out'
  logoutBtn.id = 'logout-btn'

  logoutBtn.onclick = () => {
    logoutBtn.onlogout?.()
  }

  return logoutBtn
}
