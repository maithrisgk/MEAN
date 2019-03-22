import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Form} from '../models/form';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { defineBase } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  
  
apiurl="http://localhost:4000/form";
  constructor(private http:HttpClient) { }

getData():Observable<Form[]>{
  return this.http.get<Form[]>(this.apiurl);
}

addData(flow:Number,pressure:Number,date:Date):Observable<Form>{
  const data={
    
    flow,
    pressure,
    date:new Date().toLocaleString()
  };
  return this.http.post<Form>(this.apiurl,data);
}

getChart(){
  return this.http.get(this.apiurl).pipe(map(result=>result));
}
}
