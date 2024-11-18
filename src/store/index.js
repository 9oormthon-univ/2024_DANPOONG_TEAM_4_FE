import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session'; // session storage 사용
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import currentLocationReducer from './features/current-location-reducer';

const rootReducer = combineReducers({
  location: currentLocationReducer,
});

/*
  session에 저장하여 사용할 persist 환경설정입니다.
  보일러플레이트가 다소있지만 그냥 아래와 같습니다..!
  whitelist에 넣어놓는 리듀서만 세션에 저장(탭을 닫지않는다면 영구적 -> 추후 develop이 모두 되면 persist 해제할 예정이에요
  기존 redux toolkit을 세션과 결합한? 형태로 보시면 됩니다 !
  사용하실땐 rootReducer안에 넣어주시면 돼요
*/
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['location'],
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store 설정
export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production', // devTools 활성화 설정
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // redux-persist 관련 액션 무시
      },
    }),
});

// Persistor 설정
export const persistor = persistStore(store);
