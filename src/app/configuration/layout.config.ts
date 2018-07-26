import { GoldenLayoutConfiguration } from '@core/index';
import { VesselsMapComponent } from '@components/vessels-map/vessels-map.component';
import { UsersComponent } from '@components/users/users.component';

export const goldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [
        {
            component: VesselsMapComponent,
            componentName: 'vessels-map-page'
        },
        {
            component: UsersComponent,
            componentName: 'more-users-panel'
        },
        {
            component: UsersComponent,
            componentName: 'users-page'
        }
    ],
    defaultLayout: {
        content: [{
            type: 'row',
            content: [{
                type: 'component',
                title: 'Vessels map',
                componentName: 'vessels-map-page',
                componentState: { label: 'A' }
            }, {
                type: 'column',
                content: [{
                    type: 'component',
                    title: 'Users',
                    componentName: 'users-page',
                    componentState: { label: 'B' }
                }, {
                    type: 'component',
                    title: 'Something else',
                    componentName: 'more-users-panel',
                    componentState: { label: 'C' }
                }]
            }]
        }]
    }
};
