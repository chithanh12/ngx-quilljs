import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuillConfigs, MessageOutput } from './ngx-quill-editor.models';

declare var Quill: any;

@Component({
  selector: 'NgxQuillEditor',
  templateUrl: './ngx-quill-editor.component.html',
  styleUrls: ['./ngx-quill-editor.component.scss']
})
export class NgxQuillEditorComponent implements OnInit {
  @Input() configs: QuillConfigs = new QuillConfigs();
  @Output() send: EventEmitter<MessageOutput> = new EventEmitter<any>();
  $editor: any;

  constructor() { }

  ngOnInit() {
    
    this.$editor = new Quill(`#__quill_editor__`, this.configs);
  }

  onSend() {

  }

}
