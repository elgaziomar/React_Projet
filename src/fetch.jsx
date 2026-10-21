
import { useState } from "react";

function Fetch() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    async function getusers() {
        if (show) {
            setShow(false);
            return;
        }

        if (users.length > 0) {
            setShow(true);
            return;
        }

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
        setShow(true);
    }

    const styles = {
        container: {
            padding: "20px",
            fontFamily: "Arial, sans-serif",
        },
        button: {
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
        },
        cards: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
        },
        card: {
            width: "240px",
            padding: "20px",
            backgroundColor: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflowWrap: "anywhere",
        },
        avatar: {
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
        },
        name: {
            color: "#1e293b",
        },
        info: {
            color: "#475569",
            fontSize: "14px",
        },
    };

    return (
        <div style={styles.container}>
            <h2>Fetch Users</h2>

            <button
                style={styles.button}
                onClick={getusers}
            >
                {show ? "HIDE USERS" : "GET USERS"}
            </button>

            {show && (
                <div style={styles.cards}>
                    {users.map((user) => (
                        <div key={user.id} style={styles.card}>
                            <div style={styles.avatar}>
                                {user.name.charAt(0)}
                            </div>

                            <h3 style={styles.name}>{user.name}</h3>

                            <p style={styles.info}>
                                📧 {user.email}
                            </p>

                            <p style={styles.info}>
                                📱 {user.phone}
                            </p>

                            <p style={styles.info}>
                                🌐 {user.website}
                            </p>

                            <p style={styles.info}>
                                🏢 {user.company.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Fetch;
