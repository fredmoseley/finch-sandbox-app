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
    const employerDirectory: Finch.IndividualsPageResponse = await $fetch(`${finchApiBaseUrl}/employer/directory`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Finch-API-Version': finchApiVersion,
        Authorization: `Bearer ${accessToken}`
      }
    })
    return employerDirectory.individuals
  } catch (error: unknown) {
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
