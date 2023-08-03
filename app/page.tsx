"use client";

import { useEffect, useState } from "react";

import { Exercise } from "@/lib/data";
import { Box, Button } from "@mui/material";
import useDeviceDetect from "@/lib/responsive/usedeviceDetect";

const HomePage = () => {
  const [users, setUsers] = useState<Exercise[]>([]);
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
            <Box>
              <h1>Exercise list</h1>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Box className="info">운동아이디</Box>
              <Box className="info">운동명</Box>
              <Box className="info">운동영문명</Box>
              <Box className="info">운동기구아이디</Box>
              <Box className="info">동영상명</Box>
            </Box>

            {users.map((exercise) => (
              <Box
                key={exercise.EXID}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Box className="info">{exercise.EXID}</Box>
                <Box className="info">{exercise.EXNM}</Box>
                <Box className="info">{exercise.EXENM}</Box>
                <Box className="info">{exercise.EEID}</Box>
                <Box className="info">{exercise.VIDNM}</Box>
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
          <Box sx={{ textAlign: "center" }}>
            <h1>Exercise list</h1>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Box className="infodesk">운동아이디</Box>
            <Box className="infodesk">운동명</Box>
            <Box className="infodesk">운동영문명</Box>
            <Box className="infodesk">운동기구아이디</Box>
            <Box className="infodesk">동영상명</Box>
          </Box>

          {users.map((exercise) => (
            <Box
              key={exercise.EXID}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Box className="infodesk">{exercise.EXID}</Box>
              <Box className="infodesk">{exercise.EXNM}</Box>
              <Box className="infodesk">{exercise.EXENM}</Box>
              <Box className="infodesk">{exercise.EEID}</Box>
              <Box className="infodesk">{exercise.VIDNM}</Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default HomePage;
