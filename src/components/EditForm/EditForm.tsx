import { useMemo } from "react";
import { useServer } from "../../hooks";
import style from "./EditForm.module.scss";

export const EditForm = () => {
  const { activeServer, updateInitialData } = useServer();

  const handleChange = (property: string, value: string) => {
    updateInitialData({
      ...activeServer,
      [property]: value,
    });
  };

  const serverTypes = useMemo(() => [
    { name: "VDS", type: "vds" },
    { name: "Dedicated", type: "dedicated" },
    { name: "Hosting", type: "hosting" },
  ], []);
  

  return (
    <div className={style.mainEditFromContainer}>
      <h2 className={style.editFormTitle}>Edit Server</h2>
      <form className={style.editFormContainer}>
        <label className={style.formLabel}>
          Server Name:
          <input
            type="text"
            name="server_name"
            className={style.formInput}
            value={activeServer.server_name}
            onChange={(event) => handleChange('server_name', event.target.value)}
          />
        </label>
        <label className={style.formLabel}>
          Server Type:
          <select
            name="server_type"
            className={style.formSelect}
            value={activeServer.server_type}
            onChange={(event) => handleChange('server_type', event.target.value)}
          >
            {serverTypes.map((type) => (
              <option value={type.type} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
