import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillScramplerComponent } from './skill-scrampler.component';

describe('SkillScramplerComponent', () => {
  let component: SkillScramplerComponent;
  let fixture: ComponentFixture<SkillScramplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillScramplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillScramplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
