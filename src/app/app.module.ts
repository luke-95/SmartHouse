import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

//Third-party modules
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

//Service Worker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Project modules
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './nav-bar/nav-bar.module';


//Material modules
import { 
  MatToolbar,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, MatSidenavModule, 
  MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatInputModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
  MatChipsModule,
  MatFormFieldModule,
  MatTabsModule,
  MatMenuModule,
  MatSliderModule,
  MatDialogModule,
  MatRadioModule,
  MatExpansionModule
} from '@angular/material';

// Project components
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DeviceCardComponent } from './device-card/device-card.component';
import { TempSensorComponent } from './device-card/temp-sensor/temp-sensor.component';
import { SpeakersComponent } from './device-card/speakers/speakers.component'
import { ApplianceComponent } from './device-card/appliance/appliance.component';
import { TvCardComponent } from './device-card/tv-card/tv-card.component';
import { AddDeviceDialogComponent } from './modals/add-device-dialog/add-device-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoveCategoryDialogComponent } from 'src/app/modals/remove-category-dialog/remove-category-dialog.component';
import { AddCategoryDialogComponent } from './modals/add-category-dialog/add-category-dialog.component';
import { SmartLockComponent } from './device-card/smart-lock/smart-lock.component';
import { AddFilterDialogComponent } from './modals/add-filter-dialog/add-filter-dialog.component';
import { DashboardSchematicComponent } from './schematics/dashboard-schematic/dashboard-schematic.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AreYouSureDialogComponent } from './modals/are-you-sure-dialog/are-you-sure-dialog.component';
import { HttpErrorHandler } from 'src/app/services/http-error-handler-service/http-error-handler.service';
import { MessageService } from './services/message-service/message-service.service';
import { NotificationsService } from './services/notification-service/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    DevicesComponent,
    PageNotFoundComponent,
    AccountPageComponent,
    LoginComponent,
    DeviceCardComponent,
    TempSensorComponent,
    SpeakersComponent,
    ApplianceComponent,
    TvCardComponent,
    AddDeviceDialogComponent,
    RemoveCategoryDialogComponent,
    AddCategoryDialogComponent,
    SmartLockComponent,
    AddFilterDialogComponent,
    DashboardSchematicComponent,
    AreYouSureDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],

    // Custom Modules
    NavBarModule,

    //Routing Modules
    AppRoutingModule,
    
    //Material Modules
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatChipsModule,
    MatSliderModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule,

    //Other Modules
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ScrollDispatchModule
  ],
  providers: [
    AuthGuard, 
    AuthService,
    { 
      provide: 'BASE_URL', useFactory: getBaseUrl 
    },
    HttpErrorHandler,
    MessageService,
    NotificationsService
  ],
  entryComponents:[
    AddDeviceDialogComponent,
    RemoveCategoryDialogComponent,
    AddCategoryDialogComponent,
    AddFilterDialogComponent,
    AreYouSureDialogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function getBaseUrl() {
  return "https://cortex.azurewebsites.net/api/v1/";
  // return "http://localhost:52932/api/v1/"
}
