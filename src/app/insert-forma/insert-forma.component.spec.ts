import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFormaComponent } from './insert-forma.component';

describe('InsertFormaComponent', () => {
  let component: InsertFormaComponent;
  let fixture: ComponentFixture<InsertFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
