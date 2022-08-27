# Zustand with ReactJS

This repository represents my learning abount Zustand Store

## User Store

```js
import create from "zustand";
import * as uuid from "uuid";

export type UserType = {
  id?: string,
  name: string,
  email: string,
};

type UserState = {
  users: UserType[],
  addUser: (user: UserType) => void,
};

const useUserStore =create<UserState>((set) => ({
  users: [],
  addUser: (user: UserType) => {
    user.id = uuid.v4();
    set((state) => ({ users: [...state.users, user] }));
  },
}));

export { useUserStore };
```

## How to use

```js
// Just import the hook created in any component
const data = useUserStore();
/*
 * data.users
 * data.addUsers(user)
 */

// Only array of Users
const data = useUserStore((state) => state.users);
// data = users: UserType[];

// Only function for add a User
const data = useUserStore((state) => state.addUser);
// data = addUser: (user: UserType) => void;
```
