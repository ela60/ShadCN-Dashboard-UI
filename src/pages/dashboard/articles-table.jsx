import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { format } from 'date-fns';
import { CheckCircle, Copy, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export const columns = [
  {
    accessorKey: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/80"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/80"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    header: 'Article Title',
    cell: ({ row }) => {
      const value = row.getValue('title');
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: 'keyword',
    header: 'Keyword [Traffic]',
    cell: ({ row }) => {
      const keyword = row.original.keyword;
      const traffic = row.original.traffic;
      return (
        <div>
          <div className="text-sm font-medium">{keyword}</div>
          <div className="text-xs text-muted-foreground">{traffic}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'wordCount',
    header: 'Words',
    cell: ({ row }) => {
      const value = row.getValue('wordCount');
      return <div className="text-right tabular-nums">{value.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Created On',
    cell: ({ row }) => {
      const date = row.original.createdAt;
      if (!date) return <div className="text-center">—</div>;
      
      return (
        <div className="text-sm">
          {typeof date === 'string' 
            ? date 
            : format(date, 'dd MMM yyyy')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const article = row.original;
      
      return (
        <div className="flex items-center justify-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
            onClick={() => {
              toast.success("Content copied to clipboard!");
            }}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  toast.success("Article editing started");
                }}
                className="cursor-pointer"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  toast.success("Article deleted");
                }}
                className="cursor-pointer text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
  {
    id: 'publish',
    header: 'Publish',
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-emerald-500 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                onClick={() => toast.success("Article published!")}
              >
                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                <span className="text-xs">Done</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Publish this article</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    },
  },
]; 