"use client";

import MuxPlayer from "@mux/mux-player-react";

export function VideoPlayer({ playbackId }: { playbackId: string }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      accentColor="#C8A97E"
      style={{ width: "100%", aspectRatio: "16/9", display: "block", borderRadius: 0 }}
    />
  );
}
