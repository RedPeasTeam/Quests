/**
 * Quests API service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
}
export declare function ErrorResponseFromJSON(json: any): ErrorResponse;
export declare function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse;
export declare function ErrorResponseToJSON(value?: ErrorResponse | null): any;
