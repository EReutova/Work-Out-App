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
                            <Option>Select equipment</Option>
                            <Option>assisted</Option>
                            <Option>band</Option>
                            <Option>barbell</Option>
                            <Option>body weight</Option>
                            <Option>bosu ball</Option>
                            <Option>cable</Option>
                            <Option>dumbbell</Option>
                            <Option>elliptical machine</Option>
                            <Option>ez barbell</Option>
                            <Option>hammer</Option>
                            <Option>kettlebell</Option>
                            <Option>leverage machine</Option>
                            <Option>medicine ball</Option>
                            <Option>olympic barbell</Option>
                            <Option>resistance band</Option>
                            <Option>roller</Option>
                            <Option>rope</Option>
                            <Option>skierg machine</Option>
                            <Option>sled machine</Option>
                            <Option>smith machine</Option>
                            <Option>stability ball</Option>
                            <Option>stationary bike</Option>
                            <Option>stepmill machine</Option>
                            <Option>tire</Option>
                            <Option>trap bar</Option>
                            <Option>upper body ergometer</Option>
                            <Option>weighted</Option>
                            <Option>wheel roller</Option>
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
                            <Option>Select target</Option>
                            <Option>abductors</Option>
                            <Option>abs</Option>
                            <Option>adductors</Option>
                            <Option>biceps</Option>
                            <Option>calves</Option>
                            <Option>cardiovascular system</Option>
                            <Option>delts</Option>
                            <Option>forearms</Option>
                            <Option>glutes</Option>
                            <Option>hamstrings</Option>
                            <Option>lats</Option>
                            <Option>levator scapulae</Option>
                            <Option>pectorals</Option>
                            <Option>quads</Option>
                            <Option>serratus anterior</Option>
                            <Option>spine</Option>
                            <Option>traps</Option>
                            <Option>triceps</Option>
                            <Option>upper back</Option>
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
const Option = styled.option`
    color: #000;
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