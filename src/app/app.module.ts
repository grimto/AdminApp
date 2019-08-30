import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogdataComponent } from './dialogdata/dialogdata.component';
import { DatadetailsComponent } from './datadetails/datadetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DialogdataComponent,
    DatadetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
