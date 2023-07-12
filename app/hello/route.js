// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server";

export default function GET(req, res) {
  return NextResponse.json({"data": "Hello world!"});
}
