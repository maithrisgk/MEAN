import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { SimpleFormComponent } from './components/success-page/simple-form/simple-form.component';
import { DisplayTableComponent } from './components/success-page/display-table/display-table.component';
import { DisplayChartComponent } from './components/success-page/display-chart/display-chart.component';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormService} from './services/form.service';
import {MessageService} from './services/message.service';
import {AuthGuard} from './guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleModule } from 'angular2-collapsible';
import {MatTableModule, MatExpansionModule, MatInputModule, MatSortModule, MatPaginatorModule,MatCardModule, MatDialogModule} from '@angular/material';
import { ChartExpandComponent } from './components/success-page/chart-expand/chart-expand.component';

const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'form',component:SuccessPageComponent,canActivate:[AuthGuard]},
  {path:'chart',component:ChartExpandComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    SuccessPageComponent,
    SimpleFormComponent,
    DisplayTableComponent,
    DisplayChartComponent,
    PageNotFoundComponent,
    ChartExpandComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    CollapsibleModule,
    MatExpansionModule, MatInputModule, MatSortModule, MatPaginatorModule,MatCardModule,
    NgbModule, MatDialogModule
  ],
  providers: [AuthGuard,FormService,MessageService],
  bootstrap: [AppComponent],
  entryComponents:[DisplayChartComponent]
})
export class AppModule { }
