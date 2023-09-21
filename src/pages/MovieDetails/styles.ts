import styled from "styled-components"

export const MovieDetailsContainer = styled.div`
  height: 100%;
  background-color: #f3f4f6;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: 3.8rem;

  img {
    max-height: 100vh;
    width: 68.2rem;
  }
`

export const MovieInfo = styled.section`
  flex: 1;

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
    gap: 9rem;
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
    gap: 2.2rem;

    margin-top: 2rem;
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
    margin-right: 7.5rem;

    font-size: 2rem;
  }

  .releaseDate {
    margin-top: 2rem;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  margin-right: 2rem;
`

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;
`
