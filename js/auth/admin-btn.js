export { makeAdminBtn }

import { adminModal } from './src/admin-modal.js'

function makeAdminBtn() {
  const adminBtn = document.createElement('button')

  adminBtn.textContent = 'Administrate'
  adminBtn.id = 'admin-btn'

  adminBtn.onclick = adminModal.show
  
  return adminBtn
}
