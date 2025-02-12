import React, { useEffect, useState } from "react";
import { Container } from "./components/container";
import { Users } from "./types";
import { Table, Spin } from "antd";
import axios from "axios";
import { columns } from "./table";
import { Loading } from "./components/loading";
import Error from "./components/error";

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          setError(error.message);
        } else {
          setError("Возникла неизвестная ошибка!");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
        <Table
          dataSource={users}
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
