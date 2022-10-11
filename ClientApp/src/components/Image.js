import styled from 'styled-components'

const Image = ({ descrip, source, clickHandler, views, customid }) => {

    return (
        <Container>
            <ImgContainer>
                <img customid={customid} onClick={clickHandler} src={require(`../assets/${source}.jpg`)} alt={source} ></img>
            </ImgContainer>
                <Views>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <p>{views}</p>
                </Views>
                <p>{descrip.substring(0,200) + " ..."}</p>
        </Container>
        )

}

export default Image

const Container = styled.div`
    margin: 5px;
    min-height: 650px;
    max-height: 650px;
    width: 20rem;
    background-color:white;
    border-radius:10px;
    box-shadow: 5px 5px 19px 1px rgba(0,0,0,0.51);
    scroll-snap-align:center;
    p{
        padding: 10px 15px;
        text-align:justify;
        overflow:auto;
    }
`
const ImgContainer = styled.div`
    margin:auto;
    max-height:400px;
    width: 320px;
    padding: 0px;
    border-radius:10px;
    background-color: white;
    object-fit: cover;
    overflow:hidden;
    img{
        border-radius:10px;
        max-width:100%;
        &:hover{
            cursor:pointer;
        }
    }
`
const Views = styled.div`
    background-color: white;
    padding-left: 15px;
    display: flex;
    align-items: center;
    align-self: center;
    height: 30px;
    p{
        all:revert;
        padding: 0 10px;
        margin: auto 0px;
    }

`