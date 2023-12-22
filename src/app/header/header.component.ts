import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}

document.addEventListener('click', e => {
  const target = e.target as HTMLElement | null;

  if (!target) {
    return;
  }
  // Checks if the clicked element is a dropdown button
  const isDropdownButton = target.matches("[data-dropdown-button]");

  let currentDropdown: HTMLElement | null;
  if (isDropdownButton) {
    currentDropdown = target.closest('[data-dropdown]');
    if (currentDropdown) {
      // Toggling the "active" class for the current dropdown
      currentDropdown.classList.toggle('active');
    }
  }
  // Closing other active dropdowns except the current one
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) {
      return;
    }
    dropdown.classList.remove("active");
  });
});
