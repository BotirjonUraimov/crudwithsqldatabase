"use client";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useDeviceDetect from "@/lib/responsive/usedeviceDetect";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Eelist } from "@/lib/data";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { sweetTopSmallSuccessAlert } from "@/lib/sweetAlert";
import Link from "next/link";

let img_list = [
  "/1.jpeg",
  "/3.jpeg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/2.jpeg",
  "/images/6.jpg",
  "/images/8.jpg",
  "/images/1.jpg",
  "/1.jpeg",
  "/3.jpeg",
  "/images/1.jpg",
  "/2.jpeg",
  "/images/2.jpg",
  "/1.jpeg",
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Eqlist = () => {
  const [eenm, setEenm] = useState("");
  const [extp, setExtp] = useState("");

  const [eelists, setEelists] = useState<Eelist[]>([]);
  const [isClient, setIsClient] = useState(false);
  const { isMobile } = useDeviceDetect();
  const [age, setAge] = useState("");
  const [subExer, setSubExer] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const exeSubcClass = [
    { EEEXPATCD: "다용도", CD: "001" },
    { EEEXPATCD: "엉덩이,다리", CD: "002" },
    { EEEXPATCD: "등및 가슴", CD: "003" },
    { EEEXPATCD: "팔과 어깨", CD: "004" },
    { EEEXPATCD: "복근", CD: "005" },
    { EEEXPATCD: "프리웨이트", CD: "006" },
    { EEEXPATCD: "바", CD: "007" },
    { EEEXPATCD: "벤치", CD: "008" },
    { EEEXPATCD: "벤기타장비치", CD: "009" },
  ];

  async function fetchEelist() {
    const res = await fetch("/api/geteelist");
    const data = await res.json();
    setEelists(data.eelist);
  }
  useEffect(() => {
    fetchEelist();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleChangeExer = (event: SelectChangeEvent) => {
    setSubExer(event.target.value);
  };

  interface table {
    id?: string;
    EENM: string | null;
    REGDT: Date;
  }

  async function addEquipment(eenm: string, extp: string) {
    const data = { eenm: eenm, extp: extp };
    try {
      // Make a POST request to the server endpoint
      const res = await axios.post("/api/geteelist", data);
      console.log("Response:", res); // Assuming the server returns some response data
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "운동기구아이디", width: 200 },
    { field: "EENM", headerName: "운동기구명", width: 200 },
    { field: "REGDT", headerName: "운동명", width: 200 },
  ];
  const rows: table[] = [];
  eelists.map((device: Eelist) => {
    rows.push({ id: device.EEID, EENM: device.EENM, REGDT: device.REGDT });
  });

  const handle_eenm = (e: any) => {
    setEenm(e.target.value);
  };
  const handle_extp = (e: any) => {
    setExtp(e.target.value);
  };

  if (isMobile()) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          justifyContent: "center",
          mt: "5px",
        }}
      >
        <Box>
          <Typography sx={{ m: 2, fontWeight: 600 }} textAlign="left">
            위치 : 세종소방서{" "}
          </Typography>
        </Box>
        {/* <Box sx={{ width: "100%" }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
          </FormGroup>
        </Box> */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Box>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label">운동소분류</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subExer}
                onChange={handleChangeExer}
                label="운운동소분류"
              >
                <MenuItem value="">All</MenuItem>
                {exeSubcClass.map((ele) => (
                  <MenuItem sx={{ height: "20px" }} value={ele.CD}>
                    {ele.EEEXPATCD}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label">
                운동기구 리스트
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                label="운동기구 리스트"
              >
                <MenuItem value="">All</MenuItem>
                {eelists.map((ee) => {
                  if (ee.EEEXPATCD === subExer)
                    return <MenuItem value={ee.EEID}>{ee.EENM}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          {img_list.map((img) => (
            <Image
              src={img}
              alt={img}
              width={85}
              height={85}
              objectFit="cover"
            />
          ))}
        </Box>
        <Box
          sx={{
            mt: "40px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            pr: "50px",
          }}
        >
          <Button
            onClick={() => {
              sweetTopSmallSuccessAlert(" successfully", 700, false);
            }}
            className="login_btn"
            sx={{
              width: "80px",
              color: "black",
              backgroundColor: "#7fff00",
            }}
            variant="contained"
            color="success"
          >
            <Link style={{ textDecorationLine: "none" }} href="/exercises">
              <Typography textAlign="center"> 확인</Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "center",
        mt: "5px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <Box sx={{ flex: "1" }}>
          <Typography sx={{ m: 2, fontWeight: 600 }} textAlign="left">
            위치 : 세종소방서{" "}
          </Typography>
        </Box>
        <Box sx={{ flex: "1" }}>
          <FormControl sx={{ m: 1, minWidth: 210 }}>
            <InputLabel id="demo-simple-select-label">
              운동기구 리스트
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              label="운동기구 리스트"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {eelists.map((ee) => (
                <MenuItem value={ee.EEID}>{ee.EENM}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: "40px",
        }}
      >
        {img_list.map((img) => (
          <Image
            src={img}
            alt={img}
            width={300}
            height={300}
            objectFit="cover"
          />
        ))}
      </Box>
      <Box
        sx={{
          mt: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          pr: "200px",
        }}
      >
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
          <Typography textAlign="center"> 확인</Typography>
        </Button>
      </Box>
      <Box sx={{ width: "50%", mt: "50px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        <Button
          onClick={handleOpen}
          className="login_btn"
          sx={{
            width: "150px",
            color: "black",
            backgroundColor: "#7fff00",
            mt: "20px",
          }}
          variant="contained"
          color="success"
        >
          <Typography textAlign="center"> Add device</Typography>
        </Button>
      </Box>
      <Box width={"100%"} sx={{ paddingLeft: "30px" }}>
        <Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <TextField
                  onChange={handle_eenm}
                  id="outlined-basic"
                  label="운동기구명"
                  variant="outlined"
                />
                <TextField
                  onChange={handle_extp}
                  id="outlined-basic"
                  label="운동명"
                  variant="outlined"
                />
                <Button
                  onClick={() => addEquipment(eenm, extp)}
                  className="login_btn"
                  sx={{
                    width: "180px",
                    color: "black",
                    backgroundColor: "#7fff00",
                  }}
                  color="success"
                >
                  Add device
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default Eqlist;
