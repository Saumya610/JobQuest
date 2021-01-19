import { Component, OnInit } from '@angular/core';
import {Jobseekerapp} from '../jobseekerapp';

interface typ {
  value: number;
  viewValue: string;
}

interface mod {
  value: number;
  viewValue: string;
}

interface choice {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-jobseekerapp',
  templateUrl: './jobseekerapp.component.html',
  styleUrls: ['./jobseekerapp.component.css']
})
export class JobseekerappComponent implements OnInit {
s:Jobseekerapp;
types:typ[]=[{value: 0, viewValue: 'Full Time'},
{value: 1, viewValue: 'Part Time'},
{value: 2, viewValue: 'Internship'},
{value: 3, viewValue: 'Contract'}
];

modes:mod[]=[{value: 0, viewValue: 'In-Office'},
{value: 1, viewValue: 'Remote'},
{value: 2, viewValue: 'Hybrid'}
];

choices:choice[]=[{value: 0, viewValue: 'Yes'},
{value: 1, viewValue: 'No'}
];

constructor() 
{
  this.s= new Jobseekerapp();
}

  ngOnInit(): void {
  }
submit()
{

}
}
