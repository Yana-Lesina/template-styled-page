import { Header1 as Header1Styled } from "./styles";

type Props = {
  children: string;
};

const Header1 = ({ children }: Props) => {
  return <Header1Styled>{children} </Header1Styled>;
};

export { Header1 };
