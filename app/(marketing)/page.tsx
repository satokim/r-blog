import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      {/* Title */}
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pd-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Follow X
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            BLOG WRITER
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            This application was created in the AppRouter of Nex.js Users are
            free to post posts.
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Start
            </Link>

            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        {/* Features of the Service */}
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            Features of the Service
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            This project is a web application built with a modern tech stack. It
            uses Next.js App Router and contentlayer, allowing blog posts to be
            made in markdown format.
          </p>
        </div>

        {/* Card List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
          {/* Next.js */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Zm8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Z"
                />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>

          {/* PlanetScale */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <path d="M256 128.044c-.024 70.657-57.299 127.932-127.956 127.956ZM128 0c51.977 0 96.719 30.98 116.765 75.483L75.483 244.765a127.791 127.791 0 0 1-20.636-11.715L159.897 128H128l-90.51 90.51C14.327 195.345 0 163.345 0 128C0 57.308 57.308 0 128 0Z" />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">PlanetScale</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>

          {/* TailwindCSS */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">TailwindCSS</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>

          {/* OAuth */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58l2.343 7.45l-6.157-4.597l-6.158 4.58l2.358-7.433l-6.188-4.55l7.63-.045L12.008 0l2.356 7.404l7.615.044z"
                />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">OAuth</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>

          {/* Stripe */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              {/* Card Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305h.003z"
                />
              </svg>
              {/* Card Description */}
              <div className="space-y-2">
                <h3 className="font-bold">Stripe</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Blog Writer can create blog posts once logged in.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-2-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            If you like the web service, please feel free to contact me via DM
            on X (formerly Twitter) using the link below.
            <br />I look forward to hearing from you regarding potential work
            opportunities.
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            For business inquiries, please reach out via X (formerly Twitter).
          </Link>
        </div>
      </section>
    </>
  );
}
