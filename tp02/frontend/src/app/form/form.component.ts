import { Component } from '@angular/core';
import { ClientFormComponent } from '../client-form/client-form.component';
import { DataSummaryComponent } from '../data-summary/data-summary.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ClientFormComponent,DataSummaryComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
