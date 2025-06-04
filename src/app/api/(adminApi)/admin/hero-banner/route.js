import { NextResponse } from "next/server";
import { prismaCli } from "../../../../../../prismaCli/prismaClient";

export async function POST(req) {
  const { title, description, items, buttonOneText, buttonTwoText } =
    await req.json();

  try {
    const banner = await prismaCli.heroBanner.create({
      data: {
        title,
        description,
        items,
        buttonOneText,
        buttonTwoText,
      },
    });

    return NextResponse.json(
      { message: "Banner Created Successfully", data: banner },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed To Create Banner", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const banner = await prismaCli.heroBanner.findFirst();

    return NextResponse.json(banner, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed To Fetch Banner", error: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { id, title, description, items, buttonOneText, buttonTwoText } =
    await req.json();

  try {
    const updatedBanner = await prismaCli.heroBanner.update({
      where: { id },
      data: {
        title,
        description,
        items,
        buttonOneText,
        buttonTwoText,
      },
    });

    return NextResponse.json(
      { message: "Banner Updated Successfully", data: updatedBanner },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed To Update Banner", error: err.message },
      { status: 500 }
    );
  }
}
