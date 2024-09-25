import styled from "styled-components";

type InputArticleType = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function InputArticle({ name, value, onChange, placeholder } : InputArticleType) {
  return (
    <InputStyled
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;
