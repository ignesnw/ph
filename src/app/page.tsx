import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TopBar from "@/components/TopBar";
import LeftPanel from "@/components/LeftPanel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <LeftPanel className="bg-[#f3f4f6]" />
        {/* Divider */}
        <div className="w-px bg-gray-300 h-full" />
        {/* Main Content */}
        <div className="flex-1 bg-[#fff] p-0 h-full">
          {/* Main content will go here */}
        </div>
      </main>
    </div>
  );
}
