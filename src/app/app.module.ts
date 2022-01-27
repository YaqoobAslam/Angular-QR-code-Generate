import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxQRCodeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
