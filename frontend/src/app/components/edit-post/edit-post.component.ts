import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
  post: Post = {
    title: '',
    message: ''
  };

  loading = false;
  error = '';

  constructor(private postsService: PostsService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postsService.getPost(id).subscribe({
      next: (data) => this.post = data,
      error: () => this.error = 'Failed to load post'
    });
  }

  editPost() {
    if (!this.post.id) return;
    this.loading = true;
    this.error = '';

    this.postsService.updatePost(this.post.id, this.post).subscribe({
      next: () => {
        this.loading = false;
        this.location.back();
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error.message || 'Something went wrong';
      }
    });
  }

  cancel() {
    this.location.back();
  }
}
