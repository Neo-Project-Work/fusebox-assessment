import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicHistoryComponent } from './panic-history.component';

describe('PanicHistoryComponent', () => {
  let component: PanicHistoryComponent;
  let fixture: ComponentFixture<PanicHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanicHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
