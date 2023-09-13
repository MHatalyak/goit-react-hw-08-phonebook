import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-bottom: 40px;
  border: 1px solid gray;
  padding: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-left: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #d1bff5;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5526e0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4621b5;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span``;

export const DeleteButton = styled.button`
  background-color: #cc3963;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #ad2a4f;
  }
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5526e0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4621b5;
  }
`;
export const HeaderContainer = styled.header`
  border-radius: 4px;
  background-color: #f2edfc;
  margin-top: 0px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 50px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #4621b5;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.div`
  margin-right: 20px;
  color: black;
`;
