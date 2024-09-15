import { useParams } from "react-router-dom"

export default function Form2() {
    const {username} = useParams()
  return (
    <div>Form2 atteint ! Bravo {username}</div>
  )
}
