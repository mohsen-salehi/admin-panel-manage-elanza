import ToastComponent from "../components/public/toastComponent";
import messages from "../langs/fa/messages";


class ExceptionProvider {
    static handle(exception, statusCode) {
        switch (statusCode) {
            case 0 :
                return ExceptionProvider.origin(exception)
            case 400 :
                return ExceptionProvider.badRequest(exception)
            case 401 :
                return ExceptionProvider.unauthorized(exception)
            case 422 :
                return ExceptionProvider.validation(exception)
            case 404 :
                return ExceptionProvider.notFound()
            case 405 :
                return ExceptionProvider.notAllowed(exception)
            case 403 :
                return ExceptionProvider.accessDenied(exception)
            case 429 :
                return ExceptionProvider.tooManyRequests(exception)
            case 500 :
                return ExceptionProvider.serverError(exception)
            default :
                return ExceptionProvider.general()
        }
    }

    static validation(exception) {
        let validationErrors = exception?.response?.data?.messages
        let messages = []

        if (validationErrors) {

            messages.push({
                message: validationErrors
            })

            ToastComponent(validationErrors, "error")

        }
        return messages
    }



    static badRequest() {
        ToastComponent(messages.api.badRequest , "error")
    }
    static unauthorized() {
        ToastComponent(messages.api.unauthorized , "error")
    }
    static notFound() {
        ToastComponent(messages.api.notFound , 'error')
    }

    static notAllowed() {
        ToastComponent(messages.api.notAllowed , 'error')
    }

    static accessDenied() {
        ToastComponent(messages.api.accessDenied , 'error')
    }

    static tooManyRequests() {
        ToastComponent(messages.api.tooManyRequests , "error")
    }

    static serverError() {
        ToastComponent(messages.api.serverError , 'error')
    }

    static general() {
        ToastComponent(messages.api.general , 'error')
    }
    static origin(){
        ToastComponent("خطای سرور " , "error")
    }

}

Object.freeze(ExceptionProvider)

export default ExceptionProvider