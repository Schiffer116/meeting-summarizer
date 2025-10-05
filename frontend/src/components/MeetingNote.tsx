import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown, { type ExtraProps } from "react-markdown";
import { Sparkles, ChevronUp } from "lucide-react";

export default function SummaryNote(
  props: React.ClassAttributes<HTMLLIElement> &
    React.LiHTMLAttributes<HTMLLIElement> &
    ExtraProps,
) {
  const { children, ...rest } = props;
  const [detailedNote, setDetailedNote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [expanded, detailedNote]);

  function generateDetailedNote() {
    setLoading(true);
    setTimeout(() => {
      setDetailedNote(`
- This setup enhances productivity by enabling quick access to multiple projects without losing focus.
- Consistent workspace assignments ensure that each application is always in the same location, reducing the time spent searching for tools.
- The use of TMUX within a terminal emulator allows for efficient management of concurrent tasks, streamlining workflows across different development environments.
    `);
      setLoading(false);
      setExpanded(true);
    }, 5000);
  }

  return (
    <li {...rest} className="group space-x-2">
      <span className="transition-colors group-hover:bg-primary/5 group-hover:text-primary">
        {children}
      </span>

      {!detailedNote ? (
        <Button
          variant="ghost"
          size="sm"
          disabled={loading}
          onClick={generateDetailedNote}
          className={`hidden group-hover:inline-flex group/btn h-fit !p-0 t cursor-pointer transition-colors duration-300 text-muted-foreground hover:text-primary ${loading && "inline-flex"}`}
        >
          <Sparkles
            className={`transition-transform duration-300 group-hover/btn:rotate-12 ${loading && "animate-spin"}`}
          />
          {loading ? "Generating..." : "Details"}
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="!p-0 text-muted-foreground transition-colors duration-300 hover:text-foreground hover:bg-accent"
        >
          <ChevronUp
            className={`transition-transform duration-300 ${expanded && "rotate-180"}`}
          />
        </Button>
      )}

      {detailedNote && (
        <div
          ref={contentRef}
          style={{ maxHeight }}
          className={`!m-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-[max-height,opacity] duration-300 ease-in-out ${expanded ? "opacity-100 " : "opacity-0"
            }`}
        >
          <ReactMarkdown>{detailedNote}</ReactMarkdown>
        </div>
      )}
    </li>
  );
}
