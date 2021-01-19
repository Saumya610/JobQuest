import { Component, OnInit,ChangeDetectorRef,OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Seekerlogin} from '../seekerlogin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jobseekafterlogin',
  templateUrl: './jobseekafterlogin.component.html',
  styleUrls: ['./jobseekafterlogin.component.css']
})
export class JobseekafterloginComponent implements OnInit,OnDestroy {
  s:Seekerlogin;
  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;
  constructor(private r:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.s=new Seekerlogin();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  gotohome(){
    this.r.navigate(['/home','Home']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit()
  {
  }
  

  logout()
  {

  }
  xyz()
  {
    this.r.navigate(['/job-listing','list-of-jobs']);
  }
  jkl()
  {
    this.r.navigate(['/jobs-saved','applied-saved']);
  }
}
