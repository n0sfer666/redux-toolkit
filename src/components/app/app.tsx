import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { PropsWithChildren, useEffect } from "react"
import { initThunk } from "../../store/offer-slice"
import { OFFERS } from "../../mocks/offers"

import './app.css'

type Props = Required<PropsWithChildren>

const App = ({children}: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const {offers} = useSelector((state: RootState) => state.offers)


  useEffect(() => {
    const message = dispatch(initThunk(OFFERS))
    console.log({message})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isLoaded = offers.length > 0

  return (
    <div className="app">
      {isLoaded && children}
      {!isLoaded && <span className="app__loader" />}
    </div>
  )
}

export default App