import { FormGroup } from "@angular/forms";

const baseUrl = "http://localhost:8080/api"
export default baseUrl;

export const getErrors = ( formGroup : FormGroup ) : { [key: string]: any } => {
    const errors: { [key: string]: any } = {};

    Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.get(key);
        if (control && control.errors) {
        errors[key] = control.errors;
        }
    });

    return errors;
}