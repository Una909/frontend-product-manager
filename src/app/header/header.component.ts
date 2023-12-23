import {Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-header',
  standalone: true,
  // Importing necessary modules
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html', // Template file
  styleUrl: './header.component.scss' // Style file
})
export class HeaderComponent {
}

// Event listener for click events on the document
document.addEventListener('click', e => {
  const target = e.target as HTMLElement | null;

  if (!target) {
    // If there's no target, exit the function
    return;
  }
  // Checks if the clicked element is a dropdown button
  const isDropdownButton = target.matches("[data-dropdown-button]");

  let currentDropdown: HTMLElement | null;
  if (isDropdownButton) {
    // Finds the closest element with the attribute 'data-dropdown'
    currentDropdown = target.closest('[data-dropdown]');
    if (currentDropdown) {
      // Toggling the "active" class for the current dropdown
      currentDropdown.classList.toggle('active');
    }
  }
  // Closing other active dropdowns except the current one
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) {
      return; // Skip the current dropdown
    }
    // Remove the "active" class
    dropdown.classList.remove("active");
  });
});
