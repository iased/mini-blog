import { Routes } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
    { path: 'my-posts', component: MyPostsComponent },
    { path: 'posts/new-post', component: NewPostComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
