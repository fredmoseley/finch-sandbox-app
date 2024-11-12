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
  const body = await readBody(event)
  const requests = body?.requests
  try {
    const employeePersonalData: any = await $fetch(`${finchApiBaseUrl}/employer/individual`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Finch-API-Version': finchApiVersion
      },
      body: {
        requests
      }
    })
    console.log('api/employer/individual employeePersonalData: ', employeePersonalData)
    console.log('api/employer/individual employeePersonalData.resoponses[0]: ', employeePersonalData?.responses[0])
    return employeePersonalData?.responses
  } catch (error: unknown) {
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
