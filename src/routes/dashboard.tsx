import { createFileRoute } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  TrendingUp,
  Users,
  Clock,
  Languages,
  Sparkles,
  Activity,
  Server,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard executivo · Callnexa" },
      {
        name: "description",
        content:
          "Métricas executivas Callnexa — minutos de tradução, custo de IA, salas ativas e qualidade de chamada.",
      },
    ],
  }),
  component: Dashboard,
});

const kpis = [
  { Icon: Clock, l: "Minutos traduzidos", v: "12.847", d: "+18% MoM", c: "text-primary" },
  { Icon: Users, l: "Usuários ativos", v: "284", d: "32 hoje", c: "text-emerald-400" },
  { Icon: Sparkles, l: "Custo IA (USD)", v: "$ 184.20", d: "-12% MoM", c: "text-accent" },
  { Icon: Activity, l: "Latência média", v: "412 ms", d: "p95 · transcrição", c: "text-fuchsia-400" },
];

const langs = [
  { l: "Português", c: 48, color: "bg-primary" },
  { l: "English", c: 34, color: "bg-emerald-400" },
  { l: "Русский", c: 18, color: "bg-fuchsia-400" },
];

const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const heights = [42, 58, 71, 88, 96, 38, 22];

const sessions = [
  { code: "gyuwqdhx", name: "Conselho Executivo Q4", min: 42, users: 8, langs: "PT·EN·RU", quality: "A+" },
  { code: "alpha-8726", name: "Sync Global Engenharia", min: 87, users: 14, langs: "EN·PT", quality: "A" },
  { code: "delta-3019", name: "Pitch Investidores Série B", min: 34, users: 5, langs: "PT·EN", quality: "A+" },
  { code: "moscow-202", name: "Deploy Review Moscow", min: 28, users: 4, langs: "RU·EN", quality: "B+" },
];

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] mono uppercase tracking-widest text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <TrendingUp className="size-3" />
              Visão executiva · últimos 30 dias
            </div>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Dashboard
              <span className="text-muted-foreground">.</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Indicadores chave da plataforma — atualizado em tempo real via WebSocket.
            </p>
          </div>
          <div className="flex gap-2">
            {["7d", "30d", "90d", "Ano"].map((t, i) => (
              <button
                key={t}
                className={`px-3 py-1.5 text-xs mono uppercase tracking-widest rounded-lg border transition-all ${
                  i === 1
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "bg-white/5 border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
          {kpis.map((k) => (
            <div key={k.l} className="p-5 rounded-2xl bg-card border border-border relative overflow-hidden">
              <div className="absolute -top-8 -right-8 size-24 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative">
                <div className={`size-9 rounded-lg bg-white/5 grid place-items-center mb-3 ${k.c}`}>
                  <k.Icon className="size-4" />
                </div>
                <div className="text-2xl lg:text-3xl font-semibold mono">{k.v}</div>
                <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground mt-1">{k.l}</div>
                <div className={`text-[10px] mono mt-2 ${k.c}`}>{k.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
          {/* Usage chart */}
          <section className="lg:col-span-2 p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Uso semanal</h2>
                <p className="text-sm mt-1 text-muted-foreground">Horas de tradução por dia · semana atual</p>
              </div>
              <span className="mono text-[10px] text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                +24% vs sem. passada
              </span>
            </div>
            <div className="flex items-end gap-2 lg:gap-3 h-48">
              {heights.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full relative h-full flex items-end">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary/40 via-primary to-primary/80 transition-all"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[10px] mono text-muted-foreground">{days[i]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 flex items-center gap-2">
              <Languages className="size-3.5 text-primary" />
              Distribuição de idiomas
            </h2>
            <div className="relative size-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-primary via-emerald-400 to-fuchsia-400" style={{ background: "conic-gradient(hsl(210 100% 60%) 0% 48%, hsl(160 85% 50%) 48% 82%, hsl(290 80% 65%) 82% 100%)" }} />
              <div className="absolute inset-3 rounded-full bg-card grid place-items-center">
                <div className="text-center">
                  <div className="text-xl font-semibold mono">3</div>
                  <div className="text-[9px] mono text-muted-foreground">idiomas</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {langs.map((l) => (
                <div key={l.l} className="flex items-center gap-2 text-xs">
                  <span className={`size-2.5 rounded-full ${l.color}`} />
                  <span className="flex-1">{l.l}</span>
                  <span className="mono text-muted-foreground">{l.c}%</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sessions table */}
        <section className="rounded-2xl bg-card border border-border overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
              <Server className="size-3.5 text-primary" />
              Sessões recentes
            </h2>
            <span className="text-[10px] mono text-muted-foreground">{sessions.length} hoje</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] mono uppercase tracking-widest text-muted-foreground border-b border-border">
                  <th className="text-left p-4">Sala</th>
                  <th className="text-left p-4 hidden sm:table-cell">Duração</th>
                  <th className="text-left p-4 hidden md:table-cell">Participantes</th>
                  <th className="text-left p-4 hidden md:table-cell">Idiomas</th>
                  <th className="text-right p-4">Qualidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sessions.map((s) => (
                  <tr key={s.code} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4">
                      <div className="font-medium truncate">{s.name}</div>
                      <div className="text-[10px] mono text-muted-foreground">{s.code}</div>
                    </td>
                    <td className="p-4 hidden sm:table-cell mono text-muted-foreground">{s.min} min</td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="inline-flex items-center gap-1 text-xs"><Users className="size-3" /> {s.users}</span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-[10px] mono px-1.5 py-0.5 rounded bg-white/5 border border-border">{s.langs}</span>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`text-[10px] mono font-bold px-2 py-1 rounded border ${
                        s.quality.startsWith("A") ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      }`}>{s.quality}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-border text-[11px] mono text-muted-foreground">
          <span className="flex items-center gap-2"><Globe className="size-3" /> Cluster ativo: callnexa-prod-eu-west-1</span>
          <span className="flex items-center gap-2"><Activity className="size-3 text-emerald-400" /> uptime 99.98% · 30d</span>
        </div>
      </main>
    </div>
  );
}
