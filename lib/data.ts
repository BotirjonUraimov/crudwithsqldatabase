import { connect } from "mssql";
import { NextRequest, NextResponse } from "next/server";
import { IResult } from "mssql";

const dbConfig = {
  server: "127.0.0.1",
  port: 1433,
  user: "sa",
  password: "reallyStrongPwd123",
  database: "BikeStores",
  options: {
    encrypt: true,
    trustServerCertificate: true,
    checkServerIdentity: () => undefined,
    enableArithAbort: true,
  },
};

export async function addEquipment(eeid: string, extp: string) {}

export interface User {
  USERNM: string;
  MBRJOINDE: string;
  ZIPCD: string;
  USERADDR: string;
  USERDTLADDR: string;
  EMAILADDR: string;
  PHNM: string;
  BDT: string;
  PSWD: string;
  REGUSERID: string;
  REGDT: Date;
}
export interface Eelist {
  EEID: string;
  EENM: string;
  EXTP: string;
}
