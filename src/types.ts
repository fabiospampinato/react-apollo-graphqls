
/* IMPORT */

import {DocumentNode} from 'graphql';
import {OperationOption} from 'react-apollo/types';

/* TYPES */

type operation = OperationOption<any, any> & {
  gql: DocumentNode
};

/* EXPORT */

export {operation};
