import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeInformation } from './cakeinformation';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebServices{
    private apiURL = "http://127.0.0.1:8000";

    constructor(private http: HttpClient) {}
    
    public get_cakes(): Observable<any>{
        return this.http.get<CakeInformation[]>(this.apiURL+"/cakes")
    }

    public get_tarts(): Observable<any>{
        return this.http.get<CakeInformation[]>(this.apiURL+"/tarts")
    }

    public get_others(): Observable<any>{
        return this.http.get<CakeInformation[]>(this.apiURL+"/others")
    }

    public get_cakebyid(productId: string): Observable<CakeInformation>{
        return this.http.get<CakeInformation>(this.apiURL+"/cakes/"+productId)
    }
}

