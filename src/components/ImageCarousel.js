import {Carousel} from 'react-bootstrap';
import '../style.css'

const ImageCarousel = (() => {
  return (
    <Carousel data-bs-theme="ligth">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/photo_2023-12-03_23-36-11.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Русалочка</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/photo_2023-12-03_23-36-03.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Пугающая картинка</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/photo_2023-12-03_23-36-07.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Человек-ящерица</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/photo_2023-12-03_23-35-59.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Дргой человек-ящерица</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
})

export default ImageCarousel;