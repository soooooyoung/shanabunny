import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const token = request.cookies.get("token")?.value;

  if (!id) {
    return NextResponse.json(
      { error: "Bad Request: Missing URL parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${process.env.HOST}/file/music/${id}`, {
      cache: "no-cache",
      // next: { revalidate: 3600 },
      headers: {
        "Content-Type": "audio/mpeg",
        apikey: process.env.APIKEY || "",
        Cookie: `token=${token}`,
      },
      credentials: "include",
      mode: "cors",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: response.statusText },
        { status: response.status }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": response.headers.get("content-type") || "audio/mpeg",
        "Content-Length": String(audioBuffer.byteLength),
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
