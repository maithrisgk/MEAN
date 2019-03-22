import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject:Subject <any> = new Subject <any> ();
  constructor() { }

  setMessage(msg:string):void{
    this.subject.next({msg});
  }

  getMessage():Observable <any> {
    return this.subject.asObservable();
  }

}
