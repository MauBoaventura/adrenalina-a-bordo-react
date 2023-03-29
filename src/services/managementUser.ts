import { apiManagement } from './apis/api_management'

export async function getProfile() {
    const response = await apiManagement.get('/me')

    return response.data
}
