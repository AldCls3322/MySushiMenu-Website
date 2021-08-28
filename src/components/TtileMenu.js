import React from 'react';
import styled from 'styled-components';
import ImgTitle from '../imgs/sushi-title.jpg';

const TtileMenu = () => {
    return (
        <Container>
            <Items>
                <Title>KOMEROBI SUSHI</Title>
                <TextP>Get the best experience in just one bite</TextP>
            </Items>
        </Container>
    )
}

export default TtileMenu

const Container = styled.div`
    position: absolute;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgTitle});
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
`

const Items = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
    text-align: left;
`

const Title = styled.div`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`

const TextP = styled.div`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`
