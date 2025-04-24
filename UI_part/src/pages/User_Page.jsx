import React, { useState } from "react";
import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const UserProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    profilePic: "/profile-pic.jpg",
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [range, setRange] = useState( 
    {
        from: new Date(2025, 2, 10),  // March 10, 2025 (Month is 0-based)
        to: new Date(2025, 2, 15)     // March 15, 2025
      }
      
 );

  return (
    <Box sx={{ p: 4 }}>
      {/* First Section */}
      <div className="hero">
           

            <section className="hero-container">
                <div>
                    <h1 className="hero-title">
                        Collaborate remotely, with
                        <span className="hero-highlight">ADFC</span>
                    </h1>
                    <p className="hero-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                    </p>

                    <div className="hero-buttons">
                        <a href="#" className="start-button">Start exploring</a>
                       
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/ADFC.png" alt="Hero" />
                </div>
            </section>
        </div>
        <div style={ {display: "flex", justifyContent: "center"} }>
      {/* Second Section: Calendar */}
      <Paper sx={{ p: 4, width: "100vh", }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Work Schedule
      </Typography>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2} // Show two months side by side
        styles={{
          caption: { textAlign: "center", fontWeight: "bold" },
          root: { width: "100%", fontSize: "1.5rem", padding: "20px" }, // Full width + Bigger font + Padding
          day: { width: "50px", height: "50px" }, // Bigger day cells
        }}
      />

      <Typography variant="body1" mt={2}>
        {range.from && range.to
          ? `Selected Range: ${format(range.from, "PP")} - ${format(range.to, "PP")}`
          : range.from
          ? `Start Date: ${format(range.from, "PP")}`
          : "Please pick a start date"}
      </Typography>
    </Paper>
    </div>
    </Box>
  );
};

export default UserProfilePage;
