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
 * @interface Reviews
 */
export interface Reviews {
    /**
     *
     * @type {string}
     * @memberof Reviews
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Reviews
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof Reviews
     */
    image?: string;
    /**
     *
     * @type {string}
     * @memberof Reviews
     */
    review?: string;
    /**
     *
     * @type {string}
     * @memberof Reviews
     */
    date?: string;
}
export declare function ReviewsFromJSON(json: any): Reviews;
export declare function ReviewsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reviews;
export declare function ReviewsToJSON(value?: Reviews | null): any;
