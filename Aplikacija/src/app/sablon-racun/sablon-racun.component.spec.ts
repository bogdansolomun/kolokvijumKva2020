import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablonRacunComponent } from './sablon-racun.component';

describe('SablonRacunComponent', () => {
  let component: SablonRacunComponent;
  let fixture: ComponentFixture<SablonRacunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablonRacunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablonRacunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
