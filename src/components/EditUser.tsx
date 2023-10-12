import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Container, Button } from 'react-bootstrap';
import { User, editUser } from '../reducer/reducer'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/rootReducer';
import React from 'react'

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  
  const data = useSelector((state: RootState) => state.users.allUsers) as User[];
  const validId = id || ''; 
  // const data = useSelector((state: RootState) => state.users.allUsers);
  console.log(data, 'data in edit component')
  const [inputData, setInputData] = useState<Partial<User>>({
    id: 0,
    name: '',
    username: ''
  })
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toEdit: User | undefined = data.find((item) => item.id === parseInt(validId));
   
  useEffect(() => {
    if (toEdit) {
      setInputData(toEdit);
    }
  }, [toEdit]);
    

  const handleEditUser = () => {   
    if (inputData.id !== null && inputData.id !== undefined) {
    dispatch(editUser({ id:inputData.id, inputData: inputData }));   
    navigate('/');}
  };

  return (
    <Container className=''>
      <Form style={{ width: "50%" }}>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Id" value={inputData?.id} onChange={e => setInputData({ ...inputData,  id: parseInt(e.target.value)})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={inputData?.name} onChange={e => setInputData({ ...inputData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" value={inputData?.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} />
        </Form.Group>
      </Form>
      <Button onClick={() => { navigate('/') }} className='me-2' variant="outline-secondary">Back</Button>
      <Button onClick={() => { handleEditUser() }} variant="outline-warning">Edit User</Button>
    </Container>
  )
}

export default EditUser;