import { cn } from '@/lib/utils';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function SidebarNav({ className, items, ...props }) {
  const location = useLocation();

  return (
    <nav  className={cn('grid gap-1 ', className)} {...props}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? '#' : item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              style={{color:"black"}}
              className={cn(
                'group flex items-center rounded-md px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground !text-black ',
                item.indented && 'ml-8',
                item.disabled && 'pointer-events-none opacity-60',

              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          )
        );
      })}
    </nav>
  );
} 