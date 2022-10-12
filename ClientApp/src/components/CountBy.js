import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState, useEffect } from 'react'

const CountBy = ({ data }) => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const countBy = (data, number) => {
        return data.filter(elem => elem.idResourceType === number).length
    }

    useEffect(() => {

        if (data) setCount(countBy(data, number))

    }, [number])

    return (
        <div>
            <p>Contar por:</p>
            <ButtonGroup>
                <ToggleButton type="radio" onClick={() => setNumber(1)} >Video</ToggleButton>
                <ToggleButton type="radio" onClick={() => setNumber(2)} >Documentacion</ToggleButton>
                <ToggleButton type="radio" onClick={() => setNumber(3)} >Enunciado</ToggleButton>
                <ToggleButton type="radio" onClick={() => setNumber(4)} >Solucion</ToggleButton>
            </ButtonGroup>
            <p>Conteo: {count}</p>
        </div>
        )
}

export default CountBy;