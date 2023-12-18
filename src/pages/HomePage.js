import React, { useState } from "react";
import '../style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ImageCarousel from '../components/ImageCarousel'


const HomePage = (() => {

    const [urlMe, setUrlMe] = useState(require('../assets/images/photo_2023-12-03_21-46-27.jpg'))

    const [urlEmbroidery, setUrlEmbroidery] = useState(require('../assets/images/IMG_0534.PNG'))

    const urlCat = require('../assets/images/IMG_0537.PNG')

    const [direction, setDirection] = useState(false)

    const openEye = () => {
        setUrlMe(require('../assets/images/photo_2023-12-03_21-46-27.jpg'))
    }

    const wink = () =>{
        setUrlMe(require('../assets/images/photo_2023-12-03_22-17-33.jpg'))
        setTimeout(openEye, 400)
    }

    const handleMouseEnter = () => {
        setUrlEmbroidery(require('../assets/images/IMG_0534.PNG'))
    }
         
    const handleMouseLeave = () => {
        setUrlEmbroidery(require('../assets/images/IMG_0535.PNG'))
    }
    
    let id = null;
    const myMove = () => {
        console.log('pop')
        let elem = document.getElementById("myAnimation");   
 
        let pos = direction ? 120 : 0;
        let dir_coeff = direction ? -1: 1;
        let end = direction ? 0: 120;

        clearInterval(id);
        id = setInterval(frame, 10);

        function frame() {
            if (pos == end) {
            clearInterval(id);
            } else {
            pos = pos + 1*dir_coeff;  
            elem.style.left = pos + 'px'; 
            }
        }

        setDirection(!direction)
    }


    return (
        <>
        <div className = "head-text">
            <div className = "head-image">
              <img src = {require ('../assets/images/photo_2023-12-03_20-17-04.jpg')} alt = "Me" className="image"/>
            </div>
            <div class='text-on-image-right'>
                <h3> Немного обо мне </h3>
            </div>
            <div class='text-on-image-left'>
                <h3> и о моих котиках </h3>
            </div>
        </div>
        <Container className = "my-image">
      <Row xs={1} md={2}>
        <Col> 
        <div >
              <img src = { (urlMe)} alt = "Me" className="me-i"  onClick={()=>wink()}/>
        </div>
        </Col>
        <Col>
        <div>
            <div className="text-about-me">
              Привет! Я - Аня. Сейчас я учусь на 4 курсе бакалавриата в Институте информационных технологий и интеллектуальных​ систем (ИТИС)
              Казанского Федерального Университета по направлению “Программная инженерия”.
              Ранее я закончила художественную школу. 
            </div> 
            <div style={{textAlign: 'center'}}>
                 <Button  variant="outline-light"
                    size='lg'
                    className="wink-button"
                    onClick={()=>wink()}>Подмиг</Button>{' '}
            </div>
            <div 
                className="item-box" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <div  className="center-container" >
                    <img src = {(urlEmbroidery)} alt = "Main" className="me-embroidery"  onClick={()=>wink()}/>
                </div>
            </div>
       
        </div>
        </Col>
      </Row>
      </Container>
      
      <hr className="border03"></hr>
      
      <Container className = "my-image">
      <Row xs={1} md={3}>
      <Col>
        <div className="text-about-me">
            <div >
                Немного моих творческих работ
            </div>
            <div>
                Уверена, что мое творчество в будущем поможет мне!
                
            </div>
        </div>
       </Col>
      <Col> 
       <div style={{borderRadius: 8, overflow: 'hidden'}}> <ImageCarousel/></div>
       </Col>
       <Col>
       <div id ="myContainer">
            <img src = {(urlCat)} alt = "Main" id ="myAnimation"/>
        </div>
        <div style={{textAlign: 'center'}}>
                <Button  variant="outline-light"
                size='lg'
                className="wink-button"            
                onClick={()=>myMove()}>Движение</Button>
        </div>
       </Col>
       </Row>
      </Container>
        </>
)
});

export default HomePage;