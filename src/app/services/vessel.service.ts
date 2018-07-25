import { Injectable } from '@angular/core';
import { Vessel, VesselsResponse } from '@models/vessel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { Const } from '@app/const';

@Injectable()
export class VesselService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getVessels(): Promise<VesselsResponse> {
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/vessels`;
      this.loading = true;

      this.httpClient.get(apiURL, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<any>res.body);
              }
          )
          .catch(err => {
              reject(err.error || 'Server error');
          });

    });
    return promise;
  }

  getVessel(vesselId: string): Promise<Vessel> {
    const promise = new Promise<any>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/vessels/${vesselId}`;
      this.loading = true;

      this.httpClient.get(apiURL, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<any>res.body[0]);
              }
          )
          .catch(err => {
              reject(err.error || 'Server error');
          });
    });
    return promise;
  }

}
