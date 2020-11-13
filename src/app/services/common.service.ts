import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: "root"
})
export class CommonService {
    constructor(private http: HttpClient) {
    }

    apiUrl = "/api";

    getEntity(pathName: string) {
        return this.http.get(this.apiUrl + pathName)
    }

    addEntity(entity: any, pathName: string) {
        return this.http.post(this.apiUrl + pathName, entity );
    }
}