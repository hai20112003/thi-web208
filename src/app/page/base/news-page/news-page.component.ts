import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { INews } from 'src/app/interfaces/News';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  cardNews: INews[] = [];
  totalLength:any;
  p: number = 1;
  constructor(private newsService: NewsService) {
    this.newsService.getNews().subscribe((data: any) => {
      for (let i = 0; i < data.data.length; i++) {
        const date = data.data[i].date
          ? new Date(data.data[i].date)
          : new Date();
        const formattedDate = date.toISOString().split('T')[0];
        data.data[i].date = formattedDate;
      }
      this.cardNews = data.data;
      this.totalLength = data.data.length;
    });
  }
}
