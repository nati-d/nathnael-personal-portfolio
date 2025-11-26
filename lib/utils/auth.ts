import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function getAccessToken(request?: NextRequest) {
    try {
        const cookiesStore = request ? request.cookies : await cookies()
        return cookiesStore.get('access_token')?.value || null
    } catch (error) {
        console.error('Error getting access token:', error)
        return null
    }
}

export async function getRefreshToken(request?: NextRequest) {
    try {
        const cookiesStore = request ? request.cookies : await cookies()
        return cookiesStore.get('refresh_token')?.value || null
    } catch (error) {
        console.error('Error getting refresh token:', error)
        return null
    }
}
