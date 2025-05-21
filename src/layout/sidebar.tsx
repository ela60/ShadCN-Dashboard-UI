'use client'

import { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';
import {
  BookOpen, FileText, Globe, HelpCircle, LayoutList, Link as LinkIcon, MessageSquare,
  Menu, Settings, Users, Bot, Scissors, Upload, ListChecks, Bell, UserCircle, ChevronDown
} from 'lucide-react';
import { SidebarNav } from './sidebar-nav';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(true);

  const navItemsArticles = [
    { title: 'Create Article', href: '/create-article', icon: FileText },
    { title: 'Generated Articles', href: '/generated-articles', icon: BookOpen },
    { title: 'Keyword Projects', href: '/keyword-projects', icon: LayoutList },
    { title: 'AI Keyword to Article', href: '/ai-keyword', icon: Bot },
    { title: 'Steal Competitor Keyword', href: '/competitor-keyword', icon: Scissors },
    { title: 'Import Keyword from GSC', href: '/import-keywords', icon: Upload },
    { title: 'Manual Keyword to Article', href: '/manual-keywords', icon: ListChecks },
    { title: 'Bulk Keyword to Article', href: '/bulk-keywords', icon: LayoutList },
    { title: 'Longtail Keyword to Article', href: '/longtail-keywords', icon: LayoutList },
    { title: 'Article Settings', href: '/article-settings', icon: Settings },
  ];

  const navItemsOther = [
    { title: 'Auto Blog', href: '/auto-blog', icon: Bot },
    { title: 'Internal Links', href: '/internal-links', icon: LinkIcon },
    { title: 'Free Backlinks', href: '/free-backlinks', icon: Globe },
    { title: 'Integrations', href: '/integrations', icon: LinkIcon },
    { title: 'Subscription', href: '/subscription', icon: Users },
    { title: 'Affiliate Program', href: '/affiliate', icon: Users },
    { title: 'Help Center', href: '/help', icon: HelpCircle },
    { title: 'Updates', href: '/updates', icon: Bell },
    { title: 'Live Chat Support', href: '/chat', icon: MessageSquare },
    { title: 'Profile', href: '/profile', icon: UserCircle },
  ];

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Top Bar */}
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-xl font-bold">abun</span>
        <div className="ml-auto">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1.5">
            <Globe className="h-4 w-4" />
            <span className="text-sm">amazon.com</span>
          </div>
        </div>
      </div>

      {/* Scrollable Nav */}
      <ScrollArea className="flex-1 py-2">
        <div className="px-3 py-2">
          <Collapsible open={isArticlesOpen} onOpenChange={setIsArticlesOpen} className="space-y-2">
            <div className="flex items-center justify-between py-2">
              <CollapsibleTrigger className="flex items-center gap-2 hover:text-accent-foreground">
                <FileText className="h-4 w-4" />
                <span className="text-sm font-medium">Articles</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isArticlesOpen && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <SidebarNav items={navItemsArticles} />
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="px-3 py-2">
          <SidebarNav items={navItemsOther} />
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground">
              U
            </div>
            <p className="text-sm font-medium">User</p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn('fixed top-0 left-0 z-30 hidden h-screen w-64 border-r bg-background md:block', className)}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Sheet) */}
      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-md bg-background/50 backdrop-blur-sm border">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
