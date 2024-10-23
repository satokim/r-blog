import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pd-12 max-w-[64rem]">
        <div className="container text-center flex flex-col items-center gap-4">
          <Link href={"/"}>Follow X</Link>
          <h1>BLOG WRITER</h1>
          <p>
            This application was created in the AppRouter of Nex.js Users are
            free to post posts.
          </p>
        </div>
      </section>
    </>
  );
}
