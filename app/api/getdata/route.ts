import { User } from "@/lib/data";
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

export async function GET(request: Request, res: Response) {
  try {
    const connection = await connect(dbConfig);
    const query = `SELECT TOP (4) [USERID]
      ,[USERNM]
      ,[MBRJOINDE]
      ,[ZIPCD]
      ,[USERADDR]
      ,[USERDTLADDR]
      ,[EMAILADDR]
      ,[PHNM]
      ,[BDT]
      ,[PSWD]
      ,[REGUSERID]
      ,[REGDT]
  FROM [BikeStores].[sales].[TUR_USERM]`;
    const results: IResult<any> = await connection.query(query);

    //   console.log("result::::", results);

    const users = results.recordset as User[];
    console.log("data::::", users);

    return NextResponse.json({ message: "OK", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
