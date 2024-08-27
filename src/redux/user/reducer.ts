import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  userOnline: {
    id: 0,
    name: "",
    email: "",
  },
  isLogged: false,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<any>) => {
      const { name, email, password } = action.payload;
      state.list.push({ name, email, password });
      console.log(state.list);
    },
    login: (state, action: PayloadAction<any>) => {
      const { email, password } = action.payload;
      const user = state.list.find(
        (user: any) => user.email === email && user.password === password,
      );
      if (user) {
        state.userOnline = user;
        state.isLogged = true;
      }
      console.log(state.userOnline);
    },
  },
});

export const { register, login } = userSlice.actions;
export default userSlice.reducer;
