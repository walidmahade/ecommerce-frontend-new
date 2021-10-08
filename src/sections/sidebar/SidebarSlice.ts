import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../appState/AppState";

// Define a type for the slice state
interface SidebarState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    // decrement: (state) => {
    //     state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    // },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// @ts-ignore
export const sidebarIsOpen = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
