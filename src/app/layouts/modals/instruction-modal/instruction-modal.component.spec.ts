import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionModalComponent } from './instruction-modal.component';

describe('InstructionModalComponent', () => {
  let component: InstructionModalComponent;
  let fixture: ComponentFixture<InstructionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
