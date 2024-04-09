import Intro from "./assets/desert-image.png";
import {
  Card,
  Header1,
  Paragraph,
  IntroImage,
  ContentContainer,
  ButtonWrapper,
  Button,
} from "./components/.";

function App() {
  return (
    <div className="App">
      <Card>
        <IntroImage src={Intro} alt="intro" />
        <ContentContainer>
          <Header1>Headline</Header1>
          <Paragraph>
            Faucibus. Faucibus. Sit sit sapien sit
            <br /> tempusrisu ut. Sit molestie ornare in venen.
          </Paragraph>
          <ButtonWrapper>
            <Button type="contained">See more</Button>
            <Button type="outlined">Save</Button>
          </ButtonWrapper>
        </ContentContainer>
      </Card>
    </div>
  );
}

export default App;
