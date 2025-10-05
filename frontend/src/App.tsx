import MeetingSummary from "@/components/MeetingSummary";

function App() {
  const meetingTitle = "My proprietary garbage WM workflow.mp4";

  return (
    <main className="dark min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 animate-fade-in-up text-center">
          <h1 className="text-4xl font-bold text-foreground">{meetingTitle}</h1>
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
