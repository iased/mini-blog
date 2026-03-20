import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent {
  newPost: Post = {
    title: '',
    message: ''
  };

  loading = false;
  error = '';

  constructor(private postsService: PostsService, private router: Router) {}

  createPost() {
    this.loading = true;
    this.error = '';

    this.postsService.createPost(this.newPost).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error.message || 'Something went wrong';
      }
    });
  }

  cancel() {
    this.router.navigate(['/posts']);
  }
}
