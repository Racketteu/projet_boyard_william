import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-data-summary',
  standalone: true,
  imports: [],
  templateUrl: './data-summary.component.html',
  styleUrl: './data-summary.component.css'
})
export class DataSummaryComponent {
  @Input() informationsClient: any;

  constructor() { }
}
