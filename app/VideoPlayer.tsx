"use client";

import MuxPlayer from "@mux/mux-player-react";

export function VideoPlayer({ playbackId }: { playbackId: string }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      accentColor="#5B8C6F"
      style={{ width: "100%", aspectRatio: "16/9", display: "block", borderRadius: 0 }}
    />
  );
}
