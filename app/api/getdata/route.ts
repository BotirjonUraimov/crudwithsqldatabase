import { Exercise } from "@/lib/data";
import { connect } from "mssql";
import { NextResponse } from "next/server";
import { IResult } from "mssql";
export const dbConfig = {
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

export const dbConfigCinet = {
  server: "sql.cinet.global",
  port: 1433,
  user: "ncloud",
  password: "cinetglobal12!@",
  database: "FMSDB",
  options: {
    encrypt: true,
    trustServerCertificate: true,
    checkServerIdentity: () => undefined,
    enableArithAbort: true,
  },
};

export async function GET(request: Request, res: Response) {
  try {
    const connection = await connect(dbConfigCinet);
    const query = `SELECT TOP (1000) [EXID]
      ,[UPEXID]
      ,[EXLVLCD]
      ,[EXNM]
      ,[EXTY]
      ,[EXSCLSCD]
      ,[EXLCLSCD]
      ,[EEID]
      ,[TIMEEPYN]
      ,[DTCEPYN]
      ,[SETEPYN]
      ,[NOFEPYN]
      ,[WITEPYN]
      ,[VIDNM]
      ,[EXENM]
      ,[BASRM1WITRATE]
      ,[BASSETNOF]
      ,[BASEXNOF]
      ,[STTEXID]
      ,[REGUSERID]
      ,[REGDT]
      ,[MODUSERID]
      ,[MODDT]
      ,[EXBDPTCD]
      ,[EXMTDDSC]
      ,[VIDYN]
  FROM [FMSDB].[FMS].[TEX_EXM]`;
    const results: IResult<any> = await connection.query(query);

    //   console.log("result::::", results);

    const users = results.recordset as Exercise[];

    return NextResponse.json({ message: "OK", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
