import { useDispatch, useSelector } from "react-redux"
import { getCurrentOffers, switchCity } from "../../store/offer-slice"
import { AppDispatch } from "../../store/store"

const Offers = () => {
  const dispatch: AppDispatch = useDispatch()
  const offers = useSelector(getCurrentOffers)

  const handleClick = () => {
    dispatch(switchCity())
  }

  return (<>
  <button type="button" onClick={handleClick}>switch city</button>
  <ul>
    {offers.map(({title, city}) => (
      <li key={title}>
        <h3>{title}</h3>
        <p>In the {city}</p>
      </li>
    ))}
  </ul>
  </>)
} 

export default Offers