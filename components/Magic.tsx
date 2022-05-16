import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  input: any;
};

const Magic = ({ input }: Props) => {
  // it takes a moment for useEffect to kick in and set the current time
  // uses my birthday as default
  const [ time, setTime ] = useState<string>('1999-4-26 0:0:0');

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

      // constructs the format
      // yyyy-mm-dd hh-mm-ss
      setTime(date + ' ' + time);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.card}>
      {!input ? (
        // case 1: input is falsy
        <div>{time}</div>
      ) : Array.isArray(input) ? (
        // case 2: input is an array
        input.map((ele, idx) => (
          <div className={styles.card} key={idx}>
            {ele}
          </div>
        ))
      ) : (
        // case 3: return anything else
        <pre>{JSON.stringify(input, undefined, 2)}</pre>
      )}
    </div>
  );
};

export default Magic;
