import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAboutComponent } from './resume-about.component';

describe('ResumeAboutComponent', () => {
  let component: ResumeAboutComponent;
  let fixture: ComponentFixture<ResumeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
