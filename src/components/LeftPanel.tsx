import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { User, Users, Tag, List, Camera, ChevronDown, Star } from "lucide-react";

interface LeftPanelProps {
  className?: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ className = "" }) => (
  <aside className={`w-64 border-r border-gray-200 p-4 flex flex-col gap-1 min-h-full ${className}`}>
    {/* Title */}
    <div>
      <h3 className="pl-1 mb-2 text-sm font-text-sm">Filter</h3>
    </div>

    {/* Selects Group */}
    <div className="flex flex-col gap-4">
      {/* Status */}
      <div>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tier2">Budgeting</SelectItem>
            <SelectItem value="tier1">Construction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Contact */}
      <div>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Select contact" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="question">Question</SelectItem>
            <SelectItem value="incident">Incident</SelectItem>
            <SelectItem value="task">Task</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Type */}
      <div>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="question">Question</SelectItem>
            <SelectItem value="incident">Incident</SelectItem>
            <SelectItem value="task">Task</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </aside>
);

export default LeftPanel; 