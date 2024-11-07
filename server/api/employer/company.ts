import Finch from '@tryfinch/finch-api'
import type { NuxtError } from 'nuxt/app'

export default defineEventHandler(async (event) => {
  const redis = useStorage('redis')
  const { finchApiBaseUrl, finchApiVersion } = useRuntimeConfig()
  const accessToken: string | null = await redis.getItem('access-token')

  if (!accessToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Access token not found'
    })
  }

  try {
    const employerCompany: any = await $fetch(`${finchApiBaseUrl}/employer/company`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Finch-Version': finchApiVersion,
        Authorization: `Bearer ${accessToken}`
      }
    })
    console.log('api/employer/company employerCompany: ', employerCompany)
    return employerCompany
  } catch (error: unknown) {
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
