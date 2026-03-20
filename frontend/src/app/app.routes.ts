import { Routes } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NewPostComponent } from './components/new-post/new-post.component';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
    { path: 'posts/new-post', component: NewPostComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
