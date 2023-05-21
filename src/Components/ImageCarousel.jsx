import Carousel from "react-bootstrap/Carousel";
import exampleCarImg from "../assets/image-example-1.png";
import firstCarouselImg from "../assets/home-image-1.png";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleCarImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              A Supportive And Collaborative Community Delicated To Empowering
              Those Who Have Entered Into The World Of Tech Through
              Non-Traditional Pathways.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstCarouselImg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Welcome to AfterBoot</h3>
            <p>
              A Supportive And Collaborative Community Delicated To Empowering
              Those Who Have Entered Into The World Of Tech Through
              Non-Traditional Pathways.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleCarImg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              A Supportive And Collaborative Community Delicated To Empowering
              Those Who Have Entered Into The World Of Tech Through
              Non-Traditional Pathways.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
