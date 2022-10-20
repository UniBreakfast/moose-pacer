export { getUsers }

async function getUsers() {
  return JSON.parse(localStorage.getItem('test_auth_module_users')) || []
}
