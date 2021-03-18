
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  PageHeaderComponent,
  PageFooterComponent,
  BtnActionComponent,
  InputDatepickerComponent
} from './components';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddNewButtonComponent } from './components/add-new-button/add-new-button.component';
import { FormGeneralComponent } from './components/form-general/form-general.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component'
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { AddSectionTitleComponent } from './components/add-section-title/add-section-title.component';
import { ProfilePictureGeneralComponent } from './components/profile-picture-general/profile-picture-general.component';
import { TblPaginationComponent } from './components/tbl-pagination/tbl-pagination.component';
import { TblRowsSelectionComponent } from './components/tbl-rows-selection/tbl-rows-selection.component';
import { LetterIconComponent } from './components/letter-icon/letter-icon.component';

// layout
import { AdminLayoutComponent, PublicLayoutComponent } from './layouts';
import { MainSidebarComponent } from './layouts/admin-layout/components/main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './layouts/admin-layout/components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './layouts/admin-layout/components/main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    AdminLayoutComponent,
    PublicLayoutComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    PageFooterComponent,
    BtnActionComponent,
    AddNewButtonComponent,
    FormGeneralComponent,
    SectionHeaderComponent,
    ViewAccountsComponent,
    AddSectionTitleComponent,
    ProfilePictureGeneralComponent,
    MainSidebarComponent,
    MainNavbarComponent,
    MainFooterComponent,
    TblPaginationComponent,
    TblRowsSelectionComponent,
    InputDatepickerComponent,
    LetterIconComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PageHeaderComponent,
    PageFooterComponent,
    BtnActionComponent,
    AddNewButtonComponent,
    FormGeneralComponent,
    SectionHeaderComponent,
    ViewAccountsComponent,
    AddSectionTitleComponent,
    ProfilePictureGeneralComponent,
    TblPaginationComponent,
    TblRowsSelectionComponent,
    InputDatepickerComponent,
    LetterIconComponent
  ]
})
export class SharedModule {
}
