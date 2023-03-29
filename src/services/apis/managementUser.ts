import { apiManagement } from './management'

export async function getProfile() {
    const response = await apiManagement.get('/me')

    return response.data
}
