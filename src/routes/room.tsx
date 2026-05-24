import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import hostImg from "@/assets/participant-host.jpg";
import p2Img from "@/assets/participant-2.jpg";
import p3Img from "@/assets/participant-3.jpg";
import {
  Mic,
  MicOff,
  Video,
  Camera,
  FlipHorizontal,
  Globe,
  Sparkles,
  Users,
  Download,
  Volume2,
  MessageCircle,
  PhoneOff,
  Copy,
  Pin,
  ShieldCheck,
  Send,
  Maximize2,
  Settings,
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
    original: "The efficiency of the new neural network is exceeding our projections for Q4.",
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
    translated: "Estamos prontos para implementar isso em Moscou na próxima semana.",
  },
  {
    id: 4,
    author: "Marcus Holloway",
    role: "Convidado",
    time: "14:21:55",
    fromLang: "EN",
    toLang: "PT",
    original: "Let's schedule a follow-up with the security team tomorrow.",
    translated: "Vamos agendar um acompanhamento com a equipe de segurança amanhã.",
  },
];

function Room() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <AppNav />
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Translation Chat */}
        <aside className="w-[400px] border-r border-border flex flex-col glass-blur bg-glass">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest">
                Conversa em tempo real
              </h2>
              <p className="text-[10px] text-muted-foreground mono mt-0.5">
                Tradução neural · Whisper v3
              </p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] mono text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AO VIVO
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((m) => (
              <div key={m.id} className="group animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-5 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 grid place-items-center text-[8px] font-bold">
                    {m.author[0]}
                  </div>
                  <span className="text-xs font-semibold">{m.author}</span>
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
                    <span className="shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 mono">
                      {m.toLang}
                    </span>
                    <p className="text-sm font-medium leading-relaxed">
                      "{m.translated}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border bg-white/[0.02]">
            <div className="relative">
              <input
                type="text"
                placeholder="Digite uma mensagem (Enter para enviar)"
                className="w-full bg-black/40 border border-border rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-md bg-primary text-primary-foreground grid place-items-center hover:brightness-110 transition-all">
                <Send className="size-4" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] mono text-muted-foreground">
              <ShieldCheck className="size-3 text-emerald-400" />
              Histórico salvo automaticamente · Criptografado
            </div>
          </div>
        </aside>

        {/* Center: Video Stage */}
        <section className="flex-1 relative flex flex-col p-6 gap-4 bg-[radial-gradient(circle_at_50%_-10%,_hsl(210_100%_18%/0.25),_transparent_60%)] overflow-hidden">
          {/* Room title bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-border">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold">Sala gyuwqdhx</span>
                <span className="text-[10px] mono text-muted-foreground">· 00:42:18</span>
              </div>
              <span className="text-[10px] mono text-muted-foreground hidden lg:inline">
                4 participantes · 3 idiomas
              </span>
            </div>
            <button className="size-9 rounded-lg bg-white/5 hover:bg-white/10 border border-border grid place-items-center transition-all">
              <Maximize2 className="size-4 text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-3 min-h-0">
            {/* Primary feed */}
            <div className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-zinc-950">
              <img
                src={hostImg}
                alt="Sarah Connor"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-4 left-4 flex items-center gap-3 glass-blur bg-black/50 px-3 py-2 rounded-lg border border-white/10">
                <div className="flex gap-0.5 items-end h-4">
                  <div className="w-0.5 bg-primary animate-audio" style={{ animationDelay: "0.1s" }} />
                  <div className="w-0.5 bg-primary animate-audio" style={{ animationDelay: "0.3s" }} />
                  <div className="w-0.5 bg-primary animate-audio" style={{ animationDelay: "0.2s" }} />
                  <div className="w-0.5 bg-primary animate-audio" style={{ animationDelay: "0.4s" }} />
                </div>
                <span className="text-xs font-semibold">Sarah Connor</span>
                <span className="text-[10px] mono text-muted-foreground px-1.5 py-0.5 bg-white/10 rounded border border-white/10">
                  EN-US · Anfitriã
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="flex items-center gap-2 glass-blur bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20 text-[10px] font-bold tracking-widest mono">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  TRANSCREVENDO
                </div>
              </div>

              {/* Live caption */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 max-w-2xl w-[80%]">
                <div className="glass-blur bg-black/60 border border-white/10 rounded-xl px-5 py-3 text-center">
                  <p className="text-[10px] mono text-primary uppercase tracking-widest mb-1">
                    EN → PT · Legenda ao vivo
                  </p>
                  <p className="text-base font-medium">
                    "A eficiência da nova rede neural está superando nossas projeções
                    para o quarto trimestre."
                  </p>
                </div>
              </div>
            </div>

            {/* Side tiles */}
            <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden border border-border bg-zinc-900">
              <img src={p2Img} alt="Marcus" loading="lazy" width={640} height={512} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="text-[10px] font-medium px-2 py-1 bg-black/70 rounded backdrop-blur">
                  Marcus Holloway
                </span>
                <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                  EN
                </span>
              </div>
            </div>
            <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden border border-border bg-zinc-900">
              <img src={p3Img} alt="Anya" loading="lazy" width={640} height={512} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="text-[10px] font-medium px-2 py-1 bg-black/70 rounded backdrop-blur">
                  Anya Petrova
                </span>
                <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                  RU
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <MicOff className="size-3.5 text-destructive" />
              </div>
            </div>
          </div>

          {/* Floating control bar */}
          <div className="self-center flex items-center gap-1 bg-black/60 glass-blur p-1.5 rounded-2xl border border-white/10 shadow-2xl">
            {[
              { Icon: Mic, label: "Microfone" },
              { Icon: Volume2, label: "Sem som" },
              { Icon: Video, label: "Câmera" },
              { Icon: FlipHorizontal, label: "Virar" },
              { Icon: Globe, label: "PT" },
              { Icon: Camera, label: "Auto" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                title={label}
                className="size-11 flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground group"
              >
                <Icon className="size-4" />
                <span className="text-[8px] mono mt-0.5 opacity-60">{label}</span>
              </button>
            ))}
            <div className="h-8 w-px bg-white/10 mx-1" />
            <button className="h-11 px-4 flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_24px_-4px_hsl(210_100%_60%/0.6)]">
              <Sparkles className="size-3.5" />
              Voz IA Ativa
            </button>
            <div className="h-8 w-px bg-white/10 mx-1" />
            <button title="Participantes" className="size-11 flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground relative">
              <Users className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">Pessoas</span>
              <span className="absolute top-1 right-1.5 size-1.5 rounded-full bg-primary" />
            </button>
            <button title="Baixar" className="size-11 flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground">
              <Download className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">Baixar</span>
            </button>
            <button title="Chat" className="size-11 flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground relative">
              <MessageCircle className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">Chat</span>
              <span className="absolute top-1 right-1.5 size-4 rounded-full bg-primary text-[9px] font-bold text-primary-foreground grid place-items-center">
                4
              </span>
            </button>
            <Link
              to="/settings"
              title="Configurações"
              className="size-11 flex flex-col items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Settings className="size-4" />
              <span className="text-[8px] mono mt-0.5 opacity-60">Config</span>
            </Link>
            <div className="h-8 w-px bg-white/10 mx-1" />
            <Link
              to="/"
              title="Sair"
              className="size-11 flex flex-col items-center justify-center rounded-xl bg-destructive/15 text-destructive hover:bg-destructive hover:text-white transition-all"
            >
              <PhoneOff className="size-4" />
              <span className="text-[8px] mono mt-0.5">Sair</span>
            </Link>
          </div>
        </section>

        {/* Right: Participants & TTS */}
        <aside className="w-80 border-l border-border flex flex-col glass-blur bg-glass overflow-y-auto">
          <div className="p-6 space-y-8">
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Convite da sala
              </h3>
              <div className="space-y-2">
                <label className="text-[10px] mono text-muted-foreground flex items-center gap-1">
                  <Link2 className="size-3" /> Link com a senha
                </label>
                <div className="flex gap-1.5">
                  <code className="text-[10px] flex-1 truncate bg-black/40 p-2 rounded border border-border mono">
                    callnexa.app/r/gyuwqdhx
                  </code>
                  <button className="size-8 bg-white/5 hover:bg-white/10 border border-border rounded grid place-items-center transition-colors">
                    <Copy className="size-3.5" />
                  </button>
                </div>
                <label className="text-[10px] mono text-muted-foreground flex items-center gap-1 mt-2">
                  <ShieldCheck className="size-3" /> Senha
                </label>
                <div className="flex gap-1.5">
                  <code className="text-[10px] flex-1 truncate bg-black/40 p-2 rounded border border-border mono text-primary">
                    alfa-8726
                  </code>
                  <button className="size-8 bg-white/5 hover:bg-white/10 border border-border rounded grid place-items-center transition-colors">
                    <Copy className="size-3.5" />
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Voz da IA (Saída)
              </h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg border border-primary/40 bg-primary/5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-primary">
                      Maria · PT-BR
                    </span>
                    <span className="text-[10px] mono text-primary/70">FEMININA</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-primary" />
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border bg-white/[0.02]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Arthur · EN-US
                    </span>
                    <span className="text-[10px] mono text-muted-foreground">
                      MASCULINA
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border bg-white/[0.02]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Irina · RU
                    </span>
                    <span className="text-[10px] mono text-muted-foreground">
                      FEMININA
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Velocidade da voz · 1.0x
              </h3>
              <input
                type="range"
                defaultValue={50}
                className="slider-primary w-full cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-[10px] mono text-muted-foreground">
                <span>0.75x</span>
                <span>1.0x</span>
                <span>1.5x</span>
              </div>
            </section>

            <section className="pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Participantes
                </h3>
                <span className="text-[10px] mono bg-white/5 px-2 py-0.5 rounded border border-border">
                  4 ONLINE
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Sarah Connor", role: "Anfitriã", lang: "EN", color: "primary", pin: true },
                  { name: "Você (Renato)", role: "Convidado", lang: "PT", color: "emerald" },
                  { name: "Marcus Holloway", role: "Convidado", lang: "EN", color: "primary" },
                  { name: "Anya Petrova", role: "Convidado", lang: "RU", color: "accent" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 border border-border grid place-items-center text-[10px] font-bold">
                        {p.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium">{p.name}</span>
                        <span className="text-[10px] text-muted-foreground">
                          {p.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] mono font-bold px-1.5 py-0.5 rounded bg-white/5 border border-border text-muted-foreground">
                        {p.lang}
                      </span>
                      {p.pin && <Pin className="size-3 text-primary" />}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] mono text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="size-3 text-emerald-400" />
                Você é o anfitrião desta sala
              </p>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
