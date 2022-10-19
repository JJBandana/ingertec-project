import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Ajax = ({ data }) => {
    const ref = useRef(null);

    const givePurpose = () => {
        ref.current.value = data
    }

    return (
        <AContainer>
            <Button onClick={givePurpose}>Cargar Texto</Button>
            <textarea ref={ref} />
        </AContainer>
        )
}

export default Ajax;

const AContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    textarea{
        width:500px;
    }
`