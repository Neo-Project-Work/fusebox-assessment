import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPanicComponent } from './send-panic.component';

describe('SendPanicComponent', () => {
  let component: SendPanicComponent;
  let fixture: ComponentFixture<SendPanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendPanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
