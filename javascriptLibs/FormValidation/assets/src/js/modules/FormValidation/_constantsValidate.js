/*
* isRequire
* @param: selector
* return: object
* */

import ValidatorYivic from "./Validation";

ValidatorYivic.isRequire = (selector, message ) => {
    return {
        selector: selector,
        test: ( value ) => {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

/*
* isEmail
* @param: selector
* return: object
* Principles of the Rules:
* 1. When there's an error -> Return message error
* 2. When valid -> no return message
* */
ValidatorYivic.isEmail = ( selector, message ) => {
    return {
        selector: selector,
        test: ( value ) => {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test( value ) ? undefined : message || 'Trường này phải là email!'
        }
    }
}

/*
* minLength
* @param: selector
* return: object
* */
ValidatorYivic.minLength = ( selector, min, message ) => {
    return {
        selector: selector,
        test: ( value ) => {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${ min } ký tự!`
        }
    }
}

/*
* isConfirmed
* @param: selector
* return: object
* */
ValidatorYivic.isConfirmed = ( selector, getConfirmValue, message ) => {
    return {
        selector: selector,
        test: ( value ) => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác!'
        }
    }
}

export const IS_REQUIRE = ValidatorYivic.isRequire;
export const IS_EMAIL   = ValidatorYivic.isEmail;
export const IS_LENGTH  = ValidatorYivic.minLength;
export const IS_CONFIRM = ValidatorYivic.isConfirmed;