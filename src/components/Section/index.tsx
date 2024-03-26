import { Section as SectionStyled } from "./styles";
type Props = {
  children: JSX.Element | JSX.Element[];
};

const Section = ({ children }: Props) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export { Section };
