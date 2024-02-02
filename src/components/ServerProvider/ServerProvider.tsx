import { ReactNode, useMemo, useState } from "react";
import ServerContext from "./ServerContext";
import { IServer } from "../../types";

interface ServerProviderProps {
  children: ReactNode | ReactNode[];
}

export const ServerProvider = (props: ServerProviderProps) => {
  const { children } = props;
  const [activeServer, setActiveServer] = useState<IServer>({
    customer_id: "user1",
    server_name: "server1",
    server_type: "vds",
  });

  const defaultProps = useMemo(
    () => ({
      activeServer,
      setActiveServer,
    }),
    [activeServer]
  );

  return (
    <ServerContext.Provider value={defaultProps}>
      {children}
    </ServerContext.Provider>
  );
};
