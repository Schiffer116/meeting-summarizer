import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import summary from "@/mock/summary.md?raw";
import MeetingNote from "./MeetingNote";

export default function MeetingSummary() {
  return (
    <Card className="glass-effect border-border/50 p-8 transition-all duration-300 hover:border-primary/30">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary/70" />
        <h3 className="text-base font-medium">Meeting summary</h3>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            strong: (props) => (
              <strong
                {...props}
                className="group-hover:text-primary font-semibold transition-colors duration-300 ease-in-out"
              />
            ),
            li: MeetingNote,
          }}
        >
          {summary}
        </ReactMarkdown>
      </div>
    </Card>
  );
}
