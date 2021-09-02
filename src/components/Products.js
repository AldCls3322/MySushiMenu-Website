import React, {useState, useEffect, forwardRef} from 'react'
import styled from 'styled-components';
import database from '../firebase/config';

const Products = ({heading, collection}, ref) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        database.collection(collection)
            .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
                let document = []; // creates an array of objects that are our images images
                snap.forEach(doc => {
                    document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
                });
                setDocs(document); // places the document array onto the 'docs' created in line 5
            });
    }, [collection]) // the dependecies that changes are written inside the '[]', this case its 'collection'}

    return (
        <Container ref={ref}>
            <Heading>{heading}</Heading>
            <Wrapper>
                { docs && docs.map( (doc) => {
                    return (
                        <Card key={doc.id}>
                            <CardImg src={doc.img} alt={doc.alt} />
                            <CardInfo>
                                <CardTitle>{doc.name}</CardTitle>
                                <CardDesc>{doc.desc}</CardDesc>
                                <CardPrice>{doc.price}</CardPrice>
                            </CardInfo>
                        </Card>
                    );
                })}
            </Wrapper>
        </Container>
    )
}

const forwardProducts = forwardRef(Products)

export default forwardProducts

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    padding: 5rem calc((100vw - 1300px) / 2);

    background: rgba(0,0,0,1);
    color: #fff;
`

const Heading = styled.h1`
    margin-bottom: 5rem;

    text-align: center;
    font-size: clamp(2rem, 2.5vw, 3rem);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;

    flex-wrap: wrap;
`

const Card = styled.div`
    width: 300px;

    margin: 0 2rem;

    line-height: 2;
`

const CardImg = styled.img`
    height: 300px;

    box-shadow: 8px 8px #04724d;

    min-width: 300px;
    max-width: 100%;
`

const CardTitle = styled.h2`
    font-weight: 400;
    font-size: 1.8rem;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    text-align: center;
    font-size: 1.3rem;
`

const CardDesc = styled.p`
    margin-bottom: 1rem;
`

const CardPrice = styled.p`
    margin-bottom: 1rem;

    font-size: 2rem;
`
