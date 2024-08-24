import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDB } from "./utils";
import { User } from "./models";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Wrong credentials");
    }

    const passwordMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error("Wrong credentials");
    }

    return user;
  } catch (error) {
    console.log("Login failed!", error);
    return null;
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        await connectToDB();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const user = new User({
              email: profile.email,
              username: profile.login,
              img: profile.avatar_url,
            });

            await user.save();
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
  },
});
