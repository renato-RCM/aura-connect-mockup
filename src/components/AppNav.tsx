import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/room", label: "Sala Ativa" },
  { to: "/settings", label: "Configurações" },
];

export function AppNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="h-16 border-b border-border flex items-center justify-between px-6 sticky top-0 bg-background/80 glass-blur z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="size-8 bg-primary rounded-md flex items-center justify-center shadow-[0_0_24px_-4px_hsl(210_100%_60%/0.6)]">
            <div className="size-3.5 border-[2.5px] border-background rounded-[2px]" />
          </div>
          <span className="font-semibold tracking-tight text-lg">
            Callnexa<span className="text-primary">.</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
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
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 mono text-[10px] text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          IA ONLINE · PT/EN/RU
        </div>
        <div className="flex -space-x-2">
          <div className="size-8 rounded-full border-2 border-background bg-gradient-to-br from-zinc-700 to-zinc-900" />
          <div className="size-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
            +12
          </div>
        </div>
        <div className="h-4 w-px bg-border" />
        <button className="text-xs mono font-medium bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/5 transition-all">
          RENATO_MIRANDA
        </button>
      </div>
    </nav>
  );
}
