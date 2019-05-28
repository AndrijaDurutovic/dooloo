import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioneTehnologijeComponent } from './informacione-tehnologije.component';

describe('InformacioneTehnologijeComponent', () => {
  let component: InformacioneTehnologijeComponent;
  let fixture: ComponentFixture<InformacioneTehnologijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacioneTehnologijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacioneTehnologijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
