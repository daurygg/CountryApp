import { Component, EventEmitter, input, Input,OnDestroy,OnInit,Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription : Subject<string> = new Subject<string>();
  @Input()
  public initialValue: string="";
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();
  @Input()
  public placeHolder:string='';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer;
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebounce.emit(value);
    });
  }
  emitsearch(term:string):void{
    this.onValue.emit(term);
  }
  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSuscription.unsubscribe();
  }
}
