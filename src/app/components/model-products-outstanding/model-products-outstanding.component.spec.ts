import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelProductsOutstandingComponent } from './model-products-outstanding.component';

describe('ModelProductsOutstandingComponent', () => {
  let component: ModelProductsOutstandingComponent;
  let fixture: ComponentFixture<ModelProductsOutstandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelProductsOutstandingComponent]
    });
    fixture = TestBed.createComponent(ModelProductsOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
