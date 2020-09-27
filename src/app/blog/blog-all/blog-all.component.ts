import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss'],
})
export class BlogAllComponent implements OnInit {
  posts: Post[];
  constructor(private _blogService: BlogService) {}

  ngOnInit() {
    this._blogService.get().subscribe((res: any) => {
      this.posts = res.data;
    });
  }
}
