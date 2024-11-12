import type { NuxtError } from 'nuxt/app'
import Finch from '@tryfinch/finch-api'
import type { SandboxCreateResponse } from '~/types'
import { Product } from '~/utils/constants'

export default defineEventHandler(async (event) => {
  const { provider_id } = getQuery(event)
  const { clientId, clientSecret, finchApiBaseUrl, finchApiVersion } = useRuntimeConfig()
  const products = [Product.Company, Product.Directory, Product.Individual, Product.Employment]

  const requestBody: Finch.Sandbox.ConnectionCreateParams = {
    provider_id: provider_id as string,
    products
  }
  const credentials = btoa(`${clientId}:${clientSecret}`) // Encode to Base64
  const redis = useStorage('redis')

  try {
    const sandboxCreateResponse: Finch.Sandbox.ConnectionCreateResponse = await $fetch(
      `${finchApiBaseUrl}/sandbox/connections`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`
        },
        body: requestBody
      }
    )
    const { access_token } = sandboxCreateResponse
    await redis.setItem('access-token', access_token)

    return {
      success: true
    }
  } catch (error: unknown) {
    const { statusCode, statusMessage, data } = error as NuxtError
    throw createError({
      statusCode: statusCode,
      statusMessage: statusMessage,
      data: data
    })
  }
})
