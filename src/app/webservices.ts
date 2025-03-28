import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeInformation } from './cakeinformation';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebServices{
    private apiURL = "";

    constructor(private http: HttpClient) {}
    
    public get_cakes(): Observable<any>{
        return this.http.get(this.apiURL+"cakes")
    }

    public get_tarts(): Observable<any>{
        return this.http.get(this.apiURL+"tarts")
    }

    public get_others(): Observable<any>{
        return this.http.get(this.apiURL+"others")
    }

    public get_cakebyname(cakename: string): Observable<CakeInformation>{
        return this.http.get<CakeInformation>(this.apiURL+cakename)
    }   
}

