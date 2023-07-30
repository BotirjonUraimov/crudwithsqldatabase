"use client";

import { useEffect, useState } from "react";

import { User } from "@/lib/data";
import { Box, Button } from "@mui/material";
import useDeviceDetect from "@/lib/responsive/usedeviceDetect";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isClient, setIsClient] = useState(false);

  async function fetchUsers() {
    const res = await fetch("/api/getdata");
    const data = await res.json();

    setUsers(data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isClient ? (
          <div>box</div>
        ) : (
          <Box sx={{ width: "1000px" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Box className="info">User name</Box>
              <Box className="info">Phone</Box>
              <Box className="info">Address</Box>
              <Box className="info">Email</Box>
              <Box className="info">Data of Birth</Box>
            </Box>

            {users.map((user) => (
              <Box
                key={user.PHNM}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Box className="info">{user.USERNM}</Box>
                <Box className="info">{user.PHNM}</Box>
                <Box className="info">{user.USERADDR}</Box>
                <Box className="info">{user.EMAILADDR}</Box>
                <Box className="info">{user.BDT}</Box>
              </Box>
            ))}
          </Box>
        )}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isClient ? (
        <div>box</div>
      ) : (
        <Box sx={{ width: "1440px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Box className="infodesk">User name</Box>
            <Box className="infodesk">Phone</Box>
            <Box className="infodesk">Address</Box>
            <Box className="infodesk">Email</Box>
            <Box className="infodesk">Data of Birth</Box>
          </Box>

          {users.map((user) => (
            <Box
              key={user.PHNM}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Box className="infodesk">{user.USERNM}</Box>
              <Box className="infodesk">{user.PHNM}</Box>
              <Box className="infodesk">{user.USERADDR}</Box>
              <Box className="infodesk">{user.EMAILADDR}</Box>
              <Box className="infodesk">{user.BDT}</Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default HomePage;
