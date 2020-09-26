import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeIndexComponent } from './resume-index.component';

describe('ResumeIndexComponent', () => {
  let component: ResumeIndexComponent;
  let fixture: ComponentFixture<ResumeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
