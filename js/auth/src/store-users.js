export { storeUsers }

async function storeUsers(users) {
  localStorage.setItem('test_auth_module_users', JSON.stringify(users))
}
