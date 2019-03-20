import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'NgxQuillEditor',
  template: `
    <div id="__quill-editor__"></div>
  `,
  styles: []
})
export class NgxQuillEditorComponent implements OnInit {
  @Input() enableEmoji: boolean = true;
  @Input() enablemention: boolean = true;

  constructor() { }

  ngOnInit() {

  }

}
