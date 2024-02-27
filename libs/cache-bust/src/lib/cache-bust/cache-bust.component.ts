import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-cache-issue-cache-bust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cache-bust.component.html',
  styleUrl: './cache-bust.component.css',
})
export class CacheBustComponent {
  test = 'sdfgsdfgwsdgwer312534';
}
