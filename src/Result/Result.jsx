import {useContext} from 'react'
import { datoContext } from '../App'

const Result = () => {

  const datoPasar = useContext(datoContext)

  return (
    <div>{datoPasar}</div>
  )
}
export default Result
