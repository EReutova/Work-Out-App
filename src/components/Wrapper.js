import styled from "styled-components";

const Wrapper = ({children}) => {
    return (
        <Div>
            {children}
        </Div>
    )
}

const Div = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 75vh;
    width: 1200px;
    border-radius: 10px;
    margin: 30px;
    margin-right: 0 auto;
    box-shadow: -2px 2px 10px 5px #cacaca;
    background: rgba(71, 72, 71, 0.7);
    @media all and (max-width: 1180px) {
        margin-top: 10px;
    }
    @media all and (max-width: 912px) {
        min-height: 50vh;
    }
    @media all and (max-width: 768px) {
        min-height: 50vh;
    }
    @media all and (max-width: 540px) {
        min-height: 60vh;
    }
    @media all and (max-width: 414px) {
        min-height: 55vh;
    }
`;

export default Wrapper;