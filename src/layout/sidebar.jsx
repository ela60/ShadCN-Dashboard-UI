import { ModeToggle } from '@/components/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';
import {
  BookOpen,
  FileText,
  Globe,
  HelpCircle,
  LayoutList,
  Link as LinkIcon,
  MessageCircle,
  Menu,
  Settings,
  Users,
  Bot,
  Scissors,
  Upload,
  ListChecks,
  Bell,
  MessageSquare,
  UserCircle,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import {SidebarNav} from './sidebar-nav'

export function Sidebar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(true);

  const navItemsMain = [
    {
      title: 'Articles',
      href: '/',
      icon: FileText,
    },
  ];

  const navItemsArticles = [
    {
      title: 'Create Article',
      href: '/create-article',
      icon: FileText,
      indented: true,
    },
    {
      title: 'Generated Articles',
      href: '/generated-articles',
      icon: BookOpen,
      indented: true,
    },
    {
      title: 'Keyword Projects',
      href: '/keyword-projects',
      icon: LayoutList,
      indented: true,
    },
    {
      title: 'AI Keyword to Article',
      href: '/ai-keyword',
      icon: Bot,
      indented: true,
    },
    {
      title: 'Steal Competitor Keyword',
      href: '/competitor-keyword',
      icon: Scissors,
      indented: true,
    },
    {
      title: 'Import Keyword from GSC',
      href: '/import-keywords',
      icon: Upload,
      indented: true,
    },
    {
      title: 'Manual Keyword to Article',
      href: '/manual-keywords',
      icon: ListChecks,
      indented: true,
    },
    {
      title: 'Bulk Keyword to Article',
      href: '/bulk-keywords',
      icon: LayoutList,
      indented: true,
    },
    {
      title: 'Longtail Keyword to Article',
      href: '/longtail-keywords',
      icon: LayoutList,
      indented: true,
    },
    {
      title: 'Article Settings',
      href: '/article-settings',
      icon: Settings,
      indented: true,
    },
  ];

  const navItemsOther = [
    {
      title: 'Auto Blog',
      href: '/auto-blog',
      icon: Bot,
    },
    {
      title: 'Internal Links',
      href: '/internal-links',
      icon: LinkIcon,
    },
    {
      title: 'Free Backlinks',
      href: '/free-backlinks',
      icon: Globe,
    },
    {
      title: 'Integrations',
      href: '/integrations',
      icon: LinkIcon,
    },
    {
      title: 'Subscription',
      href: '/subscription',
      icon: Users,
    },
    {
      title: 'Affiliate Program',
      href: '/affiliate',
      icon: Users,
    },
    {
      title: 'Help Center',
      href: '/help',
      icon: HelpCircle,
    },
    {
      title: 'Updates',
      href: '/updates',
      icon: Bell,
    },
    {
      title: 'Live Chat Support',
      href: '/chat',
      icon: MessageSquare,
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: UserCircle,
    },
  ];

  return (
    <>
      <aside
        className={cn(
          'fixed top-0 left-0 z-30 h-screen w-74 border-r  hidden md:block',
          className
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <span className="text-xl font-bold">abun</span>
          </div>

          <div className='text-xs rounded-full border w-fit  mx-auto px-3 py-1 flex items-center gap-2 mt-4'><div style={{ backgroundImage: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)'}} className="w-4 rounded-full h-4"></div> amazon.com <ChevronDown className='w-4' /></div>
          <ScrollArea className="flex-1 py-2">
            <div className=" ">
              <Collapsible
                open={isArticlesOpen}
                onOpenChange={setIsArticlesOpen}
                className="space-y-2"
              >
                <div className="flex items-center justify-between ">
                  <CollapsibleTrigger style={{backgroundColor: 'transparent',border:"none",}} className="flex items-center gap-2 hover:text-accent-foreground w-full focus:outline-none ">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs font-medium">Articles</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isArticlesOpen ? "transform rotate-180 " : ""
                    )} />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent style={{marginLeft:"30px", borderLeft:"1px solid #e0e0e0"}} className="space-y-2 ">
                  <SidebarNav items={navItemsArticles} />
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="px-3 ">
              <SidebarNav items={navItemsOther} />
            </div>
          </ScrollArea>
   
        </div>
      </aside>

      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="fixed top-4 left-4 z-40 flex h-8 w-8 items-center justify-center rounded-md  backdrop-blur-sm">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center border-b px-4">
                <span className="text-xl font-bold">abun</span>
               
              </div>
              <ScrollArea className="flex-1 py-2">
                <div className="px-3 ">
                  <Collapsible
                    open={isArticlesOpen}
                    onOpenChange={setIsArticlesOpen}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between ">
                      <CollapsibleTrigger className="flex items-center gap-2 hover:text-accent-foreground">
                        <FileText className="h-4 w-4" />
                        <span className="text-xs font-medium">Articles</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isArticlesOpen ? "transform rotate-180" : ""
                        )} />
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
              
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
} 