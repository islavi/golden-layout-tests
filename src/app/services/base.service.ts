import { Injectable } from '@angular/core';
import { Const } from '@app/const';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {

    loading: boolean;
    fullUserToken: string;
    httpOptions: any;

    constructor(protected httpClient: HttpClient) {
        this.loading = false;
        this.fullUserToken = Const.userTokenPrefix + Const.userToken;
        this.initHttpOptions();
    }

    private initHttpOptions = () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': this.fullUserToken
        };
        this.httpOptions = new HttpHeaders(header);
    }

}
