export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogsPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPages =
        request.nextUrl?.pathname.startsWith("/login") ||
        request.nextUrl?.pathname.startsWith("/register");

      // ONLY ADMIN CAN ACCESS ADMIN PANEL
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY USERS CAN ACCESS BLOGS PAGE
      if (isOnBlogsPage && !user) {
        return false;
      }

      // ONLY UNAUTHORIZED USERS CAN ACCESS LOGIN PAGES
      if (isOnLoginPages && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
