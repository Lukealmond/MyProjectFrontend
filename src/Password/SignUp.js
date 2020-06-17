import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Card,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const FormFunc = () => {
    return (
      <Card body className="mt-4">
        <Form onSubmit={handleSubmit} className="">
          <FormGroup>
            <Input
              id="name"
              value={name}
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="email"
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="password"
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Create password"
            />
            <small color="muted">Atleast 6 Characters.</small>
          </FormGroup>
        <Link to='/editor'>
          <Button color="primary" className=" px-4 py-2" block>
            Login
          </Button>
        </Link>
        </Form>
      </Card>
    );
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col xs="12" md="4" className="mx-auto">
            <div
              className="my-5 m-auto text-center mb-4"
              style={{ minHeight: "37px" }}
            >
              <h1 className="text-bold">Sign up form</h1>
              <small color="muted">using ReactStrap</small>
            </div>

            {FormFunc()}
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;