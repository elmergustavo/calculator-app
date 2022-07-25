import styled, {createGlobalStyle} from "styled-components";

type Props ={
    color?: string;
    bg?:string;
    bdbox?:string;
    gc?:string;
}

type Theme = {
    theme: string;
}

export const Container = styled.div`
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
    user-select: none;

    @media screen and (min-width: 450px){
        min-width: 340px;
        
    }

`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Header = styled(Flex)`
    justify-content: space-between;
    color: var(--white-text);
    font-size: 1.2rem;

`

export const WrapperSwitch = styled(Flex)`
    width: 115px;
    font-size: 0.85rem;
    align-items: flex-end;
    justify-content: space-between;
`

export const Switch = styled.div`
    font-size: 0.9rem;
    flex: 0.75;
    justify-content: center;
    align-items: center;

    > div:first-of-type {
        width: 80%;
        font-size: 0.65rem;
        font-weight: 100;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }

`

export const SwitcherContainer = styled.div`
    background-color: var(--toggle-background);
    width: 100%;
    min-height: 17px;
    border-radius: 2rem;
    position: relative;
    z-index: 20;
    cursor: pointer;

`

export const Switcher = styled.div<Theme>`
    width: 11px;
    height: 11px;
    min-height: 11px;
    background-color: var(--key-background-red);
    border-radius: 2rem;
    position: absolute;
    left: ${(props) => props.theme};
    top: 17%;
    transition: all 0.1s linear;

`

export const Input = styled.div`
  width: 100%;
  height: 79px;
  padding: 25px;
  font-size: 1.5rem;
  color: var(--white-text);
  background-color: var(--screen-background);
  text-align: right;
  margin: 1.3rem 0;
  border-radius: 0.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  background-color: var(--toggle-background);
  min-height: 290px;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 65px));
  grid-auto-rows: 40px;
  gap: 1.2rem 0.9rem;
  align-items: center;
  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(65px, 67px));
  }
`;

export const Button = styled(Flex)<Props>`
  border-radius: 0.3rem;
  padding: 10px;
  font-size: 1.2rem;
  opacity: 0.8;
  cursor: pointer;
  max-width: ${(props) => (props.gc ? "100%" : "65px")};
  grid-column: ${(props) => (props.gc ? props.gc : "auto")};
  background-color: ${(props) =>
    props.bg ? props.bg : "var(--key-background-orange) "};
  color: ${(props) =>
    props.color ? props.color : "var(--very-dark-grayish-blue)"};
  box-shadow: 0 3px 0
    ${(props) => (props.bdbox ? props.bdbox : "var(--key-shadow-orange)")};
  &:hover {
    opacity: 1;
  }
`;