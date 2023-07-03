import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationlandingComponent } from './aplicationlanding.component';

describe('AplicationlandingComponent', () => {
  let component: AplicationlandingComponent;
  let fixture: ComponentFixture<AplicationlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicationlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
