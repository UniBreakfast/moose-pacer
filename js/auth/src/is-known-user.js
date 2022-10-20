export { isKnown }

async function isKnown(user) {
  const users = JSON.parse(localStorage.getItem('test_auth_module_users')) || []

  return users.some(u => u.name === user.name)
}
