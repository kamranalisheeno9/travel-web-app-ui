import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '../components/textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Card, ListGroup, Form, Button,Row,Col } from 'react-bootstrap';
import Forgetpassmodel from './forgetpassmodel';
import { useState } from 'react';

const SignUp = () => {

    const [currentUser,setCurrentUser]=useState({})

    const [modalShow, setModalShow] = useState(false);



    const Validate = yup.object({
        email: yup.string()
            .email('Email is Invalid')
            .required('Required'),
        password: yup.string()
            .min(6, 'Password Must Be At Least 6 Characters')
            .required('Required'),

    })
    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => {
    
   
                setCurrentUser(values)
                alert("Logged In");
              
            }}
            
            validationSchema={Validate}

        >
            {formik => (
    <div className="signUp-page">

    <Container   >
 <Row className="row-signup" >
 
 <Col className=""  md={8} >
         <h1 className="main-title account-create">Please Login Your Account</h1>
         
         </Col>
                     <Col md={4} >
                     <Container className="login-container">
                        <Card className="card-class" style={{ width: '18rem', }}>
                            <Card.Body >
                                <Card.Title className="login-title" >Log In</Card.Title>

                            </Card.Body>
                            <Card.Body>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3 email" controlId="formBasicEmail">
                                        <TextField type="email" name="email" placeholder="Enter email" />
                                        <Form.Text className="">
                                
                                            <Forgetpassmodel 
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            />
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3 password" controlId="formBasicPassword">
                                        <TextField type="password" name="password" placeholder="Password" />
                                        <Form.Text className="text-muted">
                                            Comment Here
                                        </Form.Text>
                                    </Form.Group>

                                    <div className="btn-submit">
                                        <Button variant="dark" type="submit">
                                            Log In
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Container>
                    </Col>
 
 
 </Row>
 </Container>
 
 </div>
 
 
                    
            )}

        </Formik>
    );
}

export default SignUp;
