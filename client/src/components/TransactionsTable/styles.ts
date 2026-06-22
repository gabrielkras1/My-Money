import styled from "styled-components";

export const DivTransactionsTable = styled.div`
    display: flex;
    justify-content: center;
    /* width: 100%; */
    background-color: #323238;

    @media (min-width: 640px) {
        padding-left: 1.5rem; 
        padding-right: 1.5rem;
        margin-top: 2.5rem; 
    }
`

export const ContainerTransactions = styled.div`
    width: 61rem;
    margin-top: 2rem;
    padding-bottom: 2rem; 

`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    width: 100%;

    @media (min-width: 640px) {
        flex-direction: row;
        gap: 0.75rem;
    }
`;

