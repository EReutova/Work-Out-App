import styled from "styled-components";

const Btn = ({children, onClick}) => {
    return(
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

const Button = styled.button`
    margin: 20px 20px 0 20px;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    background: var(--color-red-crayola);
    color: var(--color-charlestone-green);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    overflow: hidden;
    transition: 250ms;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 10px var(--color-red-crayola), 0 0 40px var(--color-red-crayola), 0 0 80px var(--color-red-crayola);
    }
    @media all and (max-width: 912px) {
        padding: 10px 20px;
        margin: 10px 10px 0 10px;
        font-size: 20px;
    }
    @media all and (max-width: 540px) {
        padding: 10px 20px;
        margin: 10px 10px 0 10px;
        font-size: 20px;
    }
    @media all and (max-width: 540px) {
        margin: 20px 20px 0 20px;
        padding: 15px 30px;
        font-size: 20px;
    }
    @media all and (max-width: 414px) {
        margin: 20px 20px 0 20px;
        padding: 10px 20px;
        font-size: 16px;
    }
`;

export default Btn;