import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()  // used to access dynamic placeholder segments of URL (ex: id)

  return (
    <div className="text-3xl">User: {userid}</div>
  )
}

export default User