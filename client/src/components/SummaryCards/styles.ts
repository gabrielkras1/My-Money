import styled from 'styled-components';

export const DivCards = styled.div`
  top: 10px;
  max-width: 61rem;
  /* margin-top: 2rem; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: -2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  /* background-color: #323238; */
  top:  5px;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`;