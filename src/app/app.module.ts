import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AppComponent } from './app.component';
import { CandidateModalComponent } from './candidate/candidate-root/candidate-modal/candidate-modal.component';
import { CandidateRootComponent } from './candidate/candidate-root/candidate-root.component';
import { FormComponent } from './candidate/candidate-root/form/form.component';
import { ListComponent } from './candidate/candidate-root/list/list.component';
// import { ToastrModule } from 'ngx-toastr';
// import {TimeAgoPipe} from 'time-ago-pipe';
import { DaysAgoPipe } from './days-ago.pipe';
import { GraphQLModule } from './graphql.module';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LogoComponent } from './layout/logo/logo.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateRootComponent,
    ListComponent,
    FormComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    // TimeAgoPipe,
    LogoComponent,
    CandidateModalComponent,
    DaysAgoPipe
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatDividerModule,
    MatSortModule,
    // ToastrModule.forRoot(), 
    GooglePlaceModule,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
