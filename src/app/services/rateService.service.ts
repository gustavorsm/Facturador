import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const serverIp = 'localhost';
const port = '8080'

@Injectable()
export class RateService {
    constructor(private httpClient: HttpClient) { }

    public post(url: string, data: any) {
        let postData = JSON.stringify(data)
        let HEAD = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.httpClient.post("http://" + serverIp + ":" + port + url, postData, HEAD)
            .map((response: any) => {
                return response;
            })
            .catch(handleError);
    }
}

function handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
}