import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDB();
    const posts = await Post.findOne({ slug });
    return NextResponse.json(posts);
  } catch (error) {
    console.log("Failed to fetch post", error);
    return NextResponse.error(error);
  }
};
