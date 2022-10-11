import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Modal = ({ toggle, show, children, padding, source }) => {

    return (
        <>
            {show &&
                <Overlay onClick={toggle}>
                    <ModalContainer onClick={e => e.stopPropagation()} padding={padding}>
                        <img src={require(`../assets/${source}.jpg`)}></img>
                        <CloseButton onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </CloseButton>
                        
                    </ModalContainer>
                </Overlay>}
        </>
    )
}

export default Modal

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,.5);
    padding:40px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const ModalContainer = styled.div`
    position:absolute;
    display:flex;
    align-items: center;
    min-width:10vw;
    max-width:90vw;
    height:90vh;
    background:#222222;
    position:absolute;
    border-radius:5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: ${props => props.padding ? props.padding : "20px"};
    img{
        height:100%;
        border-radius:5px;
    }
`

const CloseButton = styled.button`
    position:absolute;
    top: -15px;
    right:-5px;
    border:none;
    background:none;
    width:30px;
    svg{
        background:white;
        height:35px;
        width:35px;
        border-radius:30px;
        fill:red;
        transition:all .2s ease-in-out;
        &:hover{
            fill:white;
            background:red;
            transform:scale(1.1);
        }
    }
`