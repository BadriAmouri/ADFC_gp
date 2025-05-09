import React, { useEffect, useState } from "react";

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Frontend Developer",
        bio: "Software developer with a passion for creating amazing applications.",
        avatar: "https://via.placeholder.com/150",
        schedule: [
            "Monday: 9am - 5pm",
            "Tuesday: 9am - 5pm",
            "Wednesday: 9am - 5pm",
            "Thursday: 9am - 5pm",
            "Friday: 9am - 4pm",
        ],
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    const handleAbsenceNotification = () => {
        alert("Absence notification for tomorrow has been sent.");
    };

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.profileCard,
                    transform: loaded ? "scale(1)" : "scale(0.9)",
                    opacity: loaded ? 1 : 0,
                }}
            >
                <img
                    src={user.avatar}
                    alt="Avatar"
                    style={styles.avatar}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <h1 style={styles.name}>{user.name}</h1>
                <p style={styles.label}><strong>Email:</strong> {user.email}</p>
                <p style={styles.label}><strong>Role:</strong> {user.role}</p>
                <p style={styles.bio}>{user.bio}</p>

                <div style={styles.scheduleSection}>
                    <h3 style={styles.scheduleTitle}>Schedule This Week:</h3>
                    <div style={styles.scheduleGrid}>
                        {user.schedule.map((item, index) => (
                            <div key={index} style={styles.scheduleItem}>
                                📅 {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", marginTop: "20px" }}>
    <button
        style={styles.button}
        onClick={handleAbsenceNotification}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e69500")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffa500")}
    >
        Notify if you are going to be absent tomorrow
    </button>

    <button
        style={styles.button}
        onClick={handleAbsenceNotification}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e69500")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffa500")}
    >
        View your project details
    </button>
</div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #fff8f0, #ffffff)",
        fontFamily: "Segoe UI, sans-serif",
    },
    profileCard: {
      textAlign: "center",
      background: "rgba(255, 250, 240, 0.9)",
      padding: "35px 30px",
      borderRadius: "20px",
      boxShadow: "0 12px 45px rgba(255, 140, 0, 0.25)",
      width: "90%",
      maxWidth: "1000px",  // Keeps layout from stretching too much
      border: "2px solid #ffa500",
      backdropFilter: "blur(6px)",
      transition: "all 0.4s ease-in-out",
      boxSizing: "border-box",
  },
    avatar: {
        display: "block",
        margin: "0 auto 20px",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "4px solid #ffa500",
        transition: "transform 0.3s ease-in-out",
    },
    name: {
        fontSize: "24px",
        margin: "10px 0",
        color: "#ff8c00",
        fontWeight: "700",
    },
    label: {
        fontSize: "15px",
        color: "#cc7000",
        margin: "4px 0",
    },
    bio: {
        fontSize: "14px",
        color: "#996000",
        marginTop: "10px",
        marginBottom: "20px",
        lineHeight: "1.6",
    },
    scheduleSection: {
        textAlign: "left",
        marginBottom: "25px",
    },
    scheduleTitle: {
        fontSize: "16px",
        color: "#cc7000",
        marginBottom: "10px",
        fontWeight: "600",
    },
    scheduleGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    },
    scheduleItem: {
        backgroundColor: "#fff2d9",
        padding: "8px 12px",
        borderRadius: "8px",
        color: "#774400",
        fontSize: "14px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    },
    button: {
        padding: "12px 18px",
        backgroundColor: "#ffa500",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "600",
        transition: "background-color 0.3s ease-in-out",
    },
};

export default Profile;
