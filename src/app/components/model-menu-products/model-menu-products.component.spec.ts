import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMenuProductsComponent } from './model-menu-products.component';

describe('ModelMenuProductsComponent', () => {
  let component: ModelMenuProductsComponent;
  let fixture: ComponentFixture<ModelMenuProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelMenuProductsComponent]
    });
    fixture = TestBed.createComponent(ModelMenuProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
