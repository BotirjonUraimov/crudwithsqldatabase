import { Eelist } from "@/lib/data";
import { connect } from "mssql";
import { NextResponse } from "next/server";
import { IResult } from "mssql";
import { dbConfig, dbConfigCinet } from "../getdata/route";

export async function GET(req: Request, res: Response) {
  try {
    const connection = await connect(dbConfigCinet);
    const query = `SELECT TOP (1000) [EEID]
      ,[EENM]
      ,[BARCDMNGYN]
      ,[NUMREGYN]
      ,[EEPCTDAT]
      ,[REGUSERID]
      ,[REGDT]
      ,[MODUSERID]
      ,[MODDT]
      ,[EETYCD]
      ,[EEEXPATCD]
  FROM [FMSDB].[FMS].[TEE_EEM]`;
    const results: IResult<any> = await connection.query(query);

    //   console.log("result::::", results);

    const eelist = results.recordset as Eelist[];
    console.log("data::::", eelist);

    return NextResponse.json({ message: "OK", eelist }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const connection = await connect(dbConfig);
    const data = await req.json();
    const query = `INSERT INTO [BikeStores].[sales].[eelist2] ([EENM], [EXTP])
VALUES (@EENM, @EXTP);`;
    const result = await connection
      .request()
      .input("EENM", data.eenm)
      .input("EXTP", data.extp)
      .query(query);
    console.log("result::::::", result);

    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
