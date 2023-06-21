import { NewsService } from 'src/app/services/news.service';
import { Component } from '@angular/core';
import { INews } from 'src/app/interfaces/News';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  news: INews[] = [];
  newsList: INews[] = [];
  totalLength:any;
  p: number = 1;
  constructor(private NewsService: NewsService) {
    this.NewsService.getNews().subscribe(
      (data: any) => {
        for (let i = 0; i < data.data.length; i++) {
          const date = data.data[i].date
            ? new Date(data.data[i].date)
            : new Date();
          const formattedDate = date.toISOString().split('T')[0];
          data.data[i].date = formattedDate;
        }
        this.news = data.data;
        this.totalLength = data.data.length;
        this.newsList = data.data;
      },
      (error) => console.log(error)
    );
  }

  onSearchChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.news = this.news.filter((news) => {
        return news.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else {
      this.news = this.newsList;
    }
  }

  confirmAndRemoveItem(productId: any) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      this.removeItem(productId);
    }
  }

  removeItem(id: any) {
    this.NewsService.deleteNews(id).subscribe(() => {
      alert('Bạn đã xóa thành công');
      this.news = this.news.filter((item) => item._id != id);
    });
  }
}
