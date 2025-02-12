import React, { useEffect, useState } from "react";
import { Container } from "./components/container";
import { Users } from "./types";
import { Table, Input } from "antd";
import axios from "axios";
import { columns } from "./table";
import { Loading } from "./components/loading";
import Error from "./components/error";

const { Search } = Input;

function App() {
  const [users, setUsers] = useState<Users[]>([]); // для хранения пользователей
  const [loading, setLoading] = useState<boolean>(true); // для управления состоянием загрузки
  const [error, setError] = useState<string | null>(null); // для отлова ошибок
  const [searchText, setSearchText] = useState<string>(""); // для поиска по имени

  useEffect(() => {
    const fetchUsers = async () => { // запрос на получение данных от API
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) { // обработка ошибок
        if (axios.isAxiosError(error)) {
          console.error(error);
          setError(error.message);
        } else {
          setError("Возникла неизвестная ошибка!");
        }
      } finally { // изменение состояния загрузки в конце запроса
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  ); // фильтрация данных в таблице с учетом введенного в поиске запроса

  if (loading) return <Loading />;
  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <>
      <Container>
        <Search
          placeholder="Поиск по имени"
          onChange={e => setSearchText(e.target.value)}
          style={{marginBottom: '21px'}}
        />
        <Table
          dataSource={filteredUsers}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: 955 }}
        />
      </Container>
    </>
  );
}

export default App;
