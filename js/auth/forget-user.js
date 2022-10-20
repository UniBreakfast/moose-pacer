export { forgetUser }

async function forgetUser() {
  localStorage.removeItem('test_auth_module_user')
}
