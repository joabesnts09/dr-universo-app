import { useEffect } from 'react'

function useHandleModal(
  modalId: string,
  setShowModal: (show: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const modalElement = document.getElementById(modalId)
      if (modalElement && !modalElement.contains(event.target as Node)) {
        setShowModal(false)
      }
    }

    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [modalId, setShowModal])
}

export default useHandleModal
