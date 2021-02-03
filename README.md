# nuxt-algolia

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Simple wrapper/integration for [Algolia InstantSearch](https://www.algolia.com/products/instantsearch/).

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-algolia` dependency to your project

```bash
yarn add nuxt-algolia # or npm install nuxt-algolia
```

2. Add `nuxt-algolia` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-algolia'
  ],

  publicRuntimeConfig: {
    algolia: {
      applicationId: [YOUR APPLICATION ID],
      apiKey: [YOUR API KEY],
    }
  }
}
```

## Usage

### Component

**`asyncData`**

```js
async asyncData ({ $algolia }) {
  const index = $algolia.initIndex('instant_search');
  const results = await index.search('Google');
  return results;
}
```

**`methods`/`created`/`mounted`/etc**

```js
methods: {
  async fetchResults(query) {
    const index = this.$algolia.initIndex('instant_search');
    this.results = await index.search(query);
  }
}
```

### Store actions (including `nuxtServerInit`)

```js
// In store
{
  actions: {
    async fetchGoogleProducts ({ commit }) {
      const index = this.$algolia.initIndex('instant_search');
      const products = await index.search('Google');
      commit('SET_PRODUCTS', products);
    }
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-algolia/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-algolia

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-algolia.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-algolia

[github-actions-ci-src]: https://github.com/fbovo/nuxt-algolia/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/fbovo/nuxt-algolia/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/fbovo/nuxt-algolia.svg
[codecov-href]: https://codecov.io/gh/fbovo/nuxt-algolia

[license-src]: https://img.shields.io/npm/l/nuxt-algolia.svg
[license-href]: https://npmjs.com/package/nuxt-algolia
