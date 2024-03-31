import moment from 'moment';
import * as IpAddress from 'ip-address';

export type EmailOptions = {
    allowLocalDomains?: boolean;
    allowIPv4?: boolean;
    allowIPv6?: boolean;
};

export class Rules {
    static empty(value: string | number | null | undefined): boolean {
        return typeof value === 'undefined' || value === null || value === '' || value === 0 || !value;
    }

    static required(value: Array<any> | string | null = ''): boolean {
        return ((Array.isArray(value) && value.length > 0) ||
            (typeof value === 'string' && !!value) ||
            (typeof value === 'object' && !Array.isArray(value) && value !== null) || false);
    }

    static ipv4(ipv4: string) {
        try {
            return new IpAddress.Address4(ipv4).isCorrect();
        } catch (e) {
            return false;
        }
    }

    static ipv6(ipv6: string) {
        try {
            return new IpAddress.Address6(ipv6).isCorrect();
        } catch (e) {
            return false;
        }
    }

    static email(email: string, options: EmailOptions = {}): boolean {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(String(email).toLowerCase())) {
            // Validate local domain
            const domain = email.split('@')[1];
            if (options.allowLocalDomains) {
                return true;
            } else {
                const tld = domain.split('.')[1] || '';
                // TLDs must have at least 2 characters to be valid
                return tld.length >= 2;
            }
        }
        return false;
    }

    static isLength(value = '', length = 8, allowEmpty = false): boolean {
        return (!value && allowEmpty) || (value || '').length === length;
    }

    static minLength(value = '', min = 8, allowEmpty = false): boolean {
        return (!value && allowEmpty) || (value || '').length >= min;
    }

    static maxLength(value = '', max = 16): boolean {
        return (value || '').length <= max;
    }

    static betweenLength(value = '', min = 0, max = 0, allowEmpty = false) {
        return this.minLength(value, min, allowEmpty) && this.maxLength(value, max);
    }

    static isBetween(value = 0, min: number | null = null, max: number | null = null) {
        return !(
            (min !== null && max !== null && (value < min || value > max)) ||
            (min !== null && value < min) ||
            (max !== null && value > max)
        );
    }

    static isBetweenDates(value = new Date(), min: Date | null = null, max: Date | null = null) {
        return !(
            (min !== null && max !== null && (value < min || value > max)) ||
            (min !== null && value < min) ||
            (max !== null && value > max)
        );
    }

    static identical(compare = '', value = ''): boolean {
        return value === compare;
    }

    static digit(value: string | number = ''): boolean {
        return Number.isInteger(Number(value)) && value !== null;
    }

    static date(value: string, format = 'YYYY-MM-DD'): boolean {
        const v = moment(value, format);
        return v.isValid();
    }

    static boolean(value: boolean | string | number = ''): boolean {
        return typeof value === 'boolean' || value === '1' || value === '0' || value === 1 || value === 0;
    }

    static includes(value: string | number, domain: Array<string | number>): boolean {
        return domain.includes(value);
    }

    static excludes(value: string | number, domain: Array<string | number>): boolean {
        return !domain.includes(value);
    }

    // The password is at least 8 characters long (?=.{8,}).
    // The password has at least one uppercase letter (?=.*[A-Z]).
    // The password has at least one lowercase letter (?=.*[a-z]).
    // The password has at least one digit (?=.*[0-9]).
    // The password has at least one special character ([^A-Za-z0-9]).
    // Strong: The password has to meet all the requirements.
    static strongPassword(value: string) {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
    }

    // If the password is at least six characters long and meets all the other requirements, or has no digit but meets the rest of the requirements.
    static mediumPassword(value: string) {
        return /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/.test(
            value,
        );
    }

    static password(value: string) {
        return (
            this.betweenLength(value, 8, 36) && this.hasLowerCase(value) && this.hasUpperCase(value) && this.hasDigit(value)
        );
    }

    static hasLowerCase(value: any) {
        return typeof value === 'string' ? /[a-z]/.test(value) : false;
    }

    static hasUpperCase(value: any) {
        return typeof value === 'string' ? /[A-Z]/.test(value) : false;
    }

    static hasDigit(value: any) {
        return typeof value === 'string' ? /[0-9]/.test(value) : typeof value === 'number';
    }

    static isPositive(value: number): boolean {
        return value > 0;
    }

    static isNegative(value: number): boolean {
        return value < 0;
    }

    static isFuture(value: Date): boolean {
        const today = new Date();
        return value > today;
    }

    /**
     * Checks whether a string contains any special characters.
     *
     * This method defines "special characters" as the following:
     * ! @ # $ % ^ & * ( ) - _ = + [ ] { } ; : , . < > / ? \ | `
     *
     * The string is tested against a regular expression that matches these characters.
     * If the string is empty, this method returns the value of the `allowEmpty` parameter.
     *
     * @param {string} value - The string to be checked for special characters.
     * @param {boolean} [allowEmpty=false] - Optional. Specifies whether an empty string should be considered as containing a special character.
     * @returns {boolean} Returns `true` if the string contains a special character or is empty and `allowEmpty` is `true`. Otherwise, it returns `false`.
     *
     * @example
     * ```ts
     * const containsSpecial = MyClass.containsSpecialChar("Hello!");
     * console.log(containsSpecial); // Outputs: true
     * ```
     */
    static containsSpecialChar(value: string, allowEmpty = false): boolean {
        const specialCharRegex = /[!@#$%^&*()\-_=+\[\]{};:,.<>\/?\\|`]/;
        if (value.length === 0) {
            // If the string is empty, return the value of allowEmpty.
            return allowEmpty;
        } else {
            // Otherwise, check if the string contains a special character.
            return specialCharRegex.test(value);
        }
    }

    static alphanumeric(value: string, allowEmpty = true) {
        return /[^a-zA-Z0-9]/g.test(value) || (allowEmpty && Rules.empty(value));
    }

    static isUrl(value: string) {
        try {
            new URL(value);
            return true;
        } catch (err) {
            return false;
        }
    }

    static isHttpUrl(value: string) {
        try {
            const newUrl = new URL(value);
            return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
        } catch (err) {
            return false;
        }
    }

    static isRegex(value: string) {
        try {
            RegExp(value);
            return true;
        } catch (e) {
            return false;
        }
    }
}
