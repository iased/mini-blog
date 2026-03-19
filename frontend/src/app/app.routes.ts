import { Routes } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
];
