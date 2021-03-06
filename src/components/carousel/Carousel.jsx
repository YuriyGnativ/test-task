import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { Image, Button, Container } from "semantic-ui-react";

const CustomDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map((slide) => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  </Container>
);

const SlideComponent = ({ index }) => {
  return (
    <Slide index={index}>
      <Image src="https://picsum.photos/1380/550" />
    </Slide>
  );
};

export default () => {
  return (
    <CarouselProvider
      naturalSlideWidth={4}
      naturalSlideHeight={1.6}
      totalSlides={3}
      style={{
        width: "1390px",
      }}
    >
      <Slider>
        <SlideComponent index={0} />
        <SlideComponent index={1} />
        <SlideComponent index={2} />
      </Slider>

      <CustomDotGroup slides={3} size="mini" />
    </CarouselProvider>
  );
};
