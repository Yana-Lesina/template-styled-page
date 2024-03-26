import React from "react";
import Intro from "./assets/desert-image.png";
import { Main, Section, Header1, Paragraph } from "./components/.";

import styled from "styled-components";

type Props = {
  src: HTMLImageElement | string;
};

const IntroImageS = styled.image.attrs(({ src }) => ({
  src: src,
  alt: "intro",
}))`
  width: 100%;
`;

const IntroImage = () => <IntroImageS src={Intro} />;

function App() {
  return (
    <div className="App">
      <Main>
        <Section>
          <IntroImage />
          <Header1>Headline</Header1>
          <Paragraph>
            Faucibus. Faucibus. Sit sit sapien sit
            <br /> tempusrisu ut. Sit molestie ornare in venen.
          </Paragraph>
          <div>
            <button>See more</button>
            <button>Save</button>
          </div>
        </Section>
      </Main>
    </div>
  );
}

export default App;
