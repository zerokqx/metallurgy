import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blurSlice from '@/redux/slices/blurSlice.ts'
import themeSlice from '@/redux/slices/theme.slice'
import userSlice from '@/redux/slices/userSlice'
import storage from 'redux-persist/lib/storage'; // по умолчанию используется localStorage для веба
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import appSlice from '@/redux/slices/app.slice'
const rootReducer = combineReducers({
    blur: blurSlice,
    theme: themeSlice,
    user: userSlice,
    app: appSlice,
});

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer, // Используй здесь persistedReducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
