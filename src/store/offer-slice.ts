import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { City, Offer } from "../types/offer"
import { AppDispatch, RootState } from "./store"

type State = {
  currentCity: City
  offers: Offer[]
}

const initialState: State = {
  currentCity: 'Moscow',
  offers: []
}

const offerSlice = createSlice({
  name: 'OFFERS',
  initialState,
  reducers: {
    init: (state, {payload}: PayloadAction<Offer[]>) => {
      state.offers = payload
    },
    switchCity: (state) => {
      state.currentCity = state.currentCity === 'Moscow'
        ? 'Saint Petersburg'
        : 'Moscow'
    }
  }
})

export const {init, switchCity} = offerSlice.actions
export const initThunk = (offers: Offer[]) => (dispatch: AppDispatch) => {
  const timer = setTimeout(() => {
    dispatch(init(offers))
    clearTimeout(timer)
  }, 3000);
  
  return 'job started'
}

export const getCurrentOffers = (state: RootState) => state.offers.offers.filter(
  (offer) => offer.city === state.offers.currentCity)

export default offerSlice.reducer