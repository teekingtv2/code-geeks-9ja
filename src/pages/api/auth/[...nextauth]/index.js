import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connect from '@/backend/db/db';
import Admin from '@/backend/models/Admin';

export const authOptions = {
  providers: [
    // Sign in with email/password
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        const refinedEmail = credentials.email.toLowerCase();

        try {
          const user = await Admin.findOne({ email: refinedEmail });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Invalid email or password');
            }
          } else {
            throw new Error('User account not found');
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: '/dashboard/login',
    error: '/dashboard/login',
  },
};

export default NextAuth(authOptions);
