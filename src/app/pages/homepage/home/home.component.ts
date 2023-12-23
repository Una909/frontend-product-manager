import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-home',
  standalone: true,
  // Importing necessary modules
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html', // Template file
  styleUrl: './home.component.scss' // Style file
})
export class HomeComponent {

}
