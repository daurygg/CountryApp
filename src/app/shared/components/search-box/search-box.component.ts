import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public placeHolder:string='';

  emitsearch(term:string):void{

    this.onValue.emit(term);
  }
}
