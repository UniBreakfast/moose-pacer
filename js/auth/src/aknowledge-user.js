export { aknowledge }

async function aknowledge(user) {
  localStorage.setItem('test_auth_module_user', JSON.stringify(user))
}
