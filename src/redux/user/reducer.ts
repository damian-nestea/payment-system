import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  userOnline: {
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
      const emailExists = state.list.find((user: any) => user.email === email);
      if (emailExists) {
        alert("Email já cadastrado");
        return;
      }
      state.list.push({ name, email, password });
      alert("Usuário cadastrado com sucesso");
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
    },
  },
});

export const { register, login } = userSlice.actions;
export default userSlice.reducer;
