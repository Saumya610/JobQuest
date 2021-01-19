import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerappComponent } from './jobseekerapp.component';

describe('JobseekerappComponent', () => {
  let component: JobseekerappComponent;
  let fixture: ComponentFixture<JobseekerappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
