import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { fetchCards } from "./cardsApi";

export interface dataResponse {
  cards: [
    {
      code: string;
      image: string;
      value: string;
    }
  ];
  remaining: number;
}

export interface stateTypes {
  status: "loading" | "success" | "error";
  data: dataResponse;
}

export const fetchCardsAsync = createAsyncThunk(
  "cards/fetchCards",
  async () => {
    const response = await fetchCards();
    return response;
  }
);

const initialState: stateTypes = {
  status: "loading",
  data: {
    cards: [
      {
        code: "",
        image: "",
        value: "",
      },
    ],
    remaining: 52,
  },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchCardsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCardsAsync.fulfilled,
        (state, action: PayloadAction<dataResponse>) => {
          state.status = "success";
          state.data.cards = action.payload.cards;
          state.data.remaining = 52;
        }
      )
      .addCase(fetchCardsAsync.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const getAllCards = (state: RootState) => state.cards.data;
export const getRemaining = (state: RootState) => state.cards.data.remaining;

export default cardsSlice.reducer;
