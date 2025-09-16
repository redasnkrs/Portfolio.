import { sections } from '../data/sections';
import { useActiveSection } from '../hooks/useActiveSection';

export function FloatingNav() {
  const active = useActiveSection(sections.map((s) => s.id));
  return (
    <nav aria-label="Primary" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-2xl px-6 py-3 shadow-2xl">
        <ul className="flex items-center gap-8 text-xs">
          {sections.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${isActive ? 'bg-[rgba(255,255,255,0.08)]' : 'hover:bg-[rgba(255,255,255,0.08)]'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    const el = document.getElementById(id);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
