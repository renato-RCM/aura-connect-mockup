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
  Sparkles,
  Monitor,
  Smartphone,
  Video,
  Shield,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Callnexa — Reuniões com tradução IA em tempo real" },
      { name: "description", content: "Plataforma corporativa de videochamadas com tradução simultânea por IA em PT, EN e RU. Acesso remoto, PWA e resumo automático." },
      { property: "og:title", content: "Callnexa — Tradução simultânea por IA" },
      { property: "og:description", content: "Quebre a barreira do idioma em reuniões executivas com tradução neural em tempo real." },
    ],
  }),
  component: Home,
});

const LANG_META: Record<string, { name: string; color: string; hex: string }> = {
  PT: { name: "Português", color: "text-sky-400", hex: "#38bdf8" },
  EN: { name: "English", color: "text-emerald-400", hex: "#34d399" },
  RU: { name: "Русский", color: "text-fuchsia-400", hex: "#e879f9" },
};

const rooms = [
  { code: "gyuwqdhx", name: "Conselho Executivo Q4", created: "23/05 · 23:54", lastActivity: "há 12 min", participants: 8, langs: [{ k: "PT", v: 38 }, { k: "EN", v: 44 }, { k: "RU", v: 18 }], parts: { speaking: 3, active: 4, idle: 1 }, status: "live" as const },
  { code: "alpha-8726", name: "Sync Global de Engenharia", created: "22/05 · 14:10", lastActivity: "ontem", participants: 14, langs: [{ k: "PT", v: 46 }, { k: "EN", v: 34 }, { k: "RU", v: 20 }], parts: { speaking: 5, active: 7, idle: 2 }, status: "ended" as const },
  { code: "delta-3019", name: "Pitch Investidores Série B", created: "20/05 · 09:30", lastActivity: "há 3 dias", participants: 5, langs: [{ k: "PT", v: 60 }, { k: "EN", v: 40 }], parts: { speaking: 2, active: 2, idle: 1 }, status: "ended" as const },
];

const PART_META = {
  speaking: { name: "Falando", hex: "#34d399" },
  active: { name: "Ativos", hex: "#38bdf8" },
  idle: { name: "Inativos", hex: "#64748b" },
} as const;

