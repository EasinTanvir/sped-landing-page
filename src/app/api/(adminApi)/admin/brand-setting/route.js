import { NextResponse } from "next/server";
import { prismaCli } from "../../../../../../prismaCli/prismaClient";

export async function GET() {
  try {
    const setting = await prismaCli.brandSetting.findFirst();
    return NextResponse.json({ success: true, data: setting });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const existing = await prismaCli.brandSetting.findFirst();
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Already exists" },
        { status: 400 }
      );
    }

    const created = await prismaCli.brandSetting.create({ data: body });
    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Create failed" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  console.log("I am hit");
  try {
    const body = await req.json();
    console.log("body", body);
    if (!body.id) {
      return NextResponse.json(
        { success: false, message: "Missing ID for update" },
        { status: 400 }
      );
    }

    const updated = await prismaCli.brandSetting.update({
      where: { id: body.id },
      data: {
        brandTitle: body.brandTitle,
        footerText: body.footerText,
        brandLogo: body.brandLogo || " ",
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    );
  }
}
