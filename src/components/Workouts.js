import { useState } from "react";
import { useLocation } from 'react-router-dom'

import styled from "styled-components";

import { AiOutlineLeftCircle }  from 'react-icons/ai';
import { AiOutlineRightCircle }  from 'react-icons/ai';

import { wots } from "../data";
import ExsCard from "./ExsCard";
import Wrapper from "./Wrapper";

const Workouts = () => {
    const location = useLocation();

    const [counter, setCounter] = useState(0);
    const [workout, setWorkout] = useState(wots[counter]);

    const handlePrevious = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setWorkout(wots[counter - 1]);
		}
		else{
			setCounter(wots.length - 1);
            setWorkout(wots[wots.length - 1]);
		}
    }

    const handleNext = () => {
        if (counter < wots.length - 1) {
            setCounter(counter + 1);
            setWorkout(wots[counter + 1]);
		}
		else{
			setCounter(0);
            setWorkout(wots[0]);
		}
    }

    return (
        <Wrapper>
            <Div>
                <Button onClick={handlePrevious}><Left/></Button>
                <Par>Day {counter + 1}</Par>
                <Button onClick={handleNext}><Right/></Button>
            </Div>
            <Container>
                {
                    workout.map((exercise, index) => {
                        return(
                            <ExsCard key={index} location={location} exercise={exercise}/>
                        )
                    })
                }
            </Container>
        </Wrapper>
    )
}
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    @media all and (max-width: 820px) {
        width: 50%;
    }
    @media all and (max-width: 540px) {
        width: 70%;
    }
`;
const Button = styled.button`
    border: none;
    background: transparent;
    color: #fff;
    width: 50px;
    cursor: pointer;
    &:hover{
        color: var(--color-red-crayola);
    }
`;
const Left = styled(AiOutlineLeftCircle)`
    height: 50px;
    width: 50px;
    @media all and (max-width: 540px) {
        width: 40px;
        height: 40px;
    }
`;
const Right = styled(AiOutlineRightCircle)`
    height: 50px;
    width: 50px;
    @media all and (max-width: 540px) {
        width: 40px;
        height: 40px;
    }
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
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
`;
export default Workouts;