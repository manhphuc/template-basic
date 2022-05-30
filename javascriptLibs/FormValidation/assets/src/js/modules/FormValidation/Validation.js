/*
* ValidatorYivic object
* @param: options
* return: Void
* */
const ValidatorYivic = ( options ) => {

    const getParent = ( element, selector ) => {
        while ( element.parentElement ) {
            if ( element.parentElement.matches( selector ) ) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }

    let selectorRules = {}

    // Hàm thực hiện validate
    const validate = ( inputElement, rule ) => {

        let errorElement    = getParent( inputElement, options.formGroupSelector ).querySelector( options.errorSelector );
        let errorMessage;

        // Lấy ra các rules của selector
        let rules           = selectorRules[rule.selector]

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi dừng kiểm tra
        for ( let i = 0; i < rules.length; i++ ) {
            switch ( inputElement.type ) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector( rule.selector + ':checked' )
                    );
                    break
                default: errorMessage = rules[i]( inputElement.value );
            }
            if ( errorMessage ) break;
        }
        if( errorMessage ) {
            errorElement.innerText = errorMessage;
            getParent( inputElement, options.formGroupSelector ).classList.add( 'invalid' );
        } else {
            errorElement.innerText = '';
            getParent( inputElement, options.formGroupSelector ).classList.remove( 'invalid' );
        }

        return !errorMessage;
    }

    // Get the element of form need validate
    let formElement = document.querySelector( options.form );
    if ( formElement ) {
        // Khi submit form
        formElement.onsubmit = e => {
            e.preventDefault();

            let isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach( rule => {
                let inputElement = formElement.querySelector( rule.selector );
                let isValid = validate( inputElement, rule );
                if( !isValid ) {
                    isFormValid = false;
                }
            } );

            if ( isFormValid ) {
                // Trường hợp submit với javascript
                if ( typeof options.onSubmit === 'function' ) {
                    let enableInputs = formElement.querySelectorAll( '[name]' ); //'[name]:not( [disabled] )'
                    let formValues = Array.from( enableInputs ).reduce( ( values, input ) => {
                        switch ( input.type ) {
                            case 'radio':
                                values[input.name] = formElement.querySelector( 'input[name="' + input.name + '"]:checked' ).value;
                            case 'checkbox':
                                if( !input.matches( ':checked' ) ) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if( !Array.isArray( values[input.name] ) ) {
                                    values[input.name] = [];
                                }
                                values[input.name].push( input.value )
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        console.log(values)
                        return values
                    }, {} );
                    options.onSubmit( formValues )
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ... )
        options.rules.forEach( rule => {

            // Lưu lại các rules cho mỗi input
            if( Array.isArray( selectorRules[rule.selector] ) ) {
                selectorRules[rule.selector].push( rule.test );
            } else {
                selectorRules[rule.selector] = [ rule.test ]
            }

            let inputElements = formElement.querySelectorAll( rule.selector );

            Array.from( inputElements ).forEach( inputElement => {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = () => {
                    validate( inputElement, rule );
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    let errorElement = getParent( inputElement, options.formGroupSelector ).querySelector( options.errorSelector );
                    errorElement.innerText = '';
                    getParent( inputElement, options.formGroupSelector ).classList.remove( 'invalid' );
                }
            } );
        } );
        //console.log(selectorRules)
    }
}
export default ValidatorYivic;