type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Логин",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Адрес",
    dataIndex: "address",
    key: "address",
    render: (address: Address) => (
      <span>
        {address.suite} {address.street} {address.city} {address.zipcode}
      </span>
    ),
  },
];
