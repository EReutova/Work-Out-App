import styled from "styled-components";

import ExsCard from "./ExsCard";
import { useLocation } from 'react-router-dom'

import Wrapper from "./Wrapper";

const Favorites = ({favorites, setFavorites}) => {
    const location = useLocation();

    return (
        <Wrapper>
            {
            !favorites
            ? 
                <Par>You didn't save anything yet</Par>
            : 
                <>
                    <Par>You have {favorites.length} exercises</Par>
                    <Container>
                        {
                            favorites.map((exercise) => {
                                return(
                                    <ExsCard key={exercise._id} location={location} exercise={exercise} favorites={favorites} setFavorites={setFavorites}/>
                                )
                            })
                        }
                    </Container>
                </>
        }
        </Wrapper>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
`;
const Par = styled.p`
    color: white;
    font-size: 28px;
    padding: 20px;
    @media all and (max-width: 540px) {
        font-size: 22px;
    }
    @media all and (max-width: 414px) {
        font-size: 20px;
    }
    @media all and (max-width: 360px) {
        font-size: 18px;
    }
`;
export default Favorites;