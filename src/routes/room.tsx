import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppNav } from "@/components/AppNav";
import hostImg from "@/assets/participant-host.jpg";
import p2Img from "@/assets/participant-2.jpg";
import p3Img from "@/assets/participant-3.jpg";
import {
  Link2,
  Mic,
  MicOff,
  Video,
  FlipHorizontal,
  Globe,
  Sparkles,
  Users,
  Download,
  Volume2,
  MessageCircle,
  PhoneOff,
  Copy,
  ShieldCheck,
  Send,
  Settings,
  UserCheck,
  UserX,
  VolumeX,
  Keyboard,
  Hand,
  X,
} from "lucide-react";

export const Route = createFileRoute("/room")({
  head: () => ({
    meta: [
      { title: "Sala ao vivo · Callnexa" },
      {
        name: "description",
        content:
          "Reunião com tradução simultânea por IA: transcrição bilíngue, voz sintética e participantes em PT/EN/RU.",
      },
    ],
  }),
  component: Room,
});

const messages = [
  {
    id: 1,
    author: "Sarah Connor",
    role: "Anfitriã",
    time: "14:20:02",
    fromLang: "EN",
    toLang: "PT",
    original:
      "The efficiency of the new neural network is exceeding our projections for Q4.",
    translated:
      "A eficiência da nova rede neural está superando nossas projeções para o quarto trimestre.",
    active: true,
  },
  {
    id: 2,
    author: "Você",
    role: "Convidado",
    time: "14:20:45",
    fromLang: "PT",
    toLang: "EN",
    original: "Concordo plenamente. Os dados de latência estão incríveis.",
    translated: "I fully agree. The latency data is incredible.",
  },
  {
    id: 3,
    author: "Дмитрий Волков",
    role: "Convidado",
    time: "14:21:18",
    fromLang: "RU",
    toLang: "PT",
    original: "Мы готовы развернуть это в Москве на следующей неделе.",
    translated:
      "Estamos prontos para implementar isso em Moscou na próxima semana.",
  },
  {
    id: 4,
    author: "Marcus Holloway",
    role: "Convidado",
    time: "14:21:55",
    fromLang: "EN",
    toLang: "PT",
    original: "Let's schedule a follow-up with the security team tomorrow.",
    translated:
      "Vamos agendar um acompanhamento com a equipe de segurança amanhã.",
  },
];

const pending = [
  { name: "Heitor Lima", lang: "PT", reason: "Senha correta · novo dispositivo" },
  { name: "Anonymous-9821", lang: "EN", reason: "Senha pendente · aguardando você" },
];

const admitted = [
  { name: "Sarah Connor", role: "Anfitriã (você)", lang: "EN", muted: false, you: true },
  { name: "Marcus Holloway", role: "Convidado", lang: "EN", muted: false },
  { name: "Anya Petrova", role: "Convidado", lang: "RU", muted: true },
  { name: "Дмитрий Волков", role: "Convidado", lang: "RU", muted: false },
];

const shortcuts = [
  { k: "M", a: "Microfone" },
  { k: "V", a: "Câmera" },
  { k: "S", a: "Alto-falante" },
  { k: "L", a: "Layout (auto/grade/foco)" },
  { k: "Z", a: "Idioma" },
  { k: "C", a: "Chat" },
  { k: "Esc", a: "Sair da sala" },
];

