import { useUserStore } from "../store/user";

export function Home() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
