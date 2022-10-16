export { makeModal }

function makeModal() {
  const modal = document.createElement('dialog')

  document.body.append(modal)

  modal.addEventListener('click', e => {
    if (
      e.target === modal || 
      e.target.closest('.cancel-btn, .close-btn')
    ) modal.close()
  })

  modal.onkeydown = e => {
    if (e.key === 'Escape') {
      modal.close()
      e.stopPropagation()
    }
  }

  addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.close()
  })
  
  return modal
}
