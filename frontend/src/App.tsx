import MeetingSummary from "@/pages/MeetingSummary";
import { VideoUpload } from "@/components/VideoUpload";

function App() {
  return (
    <main className="dark min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-1/2 right-1/4 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 animate-fade-in-up text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Meeting Summary
          </h1>
          <p className="mt-6 text-pretty text-xl text-muted-foreground leading-relaxed">
            Upload your meeting video and get AI-powered summaries with detailed
            notes
          </p>
        </header>

        <div className="space-y-8">
          {/*
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <VideoUpload />
          </div>
          */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <MeetingSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
