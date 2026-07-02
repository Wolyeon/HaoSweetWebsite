import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeInformation } from './cakeinformation';
import { Observable, shareReplay } from 'rxjs';
import { OrderInformation } from './orderinformation';

@Injectable({
    providedIn: 'root'
})
export class WebServices{
    private apiURL = "https://147.224.39.239:8000";
    private cakes?: Observable<CakeInformation[]>;
    private tarts?: Observable<CakeInformation[]>;
    private others?: Observable<CakeInformation[]>;
    private all?: Observable<CakeInformation[]>;

    constructor(private http: HttpClient) {}
     
    // We use shareReplay to cache the value from the API call so we don't over burden the server.
    // shareReplay param is to set how many values to remember/ how many values to buffer.
    public get_cakes(): Observable<any>{
        if (this.cakes == undefined){
            this.cakes = this.http.get<CakeInformation[]>(this.apiURL+"/cakes").pipe(shareReplay(1));
        }
        return this.cakes
    }

    public get_tarts(): Observable<any>{
        if (this.tarts == undefined){
            this.tarts = this.http.get<CakeInformation[]>(this.apiURL+"/tarts").pipe(shareReplay(1));
        }
        return this.tarts
    }

    public get_others(): Observable<any>{
        if (this.others == undefined){
            this.others = this.http.get<CakeInformation[]>(this.apiURL+"/others").pipe(shareReplay(1));
        }
        return this.others;
    }

    public get_allproducts(): Observable<CakeInformation[]>{
        if (this.all == undefined){
            this.all = this.http.get<CakeInformation[]>(this.apiURL+"/allcakes").pipe(shareReplay(1));
        }
        return this.all;
    }

    public get_cakebyid(productId: string): Observable<CakeInformation>{
        return this.http.get<CakeInformation>(this.apiURL+"/cakes/"+productId)
    }

    public post_order(orderInformation: OrderInformation){
        this.http.post(this.apiURL+"/order", orderInformation);
    }
}

