import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabtecnicasComponent } from './habtecnicas.component';

describe('HabtecnicasComponent', () => {
  let component: HabtecnicasComponent;
  let fixture: ComponentFixture<HabtecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabtecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabtecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
