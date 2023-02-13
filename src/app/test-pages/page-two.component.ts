import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p routerLink="page-two">page-two works!</p>
  `,
  styles: [
  ]
})
export class PageTwoComponent {

}
