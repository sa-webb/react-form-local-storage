import React, { useContext } from "react";
import { InfoContext } from "./context";

const styles = {
  infoPanel: { borderStyle: "solid", padding: 8 }
};

const EditDetails = () => {
  const { info, setInfo } = useContext(InfoContext);

  const handleChange = key => event => {
    setInfo({ [key]: event.target.value });
  };

  return (
    <>
      <h1>Edit Form</h1>
      <div style={styles.infoPanel}>
        <p>
          Name <input value={info.name} onChange={handleChange("name")} />
        </p>
        <p>
          Age <input value={info.age} onChange={handleChange("age")} />
        </p>
        <p>
          Email <input value={info.email} onChange={handleChange("email")} />
        </p>
      </div>
    </>
  );
};

export default EditDetails;
