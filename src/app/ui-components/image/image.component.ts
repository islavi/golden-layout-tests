import { Component, Input } from '@angular/core';

export enum ILImageType {
    ROUNDED,
    ROUND_CORNERS
}

@Component({
    selector: 'il-image',
    styleUrls: ['./image.component.scss'],
    templateUrl: './image.component.html'
})
export class ILImageComponent {

    @Input() src: string;
    @Input() type: ILImageType;

    public class: string;

    constructor() {
        this.class = "rounded-corners";
        if (this.type === ILImageType.ROUNDED) {
            this.class = "rounded";
        }
    }

}
