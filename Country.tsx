import { gql, useQuery } from '@apollo/client';
import * as React from 'react';

const COUNTRY_DE_QUERY = gql`
  query Query {
    country(code: "DE") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const Country = () => {
  const { loading, error, data } = useQuery(COUNTRY_DE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Country Data</h2>
      <ul>
        <li>Name: {data.country.name}</li>
        <li>Native: {data.country.native}</li>
        <li>Capital: {data.country.capital}</li>
        <li>emoji: {data.country.emoji}</li>
        <li>currency: {data.country.currency}</li>
        <li>
          languages:{' '}
          <ul>
            {data.country.languages.map((l, i) => {
              return (
                <li key={i}>
                  {l.code} - {l.name}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Country;
