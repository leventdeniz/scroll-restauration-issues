import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";

import "./tailwind.css";
import { useEffect } from "react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { scrollRestorationCookie } from "./cookies.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookie =
    (await scrollRestorationCookie.parse(request.headers.get("Cookie"))) ??
    "auto";
  const scrollRestorationParam =
    new URL(request.url).searchParams.get("scrollRestoration") ?? cookie;
  const scrollRestoration: typeof history.scrollRestoration =
    scrollRestorationParam === "auto" || scrollRestorationParam === "manual"
      ? scrollRestorationParam
      : "auto";
  return json(
    { scrollRestoration },
    {
      headers: {
        "Set-Cookie": await scrollRestorationCookie.serialize(
          scrollRestoration
        ),
      },
    }
  );
};

let scrollRestoration: typeof history.scrollRestoration = "auto";

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  useEffect(() => {
    const value = data?.scrollRestoration ?? scrollRestoration;
    history.scrollRestoration = value;
    scrollRestoration = value;
  }, [data?.scrollRestoration]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
