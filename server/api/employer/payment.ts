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
    const employerPayment: any = await $fetch(`${finchApiBaseUrl}/employer/payment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Finch-Version': finchApiVersion,
        Authorization: `Bearer ${accessToken}`
      },
      query: {
        start_date: '2022-01-01',
        end_date: '2022-12-31'
      }
    })
    console.log('api/employer/paymet Payment: ', employerPayment)
    return employerPayment
  } catch (error: unknown) {
    console.log('api/employer/payment error: ', error)
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
