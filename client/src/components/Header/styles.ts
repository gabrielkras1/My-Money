import styled from 'styled-components';

export const ContainerHeader = styled.div`
    background-color: #121214; 
    /* border-bottom: 1px solid #333; */
    width: 100%; /* w-full */
    height: 8rem;
    padding-top: 50px; 
    padding-bottom: 50px; 
    margin: auto;

    @media (min-width: 640px) {
        padding-top: 1.25rem; /* sm:py-5 */
        padding-bottom: 1.25rem;
        padding-left: 1.5rem; /* sm:px-6 */
        padding-right: 1.5rem;
    }
`;

export const DivButton = styled.div`
    max-width: 61rem; /* max-w-4xl */
    margin-left: auto; /* mx-auto */
    margin-right: auto;
    display: flex; /* flex */
    align-items: center; /* items-center */
    justify-content: space-between;

`;