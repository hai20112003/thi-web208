import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INews } from 'src/app/interfaces/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-detail-news-page',
  templateUrl: './detail-news-page.component.html',
  styleUrls: ['./detail-news-page.component.scss'],
})
export class DetailNewsPageComponent {
  cardNew: any = {};
  formattedDate: string = '';
  constructor(private NewsService: NewsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.NewsService.getNewsById(id).subscribe(
        (cardNew: any) => {
          const date = cardNew.data.date
            ? new Date(cardNew.data.date)
            : new Date();
          this.formattedDate = date.toISOString().split('T')[0];
          console.log(cardNew.data);
          this.cardNew = cardNew.data;
        },
        (error) => console.log(error.message)
      );
    });
  }
}
