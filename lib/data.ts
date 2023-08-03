import { connect } from "mssql";
import { NextRequest, NextResponse } from "next/server";
import { IResult } from "mssql";

export async function addEquipment(eeid: string, extp: string) {}

export interface Exercise {
  EXID: string;
  UPEXID: string | null;
  EXLVLCD: string | null;
  EXNM: string | null;
  EXTY: string | null;
  EXSCLSCD: string | null;
  EXLCLSCD: string | null;
  EEID: string | null;
  TIMEEPYN: string | null;
  DTCEPYN: string | null;
  SETEPYN: string | null;
  NOFEPYN: string | null;
  WITEPYN: string | null;
  VIDNM: string | null;
  EXENM: string | null;
  BASRM1WITRATE: number | null;
  BASSETNOF: number | null;
  BASEXNOF: number | null;
  STTEXID: string | null;
  REGUSERID: string;
  REGDT: Date;
  MODUSERID: string;
  MODDT: Date;
  EXBDPTCD: string | null;
  EXMTDDSC: string | null;
  VIDYN: string | null;
}

export interface Eelist {
  EEID: string;
  EENM: string | null;
  BARCDMNGYN: string | null;
  NUMREGYN: string | null;
  EEPCTDAT: string | null; // Use a suitable type for the image data, such as string or ArrayBuffer
  REGUSERID: string;
  REGDT: Date; // Use the appropriate date/time type for your needs
  MODUSERID: string;
  MODDT: Date; // Use the appropriate date/time type for your needs
  EETYCD: string | null;
  EEEXPATCD: string | null;
}
