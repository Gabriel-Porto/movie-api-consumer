import styled from "styled-components"

export const HomeContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9rem;
    width: 100%;

    padding: 5rem 22rem;

    background-color: #030712;
  }

  .inputSearch {
    display: flex;
    justify-content: start;
    align-items: flex-start;

    width: 30rem;
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

  .inputContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
  }

  .inputContainer button {
    position: absolute;
    left: 29rem;

    border-radius: 0 10px 10px 0;
    border: none;
    background: #ff6347;

    height: 4rem;
    padding: 0.5rem;

    padding-left: 1.2rem;

    cursor: pointer;
  }

  .title {
    color: #f3f4f6;
    font-size: 4.8rem;
  }

  .list {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 3rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1100px) {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1100px) {
    .home img {
      display: none;
    }
  }

  @media (min-width: 1400px) {
    .list {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 1800px) {
    .list {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  main {
    padding: 10rem 20rem 5rem;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .spinner {
    margin-top: 20rem;
    height: 15rem;
    width: 15rem;
  }

  .heroText {
    display: flex;
    align-items: start;
    justify-content: center;

    gap: 2.5rem;
    flex-direction: column;
  }

  .heroText p {
    font-size: 2.4rem;
  }

  .home {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 35.2rem;
    gap: 22rem;

    margin-bottom: 7.5rem;
  }

  .home h1 {
    color: #fff;
    font-size: 3.6rem;
    font-weight: 500;
    width: 44.5rem;
  }

  .home img {
    max-width: 70rem;
    height: auto;
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
