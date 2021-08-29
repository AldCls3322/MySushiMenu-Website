import React from 'react'
import styled from 'styled-components';
import FeaturePic from '../imgs/lili-liu-5PQpACifvuA-unsplash.jpg';

const Feature = () => {
    return (
        <Container>
            <h1>Sushi of the Day</h1>
            <p>Smoked salmon topped with 24 carat gold dust.</p>
            <FtButton>Order Now</FtButton>
        </Container>
    )
}

export default Feature

const Container = styled.div`
    height: 100vh;
    max-height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
    background-position: center;
    bakcground-size: cover;
    color: #fff;

    text-align: center;

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`

const FtButton = styled.button`
    padding: 0.6rem 3rem;
    border: none;

    background: #80b918;
    color: #000;
    font-size: 1.4rem;

    transition: 0.2s ease-out;

    &:hover{
        background: #007f5f;
        color: #fff;

        transition: 0.2s ease-out;
        cursor: pointer;
    }
`
