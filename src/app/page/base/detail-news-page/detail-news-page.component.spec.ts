import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNewsPageComponent } from './detail-news-page.component';

describe('DetailNewsPageComponent', () => {
  let component: DetailNewsPageComponent;
  let fixture: ComponentFixture<DetailNewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailNewsPageComponent],
    });
    fixture = TestBed.createComponent(DetailNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
