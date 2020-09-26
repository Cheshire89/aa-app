import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeIntroComponent } from './resume-intro.component';

describe('ResumeIntroComponent', () => {
  let component: ResumeIntroComponent;
  let fixture: ComponentFixture<ResumeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
