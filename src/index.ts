
/* IMPORT */

import * as _ from 'lodash';
import {graphql} from 'react-apollo';
import {operation} from './types';

/* GRAPHQLS */

function graphqls ( ...operations: operation[] ) {
  return function ( component ) {
    return operations.reduce ( ( component, operation ) => graphql ( operation.gql, _.omit ( operation, 'gql' ) )( component ), component );
  }
}

/* EXPORT */

export default graphqls;
