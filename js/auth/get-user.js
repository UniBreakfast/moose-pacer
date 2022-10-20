export { getUser }

async function getUser() {
  const storedAuth = localStorage.getItem('test_auth_module_user')

  if (!storedAuth) return {}

  return JSON.parse(storedAuth)
}
