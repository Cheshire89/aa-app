import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSkillScramblerComponent } from './intro-skill-scrambler.component';

describe('IntroSkillScramblerComponent', () => {
  let component: IntroSkillScramblerComponent;
  let fixture: ComponentFixture<IntroSkillScramblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSkillScramblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSkillScramblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
