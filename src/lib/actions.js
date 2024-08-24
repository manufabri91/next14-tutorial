"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log("Saved to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const handleLoginGithub = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};

export const handleRegister = async (prevState, formData) => {
  const { email, password, username, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDB();

    const user = await User.findOne({ email });
    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      img,
    });
    await newUser.save();
    console.log("Saved to DB");
    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const handleLogin = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Wrong credentials" };
    }
    throw err;
  }
};
