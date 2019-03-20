import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuillEditorComponent } from './ngx-quill-editor.component';

describe('NgxQuillEditorComponent', () => {
  let component: NgxQuillEditorComponent;
  let fixture: ComponentFixture<NgxQuillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxQuillEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
