
/* IMPORT */

import {DocumentNode} from 'graphql';
import {OperationOption} from 'react-apollo/lib/graphql';

/* TYPES */

type operation = OperationOption & {
  gql: DocumentNode
};

/* EXPORT */

export {operation};
