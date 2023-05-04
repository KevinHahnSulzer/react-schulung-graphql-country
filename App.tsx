import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import Country from './Country';
import './style.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const countries = ['DE', 'FR', 'ES'];

export default function App() {
  return (
    <ApolloProvider client={client}>
      {countries &&
        countries.map((code) => {
          return <Country code={code} />;
        })}
    </ApolloProvider>
  );
}
