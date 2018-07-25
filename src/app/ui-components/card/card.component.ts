import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
})
export class CardComponent {

    @Input() user: any;

    constructor() { }

}
