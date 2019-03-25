import { NgModule } from '@angular/core';
import { NgxQuillEditorComponent } from './ngx-quill-editor.component';
import { MatButtonModule } from '@angular/material';
import { EmojiBoxComponent } from './emoji/emoji-box/emoji-box.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule
  ],
  declarations: [NgxQuillEditorComponent, EmojiBoxComponent],
  exports: [NgxQuillEditorComponent,EmojiBoxComponent],
  
})
export class NgxQuillEditorModule { }
