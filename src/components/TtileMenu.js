import React from 'react';
import styled from 'styled-components';
import ImgTitle from '../imgs/sushi-title.jpg';

const TtileMenu = () => {
    return (
        <Container>
            <Items>
                <Title>KOMEROBI SUSHI</Title>
                <TextP>Get the best experience in just one bite</TextP>
                <OrderButton>Place Your Order</OrderButton>
            </Items>
        </Container>
    )
}

export default TtileMenu

const Container = styled.div`
    height: 100vh;
    width: 100vw;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgTitle});
    background-position: center;
    background-size: cover;
`

const Items = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;

    padding: 0rem calc((100vw - 1300px) / 2);


    width: 650px;

    display: flex;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;

    line-height: 1;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

const Title = styled.div`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #04724d; // #5e60ce; // #2b9348;  // #759319
    letter-spacing: 3px;
`

const TextP = styled.div`
    margin-bottom: 2rem;

    font-size: clamp(2rem, 2.5vw, 3rem);
    font-family: roboto;
`
const OrderButton = styled.div`
    padding: 1rem 4rem;
    
    border: none;
    
    background: #007f5f; //#2b9348;
    color: #fff;
    font-size: 1.4rem;
    font-family: roboto;

    transition: 0.2s ease-out;

    &:hover {
        background: #80b918; // #BFD200; // #80b918;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`
