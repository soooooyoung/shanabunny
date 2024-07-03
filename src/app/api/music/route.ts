import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Bad Request: Missing URL parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${process.env.HOST}/file/music/${id}`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "audio/mpeg",
        apikey: process.env.APIKEY || "",
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
    console.error("Error fetching audio:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
