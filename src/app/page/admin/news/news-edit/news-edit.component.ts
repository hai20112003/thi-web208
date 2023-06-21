import { INews } from 'src/app/interfaces/News';
import { NewsService } from 'src/app/services/news.service';

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss'],
})
export class NewsEditComponent {
  [x: string]: any;
  formattedDate: string = '';
  formNews = this.fb.group({
    _id: [''],
    name: ['', [Validators.required]],
    image: [''],
    author: ['', [Validators.required]],
    date: ['', [Validators.required]],
    describe: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private NewsService: NewsService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.NewsService.getNewsById(id).subscribe(
        (news: any) => {
          const date = news.data.date ? new Date(news.data.date) : new Date();
          this.formattedDate = date.toISOString().split('T')[0];
          this.formNews.patchValue({
            _id: news.data._id,
          });
          this.formNews.patchValue({
            name: news.data.name,
          });
          this.formNews.patchValue({
            author: news.data.author,
          });
          this.formNews.patchValue({
            date: news.data.date,
          });
          this.formNews.patchValue({
            describe: news.data.describe,
          });
          this.formNews.patchValue({
            description: news.data.description,
          });
          this.formNews.patchValue({
            image: news.data.image,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }

  onHandleSubmit() {
    if (this.formNews.valid) {
      const news: INews = {
        _id: this.formNews.get('_id')?.value || '',
        name: this.formNews.get('name')?.value || '',
        image: this.formNews.get('image')?.value || '',
        author: this.formNews.get('author')?.value || '',
        date: this.formNews.get('date')?.value || '',
        describe: this.formNews.get('describe')?.value || '',
        description: this.formNews.get('description')?.value || '',
      };
      this.NewsService.updateNews(news).subscribe((data) => {
        alert('Sửa bài viết thành công');
        this.router.navigate(['/admin/news']);
      });
    }
  }
}
