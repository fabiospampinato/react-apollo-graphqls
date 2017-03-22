/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var react_apollo_1 = require("react-apollo");
/* GRAPHQLS */
function graphqls() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
    }
    return function (component) {
        return operations.reduce(function (component, operation) { return react_apollo_1.graphql(operation.gql, _.omit(operation, 'gql'))(component); }, component);
    };
}
/* EXPORT */
exports.default = graphqls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBQzVCLDZDQUFxQztBQUdyQyxjQUFjO0FBRWQ7SUFBb0Isb0JBQTBCO1NBQTFCLFVBQTBCLEVBQTFCLHFCQUEwQixFQUExQixJQUEwQjtRQUExQiwrQkFBMEI7O0lBQzVDLE1BQU0sQ0FBQyxVQUFXLFNBQVM7UUFDekIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUcsVUFBRSxTQUFTLEVBQUUsU0FBUyxJQUFNLE9BQUEsc0JBQU8sQ0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUcsU0FBUyxFQUFFLEtBQUssQ0FBRSxDQUFFLENBQUUsU0FBUyxDQUFFLEVBQW5FLENBQW1FLEVBQUUsU0FBUyxDQUFFLENBQUM7SUFDMUksQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxRQUFRLENBQUMifQ==