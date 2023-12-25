import {observer} from "mobx-react-lite";
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Auth = observer(() => {
    

    return (
        <div className="d-flex align-items-center">
        <div style={{maxWidth: "600px", margin: "0 auto"}} className="m-auto mt-2">
            <h1 style={{textAlign: "center"}}>Registration</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
      <Button variant="primary" type="submit" className="btn-dark">
      Submit
    </Button>
    </Form.Group>
    
    <Form.Text className="te">Already have account? <a href="/login">Login</a></Form.Text>
  </Form>
  </div>
  </div>
  )
})

export default Auth