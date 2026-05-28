import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, User, KeyRound, ShieldCheck, Sparkles, Globe2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar · Callnexa" },
      {
        name: "description",
        content:
          "Acesse o Callnexa com sua conta Google ou usuário local para criar e gerenciar reuniões com tradução IA.",
      },
    ],
  }),
  component: Login,
});

function Login() {
  const [mustChangePassword] = useState(false);
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_hsl(210_100%_30%/0.35),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,_hsl(160_85%_30%/0.22),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(230_20%_4%/0.4)_100%)] pointer-events-none" />

      <main className="relative w-full max-w-[440px] animate-fade-in">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="size-9 bg-primary rounded-md flex items-center justify-center shadow-[0_0_32px_-4px_hsl(210_100%_60%/0.7)]">
            <div className="size-4 border-[2.5px] border-background rounded-[2px]" />
          </div>
          <span className="font-semibold tracking-tight text-xl">
            Callnexa<span className="text-primary">.</span>
          </span>
        </div>

        <div className="rounded-2xl bg-card border border-border overflow-hidden glass-blur">
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              Entrar na sua conta
            </h1>
            <p className="text-sm text-muted-foreground mt-1.5">
              Acesse para criar salas, ver histórico e administrar suas reuniões.
            </p>

            {/* Google OAuth */}
            <button className="mt-6 w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-all">
              <svg viewBox="0 0 24 24" className="size-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>

            {/* One-Tap hint */}
            <p className="mt-2 text-[11px] text-center text-muted-foreground mono flex items-center justify-center gap-1.5">
              <Sparkles className="size-3 text-primary" />
              Google One Tap habilitado
            </p>

            {/* Divider */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[10px] mono uppercase tracking-widest">
                <span className="bg-card px-3 text-muted-foreground">
                  ou usuário local
                </span>
              </div>
            </div>

            {/* Local login */}
            <form className="space-y-3">
              <div>
                <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  Usuário
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    defaultValue="admin"
                    className="w-full bg-black/40 border border-input rounded-lg pl-10 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-black/40 border border-input rounded-lg pl-10 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>

              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-10px_hsl(210_100%_60%/0.6)] hover:brightness-110 transition-all"
              >
                <KeyRound className="size-4" /> Entrar
              </Link>
            </form>

            {mustChangePassword && (
              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-[11px] text-amber-300">
                <AlertCircle className="size-3.5 mt-0.5 shrink-0" />
                Você precisa trocar sua senha no primeiro acesso.
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-border space-y-2 text-[11px] text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="size-3 text-emerald-400" />
                Senhas hash <span className="mono">scrypt</span> · JWT 30 dias
              </p>
              <p className="flex items-center gap-1.5">
                <Globe2 className="size-3 text-primary" />
                UI em PT · EN · RU (alternável)
              </p>
            </div>
          </div>

          {/* Guest CTA */}
          <div className="p-5 border-t border-border bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Recebeu um convite? Você pode entrar como convidado.
            </p>
            <Link
              to="/"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Entrar com link →
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] mono uppercase tracking-widest text-muted-foreground">
          Callnexa · v1.0.40 · iamultagentes.com.br
        </p>
      </main>
    </div>
  );
}
