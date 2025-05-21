import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sidebar } from '@/layout/sidebar';
import { FileText, Plus, RefreshCcw, Search } from 'lucide-react';
import { DataTable } from './data-table';
import { columns } from './articles-table';
import { articles } from './dummy-data';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState('published');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on the selected tab
  useEffect(() => {
    let filtered = articles;
    
    if (selectedTab === 'published') {
      filtered = articles.filter(article => article.status === 'published');
    } else if (selectedTab === 'scheduled') {
      filtered = articles.filter(article => article.status === 'scheduled');
    } else if (selectedTab === 'unfinished') {
      filtered = articles.filter(article => article.status === 'unfinished');
    }
    
    // Apply search filter if there's a query
    if (searchQuery) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredArticles(filtered);
  }, [selectedTab, searchQuery]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <header className={cn(
          "sticky top-0 z-20 w-full border-b bg-background/95 backdrop-blur transition-shadow duration-200",
          isScrolled && "shadow-sm"
        )}>
          <div className="flex h-14 items-center px-4 md:px-6">
            <h1 className="text-xl font-semibold">Articles</h1>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for title, keywords..."
                  className="w-64 pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <RefreshCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline-block">Refresh</span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>New Article</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 pt-4">
          <div className="relative mb-4 md:hidden">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for title, keywords..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs 
            defaultValue="published" 
            className="w-full"
            onValueChange={(value) => setSelectedTab(value)}
          >
            <div className="flex items-center justify-between">
              <TabsList className="space-x-2">
                <TabsTrigger style={{ backgroundColor: "transparent" }} value="published" className="flex items-center gap-1.5 ">
                  <FileText className="h-4 w-4" />
                  <span>Published Articles</span>
                  <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {articles.filter(a => a.status === 'published').length}
                  </span>
                </TabsTrigger>
                <TabsTrigger style={{ backgroundColor: "transparent" }} value="scheduled" className="flex items-center gap-1.5">
                  <span>Scheduled Articles</span>
                  <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {articles.filter(a => a.status === 'scheduled').length}
                  </span>
                </TabsTrigger>
                <TabsTrigger style={{backgroundColor:"transparent"}} value="unfinished" className="flex items-center gap-1.5">
                  <span>Unfinished Articles</span>
                  <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {articles.filter(a => a.status === 'unfinished').length}
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent  value="published" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <DataTable columns={columns} data={filteredArticles} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scheduled" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <DataTable columns={columns} data={filteredArticles} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="unfinished" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <DataTable columns={columns} data={filteredArticles} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
} 