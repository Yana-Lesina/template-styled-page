import styled from "styled-components";

type Props = {
  src: HTMLImageElement | string;
  alt?: string;
};

export const IntroImage = styled.img<Props>`
  width: 100%;
  border-radius: 10px 0px 0px 0px;
`;
