import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOSComponent } from './close-os.component';

describe('CloseOSComponent', () => {
  let component: CloseOSComponent;
  let fixture: ComponentFixture<CloseOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
