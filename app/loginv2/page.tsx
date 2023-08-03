"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "355px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          padding: "16px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: "144px",
            mb: "50px",
          }}
        >
          <Image src="/logo.png" alt="logo" width={204.95} height={76} />
        </Box>
        <Box>
          <Input
            className="ligin_input"
            sx={{ width: "100%", pr: "16px", pl: "16px", height: "50px" }}
            id="standard-adornment-password"
            placeholder="아이디 입력"
            type={"text"}
          />

          <Input
            sx={{ width: "100%", pr: "16px", pl: "16px", height: "50px" }}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호 입력"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <Button
            className="loginBtn"
            sx={{
              width: "100%",
              color: "white",
              height: "56px",
              backgroundColor: "#4582e9",
              mt: "32px",
            }}
            variant="contained"
          >
            로그인
          </Button>
          <Box
            className="resets"
            sx={{
              mt: "17px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #A8ABAC ",
                width: "33%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              아이디 찾기
            </Box>
            <Box
              sx={{
                borderRight: "1px solid #A8ABAC",
                width: "33%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              아이디 찾기
            </Box>
            <Box
              sx={{
                width: "33%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              아이디 찾기
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
