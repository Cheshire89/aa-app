import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
})
export class BlogEditComponent implements OnInit {
  @ViewChild('postForm', { static: true }) postForm: NgForm;
  editPostFrom: FormGroup;
  post: Post = null;
  constructor(
    private _blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get controls() {
    return this.editPostFrom.controls;
  }

  ngOnInit() {
    this.editPostFrom = this.fb.group({
      img: [null],
      link: [null, [Validators.required]],
      title: [null, [Validators.required]],
      body: [null, [Validators.required]],
    });

    const link = this.route.snapshot.paramMap.get('link');

    if (link) {
      this._blogService.get(link).subscribe((res: any) => {
        this.post = { ...res.data[0] };
        this.controls.img.setValue(this.post.img);
        this.controls.link.setValue(this.post.link);
        this.controls.title.setValue(this.post.title);
        this.controls.body.setValue(this.post.body);
      });
    }

    this.route.params.subscribe((params: any) => {});
  }

  onSavePost() {
    if (this.postForm.valid) {
      if (this.post) {
        this._blogService.update(this.post._id, { ...this.editPostFrom.value }).subscribe((res: any) => {
          this.router.navigate(['blog', res.data.link, 'edit']);
        });
      } else {
        this._blogService.create({ ...this.editPostFrom.value }).subscribe((res: any) => {
          this.router.navigate(['blog', res.data.link, 'edit']);
        });
      }
    }
  }
}
