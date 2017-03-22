import { DocumentNode } from 'graphql';
import { OperationOption } from 'react-apollo/lib/graphql';
declare type operation = OperationOption & {
    gql: DocumentNode;
};
export { operation };
