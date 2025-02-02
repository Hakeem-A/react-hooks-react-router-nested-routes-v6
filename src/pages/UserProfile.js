// UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();

  const user = users?.find(user => user.id === parseInt(params.id));

  if (!users || !user) {
    return <h2>Loading user profile...</h2>;
  }

  return (
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
}

export default UserProfile;