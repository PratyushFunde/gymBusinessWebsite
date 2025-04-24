import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularExercisesComponent } from './popular-exercises.component';

describe('PopularExercisesComponent', () => {
  let component: PopularExercisesComponent;
  let fixture: ComponentFixture<PopularExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
