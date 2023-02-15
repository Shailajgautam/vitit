import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
      uri: "https://stpaulpark.stepzen.net/api/toned-nightingale/__graphql",
      headers: {
            Authorization: 'Apikey stpaulpark::stepzen.net+1000::3bc750bd5b2d8e97a53f392f20eaa4a27304bae93f5941a387247d3e69880f33',
      },
      cache: new InMemoryCache(),
    });

    export default client;