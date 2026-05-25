import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  Plus,
  KeyRound,
  Link2,
  Lock,
  Trash2,
  Radio,
  Users,
  Clock,
  Languages,
  LogIn,
  ChevronDown,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Callnexa — Reuniões com tradução IA em tempo real" },
      {
        name: "description",
        content:
          "Plataforma de videochamadas com tradução simultânea por IA em PT, EN e RU. Crie salas, entre por convite e revise transcrições bilíngues.",
      },
      { property: "og:title", content: "Callnexa — Tradução simultânea por IA" },
      {
        property: "og:description",
        content:
          "Quebre a barreira do idioma em reuniões corporativas com tradução neural em tempo real.",
      },
    ],
  }),
  component: Home,
});

const rooms = [
  {
    code: "gyuwqdhx",
    name: "Conselho Executivo Q4",
    created: "23/05/2026 · 23:54",
    lastActivity: "há 12 min",
    participants: 8,
    langs: ["PT", "EN", "RU"],
    status: "live" as const,
  },
  {
    code: "alpha-8726",
    name: "Sync Global de Engenharia",
    created: "22/05/2026 · 14:10",
    lastActivity: "ontem",
    participants: 14,
    langs: ["EN", "PT"],
    status: "ended" as const,
  },
  {
    code: "delta-3019",
    name: "Pitch Investidores Série B",
    created: "20/05/2026 · 09:30",
    lastActivity: "há 3 dias",
    participants: 5,
    langs: ["PT", "EN"],
    status: "ended" as const,
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      {/* Hero + Ações */}
      <header className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_hsl(210_100%_25%/0.25),_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,_hsl(160_85%_30%/0.18),_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-border mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
            <span className="size-1.5 rounded-full bg-primary" />
            Workspace · Callnexa Enterprise
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-3xl">
            Conversas sem fronteiras
            <span className="text-muted-foreground"> de idioma.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl text-pretty">
            Videochamadas com transcrição e tradução em tempo real entre{" "}
            <span className="text-foreground font-medium">Português</span>,{" "}
            <span className="text-foreground font-medium">English</span> e{" "}
            <span className="text-foreground font-medium">Русский</span>. Sem
            instalação, direto no navegador.
          </p>

          {/* Action panels */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Sua área — criar */}
            <section className="relative p-6 md:p-7 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute -top-12 -right-12 size-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Sua área
                  </h2>
                  <span className="mono text-[10px] uppercase tracking-widest text-primary">
                    Anfitrião
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Crie reuniões com senha e revise o histórico depois.
                </p>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-border mb-4">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 grid place-items-center text-xs font-bold text-foreground">
                    RM
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                      Renato Correia Miranda
                    </div>
                    <div className="text-[11px] mono text-muted-foreground truncate">
                      renato@callnexa.com
                    </div>
                  </div>
                </div>

                <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  Nome da sala <span className="opacity-60">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Reunião com cliente X"
                  className="w-full bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                />
                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  Se deixar em branco, nomeamos com a data e hora.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-2">
                  <Link
                    to="/room"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all"
                  >
                    <Plus className="size-4" /> Criar nova sala
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-sm font-medium transition-all">
                    <KeyRound className="size-4" /> Alterar senha
                  </button>
                </div>
              </div>
            </section>

            {/* Entrar em reunião */}
            <section className="relative p-6 md:p-7 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Entrar em uma reunião
                  </h2>
                  <span className="mono text-[10px] uppercase tracking-widest text-accent">
                    Convidado
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Recebeu um convite? Cole o código e a senha.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                      Seu nome <span className="opacity-60">(obrigatório)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Como devemos te chamar?"
                      className="w-full bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                        Código da sala
                      </label>
                      <input
                        type="text"
                        placeholder="ex: abc-12345"
                        className="w-full mono bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                        Senha <span className="opacity-60">(do convite)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="ex: cobalto-4827"
                        className="w-full mono bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <details className="mt-4 group">
                  <summary className="cursor-pointer list-none flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
                    Idioma e tradução (avançado)
                  </summary>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <select className="w-full bg-white/[0.03] border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60">
                      <option>PT — Português</option>
                      <option>EN — English</option>
                      <option>RU — Русский</option>
                    </select>
                    <select className="w-full bg-white/[0.03] border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60">
                      <option>Tradução: automática</option>
                      <option>Tradução: legendas apenas</option>
                      <option>Tradução: voz + legendas</option>
                    </select>
                  </div>
                </details>

                <Link
                  to="/room"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all"
                >
                  <LogIn className="size-4" /> Entrar na reunião
                </Link>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  O navegador pedirá permissão de câmera e microfone. Funciona em
                  Chrome, Safari, Firefox e Edge — celular e desktop.
                </p>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Salas recentes */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="size-4 text-muted-foreground" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Minhas salas recentes
            </h2>
          </div>
          <span className="text-[10px] mono text-muted-foreground">
            {rooms.length} ativas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((r) => (
            <article
              key={r.code}
              className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:to-primary/[0.04] transition-all pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {r.code}
                  </span>
                  <div className="flex gap-1 text-muted-foreground">
                    <button className="size-7 rounded-md hover:bg-white/5 grid place-items-center transition-colors">
                      <Link2 className="size-3.5" />
                    </button>
                    <button className="size-7 rounded-md hover:bg-white/5 grid place-items-center transition-colors">
                      <Lock className="size-3.5" />
                    </button>
                    <button className="size-7 rounded-md hover:bg-destructive/10 hover:text-destructive grid place-items-center transition-colors">
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-semibold tracking-tight mb-3">
                  {r.name}
                </h3>

                <div className="space-y-1.5 text-[11px] text-muted-foreground mono">
                  <div className="flex items-center gap-2">
                    <Clock className="size-3" /> Criada {r.created}
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio className="size-3" /> Última atividade {r.lastActivity}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-3" /> {r.participants} participantes
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mt-4">
                  <Languages className="size-3 text-muted-foreground" />
                  {r.langs.map((l) => (
                    <span
                      key={l}
                      className="text-[10px] mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-foreground"
                    >
                      {l}
                    </span>
                  ))}
                </div>

                <Link
                  to="/room"
                  className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    r.status === "live"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                      : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                  }`}
                >
                  {r.status === "live" ? (
                    <>
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Entrar agora
                    </>
                  ) : (
                    "Entrar como anfitrião"
                  )}
                </Link>
              </div>
            </article>
          ))}

          <Link
            to="/room"
            className="group p-5 rounded-2xl border border-dashed border-border bg-white/[0.015] hover:border-primary/40 hover:bg-primary/[0.03] transition-all flex flex-col items-center justify-center min-h-[260px] text-center"
          >
            <div className="size-12 rounded-full border-2 border-dashed border-border group-hover:border-primary group-hover:text-primary text-muted-foreground grid place-items-center mb-3 transition-all">
              <Plus className="size-5" />
            </div>
            <p className="text-sm font-medium">Criar nova sala</p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Tradução IA pronta em segundos
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
