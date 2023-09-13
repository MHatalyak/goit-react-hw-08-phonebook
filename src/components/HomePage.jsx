import { useNavigate } from 'react-router-dom';
import { Container, Title, Button } from './App.styled';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Container>
        {<Title>Welcome! Please, log in first</Title>}
        {<Button onClick={handleClick}>To login</Button>}
      </Container>
    </>
  );
};

export default HomePage;
