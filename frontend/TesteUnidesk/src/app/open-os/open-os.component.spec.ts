import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOSComponent } from './open-os.component';

describe('OpenOSComponent', () => {
  let component: OpenOSComponent;
  let fixture: ComponentFixture<OpenOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
