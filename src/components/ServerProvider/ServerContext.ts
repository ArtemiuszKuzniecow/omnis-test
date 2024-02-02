import { createContext } from "react";
import { IServer } from "../../types";

const ServerContext = createContext({
  activeServer: {
    customer_id: "user1",
    server_name: "server1",
    server_type: "vds",
  },
  setActiveServer: (_value: IServer) => {},
});

export default ServerContext;
