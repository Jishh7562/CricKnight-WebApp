import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule ,HttpClientModule, FormsModule ,IonicStorageModule.forRoot(),IonicModule.forRoot() ,AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
