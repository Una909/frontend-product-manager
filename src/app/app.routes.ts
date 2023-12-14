import { Routes } from '@angular/router';
import {CategoryCreateComponent} from "./pages/category/category-create/category-create.component";

export const routes: Routes = [
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(val => val.LoginComponent),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then(val => val.RegisterComponent)
  },
  {
    path: 'product/create',
    loadComponent: () =>
      import('./pages/product/product-create/product-create.component').then(val => val.ProductCreateComponent),
    //canActivate: [isAdminGuard]
  },
  {
    path: 'product/list',
    loadComponent: () =>
      import('./pages/product/product-list/product-list.component').then(val => val.ProductListComponent)
  },
  {
    path: 'product/edit',
    loadComponent: () =>
      import('./pages/product/product-edit/product-edit.component').then(val => val.ProductEditComponent),
    //canActivate: [isAdminGuard]
  },
  {
    path: 'product/detail',
    loadComponent: () =>
      import('./pages/product/product-detail/product-detail.component').then(val => val.ProductDetailComponent)
  },
  {
    path: 'category/create',
    loadComponent: () =>
      import('./pages/category/category-create/category-create.component').then(val => val.CategoryCreateComponent),
    //canActivate: [isAdminGuard]
  },
  {
    path: 'category/list',
    loadComponent: () =>
      import('./pages/category/category-list/category-list.component').then(val => val.CategoryListComponent)
  },
  {
    path: 'category/edit',
    loadComponent: () =>
      import('./pages/category/category-edit/category-edit.component').then(val => val.CategoryEditComponent),
    //canActivate: [isAdminGuard]
  },
  {
    path: 'user/list',
    loadComponent: () =>
      import('./pages/user/user-list/user-list.component').then(val => val.UserListComponent),
  },
  {
    path: '/home',
    loadComponent: () =>
      import('./pages/home/home.component').then(val => val.HomeComponent),
  }
];
