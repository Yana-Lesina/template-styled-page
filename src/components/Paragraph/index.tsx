import { Paragraph as ParagraphStyled } from "./styles";

type Props = {
  children: (string | JSX.Element)[];
};

const Paragraph = ({ children }: Props) => {
  return <ParagraphStyled>{children}</ParagraphStyled>;
};

export { Paragraph };
