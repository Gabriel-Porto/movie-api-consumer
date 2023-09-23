import styled from "styled-components"
import { device } from "../../styles/responsivity"

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
  width: 100%;

  background-color: #1d5d86;

  h1 {
    color: #ff6347;
    font-size: 3rem;
  }
`

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6.5rem;

  h1 {
    max-width: 48rem;
    font-size: 3.6rem;
    font-weight: 500;
  }

  @media (max-width: 1023px) {
    img {
      display: none;
    }
  }

  img {
    max-width: 50rem;
  }

  .heroText {
    display: flex;
    align-items: start;
    justify-content: center;
    margin-inline: 2rem;

    gap: 2.5rem;
    flex-direction: column;
  }

  .heroText p {
    font-size: 2.4rem;
  }

  .inputContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
  }

  .inputContainer button {
    position: absolute;
    left: 24rem;
    height: 4rem;
    width: 4rem;

    border-radius: 0 10px 10px 0;
    border: none;
    background: #ff6347;

    padding: 0.5rem;

    padding-left: 1.2rem;

    cursor: pointer;
  }

  .inputSearch {
    width: 25rem;
    height: 4rem;
    padding: 1.2rem 1.5rem;

    border-radius: 10px;
    border: 1px solid #ff6347;
    background: #f3f4f6;

    font-size: 1.6rem;
    color: #1f2937;
    z-index: 2;
  }

  .inputSearch:hover {
    outline: 1px solid #ff6347;
  }
`

export const MovieList = styled.section`
  display: grid;
  grid-template-columns: auto minmax(1, 1fr);
  gap: 3rem;
  margin-top: 11rem;

  transition: 2s;

  @media (min-width: 500px) {
    & {
      grid-template-columns: auto repeat(1, 1fr);
    }
  }

  @media ${device.tablet} {
    & {
      grid-template-columns: auto repeat(2, 1fr);
    }
  }

  @media ${device.laptop} {
    & {
      grid-template-columns: auto repeat(3, 1fr);
    }
  }

  @media ${device.laptopL} {
    & {
      grid-template-columns: auto repeat(4, 1fr);
    }
  }

  .movie {
    position: relative;
    width: 20rem;
    background-color: #1e2021;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
  }

  .movie:hover {
    transform: scale(1.05);
  }

  .movie img {
    width: 100%;
    height: 300px;
  }

  .movie-info {
    position: absolute;
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 0 0 10px 10px;
    padding: 1rem;
    color: #fff;
    background-color: #030712;
    opacity: 0;

    transition: 0.3s;
  }

  .movie-info h2 {
    font-size: 1.4rem;
    max-width: 18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
  }

  .movie:hover .movie-info {
    top: 25.6rem;
    opacity: 1;
    transform: scale(1.05);
  }
`
