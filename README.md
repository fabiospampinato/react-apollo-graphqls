# Graphqls

![Issues](https://img.shields.io/github/issues/fabiospampinato/react-apollo-graphqls.svg)
[![NPM version](https://img.shields.io/npm/v/react-apollo-graphqls.svg)](https://www.npmjs.com/package/react-apollo-graphqls)

Tiny wrapper around react-apollo's graphql container, with support for multiple queries with a single call.

## Install

```shell
$ npm install --save react-apollo-graphqls
```

## Usage

The standard react-apollo's graphql container requires a GraphQL query as the first argument, and an optional options object as the second.

This function simply requires a single object, with the GraphQL query being under the `gql` property of it. This enables calling it only once but with multiple queries.

```js
import gql from 'graphql-tag';
import * as React from 'react';
import graphqls from 'react-apollo-graphql';

const user = {
  gql: gql`
    query CurrentUserForLayout {
      currentUser {
        login
        avatar_url
      }
    }
  `,
  options: {
    fetchPolicy: 'network-only'
  }
};

const categories = {
  gql: gql`
    query Categories {
      categories {
        _id
        name
        description
      }
    }
  `,
  withRef: true
};

@graphqls ( user, categories )
class Example extends React.Component {}

export {Example};
```

## License

MIT © Fabio Spampinato
