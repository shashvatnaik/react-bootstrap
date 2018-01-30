import React from 'react';
import ReactDOM from 'react-dom';
import {Alert,Button,ButtonGroup,Carousel,CarouselItem,DropdownButton,MenuItem,FormGroup,FormControl,Glyphicon,Image,Grid,Row,Col,Jumbotron,Modal,ModalBody,ModalFooter} from 'react-bootstrap'
import './index.css';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            gg:false,
            formControlValue:``
        }
    }
    render(){
        return(
            <div>
            <h1>h1 title</h1>
                <Alert bsStyle="danger"><strong>warning</strong></Alert>
                <ButtonGroup>
                <Button bsStyle="primary" bsSize="lg" >button1</Button>
                <Button bsStyle="primary" bsSize="lg" >button2</Button>
                <Button bsStyle="primary" bsSize="lg" >button3</Button>
                    <DropdownButton open={this.state.gg} onMouseEnter={()=>{this.setState({gg:!this.state.gg})}} onMouseLeave={()=>{this.setState({gg:!this.state.gg})}} title="dropdown">
                    <MenuItem>1</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
                <div className="container">

                <Carousel style={{width:"600px"}}>
                    <CarouselItem>
                        <img className="img100" alt="" src="https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg"/>
                        <Carousel.Caption>{this.state.formControlValue}</Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <Carousel.Caption>{this.state.formControlValue}</Carousel.Caption>
                        <img className="img100" alt="" src="https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="img100" alt="" src="https://www.w3schools.com/howto/img_fjords.jpg"/>
                        <Carousel.Caption>{this.state.formControlValue}</Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="img100" alt="" src="https://vignette.wikia.nocookie.net/marveldatabase/images/e/e1/The_Marvel_Universe.png/revision/latest?cb=20110513164401"/>
                        <Carousel.Caption>{this.state.formControlValue}</Carousel.Caption>
                    </CarouselItem>
                </Carousel>
                </div>
                <div className="container">
                <FormGroup>
                    <FormControl value={this.state.formControlValue} type="text" placeholder="enter something" onChange={(e)=>{this.setState({formControlValue:e.target.value})}}/>
                </FormGroup>
                    <Glyphicon glyph="cutlery"/>
                    <Glyphicon glyph="sunglasses"/>
                    <Image src="https://vignette.wikia.nocookie.net/marveldatabase/images/e/e1/The_Marvel_Universe.png/revision/latest?cb=20110513164401" circle />
                    <Grid>
                        <Row>
                        <Col md={6}>

                                <Image src="https://www.w3schools.com/howto/img_fjords.jpg"/>
                            </Col>
                            <Col md={6}>
                                <Image src="https://www.w3schools.com/howto/img_fjords.jpg"/>
                            </Col>
                        </Row>
                    </Grid>

                    <Jumbotron>
                        <h1>this is jumbotron header!</h1>
                        <p>this is jumbotron paragraph</p>
                    </Jumbotron>
                    <Modal></Modal>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
