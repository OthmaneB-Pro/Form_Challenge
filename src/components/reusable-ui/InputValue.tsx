import styled from "styled-components";

type InputValueType = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required : boolean;
};

export default function InputValue({
  name,
  value,
  onChange,
  placeholder,
  required,
}: InputValueType) {
  return (
    <InputValueStyled
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

const InputValueStyled = styled.input`
  padding: 20px;
  width: 350px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid;
`;
