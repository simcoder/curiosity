import { ActionReducerMap } from '@ngrx/store';
import { AppActionTypes, AppActions } from '../actions/app.actions';

export interface AppState {
  app: {
    hasLoaded: boolean;
    images: any[];
    loadingImages: boolean;
  };
}

export const initialState: AppState = {
  app: {
    images: [],
    hasLoaded: false,
    loadingImages: false,
  },
};

export function appReducer(state: AppState = initialState, action: AppActions) {
  switch (action.type) {
    case AppActionTypes.GET_IMAGES_SUCESS:
      return {
        ...state,
        app: {
          hasLoaded: true,
          images: action.payload,
        },
      };
    case AppActionTypes.GET_IMAGES_FAILURE:
      return {
        ...state,
        app: {
          hasLoaded: false,
        },
      };
    case AppActionTypes.LOADING_IMAGES:
      return {
        ...state,
        app: {
          loadingImages: action.isLoading,
        },
      };
    case AppActionTypes.CLEAR_IMAGES:
      return {
        ...state,
        app: {
          images: [],
        },
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<any> = {
  app: appReducer,
};
