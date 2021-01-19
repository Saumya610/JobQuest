import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekafterloginComponent } from './jobseekafterlogin.component';

describe('JobseekafterloginComponent', () => {
  let component: JobseekafterloginComponent;
  let fixture: ComponentFixture<JobseekafterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekafterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
