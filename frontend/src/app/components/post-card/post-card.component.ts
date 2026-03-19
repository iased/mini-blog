import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post!: Post;

  getAvatarUrl(id: number): string {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${id}&backgroundType=gradientLinear`;
  }
}
