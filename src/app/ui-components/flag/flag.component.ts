import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'il-flag',
    styleUrls: ['./flag.component.scss'],
    templateUrl: './flag.component.html'
})
export class ILFlagComponent implements OnChanges {

    @Input() country: string;
    @HostBinding('class') classes = 'il-flag';

    public src: string;

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.country) {
            this.src = "/assets/flags/4x3/" + this.country.toLowerCase() + ".svg";
        }
    }

}
