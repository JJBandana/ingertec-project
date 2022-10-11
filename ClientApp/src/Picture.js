import { useParams } from 'react-router-dom'

const Picture = () => {

    const params = useParams()
    console.log("PICTURE COMPONENT IS CONNECTED?")

    return (
        <h1>HELLO WORLD!</h1>
        )
}

export default Picture