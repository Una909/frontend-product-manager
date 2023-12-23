import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'pm-footer',
  standalone: true,
  // Importing necessary modules
  imports: [CommonModule,
    MatIconModule,
    MatToolbarModule],
  templateUrl: './footer.component.html', // Template file
  styleUrl: './footer.component.scss' // Style file
})
export class FooterComponent {

}
