import { Component } from '@angular/core';
import { GoldenLayoutService } from 'core';

@Component({
    selector: `app-root`,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // test delayed component construction
    // constructor(private srv: GoldenLayoutService) {
    //     setTimeout(() => {
    //         srv.createNewComponent(srv.getRegisteredComponents()[1]);
    //     }, 1000);
    // }

}

