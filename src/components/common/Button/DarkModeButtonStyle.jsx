import styled from "styled-components";
import sun from '../../../assets/images/sun.svg'
import moon from '../../../assets/images/moon.svg'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 39rem;
  height: 82rem;
  pointer-events: none;
  z-index: 99999999;
`;

export const Button = styled.button`
  position: absolute;
  right: 3rem;
  bottom: 15rem;
  width: 5.9rem;
  height: 3.4rem;
  border-radius: 50%;
  pointer-events: auto;

.switch {
  display: inline-block;
  position: relative;
  width: 3.5em;
  height: 2em;
  font-size: 17px;
}

.switch input {
  width: 0;
  height: 0;
  opacity: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(187, 183, 193, 0.5);
  border: 1px solid #979797;
  border-radius: 30px;
  cursor: pointer;
  transition: .5s;
}

.slider:after {
  content: "";
  position: absolute;
  left: 10%;
  bottom: 15%;
  width: 1.4em;
  height: 1.4em;
  background: ${({ theme }) => theme.colors.mainColor} url(${sun}) no-repeat center / auto 70%;
  border-radius: 50%;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  transition: .5s;
}

input:checked + .slider {
  background-color: rgb(187, 183, 193, 0.5);
}

input:checked + .slider:after {
  background: #6521D3 url(${moon}) no-repeat center / auto 70%;
  transform: translateX(90%);
}
`