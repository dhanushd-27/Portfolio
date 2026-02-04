import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./countSlice/countSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      count: counterReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']