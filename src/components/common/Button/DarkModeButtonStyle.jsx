import styled from "styled-components";
import sun from '../../../assets/images/sun.svg'
import moon from '../../../assets/images/moon.svg'

export const Container = styled.div`
  pointer-events: none;
  position: fixed;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 39rem;
  height: 82rem;
  display: flex;
  align-items: flex-end;
  z-index: 99999999;
`;

export const Button = styled.button`
  pointer-events: auto;
  position: absolute;
  bottom: 15rem;
  right: 3rem;
  width: 5.9rem;
  height: 3.4rem;
  border-radius: 50%;

  .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(187, 183, 193, 0.5);
  border: 1px solid #979797;
  transition: .5s;
  border-radius: 30px;
}

.slider:after {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  background: #6521D3 url(${sun}) no-repeat center / auto 70%;
  transition: .5s;
}

input:checked + .slider {
  background-color: rgb(187, 183, 193, 0.5);
}

input:checked + .slider:after {
  transform: translateX(90%);
  background: #6521D3 url(${moon}) no-repeat center / auto 70%;
}
`