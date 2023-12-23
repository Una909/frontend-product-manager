import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'pm-root',
  standalone: true,
  // Importing necessary modules
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent],
  templateUrl: './app.component.html', // Template file
  styleUrl: './app.component.scss' // Style file
})
export class AppComponent {
  title = 'frontend-product-manager';
}
