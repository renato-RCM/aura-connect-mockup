import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  Monitor,
  MousePointer2,
  Keyboard,
  ShieldCheck,
  Clipboard,
  Lock,
  Eye,
  Cpu,
  Wifi,
  PhoneOff,
  Settings,
  ChevronRight,
  CheckCircle2,
  Activity,
  Search,
  Plus,
  Star,
  Laptop,
  Server,
  MonitorSmartphone,
  Circle,
  Clock,
  MoreHorizontal,
  Bell,
} from "lucide-react";
import { useState } from "react";

type Host = {
  id: string;
  name: string;
  user: string;
  os: "win" | "mac" | "linux";
  tag: "Diretoria" | "Engenharia" | "Suporte" | "Pessoal";
  status: "online" | "idle" | "offline";
  lastSeen: string;
  fav?: boolean;
  active?: boolean;
};

const HOSTS: Host[] = [
  { id: "msk-03", name: "DESKTOP-MOSCOW-03", user: "Дмитрий Волков", os: "win", tag: "Engenharia", status: "online", lastSeen: "agora", fav: true, active: true },
  { id: "sp-mac-01", name: "MBP-SaoPaulo-01", user: "Sarah Connor", os: "mac", tag: "Diretoria", status: "online", lastSeen: "agora", fav: true },
  { id: "ny-srv", name: "NYC-EDGE-SRV", user: "infra@callnexa", os: "linux", tag: "Engenharia", status: "online", lastSeen: "2 min" },
  { id: "lon-04", name: "DESKTOP-LONDON-04", user: "Marcus Holloway", os: "win", tag: "Suporte", status: "idle", lastSeen: "12 min" },
  { id: "ber-mac", name: "MBP-Berlin-Anya", user: "Anya Petrova", os: "mac", tag: "Engenharia", status: "idle", lastSeen: "37 min" },
  { id: "rj-02", name: "DESKTOP-RIO-02", user: "Heitor Lima", os: "win", tag: "Suporte", status: "offline", lastSeen: "ontem" },
  { id: "casa", name: "Notebook Pessoal", user: "Renato Miranda", os: "mac", tag: "Pessoal", status: "offline", lastSeen: "há 3 dias" },
  { id: "tok-04", name: "DESKTOP-TOKYO-04", user: "yuki.tanaka", os: "win", tag: "Engenharia", status: "offline", lastSeen: "há 6 dias" },
];

const tagColor: Record<Host["tag"], string> = {
  Diretoria: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  Engenharia: "text-primary bg-primary/10 border-primary/20",
  Suporte: "text-sky-300 bg-sky-500/10 border-sky-500/20",
  Pessoal: "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20",
};

function OSIcon({ os, className = "" }: { os: Host["os"]; className?: string }) {
  if (os === "mac") return <Laptop className={className} />;
  if (os === "linux") return <Server className={className} />;
  return <MonitorSmartphone className={className} />;
}

