import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  post: Post;
  constructor(private _blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this._blogService.get(params.link).subscribe((res: any) => {
        this.post = res.data[0];
      });
    });
  }
}
