import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppNav } from "@/components/AppNav";
import {
  ArrowLeft,
  Mic,
  Camera,
  Languages,
  Sparkles,
  Captions,
  Maximize,
  Headphones,
  Save,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Configurações · Callnexa" },
      {
        name: "description",
        content:
          "Personalize idioma, microfone, câmera e voz da IA na sua experiência de tradução simultânea.",
      },
    ],
  }),
  component: Settings,
});

const languages = [
  { code: "PT", label: "Português", region: "Brasil", flag: "BR" },
  { code: "EN", label: "English", region: "United States", flag: "US" },
  { code: "RU", label: "Русский", region: "Россия", flag: "RU" },
];

const voices = [
  { id: "auto", label: "Automática", hint: "IA escolhe" },
  { id: "fem", label: "Feminina", hint: "Maria · PT-BR" },
  { id: "mas", label: "Masculina", hint: "Arthur · PT-BR" },
];

function Settings() {
  const [lang, setLang] = useState("PT");
  const [voice, setVoice] = useState("fem");
  const [captions, setCaptions] = useState(true);
  const [fill, setFill] = useState(false);
  const [stt, setStt] = useState(true);
  const [tts, setTts] = useState(true);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/room"
              className="inline-flex items-center gap-1.5 text-[11px] mono text-muted-foreground hover:text-foreground transition-colors mb-3"
            >
              <ArrowLeft className="size-3" /> Voltar à sala
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight">
              Configurações
              <span className="text-muted-foreground">.</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Ajuste seu áudio, idioma e a voz da IA usada na tradução simultânea.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          {/* Name */}
          <section className="p-6 border-b border-border">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Seu nome
            </label>
            <input
              defaultValue="Renato Miranda"
              className="mt-2 w-full bg-black/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all"
            />
          </section>

          {/* Language */}
          <section className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <Languages className="size-4 text-primary" />
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Seu idioma · você fala, lê e escuta nele
              </label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    lang === l.code
                      ? "border-primary bg-primary/10"
                      : "border-border bg-white/[0.02] hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] mono font-bold opacity-70">
                      {l.flag}
                    </span>
                    {lang === l.code && (
                      <span className="size-1.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <div className="text-sm font-semibold">{l.label}</div>
                  <div className="text-[10px] text-muted-foreground mono">
                    {l.region}
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              As mensagens dos outros chegam traduzidas neste idioma — em texto e na voz IA.
            </p>
          </section>

          {/* Mic */}
          <section className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <Mic className="size-4 text-primary" />
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Microfone
              </label>
            </div>
            <div className="relative">
              <select className="w-full appearance-none bg-black/40 border border-border rounded-lg px-4 py-3 text-sm pr-10 focus:outline-none focus:border-primary/50">
                <option>Microfone (Realtek® Audio)</option>
                <option>AirPods Pro</option>
                <option>Logitech BRIO</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            </div>
            <p className="mt-3 flex items-start gap-2 text-[11px] text-muted-foreground">
              <Headphones className="size-3.5 text-amber-400 mt-0.5 shrink-0" />
              Use fones de ouvido para evitar microfonia e melhorar a qualidade.
            </p>
          </section>

          {/* Camera */}
          <section className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="size-4 text-primary" />
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Câmera
              </label>
            </div>
            <div className="relative">
              <select className="w-full appearance-none bg-black/40 border border-border rounded-lg px-4 py-3 text-sm pr-10 focus:outline-none focus:border-primary/50">
                <option>Logitech BRIO (046d:085e)</option>
                <option>FaceTime HD Camera</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            </div>
          </section>

          {/* Toggles */}
          <section className="p-6 border-b border-border space-y-3">
            {[
              { state: captions, set: setCaptions, Icon: Captions, label: "Mostrar legendas traduzidas", hint: "Sobreposição ao vivo no vídeo do palco." },
              { state: fill, set: setFill, Icon: Maximize, label: "Preencher tela com vídeo (corta bordas)", hint: "Estilo Google Meet. Duplo-clique alterna." },
              { state: stt, set: setStt, Icon: Mic, label: "Reconhecimento de voz (transcrever sua fala)", hint: "Transcrição via OpenAI silenciosa, sem ding." },
              { state: tts, set: setTts, Icon: Sparkles, label: "Falar tradução em voz alta (TTS)", hint: "Sintetiza a fala traduzida com voz IA." },
            ].map((t) => (
              <label
                key={t.label}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] cursor-pointer transition-colors"
              >
                <button
                  type="button"
                  onClick={() => t.set(!t.state)}
                  className={`mt-0.5 shrink-0 w-9 h-5 rounded-full transition-colors relative ${
                    t.state ? "bg-primary" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 size-4 rounded-full bg-white transition-all ${
                      t.state ? "left-4" : "left-0.5"
                    }`}
                  />
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <t.Icon className="size-3.5 text-muted-foreground" />
                    <span className="text-sm font-medium">{t.label}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{t.hint}</p>
                </div>
              </label>
            ))}
          </section>

          {/* Voice */}
          <section className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-primary" />
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Voz da IA
              </label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {voices.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVoice(v.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    voice === v.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-white/[0.02] hover:bg-white/5"
                  }`}
                >
                  <div className="text-sm font-semibold">{v.label}</div>
                  <div className="text-[10px] mono text-muted-foreground mt-0.5">
                    {v.hint}
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-3 text-[11px] flex items-center gap-1.5 text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Voz feminina encontrada: "Microsoft Maria — Portuguese (Brazil)"
            </p>

            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Velocidade da voz
                </span>
                <span className="text-xs mono text-primary font-bold">
                  {speed.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min={0.75}
                max={1.5}
                step={0.05}
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="slider-primary w-full cursor-pointer"
              />
            </div>
          </section>

          {/* Save */}
          <div className="p-6 flex items-center justify-between bg-white/[0.02]">
            <p className="text-[11px] text-muted-foreground">
              Suas preferências ficam salvas neste navegador.
            </p>
            <Link
              to="/room"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)]"
            >
              <Save className="size-4" /> Salvar
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
