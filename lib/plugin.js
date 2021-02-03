import algoliasearch from 'algoliasearch/lite'
import consola from 'consola'

const logger = consola.withScope('nuxt-algolia')

// eslint-disable-next-line require-await
export default async (ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.algolia ? ctx.$config.algolia : {}
  const searchClient = algoliasearch(
    (runtimeConfig.applicationId || 'latency'),
    (runtimeConfig.apiKey || '6be0576ff61c053d5f9a3225e2a90f76')
  )

  if (!runtimeConfig.applicationId || !runtimeConfig.apiKey) {
    logger.info('API Keys not set, using defaults.')
  }

  // Inject Algolia search to the context as $algolia
  ctx.$algolia = searchClient
  inject('algolia', searchClient)
}
