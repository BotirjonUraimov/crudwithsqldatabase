"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pswd, setPswd] = useState("");
  const [id, setId] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  async function loginRequest(id: string, pswd: string) {
    try {
      const data = { userid: id, orid: "G01001000", pswd: pswd };
      console.log("data::", data);

      const res = await axios.post(
        "http://api.cinet.global:8081/api/user/login",
        data
      );
      const member = res.data;

      localStorage.setItem("member_data", JSON.stringify(member));
    } catch (err) {
      console.error("Error adding equipment:", err);
    }
  }
  const handle_id = (e: any) => {
    setId(e.target.value);
    console.log(id);
  };

  const handle_orid = (e: any) => {
    setPswd(e.target.value);
    console.log(pswd);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "center",
        mt: "10px",
      }}
    >
      {" "}
      <Box sx={{ width: "390px" }}>
        <Image
          src="/loginpage.jpg"
          alt="loginPage"
          height={300}
          width={390}
          objectFit="cover"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            mt: "50px",
            width: "390px",
            ml: "40px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: "15px", width: "30%" }}>아이디</Box>
            <TextField
              sx={{ width: "50%" }}
              id="standard-basic"
              label=""
              variant="standard"
              onChange={handle_id}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: "15px", width: "30%" }}>비밀번호</Box>

            <FormControl sx={{ width: "50%" }} variant="standard">
              <Input
                onChange={handle_orid}
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
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
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            mt: "40px",
            width: "390px",
          }}
        >
          <Button
            onClick={() => {
              loginRequest(id, pswd);
            }}
            className="login_btn"
            sx={{ width: "40%", color: "black", backgroundColor: "#7fff00" }}
            variant="contained"
            color="success"
          >
            로그인
          </Button>
          <Button
            className="login_btn"
            sx={{ width: "40%", color: "black", backgroundColor: "#7fff00" }}
            variant="contained"
            color="success"
          >
            회원가입입
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
// <li key={index} style={{ display: "flex", gap: "10px" }}>
//   <p>Product Name: {item.product_name}</p>
//   <p>Brand ID: {item.brand_id}</p>
//   <p>Category ID: {item.category_id}</p>
//   <p>Model Year: {item.model_year}</p>
//   <p>List Price: {item.list_price}</p>
// </li>
