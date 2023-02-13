import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>page-one works!</p>

    <div *ngFor="let user of users$ | async">
      <p>{{ user.name }}</p>
    </div>
  `,
  styles: [],
})
export class PageOneComponent {
  users$ = inject(ActivatedRoute).data.pipe(map(({ user }) => user));
}
