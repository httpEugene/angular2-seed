import {Component} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';

import {PasswordValidators} from './passwordValidators';

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password-form/change-password-form.component.html'
})
export class ChangePasswordFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
    }

    changePassword(){
        const oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '1234')
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}
