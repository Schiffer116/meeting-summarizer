import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Video, X, Sparkles } from "lucide-react";

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type.startsWith("video/")) {
      setFile(droppedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
  };

  const handleProcess = async () => {
    if (!file) return;

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
  };

  return (
    <Card className="glass-effect border-border/50 p-8 transition-all duration-300 hover:border-primary/30">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Upload Video
          </h2>
          {file && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>

        {!file ? (
          <label
            className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-16 transition-all duration-300 ${isDragging
                ? "border-primary bg-primary/10 scale-[1.02]"
                : "border-border/50 bg-muted/20 hover:border-primary/50 hover:bg-muted/30"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="rounded-full bg-primary/10 p-6 transition-transform duration-300 hover:scale-110">
              <Upload className="h-12 w-12 text-primary" />
            </div>
            <p className="mt-6 text-lg font-medium text-foreground">
              Click to upload or drag and drop
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              MP4, MOV, AVI up to 500MB
            </p>
            <input
              type="file"
              className="sr-only"
              accept="video/*"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="group flex items-center gap-4 rounded-xl border border-border/50 bg-secondary/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/70">
              <div className="rounded-lg bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                <Video className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-base font-medium text-accent-foreground">
                  {file.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>

            <Button
              onClick={handleProcess}
              disabled={isProcessing}
              className="group relative w-full overflow-hidden bg-primary py-6 text-base font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <div className="absolute inset-0 animate-shimmer" />
                  <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Generate Summary
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
