import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(19, 21, 22, 0.81)", // Dark background with transparency
        color: "white",
        p: 2,
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1300, // Ensure it stays above other components
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
