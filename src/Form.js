import React, { useContext } from 'react';
import { InfoContext } from './context';

const styles = {
  infoPanel: { borderStyle: 'solid', padding: 8 },
  resetButton: { width: 64, height: 32, marginTop: 8, float: 'right' },
};

const Info = ({ info }) => (
  <div style={styles.infoPanel}>
    <p>Name: {info.name}</p>
    <p>Age: {info.age}</p>
    <p>Email: {info.email}</p>
  </div>
);

const Form = () => {
  const { info, setInfo } = useContext(InfoContext);

  return (
    <>
      <h1>Form</h1>
      <Info info={info} />
      <button onClick={() => setInfo(null)} style={styles.resetButton}>
        Reset Cache
      </button>
    </>
  );
};

export default Form;
