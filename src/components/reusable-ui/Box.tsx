import styled from "styled-components"

export default function Box() {
  return (
    <BoxStyled className="box" />
  )
}

const BoxStyled = styled.div`
    width: 550px;
    height: 550px;
    background: #C1E3D6;
    border-radius: 120px;
    transform: rotate(45deg);
`
