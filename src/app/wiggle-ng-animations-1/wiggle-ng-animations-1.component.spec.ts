import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiggleNgAnimations1Component } from './wiggle-ng-animations-1.component';

describe('WiggleNgAnimations1Component', () => {
  let component: WiggleNgAnimations1Component;
  let fixture: ComponentFixture<WiggleNgAnimations1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiggleNgAnimations1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiggleNgAnimations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
