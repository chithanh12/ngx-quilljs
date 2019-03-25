import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmojiModel, Category } from '../emoji-map';
import emojiList from '../emoji-list';


@Component({
  selector: 'ngx-emoji-box',
  templateUrl: './emoji-box.component.html',
  styleUrls: ['./emoji-box.component.scss', './../../../assets/scss/quill-emoji.scss']
})
export class EmojiBoxComponent implements OnInit, OnDestroy {
  @Output() onSelect: EventEmitter<EmojiModel> = new EventEmitter();
  filter: string;
  searchControl: FormControl = new FormControl();
  emojiTypes: Category[] = [
    { type: 'p', name: 'people', icon: 'i-people' },
    { type: 'n', name: 'nature', icon: 'i-nature' },
    { type: 'd', name: 'food', icon: 'i-food' },
    { type: 's', name: 'symbols', icon: 'i-symbols' },
    { type: 'a', name: 'activity', icon: 'i-activity' },
    { type: 't', name: 'travel', icon: 'i-travel' },
    { type: 'o', name: 'objects', icon: 'i-objects' },
    { type: 'f', name: 'flags', icon: 'i-flags>' }
  ];

  selectedCategory: string = 'people';
  isOpen: boolean = false;

  filteredEmojiList: EmojiModel[] = [];
  constructor() { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(x => {
      //TODO: update the item list
    });

    this.filteredEmojiList = emojiList.filter(x => x.category === this.selectedCategory);
  }

  ngOnDestroy() {

  }



}
