import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User, addUser } from '../reducer/reducer';


const AddUser: React.FC = () => {
  const [inputData, setInputData] = useState<User>({
    id: 0,
    name: '',
    username: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = (inputData: User) => {
    dispatch(addUser(inputData));
    navigate('/')
  }


  return (
    <Container className=''>
      <Form style={{ width: "50%" }}>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Id" value={inputData.id} onChange={e => setInputData({ ...inputData, id: parseInt(e.target.value)})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={inputData.name} onChange={e => setInputData({ ...inputData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" value={inputData.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} />
        </Form.Group>
      </Form>
      <Button onClick={() => { navigate('/') }} className='me-2' variant="outline-secondary">Back</Button>
      <Button onClick={() => { handleAddUser(inputData) }} variant="outline-warning">Add User</Button>
    </Container>
  )
}

export default AddUser