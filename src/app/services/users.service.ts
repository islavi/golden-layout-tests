
import { Injectable } from '@angular/core';
import { Const } from '@app/const';
import { User } from '@models/users.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable()
export class UsersService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getUsers = (): Promise<User[]> => {
    const promise = new Promise<User[]>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/users`;
      this.loading = true;

      this.httpClient.get(apiURL, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User[]>res.body);
              }
          )
          .catch(err => {
            this.loading = false;
            reject(err.error || 'Server error');
          });

    });
    return promise;
  }

  register = (user: User): Promise<User> => {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/auth/create`;
      this.loading = true;

      this.httpClient.post(apiURL, user, { observe: 'response' })
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User>res.body);
              }
          )
          .catch(err => {
            this.loading = false;
            reject(err.error || 'Server error');
          });

    });
    return promise;
  }

  updateUser = (user: User): Promise<User> => {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/users/update`;
      this.loading = true;

      this.httpClient.put(apiURL, user, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User>res.body);
              }
          )
          .catch(err => {
            this.loading = false;
            reject(err.error || 'Server error');
          });

    });
    return promise;
  }

  login = (username: string, password: string) => {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/users/login`;
      this.loading = true;

      this.httpClient.post(apiURL, { username: username, password: password })
      .toPromise()
      // .then(
      //   .pipe(map(user => {
      //       // login successful if there's a jwt token in the response
      //       if (user && user.token) {
      //           // store user details and jwt token in local storage to keep user logged in between page refreshes
      //           localStorage.setItem('currentUser', JSON.stringify(user));
      //       }

      //       return user;
      //   }));
        .then(
          res => { // Success
                this.loading = false;
                if (res) { // if (res && res.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(res));
                  resolve(<User>res);
                } else {

                }
            }
        )
        .catch(err => {
          this.loading = false;
          reject(err.error || 'Server error');
        });
      });
      return promise;
  }

  logout = () => {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

}

