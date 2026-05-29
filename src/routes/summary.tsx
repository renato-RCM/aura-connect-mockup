import { createFileRoute, Link } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";
import {
  Sparkles,
  FileText,
  Download,
  Share2,
  CheckCircle2,
  Clock,
  Languages,
  Users,
  ArrowRight,
  Mail,
  Slack,
  Bookmark,
} from "lucide-react";

export const Route = createFileRoute("/summary")({
  head: () => ({
    meta: [
      { title: "Resumo IA · Callnexa" },
      {
        name: "description",
        content:
          "Ata automática gerada por IA — bullet points, decisões e action items extraídos da transcrição da reunião.",
      },
    ],
  }),
  component: Summary,
});

const decisions = [
  "Aprovado lançamento do produto em Moscou para semana 23",
  "Orçamento de Q4 expandido em USD 280k para infra de IA",
  "Equipe de segurança fará auditoria de penetração até 15/06",
];

const actions = [
  { who: "Marcus Holloway", task: "Agendar follow-up com squad de segurança", due: "Amanhã" },
  { who: "Дмитрий Волков", task: "Preparar checklist de deploy Moscou", due: "Sex 30/05" },
  { who: "Sarah Connor", task: "Validar projeções Q4 com finance", due: "Seg 02/06" },
  { who: "Renato Miranda", task: "Compartilhar mockup com diretoria", due: "Hoje" },
];

const highlights = [
  { t: "00:04:12", q: "A eficiência da rede neural está superando nossas projeções de Q4." },
  { t: "00:11:38", q: "Estamos prontos para implementar isso em Moscou na próxima semana." },
  { t: "00:27:55", q: "Vamos agendar um acompanhamento com a equipe de segurança amanhã." },
  { t: "00:39:02", q: "O orçamento adicional de 280k está aprovado pela diretoria." },
];

function Summary() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNav />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] mono uppercase tracking-widest text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Sparkles className="size-3" />
              Gerado por GPT-4o · há 2 min
            </div>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Conselho Executivo Q4
              <span className="text-muted-foreground">.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] mono text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="size-3" /> 42min · 23/05 14:00</span>
              <span className="flex items-center gap-1.5"><Users className="size-3" /> 8 participantes</span>
              <span className="flex items-center gap-1.5"><Languages className="size-3" /> PT · EN · RU</span>
              <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 className="size-3" /> Transcrição completa</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-xs font-medium transition-all">
              <Download className="size-3.5" /> PDF
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-xs font-medium transition-all">
              <FileText className="size-3.5" /> TXT
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border text-xs font-medium transition-all">
              <Mail className="size-3.5" /> Enviar e-mail
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all">
              <Slack className="size-3.5" /> Postar no Slack
            </button>
          </div>
        </div>

        {/* TL;DR */}
        <section className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.05] border border-primary/20 overflow-hidden mb-8">
          <div className="absolute -top-16 -right-16 size-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-[10px] mono uppercase tracking-[0.2em] text-primary mb-2">TL;DR · 30 segundos</div>
            <p className="text-base lg:text-lg leading-relaxed text-pretty">
              Reunião alinhou os marcos finais do Q4: a equipe confirmou que a
              nova rede neural superou as projeções de eficiência, aprovou{" "}
              <span className="text-emerald-300 font-medium">orçamento adicional de USD 280k</span>{" "}
              para infraestrutura de IA, e definiu o{" "}
              <span className="text-emerald-300 font-medium">deploy em Moscou para a semana 23</span>.
              Equipe de segurança fará auditoria até 15/06.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Decisões */}
          <section className="lg:col-span-2 p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              Decisões tomadas
            </h2>
            <ul className="space-y-3">
              {decisions.map((d, i) => (
                <li key={i} className="flex gap-3 p-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/15">
                  <span className="size-6 shrink-0 rounded-md bg-emerald-500/15 text-emerald-300 grid place-items-center text-[10px] mono font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sentimento */}
          <section className="p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Sentimento da reunião
            </h2>
            <div className="text-center py-2">
              <div className="text-5xl font-semibold text-emerald-400">8.4</div>
              <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground mt-1">de 10 · positivo</div>
            </div>
            <div className="space-y-2 mt-4 text-[11px]">
              {[
                { l: "Alinhamento", v: 92, c: "bg-emerald-400" },
                { l: "Engajamento", v: 81, c: "bg-primary" },
                { l: "Clareza", v: 88, c: "bg-accent" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="flex justify-between mono">
                    <span className="text-muted-foreground">{s.l}</span>
                    <span className="text-foreground">{s.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 mt-1 overflow-hidden">
                    <div className={`h-full ${s.c}`} style={{ width: `${s.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action items */}
          <section className="lg:col-span-2 p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <Bookmark className="size-3.5 text-primary" />
                Action items
              </h2>
              <span className="text-[10px] mono text-muted-foreground">{actions.length} tarefas</span>
            </div>
            <div className="divide-y divide-border">
              {actions.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <input type="checkbox" className="size-4 rounded border-border bg-white/5 accent-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{a.task}</div>
                    <div className="text-[10px] mono text-muted-foreground mt-0.5">@{a.who.toLowerCase().replace(/\s/g, "_")} · vence {a.due}</div>
                  </div>
                  <button className="size-7 rounded-md hover:bg-white/5 text-muted-foreground hover:text-foreground grid place-items-center transition-colors shrink-0">
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Momentos-chave */}
          <section className="p-5 lg:p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Momentos-chave
            </h2>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="text-[11px]">
                  <div className="mono text-primary mb-1">{h.t}</div>
                  <p className="text-muted-foreground italic leading-snug">"{h.q}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-border">
          <p className="text-[11px] text-muted-foreground">
            Conteúdo confidencial · gerado a partir da transcrição completa · histórico salvo em /storage/sumarios/gyuwqdhx.json
          </p>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
            <Share2 className="size-3.5" /> Compartilhar com a diretoria
          </Link>
        </div>
      </main>
    </div>
  );
}