function HostsSidebar() {
  const [filter, setFilter] = useState<"all" | "online" | "idle" | "offline">("all");
  const [query, setQuery] = useState("");

  const matches = (h: Host) => {
    if (filter !== "all" && h.status !== filter) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return h.name.toLowerCase().includes(q) || h.user.toLowerCase().includes(q) || h.tag.toLowerCase().includes(q);
  };

  const online = HOSTS.filter((h) => h.status === "online" && matches(h));
  const idle = HOSTS.filter((h) => h.status === "idle" && matches(h));
  const offline = HOSTS.filter((h) => h.status === "offline" && matches(h));

  return (
    <aside className="w-full lg:w-[300px] shrink-0 border-b lg:border-b-0 lg:border-r border-border bg-glass glass-blur overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] mono uppercase tracking-[0.2em] text-muted-foreground">
              Meus computadores
            </div>
            <h2 className="text-base font-semibold tracking-tight mt-0.5">
              {HOSTS.length} dispositivos
            </h2>
          </div>
          <button
            title="Adicionar dispositivo"
            className="size-8 grid place-items-center rounded-lg bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 transition-colors"
          >
            <Plus className="size-4" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="size-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar host, usuário, tag…"
            className="w-full h-9 pl-8 pr-3 rounded-lg bg-white/[0.03] border border-border text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
          />
        </div>

        {/* Filter chips */}
        <div className="flex gap-1">
          {([
            { k: "all", l: "Todos", v: HOSTS.length, c: "text-foreground" },
            { k: "online", l: "Online", v: HOSTS.filter(h => h.status === "online").length, c: "text-emerald-400" },
            { k: "idle", l: "Idle", v: HOSTS.filter(h => h.status === "idle").length, c: "text-amber-400" },
            { k: "offline", l: "Offline", v: HOSTS.filter(h => h.status === "offline").length, c: "text-muted-foreground" },
          ] as const).map((f) => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              className={`flex-1 px-2 py-1.5 rounded-md border text-[9px] mono uppercase tracking-widest transition-all ${
                filter === f.k
                  ? "bg-primary/15 border-primary/40 text-primary"
                  : "bg-white/[0.02] border-border text-muted-foreground hover:bg-white/[0.05] hover:text-foreground"
              }`}
            >
              <div className={`text-xs font-bold ${filter === f.k ? "text-primary" : f.c}`}>{f.v}</div>
              <div>{f.l}</div>
            </button>
          ))}
        </div>


        {/* Sections */}
        {[
          { label: "Online · disponível", color: "text-emerald-400", dot: "bg-emerald-400 animate-pulse", list: online },
          { label: "Inativo · idle", color: "text-amber-400", dot: "bg-amber-400", list: idle },
          { label: "Offline", color: "text-muted-foreground", dot: "bg-zinc-600", list: offline },
        ].map((sec) => (
          <section key={sec.label}>
            <div className="flex items-center gap-2 px-1 mb-2">
              <span className={`size-1.5 rounded-full ${sec.dot}`} />
              <h3 className={`text-[9px] mono uppercase tracking-[0.2em] font-bold ${sec.color}`}>
                {sec.label}
              </h3>
              <span className="ml-auto text-[9px] mono text-muted-foreground">{sec.list.length}</span>
            </div>
            <div className="space-y-1">
              {sec.list.map((h) => (
                <button
                  key={h.id}
                  className={`group w-full text-left p-2.5 rounded-lg border transition-all flex items-center gap-2.5 ${
                    h.active
                      ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_-8px_hsl(210_100%_60%/0.5)]"
                      : h.status === "offline"
                      ? "bg-white/[0.015] border-border/60 opacity-60 hover:opacity-100 hover:bg-white/[0.04]"
                      : "bg-white/[0.03] border-border hover:bg-white/[0.06] hover:border-primary/30"
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className={`size-9 rounded-md grid place-items-center ${
                      h.os === "mac" ? "bg-zinc-500/15 text-zinc-300" :
                      h.os === "linux" ? "bg-amber-500/10 text-amber-300" :
                      "bg-sky-500/10 text-sky-300"
                    }`}>
                      <OSIcon os={h.os} className="size-4" />
                    </div>
                    <Circle
                      className={`absolute -bottom-0.5 -right-0.5 size-2.5 fill-current ${
                        h.status === "online" ? "text-emerald-400" :
                        h.status === "idle" ? "text-amber-400" : "text-zinc-600"
                      } stroke-background`}
                      strokeWidth={4}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold truncate">{h.name}</span>
                      {h.fav && <Star className="size-2.5 fill-amber-400 text-amber-400 shrink-0" />}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] text-muted-foreground truncate">{h.user}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`text-[8px] mono uppercase tracking-wider px-1 py-px rounded border ${tagColor[h.tag]}`}>
                        {h.tag}
                      </span>
                      <span className="text-[9px] mono text-muted-foreground inline-flex items-center gap-0.5 ml-auto">
                        <Clock className="size-2.5" /> {h.lastSeen}
                      </span>
                    </div>
                  </div>
                  {h.status === "online" && !h.active && (
                    <span className="text-[9px] mono uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      conectar →
                    </span>
                  )}
                  {h.active && (
                    <span className="text-[9px] mono uppercase tracking-widest text-emerald-400 shrink-0">
                      ● ativo
                    </span>
                  )}
                  {h.status === "idle" && (
                    <span className="text-[9px] mono uppercase tracking-widest text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      acordar →
                    </span>
                  )}
                  {h.status === "offline" && (
                    <span
                      title="Notificar quando ficar online"
                      className="size-7 grid place-items-center rounded-md bg-white/5 border border-border text-muted-foreground hover:text-amber-300 hover:border-amber-500/30 transition-all shrink-0"
                    >
                      <Bell className="size-3" />
                    </span>
                  )}
                </button>
              ))}
              {sec.list.length === 0 && (
                <div className="px-3 py-4 text-center text-[10px] mono text-muted-foreground/60 border border-dashed border-border/60 rounded-lg">
                  nenhum host nesta categoria
                </div>
              )}
            </div>
          </section>
        ))}


        <div className="pt-2 border-t border-border flex items-center justify-between">
          <span className="text-[9px] mono text-muted-foreground inline-flex items-center gap-1">
            <ShieldCheck className="size-3 text-emerald-400" />
            E2E · pareamento por chave
          </span>
          <button className="size-7 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground">
            <MoreHorizontal className="size-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export const Route = createFileRoute("/remote")({
  head: () => ({
    meta: [
      { title: "Acesso Remoto · Callnexa" },
      {
        name: "description",
        content:
          "Controle a máquina do convidado durante a chamada — captura de tela em tempo real, mouse, teclado e clipboard compartilhado.",
      },
    ],
  }),
  component: Remote,
});

function Remote() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <AppNav />

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Hosts sidebar */}
        <HostsSidebar />

        {/* Stage */}
        <section className="flex-1 relative flex flex-col p-3 sm:p-6 gap-4 overflow-hidden bg-[radial-gradient(circle_at_50%_-10%,_hsl(210_100%_18%/0.25),_transparent_60%)]">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold">Controle ativo</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-border">
                <Monitor className="size-3.5 text-primary" />
                <span className="text-xs font-medium">Conectado a</span>
                <span className="mono text-[11px] text-primary">DESKTOP-MOSCOW-03</span>
              </div>
              <span className="text-[10px] mono text-muted-foreground">
                1080p · 38 FPS · 12 ms RTT · H.264
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 px-2.5 inline-flex items-center gap-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-border text-[10px] mono uppercase tracking-widest text-muted-foreground transition-all">
                <Eye className="size-3" /> Visão somente
              </button>
              <button className="h-8 px-2.5 inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] mono uppercase tracking-widest transition-all">
                <Lock className="size-3" /> Bloquear teclado remoto
              </button>
            </div>
          </div>

          {/* Remote desktop frame */}
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_-20px_hsl(210_100%_60%/0.4)] bg-zinc-900 min-h-0">
            {/* Fake desktop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0c2340] to-[#021024]">
              {/* taskbar */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-black/40 backdrop-blur-xl border-t border-white/10 flex items-center gap-2 px-3">
                <div className="size-6 rounded bg-primary/40" />
                <div className="size-6 rounded bg-white/10" />
                <div className="size-6 rounded bg-white/10" />
                <div className="size-6 rounded bg-white/10" />
                <div className="flex-1" />
                <span className="text-[10px] mono text-white/60">14:42 · 23 мая</span>
              </div>
              {/* windows */}
              <div className="absolute top-8 left-8 w-[55%] h-[60%] rounded-lg bg-white/95 shadow-2xl overflow-hidden">
                <div className="h-7 bg-zinc-200 border-b border-zinc-300 flex items-center gap-1.5 px-3">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-yellow-400" />
                  <span className="size-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10px] text-zinc-700 mono">Excel — Q4-Projecoes.xlsx</span>
                </div>
                <div className="p-3 text-[9px] text-zinc-900 mono leading-relaxed">
                  <div className="grid grid-cols-5 gap-px bg-zinc-300 border border-zinc-300">
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div key={i} className={`px-1.5 py-1 ${i < 5 ? "bg-zinc-200 font-bold" : "bg-white"}`}>
                        {i < 5 ? ["Mês", "Receita", "Custo", "Margem", "%"][i] : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-20 right-10 w-[36%] h-[50%] rounded-lg bg-zinc-900/95 border border-white/10 shadow-2xl overflow-hidden">
                <div className="h-7 bg-zinc-800 border-b border-white/5 flex items-center gap-2 px-3">
                  <span className="text-[10px] mono text-emerald-400">PowerShell</span>
                </div>
                <div className="p-3 text-[10px] mono text-emerald-300 leading-relaxed">
                  <div>PS C:\Users\Dmitry&gt; callnexa-agent --status</div>
                  <div className="text-emerald-400">  ● Agent v2.3.1 running</div>
                  <div className="text-white/80">  Session: gyuwqdhx</div>
                  <div className="text-white/80">  Host: renato@callnexa</div>
                  <div className="text-emerald-400">  Permissions: granted</div>
                  <div className="mt-2 text-white/60">_</div>
                </div>
              </div>
            </div>

            {/* Cursor overlay */}
            <div className="absolute top-1/2 left-1/3">
              <MousePointer2 className="size-5 text-primary drop-shadow-[0_0_8px_hsl(210_100%_60%)]" fill="white" />
              <div className="absolute -bottom-7 left-3 mono text-[9px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground whitespace-nowrap font-bold">
                Renato · você
              </div>
            </div>

            {/* Toolbar floating */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1.5 rounded-xl bg-black/70 glass-blur border border-white/10 shadow-2xl">
              <button className="size-9 grid place-items-center rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground" title="Cursor">
                <MousePointer2 className="size-4" />
              </button>
              <button className="size-9 grid place-items-center rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground" title="Teclado">
                <Keyboard className="size-4" />
              </button>
              <button className="size-9 grid place-items-center rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground" title="Clipboard">
                <Clipboard className="size-4" />
              </button>
              <div className="w-px h-6 bg-white/10 mx-1" />
              <button className="h-9 px-3 inline-flex items-center gap-1.5 rounded-lg bg-destructive/15 text-destructive hover:bg-destructive hover:text-white transition-colors text-[10px] mono uppercase tracking-widest font-bold">
                <PhoneOff className="size-3.5" /> Encerrar
              </button>
            </div>

            {/* Privacy banner */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] mono uppercase tracking-widest">
              <ShieldCheck className="size-3" />
              Sessão gravada · convidado consentiu
            </div>
          </div>
        </section>

        {/* Right control panel */}
        <aside className="w-full lg:w-[340px] border-t lg:border-t-0 lg:border-l border-border bg-glass glass-blur overflow-y-auto">
          <div className="p-5 lg:p-6 space-y-6">
            <div>
              <div className="text-[10px] mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Sessão remota
              </div>
              <h2 className="text-lg font-semibold tracking-tight">Дмитрий Волков</h2>
              <p className="text-[11px] text-muted-foreground mt-1">Convidado · idioma RU · Windows 11 Pro</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { Icon: Activity, l: "Latência", v: "12 ms", c: "text-emerald-400" },
                { Icon: Wifi, l: "Banda", v: "8.4 Mb/s", c: "text-primary" },
                { Icon: Cpu, l: "CPU host", v: "23%", c: "text-muted-foreground" },
                { Icon: Monitor, l: "Tela", v: "1080p", c: "text-muted-foreground" },
              ].map((s) => (
                <div key={s.l} className="p-3 rounded-lg bg-white/[0.03] border border-border">
                  <s.Icon className={`size-3.5 ${s.c} mb-1.5`} />
                  <div className="text-base font-semibold mono">{s.v}</div>
                  <div className="text-[9px] mono uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Permissions */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Permissões concedidas
              </h3>
              <div className="space-y-2">
                {[
                  "Visualizar tela",
                  "Controlar mouse e teclado",
                  "Clipboard compartilhado",
                  "Gravar sessão (auditoria)",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Agent */}
            <section className="p-3.5 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-7 rounded-md bg-primary/15 grid place-items-center">
                  <ShieldCheck className="size-3.5 text-primary" />
                </div>
                <div className="text-xs font-semibold">Nexa Remote Agent</div>
                <span className="ml-auto text-[9px] mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  v2.3.1
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-snug">
                Agente nativo (~5MB) instalado no host. Captura via DXGI, injeção via SendInput, WebRTC P2P direto.
              </p>
            </section>

            <Link
              to="/settings"
              className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] hover:bg-white/5 border border-border transition-colors text-xs"
            >
              <span className="flex items-center gap-2"><Settings className="size-3.5" /> Configurar agente</span>
              <ChevronRight className="size-3.5 text-muted-foreground" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
