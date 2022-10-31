import { AbstractControl } from "@angular/forms";

export function passwordMatch(password:string, confirmpass:string){
    return function(form:AbstractControl){
        const passwordValue = form.get(password)?.value;
        const confirmPassValue = form.get(confirmpass)?.value;

        if(passwordValue === confirmPassValue){
            return null;
        }
        return {passwordMismatchError : true}
    }
    
}