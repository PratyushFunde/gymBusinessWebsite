import { Component } from '@angular/core';

import { HeroComponent } from "../hero/hero.component";
import { PopularExercisesComponent } from "../popular-exercises/popular-exercises.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, PopularExercisesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
