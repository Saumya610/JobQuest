import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Joblistings} from '../joblistings';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ServiceforjsService} from '../serviceforjs.service';

@Component({
  selector: 'app-savedjobs',
  templateUrl: './savedjobs.component.html',
  styleUrls: ['./savedjobs.component.css']
})
export class SavedjobsComponent implements OnInit {
  dataRow:Joblistings;
  displayedColumns: string[]=['id', 'role', 'location', 'exp','comp'];
  datasource = new MatTableDataSource();
  constructor(private x:ActivatedRoute,private y:ServiceforjsService) { }

  ngOnInit() {
    // this.x.queryParams.subscribe(params=>{
    //   console.log(params);
    //   this.datasource.data=JSON.parse(params.data);
    //   //this.dataRow=JSON.parse(params.data);
    // });

    const queryParams=this.x.snapshot['queryParams'];
    console.log(queryParams['params']);
    this.datasource.data=JSON.parse(queryParams.data);
  }

}
