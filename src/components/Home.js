import { Link } from "react-router-dom";

import styled from "styled-components";

import homeImg from "../home.jpeg";

const Home = () => {

	return (
		<Wrapper>
			<Img src={homeImg}/>
            <Div>
                <Head>Welcome to MakeSweat!</Head> 
                <Par>I'm an app that will help you to built your perfect body!</Par>
                <Par>Access the library of over 1300+ exercises!</Par>
                <Par>Design any workout you can dream!</Par>
                <Par>Or simply choose one of our ready to use workouts!</Par>

                <AnotherDiv>
                    <NavLink to="/exercises">Get Started</NavLink>
                </AnotherDiv>

            </Div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    min-height: 75vh;
    width: 1200px;
    border-radius: 10px;
    margin: 30px;
    margin-right: 0 auto;
    box-shadow: -2px 2px 10px 5px #cacaca;
    background: rgba(71, 72, 71, 0.7);

    @media all and (max-width: 1180px) {
        width: 90%;
        min-height: 30vh;
        margin-top: 10px;
    }
`;
const Img = styled.img`
    width: 600px;
    height: 600px;
    padding: 20px;
    @media all and (max-width: 1180px) {
        width: 500px;
        height: 500px;
    }
    @media all and (max-width: 912px) {
        width: 400px;
        height: 400px;
        padding: 20px 10px 20px 20px;
    }
    @media all and (max-width: 540px) {
        display: none;
    }
`;
const Div = styled.div`
    width: 45%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: var(--color-platinum);
    @media all and (max-width: 1180px) {
        width: 500px;
    }
    @media all and (max-width: 912px) {
        width: 400px;
        padding: 20px 20px 20px 10px;
    }
    @media all and (max-width: 540px) {
        width: 100%;
    }
`;
const Head = styled.h3`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin: 10px;
    @media all and (max-width: 912px) {
        font-size: 20px;
    }
    @media all and (max-width: 414px) {
        font-size: 16px;
    }
`;
const Par = styled.p`
    font-size: 20px;
    margin: 10px;
    @media all and (max-width: 912px) {
        font-size: 18px;
    }
    @media all and (max-width: 414px) {
        font-size: 14px;
    }
`;
const AnotherDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    @media all and (max-width: 912px) {
        margin-top: 20px;
    }
`;
const NavLink = styled(Link)`
    text-decoration: none;
    background: var(--color-red-crayola);
    color: var(--color-charlestone-green);
    border: none;
    /* height: 60px; */
    padding: 20px;
    margin: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    width: 370px;
    margin-right: 0 auto;
    transition: ease-in-out 700ms;
    outline-style: none;
    &:hover{
        cursor: pointer;
        width: 420px;
        box-shadow: 0 0 10px var(--color-red-crayola), 0 0 40px var(--color-red-crayola), 0 0 80px var(--color-red-crayola);
    }
    &:focus{
        transition: ease-in-out 700ms;
        width: 420px;
        box-shadow: 0 0 10px var(--color-red-crayola), 0 0 40px var(--color-red-crayola), 0 0 80px var(--color-red-crayola);
    }
    @media all and (max-width: 1180px) {
        width: 300px;
        &:hover{
            width: 300px;
        }
        &:focus{
            width: 300px;
        }
    }
    @media all and (max-width: 912px) {
        width: 250px;
        &:hover{
            width: 250px;
        }
        &:focus{
            width: 250px;
        }
    }
    @media all and (max-width: 540px) {
        &:hover{
            width: 300px;
        }
        &:focus{
            width: 300px;
        }
    }
    @media all and (max-width: 414px) {
        width: 200px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
        padding: 10px;
        &:hover{
            width: 200px;
        }
        &:focus{
            width: 200px;
        }
    }
`;
export default Home;
