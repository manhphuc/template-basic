import ValidatorYivic from "./Validation";
import { IS_REQUIRE, IS_EMAIL, IS_LENGTH, IS_CONFIRM } from "./_constantsValidate";

ValidatorYivic( {
    form: '#form-1',
    formGroupSelector: '.yivic-formValidation__form--formGroup',
    errorSelector: '.form-message',
    rules: [
        IS_REQUIRE( '#fullname', 'Vui lòng nhập tên đầy đủ của bạn' ),
        IS_EMAIL( '#email' ),
        IS_REQUIRE( '#avatar' ),
        IS_LENGTH( '#password', 6 ),
        IS_REQUIRE( 'input[name="gender"]' ),
        IS_REQUIRE( '#province' ),
        IS_REQUIRE( '#password_confirmation' ),
        IS_CONFIRM( '#password_confirmation', () => {
            return document.querySelector( '#form-1 #password' ).value;
        }, 'Mật khẩu nhập lại không chính xác' ),
    ],
    onSubmit: data => {
        // Call API
        console.log( data )
    }
} );

ValidatorYivic( {
    form: '#form-2',
    formGroupSelector: '.yivic-formValidation__form--formGroup',
    errorSelector: '.form-message',
    rules: [
        IS_EMAIL( '#email' ),
        IS_LENGTH( '#password', 6 ),
    ],
    onSubmit: data => {
        // Call API
        console.log( data )
    }
} );