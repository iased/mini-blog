import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  imports: [CommonModule, PostCardComponent, RouterLink],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.scss'
})
export class MyPostsComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  error = '';
  isLoggedIn = false;

  constructor(private postsService: PostsService, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
    
  ngOnInit(): void {
    this.postsService.getMyPosts().subscribe({
      next: data => { this.posts = data; this.loading = false; },
      error: err => { this.error = 'Failed to load posts'; this.loading = false; },
    });
  }

  onEdit(post: Post) {
    console.log('edit', post);
  }

  onDelete(post: Post) {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return;

    this.postsService.deletePost(post.id!).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id !== post.id);
      },
      error: (err) => {
        console.error('Failed to delete post', err);
      }
    });
  }
}
