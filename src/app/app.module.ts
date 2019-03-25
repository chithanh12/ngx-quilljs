import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxQuillEditorModule } from 'projects/ngx-quill-editor/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxQuillEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
