import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiggleCssDirectiveComponent } from './wiggle-css-directive.component';

describe('WiggleCssDirectiveComponent', () => {
  let component: WiggleCssDirectiveComponent;
  let fixture: ComponentFixture<WiggleCssDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiggleCssDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiggleCssDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
