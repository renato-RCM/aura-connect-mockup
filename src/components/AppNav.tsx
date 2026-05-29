import { Link, useRouterState } from "@tanstack/react-router";
import { Smartphone } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/room", label: "Sala Ativa" },
  { to: "/summary", label: "Resumo IA" },
  { to: "/remote", label: "Acesso Remoto" },
  { to: "/modules", label: "Módulos" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/settings", label: "Config" },
];

export function AppNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="h-16 border-b border-border flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-background/80 glass-blur z-50">
      <div className="flex items-center gap-6 min-w-0">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="size-8 bg-primary rounded-md flex items-center justify-center shadow-[0_0_24px_-4px_hsl(210_100%_60%/0.6)]">
            <div className="size-3.5 border-[2.5px] border-background rounded-[2px]" />
          </div>
          <span className="font-semibold tracking-tight text-lg">
            Callnexa<span className="text-primary">.</span>
          </span>
          <span className="hidden md:inline mono text-[9px] uppercase tracking-widest text-muted-foreground px-1.5 py-0.5 rounded bg-white/5 border border-border">
            v1.0.46
          </span>
        </Link>
        <div className="hidden lg:flex gap-5 text-xs font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                pathname === l.to
                  ? "text-foreground"
                  : "hover:text-foreground transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          title="Instalar como app (PWA)"
          className="hidden md:inline-flex items-center gap-1.5 text-[10px] mono uppercase tracking-widest px-2.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
        >
          <Smartphone className="size-3" /> Instalar
        </button>
        <div className="hidden sm:flex items-center gap-2 mono text-[10px] text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          IA · PT/EN/RU
        </div>
        <div className="hidden md:flex -space-x-2">
          <div className="size-8 rounded-full border-2 border-background bg-gradient-to-br from-zinc-700 to-zinc-900" />
          <div className="size-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
            +12
          </div>
        </div>
        <button className="text-xs mono font-medium bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/5 transition-all hidden sm:inline-flex">
          RENATO_M
        </button>
      </div>
    </nav>
  );
}
