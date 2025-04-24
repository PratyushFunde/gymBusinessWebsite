import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild, signal, ChangeDetectionStrategy } from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import { Mesh } from 'three';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThreeComponent {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  hovered = signal(false);
  clicked = signal(false);

  constructor() {
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  }
  // readonly sceneGraph = createSceneGraph([
  //   {
  //     type: NgtAmbientLight,
  //     props: { intensity: 0.5 }
  //   },
  //   {
  //     type: NgtPointLight,
  //     props: { position: [10, 10, 10] }
  //   },
  //   {
  //     type: NgtMesh,
  //     children: [
  //       { type: NgtBoxGeometry },
  //       {
  //         type: NgtMeshStandardMaterial,
  //         props: { color: 'orange' }
  //       }
  //     ]
  //   }
  // ]);
}
