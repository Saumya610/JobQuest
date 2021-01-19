import { Component, OnInit, ViewChild } from '@angular/core';
import {ServiceforjsService} from '../serviceforjs.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {Joblistings} from '../joblistings';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Router} from '@angular/router';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements OnInit {
  // def:String="who cares";
  displayedColumns: string[]=['select','id', 'role', 'location', 'exp','comp'];
  obj:Joblistings[];
    
datasource = new MatTableDataSource();
selection = new SelectionModel(true,[]);

@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  constructor(private x:ActivatedRoute, private y:ServiceforjsService, private ro:Router) 
  { 
    //this.obj=new Joblistings();
    
  }  
  
  ngOnInit()
  {
    
    return this.y.callws().subscribe( res => {
        this.datasource.data = res;
      });
      this.x.snapshot.params.abc;
        
  }
  
  apply()
  {
    let data:any= this.selection.selected;
    this.y.subject.next(this.selection.selected);
    //console.log(this.selection.selected);
     this.ro.navigate(['/apply-to-job','applied'],{
       queryParams:{data:JSON.stringify(data)}
       //,skipLocationChange:true
    });
    
  }


save()
{
  let data:any= this.selection.selected;
    this.y.subject.next(this.selection.selected);
    //console.log(this.selection.selected);
     this.ro.navigate(['/jobs-saved','saved'],{
       queryParams:{data:JSON.stringify(data)}
       //,skipLocationChange:true
      });
}

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.paginator._intl.itemsPerPageLabel='Job Openings per page:';
    //this.datasource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datasource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Joblistings): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  private selectRow($event, datasource) {
    // console.log($event.checked);
    if (this.selection.selected) {
      console.log(datasource);
      
    }
  }
}
