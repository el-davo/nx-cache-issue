import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CacheBustComponent } from '@test/cache-bust';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CacheBustComponent],
  selector: 'nx-cache-issue-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-sdfgsdfg-sbxcvbxcv';
}
