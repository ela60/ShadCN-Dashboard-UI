import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Dashboard from '@/pages/dashboard/dashboard';

function App() {
  return (

      <TooltipProvider>
        <Dashboard />
        <Toaster />
      </TooltipProvider>

  );
}

export default App; 