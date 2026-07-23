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
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 text-xl">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">Não foi possível carregar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente em instantes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Thalia Martins — Psicóloga Clínica",
  description:
    "Psicóloga clínica em São Paulo. Atendimento em Terapia Cognitivo-Comportamental (TCC) presencial no Tatuapé e online. CRP 06/209739.",
  image: "/og-image.jpg",
  telephone: "+55-11-00000-0000",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Catiguá, 159",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "03086-020",
    addressCountry: "BR",
  },
  areaServed: "São Paulo",
  medicalSpecialty: "Psychiatric",
  availableService: [
    { "@type": "MedicalTherapy", name: "Terapia Cognitivo-Comportamental (TCC)" },
    { "@type": "MedicalTherapy", name: "Atendimento Psicológico Online" },
    { "@type": "MedicalTherapy", name: "Atendimento Psicológico Presencial" },
  ],
  identifier: "CRP 06/209739",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Thalia Martins — Psicóloga Clínica no Tatuapé | TCC Presencial e Online",
      },
      {
        name: "description",
        content:
          "Psicóloga clínica em São Paulo — Thalia Martins (CRP 06/209739). Terapia Cognitivo-Comportamental presencial no Tatuapé e online, com plano terapêutico personalizado para jovens adultos e adultos.",
      },
      { name: "author", content: "Thalia Martins" },
      { name: "theme-color", content: "#e8ece0" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Thalia Martins Psicologia" },
      {
        property: "og:title",
        content: "Thalia Martins — Psicóloga Clínica no Tatuapé | TCC Presencial e Online",
      },
      {
        property: "og:description",
        content:
          "Psicóloga clínica em São Paulo — Thalia Martins (CRP 06/209739). Terapia Cognitivo-Comportamental presencial no Tatuapé e online, com plano terapêutico personalizado para jovens adultos e adultos.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Thalia Martins — Psicóloga Clínica no Tatuapé | TCC Presencial e Online",
      },
      {
        name: "twitter:description",
        content:
          "Psicóloga clínica em São Paulo — Thalia Martins (CRP 06/209739). Terapia Cognitivo-Comportamental presencial no Tatuapé e online, com plano terapêutico personalizado para jovens adultos e adultos.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c225b5ff-ded3-4c63-a0fe-3b28492cb9ae/id-preview-7c02ede2--c948e52e-62c2-47d8-bdb8-746f351e9484.lovable.app-1784667848526.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c225b5ff-ded3-4c63-a0fe-3b28492cb9ae/id-preview-7c02ede2--c948e52e-62c2-47d8-bdb8-746f351e9484.lovable.app-1784667848526.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
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
      <Outlet />
    </QueryClientProvider>
  );
}
