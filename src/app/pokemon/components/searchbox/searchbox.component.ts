import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListComponent } from '../../pages/list/list.component';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @ViewChild('searchbox') searchbox!:ElementRef<HTMLInputElement>;
  constructor(private list:ListComponent) { }
  search() {
    this.list.search(this.searchbox.nativeElement.value);
  }
}
