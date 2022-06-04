import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITheme, IThemeState } from "interfaces/interfaces";

const initialState: IThemeState = {
  theme: "bright",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    changeTheme: (state, action: PayloadAction<ITheme>) => {
      state.theme = action.payload.theme;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
