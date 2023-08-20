export function validator (data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            // содержание пустых полей
            case 'isRequired': {
                if(typeof data === 'boolean') {
                    statusValidate = !data
                } else {
                    statusValidate = data.trim() === ''
                }
                break;
            }
            // проверка формата test@test.test
            case 'isEmail': {
                const emailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
                break;
            }
            // содержание заглавных символов
            case 'isCapitalSymbol' : {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break;
            }
            // содержание чисел 0 - 9
            case 'isContainDigit' : {
                const digitRegExp = /\d+/g
                statusValidate = !digitRegExp.test(data)
                break;
            }
            // минимальное количество символов от значения config.value
            case 'min': {
                statusValidate = data.length < config.value
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}