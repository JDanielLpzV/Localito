import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalofertasComponent } from './modalofertas.component';

describe('ModalofertasComponent', () => {
  let component: ModalofertasComponent;
  let fixture: ComponentFixture<ModalofertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalofertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
