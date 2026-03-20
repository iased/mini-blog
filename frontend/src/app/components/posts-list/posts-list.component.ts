import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  imports: [CommonModule, PostCardComponent, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  error = '';
  isLoggedIn = false;

  constructor(private postsService: PostsService, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: data => { this.posts = data; this.loading = false; },
      error: err => { this.error = 'Failed to load posts'; this.loading = false; },
    });
  }
}
