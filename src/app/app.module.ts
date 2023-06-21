import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { FooterComponent } from './components/layout/base/footer/footer.component';
import { HeaderComponent } from './components/layout/base/header/header.component';
import { ModelMenuProductsComponent } from './components/model-menu-products/model-menu-products.component';
import { ModelNewsComponent } from './components/model-news/model-news.component';
import { ModelProductsOutstandingComponent } from './components/model-products-outstanding/model-products-outstanding.component';
import { ModelSupportComponent } from './components/model-support/model-support.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { CategoryAddComponent } from './page/admin/categories/category-add/category-add.component';
import { CategoryEditComponent } from './page/admin/categories/category-edit/category-edit.component';
import { CategoryListComponent } from './page/admin/categories/category-list/category-list.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/products/product-edit/product-edit.component';
import { ProductListComponent } from './page/admin/products/product-list/product-list.component';
import { UserListComponent } from './page/admin/users/user-list/user-list.component';
import { CartPageComponent } from './page/base/cart-page/cart-page.component';
import { ContactComponent } from './page/base/contact/contact.component';
import { DetailNewsPageComponent } from './page/base/detail-news-page/detail-news-page.component';
import { HomePageComponent } from './page/base/home-page/home-page.component';
import { IntroducePageComponent } from './page/base/introduce-page/introduce-page.component';
import { LoginComponent } from './page/base/login/login.component';
import { NewsPageComponent } from './page/base/news-page/news-page.component';
import { ProductDetailComponent } from './page/base/product-detail/product-detail.component';
import { ProductPageComponent } from './page/base/product-page/product-page.component';
import { SignupComponent } from './page/base/signup/signup.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NewsListComponent } from './page/admin/news/news-list/news-list.component';
import { NewsAddComponent } from './page/admin/news/news-add/news-add.component';
import { NewsEditComponent } from './page/admin/news/news-edit/news-edit.component';
import { UserEditComponent } from './page/admin/users/user-edit/user-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    DashboardComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    IntroducePageComponent,
    CartPageComponent,
    NewsPageComponent,
    ModelNewsComponent,
    AdvertisementComponent,
    ModelProductsOutstandingComponent,
    ModelSupportComponent,
    ModelMenuProductsComponent,
    ProductPageComponent,
    ProductDetailComponent,
    DetailNewsPageComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    UserListComponent,
    NewsListComponent,
    NewsAddComponent,
    NewsEditComponent,
    UserEditComponent,
    CustomPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
