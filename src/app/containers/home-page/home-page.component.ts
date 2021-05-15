import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnlargeImgDialogComponent } from 'src/app/components/enlarge-img-dialog/enlarge-img-dialog.component';
import { ClearImages, GetImages, LoadingImages } from 'src/app/data/store/actions/app.actions';
import { AppState } from 'src/app/data/store/reducer/app.reducer';
import {  selectAppState } from 'src/app/data/store/selectors/app.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data$: Observable<AppState>;
  constructor(private store: Store<AppState>, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.data$ = this.store.pipe(select(selectAppState));
  }

  onFormSubmit(form:FormGroup) {
    this.store.dispatch(new LoadingImages(true));
    const date = this.datePipe.transform(form.controls['date'].value,"YYYY-MM-dd");
    const camera = form.controls['camera'].value;
    this.store.dispatch(new  GetImages(date, camera));
  }

  onClearClick(){
    this.store.dispatch(new ClearImages())
  }

  onEnlargeImgClick(imgSrc: string){
    this.dialog.open(EnlargeImgDialogComponent, {
      width: '400px',
      data: {imgSrc}
    });
  }

}
