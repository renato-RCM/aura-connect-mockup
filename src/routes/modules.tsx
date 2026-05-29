import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  Sparkles,
  Monitor,
  Paperclip,
  Smile,
  Video,
  Smartphone,
  Languages,
  Building2,
  Webhook,
  Database,
  CheckCircle2,
  Clock,
  Plug,
} from "lucide-react";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Módulos · Callnexa" },
      {
        name: "description",
        content:
          "Sistema plug-and-play de módulos Callnexa — ative recursos como Acesso Remoto, Gravação, Resumo IA e White-label.",
      },
    ],
  }),
  component: Modules,
});

type M = {
  Icon: typeof Sparkles;
  name: string;
  desc: string;
  status: "active" | "beta" | "soon" | "premium";
  tag: string;
  to?: string;
};

const modules: M[] = [
  { Icon: Languages, name: "Tradução Neural", desc: "PT · EN · RU em tempo real, voz IA e legendas.", status: "active", tag: "Core" },
  { Icon: Sparkles, name: "Resumo IA Pós-Call", desc: "GPT-4o gera ata com decisões e action items.", status: "active", tag: "v1.0.43", to: "/summary" },
  { Icon: Monitor, name: "Acesso Remoto", desc: "Controle a máquina do convidado via WebRTC P2P.", status: "beta", tag: "v1.0.46+", to: "/remote" },
  { Icon: Smartphone, name: "PWA Instalável", desc: "Ícone na tela inicial, push notifications, offline parcial.", status: "active", tag: "Mobile" },
  { Icon: Video, name: "Gravação de Reunião", desc: "MediaRecorder server-side + transcrição = ata completa.", status: "soon", tag: "Roadmap" },
  { Icon: Paperclip, name: "Arquivos no Chat", desc: "Upload PDF, imagens, vídeos via servidor HTTP + multer.", status: "soon", tag: "Em fila" },
  { Icon: Smile, name: "Reactions Flutuantes", desc: "👏 👍 ❤️ animadas pela sala — sensação moderna.", status: "soon", tag: "Roadmap" },
  { Icon: Languages, name: "Mais Idiomas", desc: "ES · FR · DE · ZH · JA com auto-detect Whisper.", status: "soon", tag: "99+ idiomas" },
  { Icon: Building2, name: "White-label", desc: "Logo + domínio próprio para revenda corporativa.", status: "premium", tag: "Enterprise" },
  { Icon: Webhook, name: "Webhooks", desc: "Eventos para Slack, Notion, CRM — sala criada, transcrição salva.", status: "premium", tag: "Integrações" },
  { Icon: Database, name: "Persistência SQLite", desc: "Migração de JSON para better-sqlite3 sem mudar API.", status: "soon", tag: "Infra" },
  { Icon: Plug, name: "SFU (mediasoup)", desc: "Escala para 10+ participantes, substitui mesh.", status: "soon", tag: "Escala" },
];

const statusMap = {
  active: { label: "ATIVO", c: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  beta: { label: "BETA", c: "text-primary bg-primary/10 border-primary/20" },
  soon: { label: "EM BREVE", c: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  premium: { label: "PREMIUM", c: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20" },
};

function Modules() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-[10px] mono uppercase tracking-widest text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Plug className="size-3" />
            Sistema plug-and-play
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight max-w-2xl">
            Módulos Callnexa
            <span className="text-muted-foreground">.</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Ative ou desative funcionalidades sem redeploy. Cada módulo é independente, auditado e pode ser cobrado separadamente.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { l: "Ativos", v: "4", c: "text-emerald-400" },
            { l: "Em beta", v: "1", c: "text-primary" },
            { l: "Roadmap", v: "5", c: "text-amber-400" },
            { l: "Premium", v: "2", c: "text-fuchsia-400" },
          ].map((s) => (
            <div key={s.l} className="p-4 rounded-xl bg-card border border-border">
              <div className={`text-3xl font-semibold mono ${s.c}`}>{s.v}</div>
              <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {modules.map((m) => {
            const s = statusMap[m.status];
            const Body = (
              <article className="group h-full p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 grid place-items-center text-primary">
                    <m.Icon className="size-5" />
                  </div>
                  <span className={`text-[9px] mono font-bold px-1.5 py-0.5 rounded border ${s.c}`}>
                    {s.label}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-tight mb-1">{m.name}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed flex-1">{m.desc}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-[10px] mono text-muted-foreground flex items-center gap-1">
                    {m.status === "active" ? <CheckCircle2 className="size-3 text-emerald-400" /> : <Clock className="size-3" />}
                    {m.tag}
                  </span>
                  <button
                    className={`text-[10px] mono uppercase tracking-widest font-bold px-2 py-1 rounded transition-all ${
                      m.status === "active" || m.status === "beta"
                        ? "bg-primary/15 text-primary hover:bg-primary/25"
                        : "bg-white/5 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m.status === "active" ? "Abrir" : m.status === "beta" ? "Testar" : "Notificar"}
                  </button>
                </div>
              </article>
            );
            return m.to ? (
              <Link key={m.name} to={m.to} className="block">
                {Body}
              </Link>
            ) : (
              <div key={m.name}>{Body}</div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
