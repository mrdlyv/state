import {usestate} from 'react'

function Say() {
    const [say, setSay] = useState([])
    const artir = () => {
        setSay(say + 1)
    }
    const azalt = () => {
        setSay(say - 1)
    }
  return (
    <>
    <button onClick={artir}>Artir</button>
    <h2>{say}</h2>
    <button onClick={azalt}>Azalt</button>
    </>
  )
}

export default Say