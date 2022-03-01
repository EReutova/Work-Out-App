import { useState } from "react";
import styled from "styled-components";

import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

import Btn from "./Btn";

const ExsCard = ({exercise, favorites, setFavorites, location}) => {

    const [message, setMessage] = useState(null);

    const [error, setError] = useState(null);

    const handleAddToFavorite = (exs, ev) => {
        let newFav = favorites.find((el)=> {
            return(el._id === exs._id)
        })
        if (newFav){
            setError("Exercise is already added");
            setMessage(null);
        }
        else{
            setFavorites([...favorites, exs]);
            setMessage("Exercise was added");
            setError(null);
            sessionStorage.setItem("favorites", JSON.stringify([...favorites, exs]));
        }
    }

    const handleDelete = (exs, ev) => {
        let newFav = favorites.filter((el)=> {
            return(el._id !== exs._id)
        })
        setFavorites(newFav);
        sessionStorage.setItem("favorites", JSON.stringify(newFav));
    }

    return(
        <Wrapper>
            {
                location.pathname === "/exercises" &&
                <Button onClick={(ev)=> {handleAddToFavorite(exercise, ev)}}><Favorite/></Button>
            }
                        {
                location.pathname === "/favorites" &&
                <Button onClick={(ev)=> {handleDelete(exercise, ev)}}><Trash/></Button>
            }
            <Img src={exercise.gifUrl}/>
            <Head>{exercise.name}</Head>
            <Par>Equipment: {exercise.equipment}</Par>
            <Par>Target: {exercise.target}</Par>
            {
                exercise.description &&
                <Par>Description: {exercise.description}</Par>
            }
            {
                message === null && error === null && location.pathname === "/exercises" &&
                <Btn onClick={(ev) => handleAddToFavorite(exercise, ev)}>Add to favorites</Btn>                    
            }
            {
                message === null && error === null && location.pathname === "/favorites" &&
                <Btn onClick={(ev) => handleDelete(exercise, ev)}>Delete</Btn>                    
            }
            {
                message !== null &&
                <Message>{message}</Message>
            }
            {
                error !== null &&
                <Error>{error}</Error>
            }
        </Wrapper>
        )
}

const Wrapper = styled.div`
    position: relative;
    width: 400px;
    background: rgba(234, 235, 234, 0.7);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    &:hover{
        box-shadow: 0 0 10px var(--color-davys-grey), 0 0 20px var(--color-davys-grey), 0 0 30px var(--color-davys-grey);
    }
    @media all and (max-width: 1180px) {
        width: 380px;
    }
    @media all and (max-width: 912px) {
        width: 320px;
    }
    @media all and (max-width: 768px) {
        width: 300px;
    }
    @media all and (max-width: 540px) {
        width: 400px;
    }
    @media all and (max-width: 414px) {
        width: 300px;
    }
`;
const Button = styled.button`
    position: absolute;
    border: none;
    background: transparent;
    color: var(--color-davys-grey);
    top: 5px;
    right: 5px;
    width: 50px;
    cursor: pointer;
    &:hover{
        color: var(--color-red-crayola);
    }
`;
const Favorite = styled(AiOutlineHeart)`
    width: 50px;
    height: 50px;
    @media all and (max-width: 540px) {
        width: 40px;
        height: 40px;
    }
`;
const Trash = styled(BsTrash)`
    width: 50px;
    height: 50px;
    @media all and (max-width: 540px) {
        width: 40px;
        height: 40px;
    }
`;
const Img = styled.img`
    width: 90%;
    margin: 20px;
    @media all and (max-width: 1180px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
`;
const Head = styled.h3`
    width: 100%;
    min-height: 75px;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    @media all and (max-width: 540px) {
        font-size: 18px;
    }
    @media all and (max-width: 414px) {
        font-size: 16px;
    }
`;
const Par = styled.p`
    width: 100%;
    font-size: 20px;
    text-align: center;
    @media all and (max-width: 414px) {
        font-size: 16px;
    }
`;
const Message = styled.p`
    padding: 10px;
    margin: 25px 25px 0 25px;
    font-size: 22px;
    text-align: center;
    color: #229481;
    border: 2px solid #229481;
    border-radius: 5px;
    @media all and (max-width: 912px) {
        font-size: 18px;
        margin: 10px 15px 0 15px;

    }
`;
const Error = styled(Message)`
    color: var(--color-red-crayola);
    border: 2px solid var(--color-red-crayola);
`;
export default ExsCard;