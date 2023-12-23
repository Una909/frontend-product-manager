import { Routes } from '@angular/router';
import {isadminGuard} from "./authguards/isadmin.guard";

// Routes for the URLs
export const routes: Routes = [
  // Homepage/Default route
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/home/home.component').then(val => val.HomeComponent),
  },
  // Login route
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(val => val.LoginComponent),
  },
  // Register route
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then(val => val.RegisterComponent)
  },
  // Product route for create, list, edit and detail
  {
    path: 'product/create',
    loadComponent: () =>
      import('./pages/product/product-create/product-create.component').then(val => val.ProductCreateComponent),
      canActivate: [isadminGuard] // Can only be accessed by admins
  },
  {
    path: 'product/list',
    loadComponent: () =>
      import('./pages/product/product-list/product-list.component').then(val => val.ProductListComponent)
  },
  {
    path: 'product/edit/:id',
    loadComponent: () =>
      import('./pages/product/product-edit/product-edit.component').then(val => val.ProductEditComponent),
      canActivate: [isadminGuard] // Can only be accessed by admins
  },
  {
    path: 'product/detail/:id',
    loadComponent: () =>
      import('./pages/product/product-detail/product-detail.component').then(val => val.ProductDetailComponent)
  },
  // Category routes for create, list and edit
  {
    path: 'category/create',
    loadComponent: () =>
      import('./pages/category/category-create/category-create.component').then(val => val.CategoryCreateComponent),
      canActivate: [isadminGuard] // Can only be accessed by admins
  },
  {
    path: 'category/list',
    loadComponent: () =>
      import('./pages/category/category-list/category-list.component').then(val => val.CategoryListComponent)
  },
  {
    path: 'category/edit/:id',
    loadComponent: () =>
      import('./pages/category/category-edit/category-edit.component').then(val => val.CategoryEditComponent),
      canActivate: [isadminGuard] // Can only be accessed by admins
  },
  // User route
  {
    path: 'user/list',
    loadComponent: () =>
      import('./pages/user/user-list/user-list.component').then(val => val.UserListComponent),
      canActivate: [isadminGuard] // Can only be accessed by admins
  }
];
