import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorized: (state) => {
      state.value = true
    },
    unAuthorized: (state) => {
      state.value = false
    }
  },
})

export const { authorized, unAuthorized } = authSlice.actions

export default authSlice.reducer
