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
    const employeeEmploymentData: any = await $fetch(`${finchApiBaseUrl}/employer/employment`, {
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
    console.log('api/employer/employment employeeEmploymentData: ', employeeEmploymentData)
    console.log('api/employer/employment employeeEmploymentData.resoponses[0]: ', employeeEmploymentData?.responses[0])
    return employeeEmploymentData?.responses
  } catch (error: unknown) {
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
