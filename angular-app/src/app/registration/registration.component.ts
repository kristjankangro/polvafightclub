import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-registration',
    imports: [
        NgIf
    ],
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.less'
})
export class RegistrationComponent {

    @Output('updateFormVisible)') updateFormVisible = new EventEmitter<boolean>();

    btnClick() {
        this.updateFormVisible.emit(false);
    }
}
