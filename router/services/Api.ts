const getUsers = async () => [
  {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "image": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "María López",
    "email": "maria.lopez@example.com",
    "image": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Carlos Gómez",
    "email": "carlos.gomez@example.com",
    "image": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Lucía Fernández",
    "email": "lucia.fernandez@example.com",
    "image": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "Martín Rodríguez",
    "email": "martin.rodriguez@example.com",
    "image": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "name": "Sofía Morales",
    "email": "sofia.morales@example.com",
    "image": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "id": 7,
    "name": "Diego Herrera",
    "email": "diego.herrera@example.com",
    "image": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "id": 8,
    "name": "Camila Torres",
    "email": "camila.torres@example.com",
    "image": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "id": 9,
    "name": "Federico Díaz",
    "email": "federico.diaz@example.com",
    "image": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "id": 10,
    "name": "Valentina Rivas",
    "email": "valentina.rivas@example.com",
    "image": "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

const getUser = async (id: number) => {
  const users = await getUsers();
  return users.find(user => user.id === id) || Promise.reject(new Error('User not found'));
};

const Api = {
  getUsers,
  getUser,
};

export default Api;
