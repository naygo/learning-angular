import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p routerLink="page-three">page-three works!</p>
  `
})
export class PageThreeComponent {

}
