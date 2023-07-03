import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsOneComponent } from './subjects-one.component';

describe('SubjectsOneComponent', () => {
  let component: SubjectsOneComponent;
  let fixture: ComponentFixture<SubjectsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
