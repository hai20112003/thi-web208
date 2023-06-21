import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSupportComponent } from './model-support.component';

describe('ModelSupportComponent', () => {
  let component: ModelSupportComponent;
  let fixture: ComponentFixture<ModelSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelSupportComponent]
    });
    fixture = TestBed.createComponent(ModelSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
