"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { QrScanner } from "react-qrcode-scanner";
import { useRouter } from "next/navigation";

function Scanner() {
  const router = useRouter();
  const [result, setResult] = useState();

  useEffect(() => {
    // Only call the useRouter hook once.
    if (!router.isReady) {
      return;
    }

    // Do something with the router here.
  }, [router]);

  const handleScan = (value) => {
    setResult(value);
    console.log({ value });
    setTimeout(() => {
      router.push("/loginv2");
    }, 3000);
  };

  const handleError = (error) => {
    console.log({ error });
  };

  return (
    <div className="App" style={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: "9999",
          width: "100%",
        }}
      >
        <Box
          sx={{
            mt: "22px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "40px",
          }}
        >
          <a href="/">
            <img
              src="/whitelogo.png"
              alt="logo"
              style={{ marginLeft: "16px" }}
            />
          </a>
          <a href="/exercise">
            <img
              src="/plus.png"
              alt="logo"
              style={{ marginRight: "16px", cursor: "pointer" }}
            />
          </a>
        </Box>
        <Box className="qrbox" sx={{ width: "100%", textAlign: "center" }}>
          QR 코드를 스캔해주세요.
        </Box>

        <Box
          className="qrboxsmalltext"
          sx={{
            width: "100%",
            mt: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            className="qrboxsmalltext"
            sx={{
              width: "75%",
              textAlign: "center",
            }}
          >
            기기의 QR 코드는 스크린 메뉴 QR Code에 있습니다. 하단 프레임에
            QR코드를 맞춰주세요.
          </Box>
        </Box>
      </Box>
      <QrScanner
        className="qrsec"
        onScan={handleScan}
        onError={handleError}
        video={{
          width: "100%",
          position: "relative",
          height: "100vh",
        }}
        viewFinder={{
          width: "250px",
          height: "250px",
          top: "50px",
          border: result
            ? "12px solid #4582e9"
            : "12px solid rgba(255,255,255,0.3)",

          position: "absolute",
          borderRadius: "20px ",
        }}
      />
    </div>
  );
}

export default Scanner;
