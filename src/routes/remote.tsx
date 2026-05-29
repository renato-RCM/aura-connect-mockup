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
} from "lucide-react";

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
