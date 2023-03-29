
import { useContext } from 'react'
import { AuthContext } from 'src/context/AuthContext'

function useAuth(): any {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return context
}

export { useAuth }
