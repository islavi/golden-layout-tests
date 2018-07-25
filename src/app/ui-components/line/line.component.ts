import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'il-line',
    styleUrls: ['./line.component.scss'],
    templateUrl: './line.component.html'
})
export class ILLineComponent {

    @Input() key: string;
    @Input() value: string;
    @Input() keyTooltip: string;
    @Input() valueTooltip: string;
    
    @HostBinding('class') classes = 'il-line';

    constructor() {
    }

}
