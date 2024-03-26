import { Main as MainStyled } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Main = ({ children }: Props) => {
  return <MainStyled>{children}</MainStyled>;
};

export { Main };
