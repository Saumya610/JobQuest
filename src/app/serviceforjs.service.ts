import {Injectable, NgModule} from '@angular/core';
import {Joblistings} from './joblistings';
import {Login} from './login';
import {Jobseekerapp} from './jobseekerapp';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceforjsService {
  subject = new Subject<any>()

  constructor(private x:HttpClient) { }

  public callws() 
  {
    let url="http://localhost:7001/selectall";
    return this.x.get<Joblistings[]>(url);
  }

  callLogin(r:Login):Observable<Login>
  {
    let url:string="http://localhost:7001/login";
    return this.x.post<Login>(url,r);
  }
  
  callappform(j:Jobseekerapp):Observable<Jobseekerapp>
  {
    let url:string="http://localhost:7001/appform";
    return this.x.post<Jobseekerapp>(url,j);
  }

  uploadfile(k:any):Observable<Jobseekerapp>
  {
    let url:string="http://localhost:7001/upload";
    return this.x.post<Jobseekerapp>(url,k);
  }

  // getimage(k:Jobseekerapp):Observable<Jobseekerapp>
  // {
  //    return
  // }

}
