import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INews } from 'src/app/interfaces/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss'],
})
export class NewsAddComponent {
  valueInput: string = '';
  setValue(e: any) {
    this.valueInput = e.target.value;
    console.log(this.valueInput);
  }
  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router
  ) {}
  formNews = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    author: ['', [Validators.required]],
    date: ['', [Validators.required]],
    description: ['', [Validators.required]],
    describe: ['', [Validators.required]],
  });
  onHandleSubmit() {
    if (this.formNews.valid) {
      const news: INews = {
        name: this.formNews.get('name')?.value || '',
        image: this.formNews.get('image')?.value || '',
        author: this.formNews.get('author')?.value || '',
        date: this.formNews.get('date')?.value || '',
        describe: this.formNews.get('describe')?.value || '',
        description: this.formNews.get('description')?.value || '',
      };
      this.newsService.addNews(news).subscribe((data) => {
        alert('Thêm bài viết thành công');
        this.router.navigate(['/admin/news']);
      });
    }
  }
}
