import { TestBed, inject } from '@angular/core/testing';

import { NgxQuillEditorService } from './ngx-quill-editor.service';

describe('NgxQuillEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxQuillEditorService]
    });
  });

  it('should be created', inject([NgxQuillEditorService], (service: NgxQuillEditorService) => {
    expect(service).toBeTruthy();
  }));
});
