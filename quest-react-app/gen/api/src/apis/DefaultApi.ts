/* tslint:disable */
/* eslint-disable */
/**
 * Quest API service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Genre,
    GenreFromJSON,
    GenreToJSON,
} from '../models';

export interface GenreRequest {
    name?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns \'Hello\' to the caller
     */
    async genreRaw(requestParameters: GenreRequest): Promise<runtime.ApiResponse<Array<Genre>>> {
        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/genre`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GenreFromJSON));
    }

    /**
     * Returns \'Hello\' to the caller
     */
    async genre(requestParameters: GenreRequest): Promise<Array<Genre>> {
        const response = await this.genreRaw(requestParameters);
        return await response.value();
    }

}