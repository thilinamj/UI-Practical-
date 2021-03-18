import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tbl-pagination',
  templateUrl: './tbl-pagination.component.html',
  styles: [
  ]
})
export class TblPaginationComponent implements OnInit {

  @Input() pagination: any;
  @Output() changeIndex = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeIndex(index: number) {
    if (this.pagination && !(index === 0 || index > this.pagination.pageIndexes.length)) {
      this.changeIndex.emit(index);
    }
  }

}
