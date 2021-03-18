import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

export class AbstractPageComponent {

    public loading: boolean;
    
    protected routeData: any;
    protected params: any;
    protected queryParams: any;

    protected currentUser: any;

    constructor() {
    }

    protected initQueryParams(route: ActivatedRoute) {
        this.queryParams = route.snapshot.queryParams;
        this.params = route.snapshot.params;
        this.routeData = route.snapshot.data;
    }

}
