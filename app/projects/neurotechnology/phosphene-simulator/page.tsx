import type { Metadata } from "next"
import PhospheneSimulatorEmbed from "./phosphene-simulator-embed"

export const metadata: Metadata = {
  title: "Phosphene Vision Simulator | Alizee Wouters",
  description:
    "Interactive simulator modeling how a visual cortex prosthesis translates camera input into phosphene patterns on the primary visual cortex (V1).",
}

export default function PhospheneSimulatorPage() {
  return <PhospheneSimulatorEmbed />
}
