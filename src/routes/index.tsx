import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/thalia-hero.png";
import officeImg from "@/assets/office.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const WHATSAPP_NUMBER = "5511965175738";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, Thalia! Gostaria de agendar uma sessão.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const ADDRESS = "Rua Catiguá, 159 — Tatuapé, São Paulo — SP";
const MAPS_QUERY = "Psicóloga Thalia Martins";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(MAPS_QUERY);

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.67a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.93 9.93 0 1 1 8.42 4.66Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#terapia", label: "Terapia" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#modalidades", label: "Modalidades" },
    { href: "#localizacao", label: "Localização" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Início">
            <span className="font-serif text-xl md:text-2xl tracking-tight">
              Thalia Martins
            </span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground sm:inline">
              Psicologia
            </span>
          </a>
          <nav aria-label="Menu principal" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-foreground/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_30px_-15px_rgba(80,110,80,0.6)] transition-all hover:brightness-105"
            >
              <WhatsIcon className="h-4 w-4" />
              Agendar sessão
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60"
            >
              <span className="sr-only">Menu</span>
              <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
            <ul className="container-page flex flex-col gap-1 py-4 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    onClick={() => setMenuOpen(false)}
                    href={n.href}
                    className="block rounded px-2 py-2.5 hover:bg-muted"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-medium text-primary-foreground"
                >
                  <WhatsIcon className="h-4 w-4" />
                  Agendar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 45% at 15% 20%, oklch(0.94 0.03 130) 0%, transparent 60%), radial-gradient(50% 50% at 85% 10%, oklch(0.95 0.025 90) 0%, transparent 60%)",
            }}
          />
          <div className="container-page grid gap-12 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16 md:pb-28">
            <div className="animate-rise">
              <p className="eyebrow">
                <span className="gold-rule mr-3" /> Psicóloga Clínica · CRP 06/209739
              </p>
              <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
                Um espaço sereno para
                <span className="italic text-sage-deep"> reencontrar-se</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Sou <strong className="font-medium text-foreground">Thalia Martins</strong>,
                psicóloga clínica especializada em Terapia Cognitivo-Comportamental.
                Ofereço um atendimento discreto, ético e cuidadosamente personalizado
                para jovens adultos e adultos, presencial no Tatuapé e online.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_20px_40px_-20px_rgba(70,100,70,0.55)] transition-all hover:translate-y-[-1px] hover:brightness-105"
                >
                  Agendar atendimento
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04]"
                >
                  <WhatsIcon className="h-4 w-4" />
                  Falar pelo WhatsApp
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Abordagem</dt>
                  <dd className="mt-1 font-serif text-lg">TCC</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Modalidade</dt>
                  <dd className="mt-1 font-serif text-lg">On &amp; Off</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Público</dt>
                  <dd className="mt-1 font-serif text-lg">Adultos</dd>
                </div>
              </dl>
            </div>

            <div className="relative animate-rise" style={{ animationDelay: "120ms" }}>
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(150deg, oklch(0.92 0.04 130) 0%, oklch(0.96 0.02 85) 100%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_rgba(60,80,60,0.35)]">
                <img
                  src={heroImage}
                  alt="Thalia Martins, psicóloga clínica, em seu consultório no Tatuapé"
                  width={1024}
                  height={1280}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-card/95 p-4 backdrop-blur shadow-lg ring-1 ring-border md:block">
                <p className="text-xs uppercase tracking-widest text-sage-deep">Registro</p>
                <p className="mt-1 font-serif text-lg">CRP 06/209739</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Conselho Regional de Psicologia — SP
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <Section id="sobre" eyebrow="Sobre" title="Uma escuta atenta, um cuidado singular.">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div className="relative">
              <img
                src={officeImg}
                alt="Consultório de psicologia com decoração serena em tons de sálvia e areia"
                loading="lazy"
                width={1280}
                height={960}
                className="rounded-2xl object-cover shadow-[0_30px_60px_-40px_rgba(60,80,60,0.3)]"
              />
            </div>
            <div className="space-y-5 text-[1.02rem] leading-relaxed text-foreground/85">
              <p>
                Acredito que o cuidado psicológico começa antes da fala — na forma
                como um espaço acolhe, na maneira como se escuta. Meu trabalho é
                construído sobre esse princípio: um ambiente sereno, sigiloso e
                livre de julgamentos, onde cada paciente pode se descobrir no seu
                próprio tempo.
              </p>
              <p>
                Ao longo da minha formação, aprofundei-me na Terapia
                Cognitivo-Comportamental por sua clareza científica e por seu
                respeito ao ritmo de cada pessoa. Cada plano terapêutico é
                cuidadosamente desenhado — porque a sua história nunca cabe em um
                protocolo.
              </p>
              <p>
                Atendo jovens adultos e adultos que buscam mais do que alívio
                imediato: buscam compreender, reorganizar e viver com mais
                consciência.
              </p>
            </div>
          </div>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="terapia" eyebrow="Processo" title="Como acontece a terapia.">
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Primeira sessão",
                d: "Um encontro para escutar sua demanda, esclarecer dúvidas e alinhar expectativas com transparência.",
              },
              {
                n: "02",
                t: "Frequência",
                d: "Sessões semanais de 50 minutos, com dia e horário fixos para preservar a continuidade do processo.",
              },
              {
                n: "03",
                t: "Plano terapêutico",
                d: "Objetivos claros e ferramentas da TCC adaptadas à sua história, seus valores e seu momento.",
              },
              {
                n: "04",
                t: "Evolução",
                d: "Revisões periódicas para observar avanços, ajustar o caminho e sustentar mudanças reais.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="group relative rounded-2xl border border-border/70 bg-card p-7 transition-all hover:border-sage hover:shadow-[0_20px_40px_-30px_rgba(80,120,80,0.35)]"
              >
                <span className="font-serif text-3xl text-gold">{s.n}</span>
                <h3 className="mt-3 text-xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ABORDAGEM */}
        <Section
          id="abordagem"
          eyebrow="Abordagem"
          title="Terapia Cognitivo-Comportamental."
          tone="sand"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <p className="text-[1.02rem] leading-relaxed text-foreground/85">
              A TCC é uma abordagem baseada em evidências que investiga como
              pensamentos, emoções e comportamentos se conectam. Não é sobre
              controlar sentimentos, mas sobre compreendê-los — e, a partir daí,
              construir formas mais saudáveis de responder ao que a vida
              apresenta. É uma terapia colaborativa, prática e profundamente
              respeitosa com o tempo de cada pessoa.
            </p>
            <ul className="space-y-4">
              {[
                "Base científica sólida e reconhecida internacionalmente",
                "Objetivos terapêuticos claros e acompanhados juntos",
                "Ferramentas aplicáveis à sua rotina, sem receitas prontas",
                "Foco no que faz sentido para você, com ética e discrição",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gold"
                  />
                  <span className="text-sm md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* PÚBLICO */}
        <Section id="publico" eyebrow="Público" title="Para quem é este espaço.">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Jovens adultos",
                d: "Escolhas de carreira, relacionamentos, ansiedade, autoestima e o desafio de construir uma identidade própria em um mundo em transformação.",
              },
              {
                t: "Adultos",
                d: "Transições de vida, esgotamento, ansiedade, luto, questões afetivas e o desejo de viver com mais propósito e equilíbrio.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-2xl border border-border/70 bg-card p-8"
              >
                <h3 className="text-2xl">{p.t}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* MODALIDADES */}
        <Section id="modalidades" eyebrow="Modalidades" title="Presencial e online." tone="sand">
          <div className="grid gap-6 md:grid-cols-2">
            <ModalityCard
              title="Atendimento Presencial"
              location="Tatuapé — São Paulo"
              body="Um consultório pensado para acolher: luz natural, privacidade e uma atmosfera silenciosa que convida à pausa. Ideal para quem valoriza o encontro presencial como parte do cuidado."
            />
            <ModalityCard
              title="Atendimento Online"
              location="Videochamada segura"
              body="Mesma qualidade terapêutica, com a flexibilidade de estar onde você se sente confortável. Indicado para rotinas intensas, viagens frequentes ou pacientes de outras cidades."
            />
          </div>
        </Section>

        {/* AVALIAÇÃO PSICOLÓGICA */}
        <Section
          id="avaliacao"
          eyebrow="Em breve"
          title="Avaliação Psicológica."
        >
          <div className="rounded-3xl border border-border/70 bg-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="text-[1.02rem] leading-relaxed text-foreground/85">
                  Em breve, este espaço também oferecerá serviços de{" "}
                  <strong className="font-medium">Avaliação Psicológica</strong> —
                  um processo cuidadoso e criterioso, conduzido com instrumentos
                  reconhecidos pelo Conselho Federal de Psicologia. A avaliação
                  auxilia no autoconhecimento, no esclarecimento de diagnósticos
                  e na construção de caminhos terapêuticos mais precisos.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Deseja ser avisada(o) quando esse atendimento estiver disponível?
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium hover:bg-foreground/[0.04]"
              >
                <WhatsIcon className="h-4 w-4" />
                Receber aviso pelo WhatsApp
              </a>
            </div>
          </div>
        </Section>

        {/* DIFERENCIAIS */}
        <Section id="diferenciais" eyebrow="Diferenciais" title="Cuidado sob medida.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Plano personalizado",
                d: "Cada processo é único. Nenhuma sessão segue um roteiro pronto.",
              },
              {
                t: "Atendimento individualizado",
                d: "Agenda enxuta e presente — para dedicação real a cada paciente.",
              },
              {
                t: "Escuta qualificada",
                d: "Formação contínua e uma escuta atenta ao que muitas vezes não se diz.",
              },
              {
                t: "Compromisso ético",
                d: "Sigilo absoluto e atuação alinhada ao Código de Ética do CFP.",
              },
            ].map((d) => (
              <div
                key={d.t}
                className="rounded-2xl border border-border/70 bg-card p-6"
              >
                <div className="h-8 w-8 rounded-full bg-sage/25 ring-1 ring-sage/40" />
                <h3 className="mt-5 text-lg">{d.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.d}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* LOCALIZAÇÃO */}
        <Section id="localizacao" eyebrow="Localização" title="Consultório no Tatuapé." tone="sand">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-stretch">
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-8">
              <div>
                <p className="eyebrow">Endereço</p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  Rua Catiguá, 159
                  <br />
                  Tatuapé — São Paulo, SP
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  Região tranquila, com fácil acesso pelo metrô Tatuapé e
                  estacionamentos próximos.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium hover:bg-foreground/[0.04]"
                >
                  <WhatsIcon className="h-4 w-4" />
                  Confirmar disponibilidade
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-sm">
              <iframe
                title="Mapa - Psicóloga Thalia Martins"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full md:h-full"
              />
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="Dúvidas" title="Perguntas frequentes.">
          <div className="mx-auto max-w-3xl divide-y divide-border/70">
            {[
              {
                q: "Como funciona a primeira consulta?",
                a: "A primeira sessão é um espaço para nos conhecermos: você conta o que o traz à terapia, esclarecemos dúvidas e alinhamos expectativas com transparência. Não há compromisso de continuidade — a decisão é sempre sua.",
              },
              {
                q: "Quanto tempo dura cada sessão?",
                a: "As sessões têm duração de 50 minutos, com frequência geralmente semanal para preservar a continuidade do trabalho terapêutico.",
              },
              {
                q: "O atendimento online tem a mesma qualidade?",
                a: "Sim. O atendimento online é conduzido com o mesmo cuidado ético e técnico do presencial, em plataforma segura e com garantia de sigilo.",
              },
              {
                q: "Como faço para agendar?",
                a: "Basta enviar uma mensagem pelo WhatsApp. Retorno pessoalmente para combinar o melhor horário e alinhar os detalhes.",
              },
              {
                q: "Atende convênios?",
                a: "O atendimento é exclusivamente particular. Emito recibo com CRP e CPF, permitindo restituição em planos com cobertura de reembolso e dedução no imposto de renda.",
              },
              {
                q: "Como funciona o pagamento?",
                a: "Aceito Pix, transferência e cartão. Os valores e formas são apresentados com clareza logo no primeiro contato.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="font-serif text-lg md:text-xl">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-open:rotate-45"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pr-12 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA FINAL */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="cta-final"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.72 0.04 145) 0%, oklch(0.55 0.045 145) 100%)",
            }}
          />
          <div className="container-page py-24 text-center text-primary-foreground md:py-32">
            <p className="eyebrow text-primary-foreground/70">
              <span className="gold-rule mr-3 bg-primary-foreground/50" /> Próximo passo
            </p>
            <h2
              id="cta-final"
              className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.1] text-primary-foreground md:text-5xl"
            >
              Cuidar de si é uma escolha silenciosa —
              <span className="italic"> e transformadora.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-primary-foreground/85">
              Envie uma mensagem. Retorno pessoalmente para agendar um horário
              tranquilo e conversar sobre o que trouxe você até aqui.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground shadow-lg transition-all hover:translate-y-[-1px] hover:brightness-105"
            >
              <WhatsIcon className="h-5 w-5 text-whatsapp" />
              Falar com Thalia pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/70 bg-background">
        <div className="container-page grid gap-10 py-16 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">Thalia Martins</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Psicologia Clínica
            </p>
            <p className="mt-4 text-sm text-muted-foreground">CRP 06/209739</p>
          </div>
          <div className="text-sm">
            <p className="eyebrow">Consultório</p>
            <p className="mt-3 leading-relaxed">
              Rua Catiguá, 159
              <br />
              Tatuapé — São Paulo, SP
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-foreground hover:text-sage-deep"
            >
              <WhatsIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
          <div className="text-sm">
            <p className="eyebrow">Institucional</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#faq" className="hover:text-sage-deep">Perguntas frequentes</a>
              </li>
              <li>
                <a
                  href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage-deep"
                >
                  Código de Ética — CFP
                </a>
              </li>
              <li>
                <a href="#privacidade" className="hover:text-sage-deep">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="privacidade"
          className="border-t border-border/70"
        >
          <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Thalia Martins — Psicologia Clínica. Todos os direitos reservados.
            </p>
            <p>
              Site em conformidade com a LGPD. Dados de contato utilizados
              exclusivamente para agendamentos.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_18px_40px_-12px_rgba(30,120,60,0.55)] transition-all hover:scale-105"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full opacity-40"
          style={{ backgroundColor: "var(--whatsapp)" }}
        />
        <WhatsIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "sand";
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${
        tone === "sand" ? "bg-sand/60" : ""
      }`}
    >
      <div className="container-page">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow">
            <span className="gold-rule mr-3" /> {eyebrow}
          </p>
          <h2 className="mt-5 text-3xl leading-tight md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ModalityCard({
  title,
  location,
  body,
}: {
  title: string;
  location: string;
  body: string;
}) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-8 transition-all hover:border-sage hover:shadow-[0_20px_40px_-30px_rgba(80,120,80,0.35)]">
      <div>
        <p className="eyebrow">{location}</p>
        <h3 className="mt-3 text-2xl">{title}</h3>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
}
