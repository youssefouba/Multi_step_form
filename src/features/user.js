import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      phone: "",
      nextPermation: false,
      nextClick: false,
      emailValid:false,
      phoneValid:false,
      plan:"",
      price:0,
      plantime:"",
      totalToPay:0,
      packs:[
        {
          title: "Online service",
          text: "Access to multiplayer games",
          price: {
            monthly: 1,
            yearly: 10,
          },
          addon: false,
        },
        {
          title: "Larger storage",
          text: "Extra 1TB of cloud save",
          price: {
            monthly: 2,
            yearly: 20,
          },
          addon: false,
        },
        {
          title: "Customizable profile",
          text: "Custom theme on your profile",
          price: {
            monthly: 2,
            yearly: 20,
          },
          addon: false,
        }
      ]

    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    }
  },
});
export const { info } = userSlice.actions;
export default userSlice.reducer;
