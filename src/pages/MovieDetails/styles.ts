import styled from "styled-components"

export const MovieInfo = styled.section`
  margin: 0 auto;
  width: 80%;

  a {
    margin-top: 3.5rem;
    width: fit-content;

    display: flex;
    align-items: center;

    text-decoration: none;
    color: #ff6347;
    font-family: Lato, sans-serif;
    font-size: 2.4rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3.5rem;
  }

  h1 {
    color: #1d5d86;
    font-family: Lato, sans-serif;
    font-size: 4.8rem;
    font-weight: 700;
  }

  p {
    color: #1d5d86;
    font-size: 2.4rem;
  }

  .genres {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    margin-top: 2rem;
  }

  @media (max-width: 375px) {
    .genres {
      flex-direction: column;
      align-items: start;
    }
  }

  span {
    background-color: #ff6347;
    color: #f3f4f6;
    padding: 0.5rem 2rem;
    border-radius: 50px;
    text-align: center;
    font-size: 2rem;
  }

  .summary {
    margin-top: 2rem;

    font-size: 2rem;
  }

  .releaseDate {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
`

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;
`
