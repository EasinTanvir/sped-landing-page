import { NextResponse } from "next/server";
import { prismaCli } from "../../../../../../prismaCli/prismaClient";

export async function GET() {
  try {
    const menus = await prismaCli.menu.findMany();
    return NextResponse.json(menus);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch menus" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    const newMenu = await prismaCli.menu.create({
      data,
    });
    return NextResponse.json(newMenu);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create menu" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const { id, ...data } = await req.json();

    const updated = await prismaCli.menu.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update menu" },
      { status: 500 }
    );
  }
}
