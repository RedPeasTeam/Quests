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
import * as runtime from '../runtime';
import { Genre, Quests, Reviews } from '../models';
export interface GenreRequest {
    name?: string;
}
export interface MainRequest {
    parametres?: string;
}
export interface MapRequest {
    parametres?: string;
}
export interface ReviewsRequest {
    parametres?: string;
}
/**
 *
 */
export declare class DefaultApi extends runtime.BaseAPI {
    /**
     * Returns \'Hello\' to the caller
     */
    genreRaw(requestParameters: GenreRequest): Promise<runtime.ApiResponse<Array<Genre>>>;
    /**
     * Returns \'Hello\' to the caller
     */
    genre(requestParameters: GenreRequest): Promise<Array<Genre>>;
    /**
     * Returns parametres of Quests
     */
    mainRaw(requestParameters: MainRequest): Promise<runtime.ApiResponse<Array<Quests>>>;
    /**
     * Returns parametres of Quests
     */
    main(requestParameters: MainRequest): Promise<Array<Quests>>;
    /**
     * Returns some info about map
     */
    mapRaw(requestParameters: MapRequest): Promise<runtime.ApiResponse<Array<any>>>;
    /**
     * Returns some info about map
     */
    map(requestParameters: MapRequest): Promise<Array<any>>;
    /**
     * Returns some info about review
     */
    reviewsRaw(requestParameters: ReviewsRequest): Promise<runtime.ApiResponse<Array<Reviews>>>;
    /**
     * Returns some info about review
     */
    reviews(requestParameters: ReviewsRequest): Promise<Array<Reviews>>;
}
