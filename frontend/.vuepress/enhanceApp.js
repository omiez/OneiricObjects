/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

import { onError } from "@apollo/client/link/error";

import fetch from 'node-fetch';

const GRAPHQL_PATH = '/graphql';

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: (process.env.BACKEND_URL || '/api') + GRAPHQL_PATH,
      credentials: 'same-origin',
      fetch: fetch
    })
  ]),
  cache: new InMemoryCache(),
});

import VueApollo from 'vue-apollo'
// 
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(VueApollo);
  options.apolloProvider = apolloProvider;
  router.mode = 'history';
}
