import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiggleCssComponent } from './wiggle-css.component';

describe('WiggleCssComponent', () => {
  let component: WiggleCssComponent;
  let fixture: ComponentFixture<WiggleCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiggleCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiggleCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
