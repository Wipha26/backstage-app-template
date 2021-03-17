/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntUser,
    EntUserFromJSON,
    EntUserFromJSONTyped,
    EntUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntGenderEdges
 */
export interface EntGenderEdges {
    /**
     * Users holds the value of the users edge.
     * @type {Array<EntUser>}
     * @memberof EntGenderEdges
     */
    users?: Array<EntUser>;
}

export function EntGenderEdgesFromJSON(json: any): EntGenderEdges {
    return EntGenderEdgesFromJSONTyped(json, false);
}

export function EntGenderEdgesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntGenderEdges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(EntUserFromJSON)),
    };
}

export function EntGenderEdgesToJSON(value?: EntGenderEdges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(EntUserToJSON)),
    };
}


