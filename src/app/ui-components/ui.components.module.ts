import { NgModule } from '@angular/core';
import { ILImageComponent } from './image/image.component';
import { ILLineComponent } from './line/line.component';
import { ILFlagComponent } from './flag/flag.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ILImageComponent,
    ILLineComponent,
    ILFlagComponent,
    CardComponent
  ],
  declarations: [
    ILImageComponent,
    ILLineComponent,
    ILFlagComponent,
    CardComponent
  ]
})
export class UIComponentsModule { }
