import { useContext, useState } from "react";
import mock from "../mock.json";
import { IServer } from "../types";
import ServerContext from "../components/ServerProvider/ServerContext";

export const useServer = () => {
  const { mockData } = mock;
  const { activeServer, setActiveServer } = useContext(ServerContext);
  const [initialData, setInitialData] = useState(mockData);

  function updateInitialData(value: IServer) {
    setActiveServer(value);
    setInitialData((prevState) =>
      prevState.map((item) =>
        item.customer_id === value.customer_id ? value : item
      )
    );
  }

  const defaultServer: IServer = {
    customer_id: "user1",
    server_name: "server1",
    server_type: "vds",
  };

  function setNewActiveServer(id: string): void {
    const currentServer =
      initialData.find((server) => server.customer_id === id) || defaultServer;
    setActiveServer(currentServer);
  }

  return {
    setNewActiveServer,
    activeServer,
    initialData,
    updateInitialData,
    setInitialData,
  };
};

export { ServerContext };
