import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablonBankaComponent } from './sablon-banka.component';

describe('SablonBankaComponent', () => {
  let component: SablonBankaComponent;
  let fixture: ComponentFixture<SablonBankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablonBankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablonBankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
