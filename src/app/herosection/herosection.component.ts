import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css'],
})
export class HeroSectionComponent {
  @Input() mainText!: string;
  @Input() secondText!: string;
}
