import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppService } from '../../services/app.service';
import {
  AppActionTypes,
  GetImagesFailure,
  GetImagesSuccess,
  LoadingImages,
} from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private action$: Actions,
    private service: AppService,
    private store: Store<any>
  ) {}

  @Effect({ dispatch: false })
  effectName$ = this.action$.pipe(
    ofType(AppActionTypes.GET_IMAGES),
    switchMap((action: any) => {
      return this.service.getImages(action.date, action.camera).pipe(
        map((data: any) => {
          this.store.dispatch(new LoadingImages(false));
          if (data) {
            this.store.dispatch(new GetImagesSuccess(data.photos));
          }
          return EMPTY;
        }),
        catchError((error) => {
          this.store.dispatch(new LoadingImages(false));
          this.store.dispatch(new GetImagesFailure());
          return of(error);
        })
      );
    })
  );
}
