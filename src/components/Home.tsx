import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { removeUser,getAllUsers } from '../reducer/reducer';
import { RootState } from '../store/store';


const Home: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch:RootState = useDispatch();
 const dispatch = useDispatch();
  const Data = useSelector((state: RootState) => state.users.allUsers);
  console.log(Data)

  useEffect(() => {
    dispatch(getAllUsers() as never) //as any
    
  }, [dispatch])

  const handleDelete = async (userId:number) => {
    dispatch(removeUser(userId));
  };


  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button variant="info" onClick={() => navigate(`/edit/${user.id}`)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
