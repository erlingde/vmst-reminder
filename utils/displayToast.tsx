import { toast } from 'react-toastify'

const displayToast = () => ({
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
})

export default displayToast
