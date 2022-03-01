import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";

import { FaDumbbell } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { SiWheniwork } from 'react-icons/si';

import bg from "./title.jpeg"
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import Workouts from "./components/Workouts";
import Favorites from "./components/Favorites";
import Logo from "../src/Logo.png"
import GlobalStyles from "./GlobalStyles";
import { exs } from "./data";

const App = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
	const [exercises, setExersises] = useState(exs);
	const [showExercises, setShowExercises] = useState(false);
    const [favorites, setFavorites] = useState(() => { 
        const fav = sessionStorage.getItem("favorites");
        return fav !== null ? JSON.parse(fav) : [];    
    }) 

	const handleShowExercises = () => {
		setExersises(exs);
		setShowExercises(false);
        setScreenSize(window.innerWidth);
	}

	return (
		<Main>
            <Background/>
			<Router>
				<GlobalStyles/>
				<NavBar>

					<Link to="/"><ImgLogo src={Logo}/></Link>
                    {
                        screenSize > 768 &&
                        <>
                            <NavLink to="/exercises" onClick={handleShowExercises}>
                                <Span1></Span1>
                                <Span2></Span2>
                                <Span3></Span3>
                                <Span4></Span4>
                                Exercises
                            </NavLink>

                            <NavLink to="/workouts">
                                <Span1></Span1>
                                <Span2></Span2>
                                <Span3></Span3>
                                <Span4></Span4>
                                Workouts
                            </NavLink>

                            <NavLink to="/favorites">
                                <Span1></Span1>
                                <Span2></Span2>
                                <Span3></Span3>
                                <Span4></Span4>
                                Favorites
                            </NavLink>
                        </>
                    }
                    {
                        screenSize <= 768 &&
                        <>
                            <IconLink to="/exercises" onClick={handleShowExercises}><Exs/></IconLink>
                            <IconLink to="/workouts"><Wot/></IconLink>
                            <IconLink to="/favorites"><Fav/></IconLink>
                        </>
                    }

				</NavBar>

				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/exercises" element={<Exercises favorites={favorites} setFavorites={setFavorites} exercises={exercises} setExersises={setExersises} showExercises={showExercises} setShowExercises={setShowExercises} handleShowExercises={handleShowExercises}/>} />
					<Route path="/workouts" element={<Workouts />} />
					<Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} />
				
				</Routes>
			</Router>
		</Main>
	);
}

const Main = styled.div`
	margin-top: 100px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 414px) {
        margin-top: 60px;
    }
`;
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    height: 100vh;
    width: 100%;
    z-index: -100;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    width: 100vw;
    background: #2A2B2A;
    position: fixed;
    top: 0;
	z-index: 200;
    @media all and (max-width: 1180px) {
        height: 80px;
    }
    @media all and (max-width: 414px) {
        height: 50px;
    }
`;
const ImgLogo = styled.img`
    height: 80px;
    margin: 10px 20px;
	position: fixed;
	left: 20px;
	top: 0;
    cursor: pointer;
    @media all and (max-width: 1180px) {
        height: 60px;
        left: 10px;
    }
    @media all and (max-width: 414px) {
        height: 40px;
        margin: 5px 10px 5px 10px;
    }
`;
const NavLink = styled(Link)`
	text-decoration: none;
	margin: 20px;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    background: transparent;
    color: var(--color-red-crayola);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    overflow: hidden;
    transition: 250ms;
    border: none;
    &:hover{
        cursor: pointer;
        span:nth-child(1){
            left: 100%;
            transition: 1s;
        }
        span:nth-child(3){
            right: 100%;
            transition: 1s;
        }
        span:nth-child(2){
            top: 100%;
            transition: 1s;
            transition-delay: 250ms;
        }
        span:nth-child(4){
            bottom: 100%;
            transition: 1s;
            transition-delay: 250ms;
        }
    }
    &:hover{
        cursor: pointer;
        background: var(--color-red-crayola);
        color: #2A2B2A;
        box-shadow: 0 0 10px var(--color-red-crayola), 0 0 40px var(--color-red-crayola), 0 0 80px var(--color-red-crayola);
        transition-delay: 500ms;
    }
    @media all and (max-width: 1180px) {
        margin: 10px;
        padding: 10px 20px;
        font-size: 20px;
    }
`;
const Span1 = styled.span`
    position: absolute;
    display: block;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,var(--color-red-crayola));
`;
const Span2 = styled.span`
    position: absolute;
    display: block;
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,var(--color-red-crayola));
`;
const Span3 = styled.span`
    position: absolute;
    display: block;
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,var(--color-red-crayola));
`;
const Span4 = styled.span`
    position: absolute;
    display: block;
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(260deg,transparent,var(--color-red-crayola));
`;
const IconLink = styled(Link)`
    background: var(--color-charlestone-green);
    color: var(--color-red-crayola);
    padding: 10px 15px;
    margin: 10px;
    border: 2px solid var(--color-charlestone-green);
    border-radius: 3px;
    outline-style: none;
    &:hover{
        cursor: pointer;
        border: 2px solid var(--color-red-crayola);
    }
    &:focus{
        cursor: pointer;
        border: 2px solid var(--color-red-crayola);
    }
    @media all and (max-width: 414px) {
        padding: 5px 10px;
        margin: 10px;
    }
`;
const Exs = styled(SiWheniwork)`
    width: 30px;
    height: 30px;
    @media all and (max-width: 414px) {
        width: 20px;
        height: 20px;
    }
`;
const Wot = styled(FaDumbbell)`
    width: 30px;
    height: 30px;
    @media all and (max-width: 414px) {
        width: 20px;
        height: 20px;
    }
`;
const Fav = styled(AiFillHeart)`
    width: 30px;
    height: 30px;
    @media all and (max-width: 414px) {
        width: 20px;
        height: 20px;
    }
`;
export default App;
