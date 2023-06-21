import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent {
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
}
