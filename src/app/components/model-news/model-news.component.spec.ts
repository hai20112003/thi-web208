import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelNewsComponent } from './model-news.component';

describe('ModelNewsComponent', () => {
  let component: ModelNewsComponent;
  let fixture: ComponentFixture<ModelNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelNewsComponent]
    });
    fixture = TestBed.createComponent(ModelNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
