import MeetingSummary from "@/components/MeetingSummary";
// import { VideoUpload } from "@/components/VideoUpload";

function App() {
  return (
    <main className="dark min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 animate-fade-in-up text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Meeting Summary
          </h1>
          <p className="mt-6 text-pretty text-xl text-muted-foreground leading-relaxed">
            Upload your meeting video and get AI-powered summaries with detailed
            notes
          </p>
        </header>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <MeetingSummary />
        </div>
      </div>
    </main>
  );
}

export default App;
