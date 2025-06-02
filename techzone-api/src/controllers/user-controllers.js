import { users } from "../models/user-model.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({ message: "ok", users });
};

export const getUser = (req, res) => {
  const id = req.params.id;

  const existingUser = users.find((user) => user.id === Number(id));

  if (!existingUser) {
    res.json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ message: "ok", existingUser });
};

export const createUser = (req, res) => {
  const body = req.body;
  const { name, email, password } = body;

  const usersLength = users.length;

  const user = {
    id: usersLength + 1,
    name,
    email,
    password,
  };
   const cUser = {...body };

  users.push(cUser);

  res.status(201).json({ message: "Usuário criado com sucesso", user });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const existingUser = users.find((user) => user.id === Number(id));

  if (!existingUser) {
    res.json({ message: "Usuário não encontrado" });
  }

  const updatedUser = { ...existingUser, ...body };

  users[users.indexOf(existingUser)] = updatedUser;

  res.status(200).json({ message: "Usuário atualizado com sucesso", updatedUser });

   
}

export const deleteUser = (req, res) => {
  const id = req.params.id;

  const existingUser = users.find((user) => user.id === Number(id));

  if (!existingUser) {
    res.json({ message: "Usuário não encontrado" });
  }

  users.splice(users.indexOf(existingUser), 1);

  res.status(200).json({ message: "Usuário deletado com sucesso" });
}
