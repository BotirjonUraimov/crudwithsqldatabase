"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import Image from "next/image";

import Headerv2 from "@/conponents/headerv2";
import Link from "next/link";

export default function ExPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Headerv2 />
      <Box
        sx={{
          width: "355px",
          display: "flex",
          flexDirection: "column",

          padding: "16px",
          backgroundColor: "#ebeef1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            mb: "8px",
          }}
        >
          <Box className="hmenu">
            운동 달성률
            <Image src="/black_arrow.png" alt="icon" width={15} height={15} />
          </Box>
          <Box className="submenu">
            회원님이 설정하신 운동의 활동량과 달성률
          </Box>
        </Box>

        <Box className="recexbox">
          <Box className="exnamebox">
            <Box className="comp_iconbox">
              <Image src="/comp_icon.png" alt="icon" width={22} height={22} />
              스트레칭
            </Box>
            <Box className="progressdatebox">
              완료 2023. 6. 10
              <Image src="/arrow.png" alt="icon" width={15} height={15} />
            </Box>
          </Box>
          <Box className="extimebox">
            <Box
              className="extimetextbox"
              sx={{ borderRight: "2px solid #b8b8b8" }}
            >
              0:32:37
            </Box>
            <Box
              className="extimetextbox"
              sx={{ borderRight: "2px solid #b8b8b8" }}
            >
              12회 3세트
            </Box>
            <Box className="extimetextbox">150 kcal</Box>
          </Box>
        </Box>

        <Box className="recexbox">
          <Box className="exnamebox">
            <Box className="comp_iconbox">
              <Image src="/comp_icon.png" alt="icon" width={22} height={22} />
              벤치프레스
            </Box>
            <Box className="progressdatebox">
              완료 2023. 6. 10
              <Image src="/arrow.png" alt="icon" width={15} height={15} />
            </Box>
          </Box>
          <Box className="extimebox">
            <Box
              className="extimetextbox"
              sx={{ borderRight: "2px solid #b8b8b8" }}
            >
              0:12:07
            </Box>
            <Box
              className="extimetextbox"
              sx={{ borderRight: "2px solid #b8b8b8" }}
            >
              1회
            </Box>
            <Box className="extimetextbox">50 kcal</Box>
          </Box>
        </Box>
        <Box className="incompbox">
          <Box className="incompbox_icon">
            <Image src="/incomp_icon.png" alt="icon" width={20} height={20} />
            레그컬
          </Box>
          <Box className="incompbox_info">
            <Box>10회 5세트</Box>
            <Box>미완료</Box>
          </Box>
        </Box>

        <Box className="addingExBox">
          <Box className="addBy">
            <Image src="/plus_icon.png" alt="icon" width={32} height={32} />
            운동 추가
          </Box>
          <Box className="addBy">
            <Image src="/qr-code.png" alt="icon" width={32} height={32} />
            <Link
              style={{ textDecoration: "none", color: "#4582e9" }}
              href={"/scanpage"}
            >
              QR 기기 스캔
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            mb: "8px",
          }}
        >
          <Box className="hmenu" sx={{ mt: "53px" }}>
            최근 운동
            <Image src="/black_arrow.png" alt="icon" width={15} height={15} />
          </Box>
          <Box className="submenu">회원님이 최근에 추가하신 운동</Box>
        </Box>

        <Box className="incompbox" sx={{ color: "#4582E9" }}>
          <Box className="incompbox_icon" sx={{ color: "#4582E9" }}>
            <Image
              src="/exer_blue_icon.png"
              alt="icon"
              width={20}
              height={20}
            />
            레그컬
          </Box>
          <Box className="incompbox_info" sx={{ color: "#4D5055" }}>
            <Box>10회 5세트</Box>
            <Button className="addex" variant="contained">
              운동 추가
            </Button>
          </Box>
        </Box>
        <Box className="incompbox" sx={{ color: "#4582E9" }}>
          <Box className="incompbox_icon" sx={{ color: "#4582E9" }}>
            <Image
              src="/exer_blue_icon.png"
              alt="icon"
              width={20}
              height={20}
            />
            레그컬
          </Box>
          <Box className="incompbox_info" sx={{ color: "#4D5055" }}>
            <Box>10회 5세트</Box>
            <Button className="addex" variant="contained">
              운동 추가
            </Button>
          </Box>
        </Box>
        <Box className="incompbox" sx={{ color: "#4582E9" }}>
          <Box className="incompbox_icon" sx={{ color: "#4582E9" }}>
            <Image
              src="/exer_blue_icon.png"
              alt="icon"
              width={20}
              height={20}
            />
            레그컬
          </Box>
          <Box className="incompbox_info" sx={{ color: "#4D5055" }}>
            <Box>10회 5세트</Box>
            <Button className="addex" variant="contained">
              운동 추가
            </Button>
          </Box>
        </Box>
        <Box className="incompbox" sx={{ color: "#4582E9" }}>
          <Box className="incompbox_icon" sx={{ color: "#4582E9" }}>
            <Image
              src="/exer_blue_icon.png"
              alt="icon"
              width={20}
              height={20}
            />
            레그컬
          </Box>
          <Box className="incompbox_info" sx={{ color: "#4D5055" }}>
            <Box>10회 5세트</Box>
            <Button className="addex" variant="contained">
              운동 추가
            </Button>
          </Box>
        </Box>
        <Box className="incompbox" sx={{ color: "#4582E9" }}>
          <Box className="incompbox_icon" sx={{ color: "#4582E9" }}>
            <Image
              src="/exer_blue_icon.png"
              alt="icon"
              width={20}
              height={20}
            />
            레그컬
          </Box>
          <Box className="incompbox_info" sx={{ color: "#4D5055" }}>
            <Box>10회 5세트</Box>
            <Button className="addex" variant="contained">
              운동 추가
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
