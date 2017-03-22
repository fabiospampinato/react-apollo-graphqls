import { operation } from './types';
declare function graphqls(...operations: operation[]): (component: any) => any;
export default graphqls;
