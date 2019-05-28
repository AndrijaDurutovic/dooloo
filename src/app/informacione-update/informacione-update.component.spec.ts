import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioneUpdateComponent } from './informacione-update.component';

describe('InformacioneUpdateComponent', () => {
  let component: InformacioneUpdateComponent;
  let fixture: ComponentFixture<InformacioneUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacioneUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacioneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