function Room() {
  const [chatOpen, setChatOpen] = useState(true);
  const [peopleOpen, setPeopleOpen] = useState(true);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-background">
      <AppNav />

      {/* Mobile sub-toolbar (visible <lg) */}
      <div className="lg:hidden flex items-center justify-between gap-2 px-4 py-2 border-b border-border bg-background/80 glass-blur">
        <div className="flex items-center gap-2 min-w-0">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-xs font-semibold truncate">Sala gyuwqdhx</span>
          <span className="text-[10px] mono text-muted-foreground shrink-0">
            00:42:18
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setChatOpen(true);
              setPeopleOpen(false);
            }}
            className={`size-9 rounded-lg grid place-items-center transition-colors ${
              chatOpen
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-white/5 border border-border text-muted-foreground"
            }`}
            aria-label="Chat"
          >
            <MessageCircle className="size-4" />
          </button>
          <button
            onClick={() => {
              setPeopleOpen(true);
              setChatOpen(false);
            }}
            className={`size-9 rounded-lg grid place-items-center transition-colors relative ${
              peopleOpen
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-white/5 border border-border text-muted-foreground"
            }`}
            aria-label="Participantes"
          >
            <Users className="size-4" />
            <span className="absolute -top-1 -right-1 size-4 rounded-full bg-amber-500 text-[9px] font-bold text-background grid place-items-center">
              {pending.length}
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Left: Translation Chat */}
        <aside
          className={`${
            chatOpen ? "flex" : "hidden"
          } lg:flex absolute lg:relative inset-0 lg:inset-auto z-30 lg:z-auto w-full lg:w-[400px] border-r border-border flex-col glass-blur bg-card lg:bg-glass`}
        >
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest">
                Conversa em tempo real
              </h2>
              <p className="text-[10px] text-muted-foreground mono mt-0.5">
                Tradução neural · Whisper v3 · SSE streaming
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:flex items-center gap-1.5 text-[10px] mono text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AO VIVO
              </span>
              <button
                onClick={() => setChatOpen(false)}
                className="lg:hidden size-7 rounded-md bg-white/5 grid place-items-center"
                aria-label="Fechar"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((m) => (
              <div key={m.id} className="group animate-fade-in">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="size-5 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 grid place-items-center text-[8px] font-bold">
                    {m.author[0]}
                  </div>
                  <span className="text-xs font-semibold truncate max-w-[160px]">
                    {m.author}
                  </span>
                  <span className="text-[10px] mono text-muted-foreground">
                    · {m.time}
                  </span>
                </div>
                <div
                  className={`space-y-2 pl-2 border-l transition-colors ${
                    m.active
                      ? "border-primary"
                      : "border-white/5 group-hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-2.5 pl-2">
                    <span className="shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/10 mono">
                      {m.fromLang}
                    </span>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{m.original}"
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 pl-2">
                    <span className="shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mono">
                      {m.toLang}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-emerald-50">
                      "{m.translated}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 sm:p-4 border-t border-border bg-white/[0.02]">
            <div className="relative">
              <input
                type="text"
                placeholder="Digite uma mensagem (Enter envia · traduz automaticamente)"
                className="w-full bg-black/40 border border-border rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-md bg-primary text-primary-foreground grid place-items-center hover:brightness-110 transition-all">
                <Send className="size-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px] mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3 text-emerald-400" />
                Histórico salvo
              </span>
              <button
                onClick={() => setShortcutsOpen(true)}
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Keyboard className="size-3" /> Atalhos
              </button>
            </div>
          </div>
        </aside>

        {/* Center: Video Stage */}
        <section className="flex-1 relative flex flex-col p-3 sm:p-4 lg:p-6 gap-3 lg:gap-4 bg-[radial-gradient(circle_at_50%_-10%,_hsl(210_100%_18%/0.25),_transparent_60%)] overflow-hidden">
          {/* Room title bar (desktop) */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-border">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold">Sala gyuwqdhx</span>
                <span className="text-[10px] mono text-muted-foreground">
                  · 00:42:18
                </span>
              </div>
              <span className="text-[10px] mono text-muted-foreground">
                4 participantes · 3 idiomas · TURN custom
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShortcutsOpen(true)}
                className="h-9 px-3 inline-flex items-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-xs text-muted-foreground hover:text-foreground transition-all"
              >
                <Keyboard className="size-3.5" /> Atalhos
              </button>
            </div>
          </div>

          {/* Video grid */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-4 gap-2 lg:gap-3 min-h-0">
            <div className="col-span-2 lg:col-span-3 row-span-2 lg:row-span-4 relative rounded-xl lg:rounded-2xl overflow-hidden border border-border shadow-2xl bg-zinc-950">
              <img
                src={hostImg}
                alt="Sarah Connor"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:gap-3 glass-blur bg-black/50 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-white/10 max-w-[calc(100%-1.5rem)]">
                <div className="flex gap-0.5 items-end h-4 shrink-0">
                  <div
                    className="w-0.5 bg-primary animate-audio"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-0.5 bg-primary animate-audio"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <div
                    className="w-0.5 bg-primary animate-audio"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-0.5 bg-primary animate-audio"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <span className="text-xs font-semibold truncate">Sarah Connor</span>
                <span className="hidden sm:inline text-[10px] mono text-muted-foreground px-1.5 py-0.5 bg-white/10 rounded border border-white/10 shrink-0">
                  EN-US · Anfitriã
                </span>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-2">
                <div className="flex items-center gap-1.5 glass-blur bg-emerald-500/10 text-emerald-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-emerald-500/20 text-[9px] sm:text-[10px] font-bold tracking-widest mono">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  TRANSCREVENDO
                </div>
              </div>

              {/* Live caption */}
              <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 max-w-2xl w-[90%]">
                <div className="glass-blur bg-black/60 border border-white/10 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center">
                  <p className="text-[9px] sm:text-[10px] mono text-primary uppercase tracking-widest mb-1">
                    EN → PT · Legenda ao vivo · some em 30s
                  </p>
                  <p className="text-sm sm:text-base font-medium">
                    "A eficiência da nova rede neural está superando nossas
                    projeções para o quarto trimestre."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border bg-zinc-900">
              <img
                src={p2Img}
                alt="Marcus"
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover"
              />
              {/* Per-tile caption */}
              <div className="absolute top-2 left-2 right-2 glass-blur bg-black/60 border border-white/10 rounded-md px-2 py-1 text-[10px] hidden sm:block">
                <span className="mono text-primary mr-1">EN→PT</span>
                "Let's schedule a follow-up..."
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
                <span className="text-[10px] font-medium px-2 py-1 bg-black/70 rounded backdrop-blur truncate">
                  Marcus Holloway
                </span>
                <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 shrink-0">
                  EN
                </span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-border bg-zinc-900">
              <img
                src={p3Img}
                alt="Anya"
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
                <span className="text-[10px] font-medium px-2 py-1 bg-black/70 rounded backdrop-blur truncate">
                  Anya Petrova
                </span>
                <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30 shrink-0">
                  RU
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <MicOff className="size-3.5 text-destructive" />
              </div>
            </div>
          </div>

          {/* Floating control bar */}
          <div className="self-center flex items-center gap-0.5 sm:gap-1 bg-black/60 glass-blur p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl max-w-full overflow-x-auto">
            {[
              { Icon: Mic, label: "Mic" },
              { Icon: Volume2, label: "Som" },
              { Icon: Video, label: "Câmera" },
              { Icon: FlipHorizontal, label: "Virar" },
              { Icon: Globe, label: "PT" },
              { Icon: Hand, label: "Mão" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                title={label}
                className="size-10 sm:size-11 shrink-0 flex flex-col items-center justify-center rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
              >
                <Icon className="size-4" />
                <span className="text-[8px] mono mt-0.5 opacity-60 hidden sm:inline">
                  {label}
                </span>
              </button>
            ))}
            <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block" />
            <button className="h-10 sm:h-11 shrink-0 px-3 sm:px-4 flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-primary text-primary-foreground font-bold text-[9px] sm:text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_24px_-4px_hsl(210_100%_60%/0.6)]">
              <Sparkles className="size-3.5" />
              <span className="hidden sm:inline">Voz IA</span>
            </button>
            <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block" />
            <button
              onClick={() => setPeopleOpen(!peopleOpen)}
              className="size-10 sm:size-11 shrink-0 flex flex-col items-center justify-center rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground relative"
            >
              <Users className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60 hidden sm:inline">
                Pessoas
              </span>
              <span className="absolute top-0.5 right-1 size-4 rounded-full bg-amber-500 text-[9px] font-bold text-background grid place-items-center">
                {pending.length}
              </span>
            </button>
            <button
              title="Baixar TXT"
              className="size-10 sm:size-11 shrink-0 hidden sm:flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Download className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">TXT</span>
            </button>
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="size-10 sm:size-11 shrink-0 flex flex-col items-center justify-center rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground relative"
            >
              <MessageCircle className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60 hidden sm:inline">
                Chat
              </span>
              <span className="absolute top-0.5 right-1 size-4 rounded-full bg-primary text-[9px] font-bold text-primary-foreground grid place-items-center">
                4
              </span>
            </button>
            <Link
              to="/settings"
              title="Configurações"
              className="size-10 sm:size-11 shrink-0 hidden sm:flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Settings className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">Config</span>
            </Link>
            <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block" />
            <Link
              to="/"
              title="Sair"
              className="size-10 sm:size-11 shrink-0 flex flex-col items-center justify-center rounded-lg sm:rounded-xl bg-destructive/15 text-destructive hover:bg-destructive hover:text-white transition-all"
            >
              <PhoneOff className="size-4" />
              <span className="text-[8px] mono mt-0.5 hidden sm:inline">
                Sair
              </span>
            </Link>
          </div>
        </section>

        {/* Right: Admin Participants Panel */}
        <aside
          className={`${
            peopleOpen ? "flex" : "hidden"
          } lg:flex absolute lg:relative inset-0 lg:inset-auto z-30 lg:z-auto w-full lg:w-[340px] border-l border-border flex-col glass-blur bg-card lg:bg-glass overflow-y-auto`}
        >
          <div className="lg:hidden p-3 border-b border-border flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest">
              Painel da sala
            </span>
            <button
              onClick={() => setPeopleOpen(false)}
              className="size-7 rounded-md bg-white/5 grid place-items-center"
              aria-label="Fechar"
            >
              <X className="size-3.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-7">
            {/* Invite */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Convite da sala
              </h3>
              <div className="space-y-2">
                <label className="text-[10px] mono text-muted-foreground flex items-center gap-1">
                  <Link2 className="size-3" /> Link (com a senha embutida)
                </label>
                <div className="flex gap-1.5">
                  <code className="text-[10px] flex-1 truncate bg-black/40 p-2 rounded border border-border mono">
                    callnexa.app/r/gyuwqdhx?pw=alfa-8726
                  </code>
                  <button className="size-8 shrink-0 bg-white/5 hover:bg-white/10 border border-border rounded grid place-items-center transition-colors">
                    <Copy className="size-3.5" />
                  </button>
                </div>
                <label className="text-[10px] mono text-muted-foreground flex items-center gap-1 mt-2">
                  <ShieldCheck className="size-3" /> Senha (palavra-NNNN)
                </label>
                <div className="flex gap-1.5">
                  <code className="text-[10px] flex-1 truncate bg-black/40 p-2 rounded border border-border mono text-primary">
                    alfa-8726
                  </code>
                  <button className="size-8 shrink-0 bg-white/5 hover:bg-white/10 border border-border rounded grid place-items-center transition-colors">
                    <Copy className="size-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Lobby — Pending */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Aguardando aprovação
                </h3>
                <span className="text-[10px] mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                  {pending.length}
                </span>
              </div>
              <div className="space-y-2">
                {pending.map((p) => (
                  <div
                    key={p.name}
                    className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/20"
                  >
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="size-7 shrink-0 rounded-md bg-amber-500/15 grid place-items-center text-[10px] font-bold text-amber-300">
                          {p.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold truncate">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground truncate">
                            {p.reason}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-border text-muted-foreground shrink-0">
                        {p.lang}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 text-[11px] font-semibold border border-emerald-500/20 transition-colors">
                        <UserCheck className="size-3.5" /> Admitir
                      </button>
                      <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 text-[11px] font-semibold border border-destructive/20 transition-colors">
                        <UserX className="size-3.5" /> Negar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Admitted */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Na sala
                </h3>
                <span className="text-[10px] mono bg-white/5 px-2 py-0.5 rounded border border-border">
                  {admitted.length} ONLINE
                </span>
              </div>
              <div className="flex gap-1.5 mb-3">
                <button className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-border text-[10px] font-bold mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                  <VolumeX className="size-3" /> Mutar todos
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-border text-[10px] font-bold mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                  <Volume2 className="size-3" /> Liberar
                </button>
              </div>

              <div className="space-y-2">
                {admitted.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-white/[0.03] group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="size-8 shrink-0 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 border border-border grid place-items-center text-[10px] font-bold">
                        {p.name[0]}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-medium truncate">
                          {p.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate">
                          {p.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-border text-muted-foreground">
                        {p.lang}
                      </span>
                      <button
                        className={`size-7 grid place-items-center rounded-md border transition-colors ${
                          p.muted
                            ? "bg-destructive/15 text-destructive border-destructive/30"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                        }`}
                        title={p.muted ? "Liberar mic" : "Mutar"}
                      >
                        {p.muted ? (
                          <MicOff className="size-3" />
                        ) : (
                          <Mic className="size-3" />
                        )}
                      </button>
                      {!p.you && (
                        <button
                          className="size-7 grid place-items-center rounded-md bg-white/5 border border-border text-muted-foreground hover:bg-destructive/15 hover:text-destructive hover:border-destructive/30 transition-colors"
                          title="Expulsar (com ban)"
                        >
                          <UserX className="size-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] mono text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="size-3 text-emerald-400" />
                Você é o anfitrião · ban por fingerprint ativo
              </p>
            </section>
          </div>
        </aside>
      </div>

      {/* Shortcuts modal */}
      {shortcutsOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 glass-blur flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShortcutsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <Keyboard className="size-4 text-primary" />
                Atalhos de teclado
              </h3>
              <button
                onClick={() => setShortcutsOpen(false)}
                className="size-8 rounded-md hover:bg-white/5 grid place-items-center"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="space-y-1.5">
              {shortcuts.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-sm">{s.a}</span>
                  <kbd className="mono text-[11px] font-bold px-2 py-1 rounded-md bg-white/5 border border-border min-w-[2rem] text-center">
                    {s.k}
                  </kbd>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground text-center">
              Atalhos funcionam quando a janela da sala está em foco.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
