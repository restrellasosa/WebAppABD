import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

//Registrar el componente button

import { ButtonAgregar } from './components/button/button.component';
import {DiasSemana} from './components/DiasSemana/diasSemana.Component';
import { TblProductoComponent } from './components/tbl-producto/tbl-producto.component'
import { ProductoService } from './services/Producto.Services'
import { CategoryService } from './services/category.service'
import { EmployeeService } from './services/employee.service'

import { HttpModule } from '@angular/http';
import { FindProductComponent } from './components/find-product/find-product.component';
import { FilterProductNameComponent } from './components/filter-product-name/filter-product-name.component';
import { FindProductCategoryComponent } from './components/find-product-category/find-product-category.component';
import { FilterProductCategoryComponent } from './components/filter-product-category/filter-product-category.component';

import { TblEmployeesComponent } from './components/tbl-employees/tbl-employees.component';
import { FindEmployeesFullNameComponent } from './components/find-employees-full-name/find-employees-full-name.component';
import { FilterEmployeesFullNameComponent } from './components/filter-employees-full-name/filter-employees-full-name.component';;


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
        FetchDataComponent,
        ButtonAgregar,
        DiasSemana,
        TblProductoComponent,
        FindProductComponent,
        FilterProductNameComponent,
        FindProductCategoryComponent,
        FilterProductCategoryComponent,
        TblEmployeesComponent,
        FindEmployeesFullNameComponent,
        FilterEmployeesFullNameComponent
       
  ],
    imports: [
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'filtradoproducto', component: FilterProductNameComponent},
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'filtradocategoria', component: FilterProductCategoryComponent },
        { path: 'diaSemana', component: DiasSemana },
        { path: 'FilterEmployeesFullName', component: FilterEmployeesFullNameComponent}
    ])
  ],
    providers: [ProductoService, CategoryService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