const features = [
  { Icon: Sparkles, label: "Resumo IA", to: "/summary", c: "text-primary" },
  { Icon: Monitor, label: "Acesso Remoto", to: "/remote", c: "text-fuchsia-400" },
  { Icon: Video, label: "Gravação", to: "/modules", c: "text-emerald-400" },
  { Icon: Smartphone, label: "Instalar PWA", to: "/modules", c: "text-amber-400" },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      <header className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_hsl(210_100%_25%/0.25),_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,_hsl(160_85%_30%/0.18),_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14 pb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-border mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Callnexa Enterprise · v1.0.46
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-3xl">
            Conversas sem fronteiras
            <span className="text-muted-foreground"> de idioma.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl text-pretty">
            Videochamadas com transcrição e tradução em tempo real entre{" "}
            <span className="text-foreground font-medium">Português</span>,{" "}
            <span className="text-foreground font-medium">English</span> e{" "}
            <span className="text-foreground font-medium">Русский</span>. Acesso remoto, resumo IA e PWA — direto no navegador.
          </p>

          {/* Quick access strip */}
          <div className="mt-6 flex flex-wrap gap-2">
            {features.map((f) => (
              <Link
                key={f.label}
                to={f.to}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-border hover:border-primary/30 transition-all text-xs font-medium"
              >
                <f.Icon className={`size-3.5 ${f.c} group-hover:scale-110 transition-transform`} />
                {f.label}
              </Link>
            ))}
          </div>

          {/* Action panels */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section className="relative p-6 md:p-7 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute -top-12 -right-12 size-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold tracking-tight">Sua área</h2>
                  <span className="mono text-[10px] uppercase tracking-widest text-primary">Anfitrião</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">Crie reuniões com senha e revise o histórico depois.</p>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-border mb-4">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 grid place-items-center text-xs font-bold">RM</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium truncate">Renato Correia Miranda</div>
                    <div className="text-[11px] mono text-muted-foreground truncate">renato@callnexa.com · Diretor</div>
                  </div>
                  <span className="mono text-[9px] uppercase tracking-widest text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                    PRO
                  </span>
                </div>

                <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  Nome da sala <span className="opacity-60">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Reunião com cliente X"
                  className="w-full bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                />

                <div className="mt-5 flex flex-col sm:flex-row gap-2">
                  <Link
                    to="/room"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all"
                  >
                    <Plus className="size-4" /> Criar nova sala
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-sm font-medium transition-all">
                    <KeyRound className="size-4" /> Senha
                  </button>
                </div>
              </div>
            </section>

            <section className="relative p-6 md:p-7 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold tracking-tight">Entrar em uma reunião</h2>
                  <span className="mono text-[10px] uppercase tracking-widest text-accent">Convidado</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">Recebeu um convite? Cole o código e a senha.</p>

                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Como devemos te chamar?"
                    className="w-full bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-all"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="abc-12345" className="w-full mono bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-all" />
                    <input type="text" placeholder="cobalto-4827" className="w-full mono bg-white/[0.03] border border-input rounded-lg px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-all" />
                  </div>
                </div>

                <details className="mt-4 group">
                  <summary className="cursor-pointer list-none flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
                    Idioma e tradução (avançado)
                  </summary>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <select className="w-full bg-white/[0.03] border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60">
                      <option>PT — Português</option><option>EN — English</option><option>RU — Русский</option>
                    </select>
                    <select className="w-full bg-white/[0.03] border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60">
                      <option>Voz + legendas</option><option>Apenas legendas</option><option>Automático</option>
                    </select>
                  </div>
                </details>

                <Link to="/room" className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all">
                  <LogIn className="size-4" /> Entrar na reunião
                </Link>
                <div className="mt-3 flex items-center gap-2 text-[10px] mono text-muted-foreground">
                  <Shield className="size-3 text-emerald-400" />
                  Conexão E2E · TURN · sem download
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Salas recentes */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="size-4 text-muted-foreground" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Minhas salas recentes</h2>
          </div>
          <Link to="/dashboard" className="text-[10px] mono text-primary hover:underline flex items-center gap-1">
            Ver dashboard executivo <Zap className="size-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((r) => {
            const isLive = r.status === "live";
            return (
              <article key={r.code} className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:to-primary/[0.04] transition-all pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">{r.code}</span>
                    <div className="flex gap-1 text-muted-foreground">
                      <button className="size-7 rounded-md hover:bg-white/5 grid place-items-center transition-colors"><Link2 className="size-3.5" /></button>
                      <button className="size-7 rounded-md hover:bg-white/5 grid place-items-center transition-colors"><Lock className="size-3.5" /></button>
                      <button className="size-7 rounded-md hover:bg-destructive/10 hover:text-destructive grid place-items-center transition-colors"><Trash2 className="size-3.5" /></button>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold tracking-tight mb-3">{r.name}</h3>

                  <div className="space-y-1.5 text-[11px] text-muted-foreground mono">
                    <div className="flex items-center gap-2"><Clock className="size-3" /> Criada {r.created}</div>
                    <div className="flex items-center gap-2"><Radio className="size-3" /> Última atividade {r.lastActivity}</div>
                    <div className="flex items-center gap-2"><Users className="size-3" /> {r.participants} participantes</div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-4">
                    <Languages className="size-3 text-muted-foreground" />
                    {r.langs.map((l) => (
                      <span key={l.k} className={`text-[10px] mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/10 ${LANG_META[l.k].color}`}>
                        {l.k}
                      </span>
                    ))}
                  </div>

                  {/* Language distribution */}
                  <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-border">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="text-[9px] mono uppercase tracking-[0.2em] text-muted-foreground">Distribuição de idiomas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Donut */}
                      <div className="relative size-16 shrink-0">
                        <svg className="size-16 -rotate-90" viewBox="0 0 44 44">
                          <circle cx="22" cy="22" r="16" fill="none" stroke="hsl(var(--border))" strokeWidth="5" />
                          {(() => {
                            const C = 2 * Math.PI * 16;
                            let acc = 0;
                            return r.langs.map((l) => {
                              const len = (C * l.v) / 100;
                              const seg = (
                                <circle
                                  key={l.k}
                                  cx="22" cy="22" r="16" fill="none"
                                  stroke={LANG_META[l.k].hex}
                                  strokeWidth="5"
                                  strokeDasharray={`${len} ${C - len}`}
                                  strokeDashoffset={-acc}
                                />
                              );
                              acc += len;
                              return seg;
                            });
                          })()}
                        </svg>
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="text-center leading-none">
                            <div className="text-sm font-bold">{r.langs.length}</div>
                            <div className="text-[7px] mono uppercase text-muted-foreground">idiomas</div>
                          </div>
                        </div>
                      </div>
                      {/* Legend */}
                      <div className="flex-1 min-w-0 space-y-1">
                        {r.langs.map((l) => (
                          <div key={l.k} className="flex items-center gap-2 text-[10px]">
                            <span className="size-1.5 rounded-full shrink-0" style={{ background: LANG_META[l.k].hex }} />
                            <span className="text-muted-foreground truncate flex-1">{LANG_META[l.k].name}</span>
                            <span className="mono font-bold text-foreground">{l.v}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/room"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.18em] border-2 transition-all ${
                        isLive
                          ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/15"
                          : "border-primary/40 bg-primary/5 text-primary hover:bg-primary/15"
                      }`}
                    >
                      {isLive && <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                      Entrar
                    </Link>
                    {!isLive && (
                      <Link to="/summary" title="Resumo IA" className="size-12 grid place-items-center rounded-xl bg-white/5 hover:bg-white/10 border border-border text-primary shrink-0">
                        <Sparkles className="size-4" />
                      </Link>
                    )}
                  </div>

                </div>
              </article>
            );
          })}

          <Link to="/room" className="group p-5 rounded-2xl border border-dashed border-border bg-white/[0.015] hover:border-primary/40 hover:bg-primary/[0.03] transition-all flex flex-col items-center justify-center min-h-[260px] text-center">
            <div className="size-12 rounded-full border-2 border-dashed border-border group-hover:border-primary group-hover:text-primary text-muted-foreground grid place-items-center mb-3 transition-all">
              <Plus className="size-5" />
            </div>
            <p className="text-sm font-medium">Criar nova sala</p>
            <p className="text-[11px] text-muted-foreground mt-1">Tradução IA pronta em segundos</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
