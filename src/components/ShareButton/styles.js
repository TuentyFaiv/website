import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 40px;
  button {
    display: flex;
    width: 150px;
    height: 45px;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    outline: 0;
    align-items: center;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid var(--mdc-theme-secondary);
      p {
        color: var(--mdc-theme-secondary);
      }
    }
  }
  img {
    width: 45px;
    height: 45px;
    margin: 0 10px 0 0;
    padding: 5px;
    object-fit: cover;
  }
  p {
    margin: 0;
    font-size: 18px;
  }

  @media screen and (min-width: 801px) {
    width: 54%;
    margin: 20px 23%;
  }

  @media screen and (max-width: 800px) {
    width: 70%;
    margin: 20px 15%;
  }

  @media screen and (max-width: 510px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  width: 160px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  background-color: var(--mdc-theme-secondary);
  align-items: center;
  justify-content: space-between;
  top: -47px;
  left: 10px;
  z-index: 999;
  &:hover {
    cursor: default;
  }
  a {
    width: 32px;
    height: 32px;
  }
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin: 0;
    padding: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Square = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--mdc-theme-secondary);
  transform: rotateZ(45deg);
  z-index: 99;
  top: -17px;
  left: 80px;
`;