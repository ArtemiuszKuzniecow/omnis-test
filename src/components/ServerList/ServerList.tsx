import { useEffect, useMemo } from "react";
import { useServer } from "../../hooks";
import style from "./ServerList.module.scss";

export const ServerList = () => {
  const { activeServer, setNewActiveServer, initialData, setInitialData } =
    useServer();

  const isElementActive = useMemo(
    () => (id: string) => id === activeServer.customer_id,
    [activeServer.customer_id]
  );

  useEffect(() => {
    setInitialData((prevState) =>
      prevState.map((item) =>
        item.customer_id === activeServer.customer_id ? activeServer : item
      )
    );
  }, [activeServer, setInitialData]);

  return (
    <div className={style.serverListContainer}>
      {initialData.map((item) => {
        return (
          <button
            key={item.customer_id}
            className={
              isElementActive(item.customer_id)
                ? style.serverItemActive
                : style.serverItem
            }
            onClick={() => setNewActiveServer(item.customer_id)}
          >
            <span className={style.serverItemName}>{item.server_name}</span>
            <span className={style.serverItemType}>{item.server_type}</span>
          </button>
        );
      })}
    </div>
  );
};
