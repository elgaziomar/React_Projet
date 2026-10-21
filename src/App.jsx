
/*import Fetch from "./fetch";
import Axios from "./axios";

export default function App() {
    const styles = {
        app: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
        },
        title: {
            textAlign: "center",
            color: "#0f172a",
        },
        section: {
            marginBottom: "40px",
        },
        divider: {
            border: "none",
            borderTop: "2px solid #e2e8f0",
            margin: "30px 0",
        },
    };

    return (
        <div style={styles.app}>
            <h1 style={styles.title}>My React App</h1>

            <section style={styles.section}>
                <Fetch />
            </section>

            <hr style={styles.divider} />

            <section style={styles.section}>
                <Axios />
            </section>
        </div>
    );
}*/


import { NameProvider, useName } from "./use_comtext";

// Component 1
function InputName() {
  const { name, setName } = useName();

  return (
    <div>
      <h3>1. Enter your name</h3>
      <input
        type="text"
        placeholder="Saisir votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

// Component 2
function Bonjour() {
  const { name } = useName();

  return <h3>2. Bonjour {name}</h3>;
}

// Component 3
function Message1() {
  const { name } = useName();

  return <p>3. Bonjour  {name}</p>;
}

// Component 4
function Message2() {
  const { name } = useName();

  return <p>4. Salam {name}</p>;
}

// Component 5
function Message3() {
  const { name } = useName();

  return <p>5. Marhba  {name}</p>;
}

// Component 6
function Message4() {
  const { name } = useName();

  return <p>6. Ahlan wa sahlan {name}</p>;
}

// App principale
export default function App() {
  return (
    <NameProvider>
      <div>
        <h1>useContext Example</h1>

        <InputName />
        <hr />

        <Bonjour />
        <hr />

        <Message1 />
        <hr />

        <Message2 />
        <hr />

        <Message3 />
        <hr />

        <Message4 />
      </div>
    </NameProvider>
  );
}
