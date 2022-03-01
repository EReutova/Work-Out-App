import { useState } from "react";
import { useLocation } from 'react-router-dom'

import styled from "styled-components";

import Btn from "./Btn";
import ExsCard from "./ExsCard";
import Wrapper from "./Wrapper";

const Exercises = ({favorites, setFavorites, exercises, setExersises, showExercises, setShowExercises, handleShowExercises}) => {
    const location = useLocation();

    const initialState = {
        equipment: "",
        target: "",
    }

    const [search, setSearch] = useState(initialState);

    const updateSearchData = (value, name) => {      
        setSearch({...search, [name]: value});
    }

    const handleSearch = (ev) => {
        ev.preventDefault();
        let result = null;
        let resultByEquipment = null;
        let resultByTarget = null;
        if (search.equipment){
            resultByEquipment = exercises.filter((item) => {
                return item.equipment.includes(search.equipment)
            })
            setExersises(resultByEquipment)
        }

        if (search.target){
            resultByTarget = exercises.filter((item) => {
                return item.target.includes(search.target)
            })
            setExersises(resultByTarget)
        }

        if (search.target && search.equipment) {
            result = resultByEquipment.filter((item) => {
                return item.target.includes(search.target)
            })
            setExersises(result);
        }
        setShowExercises(true);
    }

    const handleViewAll = () => {
        setShowExercises(true);
    }

    return (
        <Wrapper>
        {
            showExercises === false &&
            <Form onSubmit={handleSearch}>
                <Div>
                    <Label>Choose equipment
                        <Select 
                            name="equipment"
                            onChange={(ev)=> updateSearchData(ev.target.value, ev.target.name)} 
                            defaultValue="Select equipment"
                        >
                            <option>Select equipment</option>
                            <option>assisted</option>
                            <option>band</option>
                            <option>barbell</option>
                            <option>body weight</option>
                            <option>bosu ball</option>
                            <option>cable</option>
                            <option>dumbbell</option>
                            <option>elliptical machine</option>
                            <option>ez barbell</option>
                            <option>hammer</option>
                            <option>kettlebell</option>
                            <option>leverage machine</option>
                            <option>medicine ball</option>
                            <option>olympic barbell</option>
                            <option>resistance band</option>
                            <option>roller</option>
                            <option>rope</option>
                            <option>skierg machine</option>
                            <option>sled machine</option>
                            <option>smith machine</option>
                            <option>stability ball</option>
                            <option>stationary bike</option>
                            <option>stepmill machine</option>
                            <option>tire</option>
                            <option>trap bar</option>
                            <option>upper body ergometer</option>
                            <option>weighted</option>
                            <option>wheel roller</option>
                        </Select>
                    </Label>
                </Div>
                <Div>
                    <Label>Choose target
                        <Select 
                            name="target"
                            onChange={(ev)=> updateSearchData(ev.target.value, ev.target.name)} 
                            defaultValue="Select target"
                        >
                            <option>Select target</option>
                            <option>abductors</option>
                            <option>abs</option>
                            <option>adductors</option>
                            <option>biceps</option>
                            <option>calves</option>
                            <option>cardiovascular system</option>
                            <option>delts</option>
                            <option>forearms</option>
                            <option>glutes</option>
                            <option>hamstrings</option>
                            <option>lats</option>
                            <option>levator scapulae</option>
                            <option>pectorals</option>
                            <option>quads</option>
                            <option>serratus anterior</option>
                            <option>spine</option>
                            <option>traps</option>
                            <option>triceps</option>
                            <option>upper back</option>
                        </Select>
                    </Label>
                </Div>

                <Buttons>
                    <Btn type="submit">search</Btn>
                    <Btn onClick={handleViewAll}>View all</Btn>
                </Buttons>                
            </Form>
        }
        {
            showExercises === true && exercises.length !== 0 &&
            <>
                <Par>Result: {exercises.length} exercises</Par>
                <Container>
                    {
                        exercises.map((exercise) => {
                            return(
                                <ExsCard key={exercise._id} location={location} exercise={exercise} favorites={favorites} setFavorites={setFavorites}/>
                            )
                        })
                    }
                </Container>
            </>
        }
        {
            exercises.length === 0 &&
            <>
                <Par>No matches were found</Par>
                <Btn onClick={handleShowExercises}>Try again</Btn>
            </>
        }
        </Wrapper>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-eerie-black);
    color: white;
    width: 600px;
    height: 200px;
    margin: 10px;
    @media all and (max-width: 1180px) {
        height: 140px;
    }
    @media all and (max-width: 540px) {
        width: 480px;
        height: 120px;
    }
    @media all and (max-width: 414px) {
        width: 340px;
    }
    @media all and (max-width: 360px) {
        width: 300px;
    }
`;
const Label = styled.label`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    width: 500px;
    font-size: 20px;
    @media all and (max-width: 540px) {
        width: 450px;
        font-size: 18px;
    }
    @media all and (max-width: 414px) {
        width: 340px;
    }
    @media all and (max-width: 360px) {
        width: 300px;
    }
`;
const Select = styled.select`
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 3px;
    @media all and (max-width: 540px) {
        padding: 10px;
        margin-top: 10px;
        font-size: 16px;
    }
    @media all and (max-width: 540px) {
        font-size: 18px;
    }
    @media all and (max-width: 414px) {
        font-size: 16px;
    }
    @media all and (max-width: 360px) {
        font-size: 14px;
    }
`;
const Buttons = styled.div`
    display: flex;
    margin-left: 0 auto;
    padding-bottom: 20px;
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
`;
const Par = styled.p`
    color: white;
    font-size: 28px;
    padding: 20px 20px 0 20px;
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
export default Exercises;