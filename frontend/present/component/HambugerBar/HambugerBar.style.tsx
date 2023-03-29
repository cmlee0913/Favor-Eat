import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
  transition: all 0.1s ease;

  & svg {
    display: inline-block;
    width: 30px;
    height: auto;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;

      transition: all 0.1s ease;
      transform: translate(${(props) => (props.isOpen ? "-30px" : 0)}, 0);
      -webkit-transform: translate(${(props) => (props.isOpen ? "-30px" : 0)}, 0); /** Safari & Chrome **/
      -o-transform: translate(${(props) => (props.isOpen ? "-30px" : 0)}, 0); /** Opera **/
      -moz-transform: translate(${(props) => (props.isOpen ? "-30px" : 0)}, 0); /** Firefox **/
    }

    &:nth-child(2) {
      position: relative;

      transition: all 0.1s ease;
      transform: translate(${(props) => (props.isOpen ? "-10px" : 0)}, 0);
      -webkit-transform: translate(${(props) => (props.isOpen ? "-10px" : 0)}, 0); /** Safari & Chrome **/
      -o-transform: translate(${(props) => (props.isOpen ? "-10px" : 0)}, 0); /** Opera **/
      -moz-transform: translate(${(props) => (props.isOpen ? "-10px" : 0)}, 0); /** Firefox **/
    }
  }

  &:hover {
    gap: 5px;
  }
`;
