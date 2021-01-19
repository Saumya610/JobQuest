import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  bgImage="https://img.freepik.com/free-vector/office-background-design_52683-44168.jpg?size=626&ext=jpg";
  imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5AR1xAj1obBveZmd3FaniHpa_LTbTYzyPw&usqp=CAU";
  constructor(private ro:Router) { 
    // var parent = document.getElementsByTagName("HomeComponent");
    // var child = document.getElementsByTagName("LoginComponent");
    // parent[0].removeChild(child[0]);
  }
  
  control = new FormControl();
  desigs: string[] = ['Business Analyst','Freelancer','Java Developer','Web Developer','More..'];
  designations: Observable<string[]>;
  locs: string[] = ['New Delhi','Mumbai','Bangalore','Chennai','More..'];
  locations: Observable<string[]>;
  exps: string[] = ['Entry Level','Associate','Mid-Senior Level','Director','Internship'];
  experiences: Observable<string[]>;

  ngOnDestroy(){

  }
  ngOnInit() {
    this.designations = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.locations = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value))
    );
    this.experiences = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.desigs.filter(desig => this._normalizeValue(desig).includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.locs.filter(loc => this._normalizeValue(loc).includes(filterValue));
  }
  private _filter2(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.exps.filter(exp => this._normalizeValue(exp).includes(filterValue));
  }
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  
  
  
}
