export { isLoggedIn }

async function isLoggedIn() {
  const storedAuth = localStorage.getItem('test_auth_module')

  return !!storedAuth
}
