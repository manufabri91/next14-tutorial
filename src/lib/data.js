// ----------- FETCH USING API -------------------------------

import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong :(");
  }

  return await res.json();
};

// export const getUserById = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong :(");
//   }

//   return await res.json();
// };

export const getPostBySlug = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong :(");
  }

  return await res.json();
};
// ---------------------------------------------------------

// export const getPosts = async () => {
//   try {
//     connectToDB();
//     const posts = await Post.find();
//     return posts;
//   } catch (error) {
//     console.log("Failed fetching posts");
//     throw new Error(error);
//   }
// };

// export const getPostBySlug = async (slug) => {
//   try {
//     connectToDB();
//     const post = await Post.findOne({ slug });
//     return post;
//   } catch (error) {
//     console.log(`Failed fetching post with slug: ${slug}`);
//     throw new Error(error);
//   }
// };

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Failed fetching users");
    throw new Error(error);
  }
};

export const getUserById = async (userId) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.log(`Failed fetching user with id: ${userId}`);
    throw new Error(error);
  }
};
