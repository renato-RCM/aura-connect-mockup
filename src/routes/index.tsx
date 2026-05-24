import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  Plus,
  RefreshCw,
  KeyRound,
  Link2,
  Lock,
  Trash2,
  Radio,
  Users,
  Clock,
  Languages,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Callnexa — Reuniões com tradução IA em tempo real" },
      {
        name: "description",
        content:
          "Plataforma de videochamadas com tradução simultânea por IA em PT, EN e RU. Histórico de salas, transcrição ao vivo e voz sintética.",
      },
      { property: "og:title", content: "Callnexa — Tradução simultânea por IA" },
      {
        property: "og:description",
        content:
          "Quebre a barreira do idioma em reuniões corporativas com tradução neural em tempo real.",
      },
    ],
  }),
  component: Dashboard,
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

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      {/* Hero header */}
      <header className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_hsl(210_100%_25%/0.25),_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,_hsl(160_85%_30%/0.18),_transparent_50%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-8 py-14">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-border mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
                <span className="size-1.5 rounded-full bg-primary" />
                Workspace · Callnexa Enterprise
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Minhas salas
                <span className="text-muted-foreground">.</span>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-lg text-pretty">
                Histórico completo das suas reuniões — clique para entrar de novo ou
                baixar a transcrição bilíngue gerada pela IA.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-sm font-medium flex items-center gap-2 transition-all">
                <RefreshCw className="size-4" /> Atualizar
              </button>
              <button className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-sm font-medium flex items-center gap-2 transition-all">
                <KeyRound className="size-4" /> Alterar senha
              </button>
              <Link
                to="/room"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all"
              >
                <Plus className="size-4" /> Criar nova sala
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Salas este mês", value: "48", hint: "+24%" },
              { label: "Latência média", value: "142ms", hint: "p95" },
              { label: "Precisão IA", value: "99.4%", hint: "Whisper v3" },
              { label: "Idiomas", value: "PT · EN · RU", hint: "neural" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-xl bg-white/[0.03] border border-border"
              >
                <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-[10px] mono text-primary">{s.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Salas recentes
          </h2>
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

          {/* Empty / create card */}
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
