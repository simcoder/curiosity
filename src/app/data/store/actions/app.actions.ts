import { Action } from '@ngrx/store';

export enum AppActionTypes {
  GET_IMAGES_SUCESS = 'GET_IMAGES_SUCESS',
  GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE',
  GET_IMAGES = 'GET_IMAGES',
  LOADING_IMAGES = "LOADING IMAGES",
  CLEAR_IMAGES = "CLEAR IMAGES"
}
export class GetImagesSuccess implements Action {
  readonly type = AppActionTypes.GET_IMAGES_SUCESS;
  constructor(public payload: any) {}
}

export class GetImagesFailure implements Action {
  readonly type = AppActionTypes.GET_IMAGES_FAILURE;
}

export class GetImages implements Action {
  readonly type = AppActionTypes.GET_IMAGES;
  constructor(public date: string, public camera: string) {}
}

export class LoadingImages implements Action {
  readonly type = AppActionTypes.LOADING_IMAGES;
  constructor(public isLoading: boolean) {}
}

export class ClearImages implements Action {
  readonly type = AppActionTypes.CLEAR_IMAGES;
}
export type AppActions =
  | GetImages
  | GetImagesFailure
  | GetImagesSuccess
  | LoadingImages
  | ClearImages;
