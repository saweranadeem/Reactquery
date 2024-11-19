import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

const Userlist = () => {
  const { error, loading, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>SomeThing Went</div>;

  return (
    <div>
      <h1>Users List</h1>
      <div className="user-grid">
        {data.users.data.map((user) => (
          <div key={user.id} className="user-card">
            <h3>
              {user.id}-{user.name}
            </h3>

            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
