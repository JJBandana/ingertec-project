import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import ResourceTable from './components/ResourceTable'
import Image from './components/Image'
import Modal from './components/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import svgFile from './assets/layered-waves.svg'
import Card from 'react-bootstrap/Card'
import { Route, Link } from 'react-router-dom'
import Picture from './Picture'

const App = () => {

    const [tre, setTre] = useState()
    const [likesState, setLikesState] = useState([])
    const [modal0, setModal0] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const getData = async () => {
        try {
            await Promise.allSettled([
                fetch('api/tresource/lista').then(res => res.json()).then(res => {
                    setTre(res)
                }),
                fetch('api/image/likes').then(res => res.json()).then(res => {
                    setLikesState(res)
                })
            ])
        } catch (e) {
            console.log("ERROR =>", e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Adipiscing enim eu turpis egestas pretium. Dolor morbi non arcu risus quis. Commodo quis imperdiet massa tincidunt nunc pulvinar. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Senectus et netus et malesuada fames ac turpis egestas. Faucibus in ornare quam viverra orci. Faucibus vitae aliquet nec ullamcorper sit amet risus. Fermentum iaculis eu non diam. Sit amet porttitor eget dolor morbi. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Risus commodo viverra maecenas accumsan lacus vel facilisis. Vitae elementum curabitur vitae nunc sed velit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Cras ornare arcu dui vivamus arcu. Neque gravida in fermentum et.\nEget mauris pharetra et ultrices neque ornare.Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.Nunc faucibus a pellentesque sit.Blandit cursus risus at ultrices.Varius vel pharetra vel turpis nunc.Amet massa vitae tortor condimentum lacinia quis vel eros.Nunc sed augue lacus viverra vitae congue.Erat imperdiet sed euismod nisi porta lorem mollis aliquam.Sed risus ultricies tristique nulla aliquet enim tortor at.Posuere morbi leo urna molestie at elementum.Morbi tristique senectus et netus.Sit amet purus gravida quis blandit turpis cursus.Diam vel quam elementum pulvinar etiam non quam.Ut morbi tincidunt augue interdum.Aliquet porttitor lacus luctus accumsan tortor posuere.Vestibulum lectus mauris ultrices eros in cursus."


    const OpenModal = (event) => {
    const actions = [setModal0, setModal1, setModal2, setModal3, setModal4]
        const customid = event.currentTarget.getAttribute('customid')
        const func = actions[customid]
        func(true)
    }

    
    return (
        <Background>
            <Welcome><h1>Bienvenido a mi projecto de Prueba Tecnica Ingertec</h1></Welcome>

            <Modal toggle={() => setModal0(false)} show={modal0} source="kayak">
            </Modal>

            <Modal toggle={() => setModal1(false)} show={modal1} source="jellyfish">
            </Modal>

            <Modal toggle={() => setModal2(false)} show={modal2} source="street">
            </Modal>

            <Modal toggle={() => setModal3(false)} show={modal3} source="canyon">
            </Modal>

            <Modal toggle={() => setModal4(false)} show={modal4} source="light">
            </Modal>

            <Wrapper>
                <Carrousel>
                    {(likesState.length < 1) ? (<h1>ERROR QUERYNG DATA</h1>) : likesState.map((elem, key) => (
                        <Image key={elem.id} customid={key} source={elem.src} views={elem.likes} descrip={lorem} clickHandler={OpenModal} />
                    ))}
                </Carrousel>
            </Wrapper>

                <Container padding-bottom="400px">
                    <Row className="mt-5">
                        <Col sm="12">
                            <Card bg="dark" text="white">
                                <Card.Header>
                                    <h4>Tabla "Resources"</h4>
                                </Card.Header>
                            <Card.Body>
                                    <ResourceTable data={tre} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            <Table >
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
        </Background>
        )
}

export default App

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
`

const Carrousel = styled.div`
    width:90%;
    padding-left:35px;
    padding-right:35px;
    background-color:inherit;
    display:flex;
    align-self:flex-start;
    justify-content:flex-start;
    height: 100vh;
    overflow-x: auto;
    overscroll-behavior-inline:contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1rem;
`

const Welcome = styled.div`
    display:flex;
    background-size:cover;
    font-family:'Anton', sans-serif;
    height:30vh;
    width:100vw;
    margin: auto;
    justify-content:center;
    align-items:center;
    text-align:center;
    overflow: visible;
    h1{
        font-size:xxx-large;
        color:#001220;
        text-shadow: 2px 2px 4px #FFF;
    }
`

const Background = styled.div`
    width:100vw;
    background-image:url(${svgFile});
    background-size:cover;
`