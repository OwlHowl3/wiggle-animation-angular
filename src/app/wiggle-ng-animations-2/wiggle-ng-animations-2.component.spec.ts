import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiggleNgAnimations2Component } from './wiggle-ng-animations-2.component';

describe('WiggleNgAnimations2Component', () => {
  let component: WiggleNgAnimations2Component;
  let fixture: ComponentFixture<WiggleNgAnimations2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiggleNgAnimations2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiggleNgAnimations2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
