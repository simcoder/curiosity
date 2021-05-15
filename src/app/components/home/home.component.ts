import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Input() images: any[];
  @Input() loading: boolean;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() enlargeImg: EventEmitter<any> = new EventEmitter();
  @Output() clearClick: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
