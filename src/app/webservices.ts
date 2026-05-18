import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeInformation } from './cakeinformation';
import { Observable } from 'rxjs';
import { OrderInformation } from './orderinformation';

@Injectable({
    providedIn: 'root'
})
export class WebServices{
    private apiURL = "http://127.0.0.1:8000";
    cakes?: Observable<CakeInformation[]>;
    tarts?: Observable<CakeInformation[]>;
    others?: Observable<CakeInformation[]>;
    all?: Observable<CakeInformation[]>;

    constructor(private http: HttpClient) {}
     
    public get_cakes(): Observable<any>{
        if (this.cakes == undefined){
            this.cakes = this.http.get<CakeInformation[]>(this.apiURL+"/cakes")
        }
        return this.cakes
    }

    public get_tarts(): Observable<any>{
        if (this.tarts == undefined){
            this.tarts = this.http.get<CakeInformation[]>(this.apiURL+"/tarts")
        }
        return this.tarts
    }

    public get_others(): Observable<any>{
        if (this.others == undefined){
            this.others = this.http.get<CakeInformation[]>(this.apiURL+"/others")
        }
        return this.others;
    }

    public get_allproducts(): Observable<CakeInformation[]>{
        if (this.all == undefined){
            this.all = this.http.get<CakeInformation[]>(this.apiURL+"/allcakes")
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

