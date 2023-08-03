"use client";
import useDeviceDetect from "@/lib/responsive/usedeviceDetect";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import Link from "next/link";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExercisesPage = () => {
  const { isMobile } = useDeviceDetect();
  if (isMobile()) {
    return (
      <Box>
        <Box sx={{ mt: "20px", width: "100%" }}>
          <Box
            sx={{
              mb: "20px",
            }}
          >
            <Typography>운동달성율</Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "10%" }}>오늘</Box>
              <Box sx={{ width: "90%", height: "100%", paddingTop: "2%" }}>
                <Box
                  sx={{
                    borderTop: "1px dotted black",
                    width: "100%",
                    height: "0px",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              className={"ex_box"}
              sx={{
                display: "flex",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Image
                src="/stretching_icon.png"
                alt="icon"
                width={80}
                height={80}
                objectFit="cover"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0px" }}
              >
                <Typography>스트레칭</Typography>
                <Typography>00:06:18 | 22kcal</Typography>
                <Typography sx={{ fontSize: "13px", mt: "12px" }}>
                  18:52
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "10%" }}>어제</Box>
              <Box sx={{ width: "90%", height: "100%", paddingTop: "2%" }}>
                <Box
                  sx={{
                    borderTop: "1px dotted black",
                    width: "100%",
                    height: "0px",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }} className={"ex_box"}>
              <Image
                style={{ padding: "10px" }}
                src="/second_icon.gif"
                alt="icon"
                width={60}
                height={60}
                objectFit="cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  width: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderBottom: "1px dotted black",
                  position: "relative",
                }}
              >
                <Typography>벤치프레스</Typography>
                <Typography>12회 3세트 | 22kcal 완료</Typography>
                <Typography sx={{ fontSize: "13px", mt: "12px" }}>
                  18:52
                </Typography>

                <Box sx={{ position: "absolute", right: "10px", top: "18px" }}>
                  {" "}
                  <Image
                    src={"/complete2.png"}
                    alt="icon"
                    width={50}
                    height={50}
                    objectFit="cover "
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "30px",
                    bottom: "5px",
                    fontSize: "12px",
                    color: "green",
                  }}
                >
                  완료
                </Box>
              </Box>
            </Box>
            <Box
              className={"ex_box"}
              sx={{
                display: "flex",
                paddingTop: "10px",
                position: "relative",
              }}
            >
              <Image
                src="/thirth_icon.avif"
                alt="icon"
                width={80}
                height={80}
                objectFit="cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  width: "100%",
                  paddingBottom: "10px",
                  borderBottom: "1px dotted black",
                }}
              >
                <Typography>레그프레스</Typography>
                <Typography>9회 5세트 | 22kcal</Typography>
                <Typography sx={{ fontSize: "13px", mt: "12px" }}>
                  15:17
                </Typography>
                <Box sx={{ position: "absolute", right: "25px", top: "28px" }}>
                  <Image
                    src={"/incompleted.png"}
                    alt="icon"
                    width={40}
                    height={40}
                    objectFit="cover "
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "30px",
                    bottom: "5px",
                    fontSize: "12px",
                    color: "red",
                  }}
                >
                  미완료
                </Box>
              </Box>
            </Box>

            <Box
              className={"ex_box"}
              sx={{
                display: "flex",
                mb: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Image
                src="/stretching_icon.png"
                alt="icon"
                width={80}
                height={80}
                objectFit="cover"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0px" }}
              >
                <Typography>스트레칭</Typography>
                <Typography>00:06:18 | 22kcal</Typography>
                <Typography sx={{ fontSize: "13px", mt: "12px" }}>
                  18:52
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "26%" }}>{"8 월 6 일 (금) "} </Box>
              <Box sx={{ width: "74%", height: "100%", paddingTop: "2%" }}>
                <Box
                  sx={{
                    borderTop: "1px dotted black",
                    width: "100%",
                    height: "0px",
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              className={"ex_box"}
              sx={{
                display: "flex",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Image
                src="/stretching_icon.png"
                alt="icon"
                width={80}
                height={80}
                objectFit="cover"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0px" }}
              >
                <Typography>스트레칭</Typography>
                <Typography>00:06:18 | 22kcal</Typography>
                <Typography sx={{ fontSize: "13px", mt: "12px" }}>
                  18:52
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center", mt: "15px" }}>
          <Button
            className="login_btn"
            sx={{
              width: "120px",
              color: "black",
              backgroundColor: "#7fff00",
            }}
            variant="contained"
            color="success"
          >
            <Link className="link_btn" href="/eqlist">
              운동추가
            </Link>
          </Button>
        </Box>

        <Box sx={{ width: "100%", textAlign: "center", mt: "15px" }}>
          <Box
            className={"ex_box"}
            sx={{
              display: "flex",
              paddingTop: "10px",
              position: "relative",
              borderBottom: "1px dotted black",
            }}
          >
            <Image
              src="/thirth_icon.avif"
              alt="icon"
              width={80}
              height={80}
              objectFit="cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                width: "100%",
                position: "relative",

                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <Typography>레그프레스</Typography>
              <Checkbox
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "black",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
                defaultChecked
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Box>
          <Box
            className={"ex_box"}
            sx={{
              display: "flex",
              paddingTop: "10px",
              position: "relative",
              borderBottom: "1px dotted black",
            }}
          >
            <Image
              style={{ padding: "10px" }}
              src="/second_icon.gif"
              alt="icon"
              width={60}
              height={60}
              objectFit="cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                width: "100%",
                position: "relative",

                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <Typography>벤치프레스</Typography>
              <Checkbox
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "black",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
                defaultChecked
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Box>
          <Box
            className={"ex_box"}
            sx={{
              display: "flex",
              paddingTop: "10px",
              position: "relative",
              borderBottom: "1px dotted black",
            }}
          >
            <Image
              style={{ padding: "10px" }}
              src="/second_icon.gif"
              alt="icon"
              width={60}
              height={60}
              objectFit="cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                width: "100%",
                position: "relative",

                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <Typography>케이블 트라이셉 킥백</Typography>
              <Checkbox
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "black",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
                defaultChecked
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Box>
          <Box
            className={"ex_box"}
            sx={{
              display: "flex",
              paddingTop: "10px",
              position: "relative",
              borderBottom: "1px dotted black",
            }}
          >
            <Image
              src="/stretching_icon.png"
              alt="icon"
              width={80}
              height={80}
              objectFit="cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                width: "100%",
                position: "relative",

                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <Typography>벤트오버 케이블로우</Typography>
              <Checkbox
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "black",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
                defaultChecked
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Box>
          <Box
            className={"ex_box"}
            sx={{
              display: "flex",
              paddingTop: "10px",
              position: "relative",
              borderBottom: "1px dotted black",
            }}
          >
            <Image
              src="/stretching_icon.png"
              alt="icon"
              width={80}
              height={80}
              objectFit="cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                width: "100%",
                position: "relative",

                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <Typography>스트레칭</Typography>
              <Checkbox
                sx={{
                  position: "absolute",
                  right: "10px",
                  color: "black",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
                defaultChecked
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default ExercisesPage;
