import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() clearClick: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  minDate = new Date(2011, 10, 26);
  maxDate = new Date();


  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      date: ['', [Validators.required]],
      camera: [''],
    });
  }

  clear() {
    this.form.reset();
    this.clearClick.emit();
  }

  ngOnInit() {}
}
