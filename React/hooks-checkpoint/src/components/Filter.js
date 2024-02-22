import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Filter.css'
import { useRef } from 'react';
function Filter({handlefilter,reset}) {
    const titleref=useRef()
    const ratingref=useRef()
    const reset2=()=>{
        titleref.current.value=''
        ratingref.current.value=''
        reset()
    }
    return (
        <Navbar className="nav">
            <Form inline>
                <InputGroup>
                    <Form.Control className='mx-3'
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => handlefilter('title',e.target.value)}
                        ref={titleref}
                    />
                </InputGroup>
            </Form>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Rating"
                            className=" mr-sm-2" 
                            onChange={(e)=>handlefilter('rating',e.target.value)}
                            ref={ratingref}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button className="btn btn-warning" onClick={reset2}>Reset</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default Filter;