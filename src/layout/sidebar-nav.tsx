import { cn } from '@/lib/utils';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: LucideIcon;
    disabled?: boolean;
    external?: boolean;
    indented?: boolean;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav className={cn('grid gap-1', className)} {...props}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? '#' : item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                item.indented && 'ml-4',
                item.disabled && 'pointer-events-none opacity-60',
                location.pathname === item.href
                  ? 'bg-accent text-accent-foreground'
                  : 'transparent',
                'transition-all duration-200 ease-in-out'
              )}
            >
              <Icon className="mr-3 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          )
        );
      })}
    </nav>
  );
}