import { Component } from '@angular/core';
import { INews } from 'src/app/interfaces/News';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-model-news',
  templateUrl: './model-news.component.html',
  styleUrls: ['./model-news.component.scss'],
})
export class ModelNewsComponent {
  news: number = 1;
  expression: any;
  public right() {
    this.news++;
    if (this.news > 3) {
      this.news = 1;
    }
    const element = document.getElementById(
      'news' + this.news
    ) as HTMLInputElement;
    element.checked = true;
  }

  public left() {
    this.news--;
    if (this.news < 1) {
      this.news = 3;
    }
    const element = document.getElementById(
      'news' + this.news
    ) as HTMLInputElement;
    element.checked = true;
  }

  modelNews: INews[] = [];
  first3News: INews[] = [];

  constructor(private newsService: NewsService) {
    this.newsService.getNews().subscribe(
      (data: any) => {
        for (let i = 0; i < data.data.length; i++) {
          const date = data.data[i].date
            ? new Date(data.data[i].date)
            : new Date();
          const formattedDate = date.toISOString().split('T')[0];
          data.data[i].date = formattedDate;
        }
        this.modelNews = data.data;
        this.modelNews.sort((a: any, b: any): any => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        this.first3News = this.modelNews.slice(0, 3);
      },
      (error) => console.log(error)
    );
  }
}
