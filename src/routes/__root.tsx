import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Shell, SiteProvider, RoyalEmblem, Arrow } from "../components/site";

function NotFoundComponent() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-[#fbf9f5] px-5 py-24 text-center text-[#0c1836]">
      <div className="card-3d-light max-w-md rounded-3xl bg-white p-10 shadow-luxury">
        <RoyalEmblem size={56} />
        <p className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-amber-800">
          Error 404 · Page Not Found
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-[#0c1836]">
          الصفحة غير موجودة
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-[#4e5e7b]">
          The requested scholarly dispatch or archive cannot be found.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a3b] to-[#996515] px-6 py-2.5 text-xs font-bold text-white shadow-gold"
          >
            <span>Return to Center Gateway</span>
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="grid min-h-[70vh] place-items-center bg-[#fbf9f5] px-5 py-24 text-center text-[#0c1836]">
      <div className="card-3d-light max-w-md rounded-3xl bg-white p-10 shadow-luxury">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-rose-600">
          System Notice
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-[#0c1836]">
          Unexpected Exception
        </h2>
        <p className="mt-2 text-xs text-[#718096]">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-[#b88a3b] px-6 py-2.5 text-xs font-bold text-white shadow-gold hover:bg-[#996515]"
        >
          Reload Session
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Alrohaimi Center" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Alrohaimi Center" },
      { property: "og:title", content: "Alrohaimi Center" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Kufi+Arabic:wght@500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png?v=5" },
      { rel: "shortcut icon", href: "/favicon.ico?v=5" },
      { rel: "apple-touch-icon", href: "/favicon.png?v=5" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteProvider>
        <Shell>
          <Outlet />
        </Shell>
      </SiteProvider>
    </QueryClientProvider>
  );
}
