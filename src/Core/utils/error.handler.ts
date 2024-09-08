import {ZodError} from "zod";
import {MongoServerError} from "mongodb";
import {AxiosError} from "axios";

export const Errors = (error: any) => {
    console.log('error', error);

    const message = () => {

        let errorMessage = '';
        if (typeof error === 'string') return error;

        let errorReceived = error.keyPattern;

        if (error instanceof AxiosError) {
            errorMessage = error?.response?.data.message
        }
        else if(typeof errorReceived === 'object') {
            for (let key in errorReceived) {
                errorMessage = `${key} already exists.`;
            }
        }
        else {
            if (error instanceof ZodError) {
                errorMessage = error?.errors[0].message;
            }
            else if (error instanceof Error) {
                errorMessage = error?.message
            }
            else if (error instanceof TypeError) {
                errorMessage = error?.message;
            }
            else if (error instanceof MongoServerError) {
                errorMessage = error?.message;
            }
            else errorMessage = error?.message
        }
        return errorMessage;
    }

    return { message }
}
