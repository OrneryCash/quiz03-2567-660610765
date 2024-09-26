import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Teerapad Pipadboonyarat",
    studentId: "660610765",
  });
};
