
/* IMPORT */

import omit = require ( 'lodash/omit' );
import {graphql} from 'react-apollo';
import {operation} from './types';

/* GRAPHQLS */

function graphqls ( ...operations: operation[] ) {
  return function ( component ) {
    return operations.reduce ( ( component, operation ) => graphql ( operation.gql, omit ( operation, 'gql' ) )( component ), component );
  }
}

/* EXPORT */

export = Object.assign ( graphqls, { default: graphqls } );
