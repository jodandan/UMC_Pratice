import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// 스타일된 컴포넌트 생성
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const GoogleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // 입력된 데이터 콘솔에 출력
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* handleSubmit 함수를 이용하여 폼이 제출되었을 때 호출할 함수를 지정 */}
        <Label>Name:</Label>
        <Input type="text" {...register('name')} />
        {/* register 함수를 사용하여 name과 email 필드와 연결 */}

        <Label>Email:</Label>
        <Input type="email" {...register('email')} />

        <Label>Favorite Color:</Label>
        <select {...register('color')}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default GoogleForm;
