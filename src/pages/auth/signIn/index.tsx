import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
// import { FcGoogle } from "react-icons/fc";
// import { IoLogoGithub } from "react-icons/io";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const ProviderIcon = ({ index }: { index: number }) => {
  if (index === 0) return <TfiMicrosoftAlt size={30} color="blue" />;
  return <p>svg</p>;
};

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-100">
      <div className="relative py-3 max-w-fit sm:mx-auto">
        <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto text-white">
            <h1 className="text-center font-bold text-2xl animate-pulse">Syntax Login</h1>
            <div className="mt-5 mb-4">
              <label className="font-semibold text-sm text-gray-400 pb-1 block" htmlFor="login">
                E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                type="text"
                id="login"
              />
              <label className="font-semibold text-sm text-gray-400 pb-1 block" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                type="password"
                id="password"
              />
            </div>
            <section className="flex flex-col gap-2 justify-center items-stretch">
              {Object.values(providers).map((provider, index) => (
                <div key={provider.name}>
                  <button
                    className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
                    onClick={() => signIn(provider.id)}>
                    <ProviderIcon index={index} />
                    <span className="ml-8">Sign in with {provider.name}</span>
                  </button>
                </div>
              ))}
            </section>
            <div className="mt-5">
              <button
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
