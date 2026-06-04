import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-semibold">Welcome to Notes</h1>
      <div className="flex gap-4">
        <Link
          href="/authenticate"
          className="rounded-md bg-black px-6 py-2 text-white hover:bg-gray-800"
        >
          Log in
        </Link>
        <Link
          href="/authenticate"
          className="rounded-md border border-black px-6 py-2 hover:bg-gray-100"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}
