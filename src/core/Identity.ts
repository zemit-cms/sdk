import store from 'store2';
import {AxiosResponse} from 'axios';
import {nestedArrayOr} from "../types";
import {DataInterface, AuthRefreshViewInterface, AuthGetViewInterface} from "../interfaces";

export class Identity {

    /**
     * Represents the interface for the authentication get view.
     *
     * @typedef {AuthGetViewInterface | null} identity
     * @description The `identity` variable is used to hold an instance of the `AuthGetViewInterface` that represents
     * the authentication get view. Alternatively, it can be assigned a value of `null` if no view is available.
     */
    static identity: AuthGetViewInterface | null = null;

    /**
     * Represents a Promise that resolves to an AxiosResponse object containing data of type DataInterface<AuthRefreshViewInterface>.
     *
     * @typedef {Promise<AxiosResponse<DataInterface<AuthRefreshViewInterface>>>} RefreshResponse
     * @memberof module:project
     * @property {null} null - Represents the initial value of the RefreshResponse variable before it is assigned a value.
     */
    static refreshResponse: Promise<AxiosResponse<DataInterface<AuthRefreshViewInterface>>> | null = null;

    /**
     * Sets the identity for the current local storage.
     *
     * @param {AuthGetViewInterface|null} identity - The identity to be set.
     */
    static setIdentity(identity: AuthGetViewInterface) {
        this.identity = identity;
        store.set('identity', this.identity);
    }

    /**
     * Gets the identity from the local storage.
     *
     * @return {AuthGetViewInterface|null} The identity stored in the local storage or undefined if not found.
     */
    static getIdentity(): AuthGetViewInterface | null {
        if (!this.identity) {
            this.identity = store.get('identity', null);
        }
        return this.identity;
    }

    /**
     * Removes the identity from the local storage.
     *
     * @return {void}
     */
    static removeIdentity(): void {
        this.identity = null;
        store.remove('identity');
    }

    /**
     * Checks if the user is logged in.
     *
     * @returns {boolean} Returns true if the user is logged in, otherwise returns false.
     */
    static isLoggedIn(): boolean {
        return !!this.getIdentity()?.loggedIn;
    }

    /**
     * Checks if the user has any of the specified roles.
     *
     * @param {string[]} roleList - The list of roles to check against.
     * @param {boolean} [or=false] - Determines whether the user should have at least one matching role (true), or if the user should have all matching roles (false).
     * @param {boolean} [_inherit=true] - Determines whether the user's inherited roles should be considered in the check (true), or if only the user's directly assigned roles should be considered
     * (false).
     * @returns {boolean} - Returns true if the user has any matching role(s) based on the specified criteria, otherwise returns false.
     */
    static hasRole(roleList: nestedArrayOr<string> = [], or: boolean = false, _inherit: boolean = true): boolean {
        return this.has(roleList, Object.keys(this.identity?.roleList || {}), or);
    }

    /**
     * Checks if any elements in an array of needles are present in a haystack array.
     *
     * @param {nestedArrayOr<string>} needles - An array or nested array of strings to search for in the haystack.
     * @param {Array<string>} haystack - The array of strings to search in.
     * @param {boolean} or - Specifies whether the search should use logical "OR" or logical "AND".
     * @returns {boolean} - True if any needles are found in the haystack according to the specified logic, otherwise false.
     */
    static has(needles: nestedArrayOr<string> = [], haystack: Array<string> = [], or = false): boolean {
        if (!Array.isArray(needles)) {
            needles = [needles];
        }

        const result: Array<boolean> = [];
        for (const needle of [...needles]) {
            if (Array.isArray(needle)) {
                result.push(this.has(needle, haystack, !or));
            } else {
                result.push(haystack.includes(needle));
            }
        }

        return or ? !result.includes(false) : result.includes(true);
    }

    static hasPermission() {
        // @todo
    }

}
