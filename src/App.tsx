import { useState } from "react";
 
const data = {
  sections: [
    {
      id: "immediate",
      label: "🔥 Do First",
      color: "#ff4d4d",
      items: [
        {
          title: "Get Claude Pro ($20/mo)",
          detail: "Unlocks Projects, extended context, MCP integrations, Claude Code access. This is the foundation for everything else.",
          done: false,
        },
        {
          title: "Download Claude Desktop",
          detail: "Go to anthropic.com/claude. This is your local MCP hub — where you connect Claude to your actual computer and apps.",
          done: false,
        },
        {
          title: "Set up /refine system prompt",
          detail: "In a Claude Project, add a system prompt: 'If the message starts with /refine, rewrite the prompt to be maximally precise for an engineering/math task, state what changed, then execute it. Otherwise respond normally.'",
          done: false,
        },
        {
          title: "Make a 'Claude Context' folder on Google Drive",
          detail: "Drop study notes, error logs, and project specs here. Since Drive MCP is connected, just say 'check my notes' in any chat and Claude pulls it up instantly.",
          done: false,
        },
      ],
    },
    {
      id: "summer",
      label: "📐 Summer Learning (Calc BC + AP Physics 1)",
      color: "#4d9fff",
      items: [
        {
          title: "Active Recall — after every BYU lesson",
          detail: "Paste the topic into Claude: 'Quiz me on this with 10 questions of increasing difficulty, then tell me what I got wrong and why.' Do this every single lesson — it's the highest-leverage study method.",
          done: false,
        },
        {
          title: "Socratic Dialogue — when stuck on problems",
          detail: "Never ask Claude for the answer. Say: 'I'm stuck on this. I think I should use [method] because [reason]. Am I on the right track? Guide me without giving the answer.'",
          done: false,
        },
        {
          title: "Error Analysis Journal",
          detail: "Every wrong answer → log it in a Google Doc. Once a week paste the log to Claude: 'Here are my mistakes this week. What patterns do you see? What am I weakest on?' Find your blind spots systematically.",
          done: false,
        },
        {
          title: "Feynman Technique",
          detail: "After learning a concept, explain it back to Claude like you're teaching it. Ask Claude to poke holes. The gaps it finds = exactly what you don't actually understand yet.",
          done: false,
        },
        {
          title: "Preview Before Every Lecture",
          detail: "Before each BYU video, ask Claude for a 5-minute primer on the topic. You'll absorb the lesson 2-3x better because your brain already has hooks for the new info.",
          done: false,
        },
        {
          title: "Cross-link Math and Physics explicitly",
          detail: "Derivatives = velocity/acceleration. Integrals = work (area under force curve). Ask Claude to show the mathematical structure behind every physics formula. Most students treat them as separate — don't.",
          done: false,
        },
      ],
    },
    {
      id: "computer",
      label: "🖥️ Hardware Plan",
      color: "#a855f7",
      items: [
        {
          title: "Target: Desktop Build (~$455-525)",
          detail: "Ryzen 5 5600 (~$100) + B550 motherboard (~$90) + 16GB DDR4 (~$35) + 1TB NVMe (~$60) + Used RX 6600 or GTX 1660 Super (~$130) + Case + PSU (~$70). Everything swappable. CPU upgradeable to Ryzen 9 5900X later on same board.",
          done: false,
        },
        {
          title: "Laptop Backup: ThinkPad T14 Ryzen (eBay)",
          detail: "Search 'ThinkPad T14 Ryzen' on eBay or Back Market. $280-420 range. RAM and SSD are user-replaceable. Get 16GB RAM minimum. Add a 1TB NVMe for ~$60. Avoid Intel integrated graphics versions.",
          done: false,
        },
        {
          title: "SBC Cluster (future, ~$250-350)",
          detail: "Orange Pi 5 Plus (has 6 TOPS NPU, runs local AI) + Raspberry Pi 5 (automation + MCP servers 24/7) + one more node for storage. Run local prompt refiner on NPU so it doesn't use Claude tokens.",
          done: false,
        },
        {
          title: "Local AI Models for SBC",
          detail: "Phi-3 Mini, Llama 3 8B quantized, or Gemma 2B run well on NPU-equipped SBCs. Use for prompt refining and lightweight tasks. Save Claude tokens for heavy work.",
          done: false,
        },
      ],
    },
    {
      id: "money",
      label: "💰 Make Claude Pay For Itself",
      color: "#22c55e",
      items: [
        {
          title: "Fiverr CAD Pipeline (start here)",
          detail: "Client request → you refine into CAD spec → Claude Code + Onshape MCP builds it → you QC and deliver. Price on turnaround speed, not just complexity. $20-50/model. Need only 1-2 jobs/month to cover Pro.",
          done: false,
        },
        {
          title: "Where to sell CAD work",
          detail: "Fiverr (3D modeling category), Reddit r/forhire + r/3Dmodeling, Discord servers for game devs and makers, Upwork for larger projects.",
          done: false,
        },
        {
          title: "TikTok Shop + AI Ads",
          detail: "Find product on Higgs Field → Claude writes hooks/scripts/copy → AI video tool (Creatify, HeyGen, CapCut AI) generates video → post as TikTok Shop affiliate. Zero inventory risk. Product selection is 80% of the battle — use Claude to A/B test hook variations fast.",
          done: false,
        },
        {
          title: "Scale path",
          detail: "Claude Pro ($20) → Fiverr covers it → build app idea → Claude Max ($100) when revenue justifies → API billing when you have real users.",
          done: false,
        },
      ],
    },
    {
      id: "mcp",
      label: "🔌 MCP & Integration Setup",
      color: "#f59e0b",
      items: [
        {
          title: "Onshape MCP (Jarvis) — after getting Pro",
          detail: "Search GitHub for 'onshape-mcp' or 'Jarvis Onshape'. Get Onshape API keys from their developer portal (free). Add to Claude Desktop config JSON. Test with a few practice models before taking clients.",
          done: false,
        },
        {
          title: "Filesystem MCP",
          detail: "Lets Claude read/write files directly on your computer. Essential for the full local workflow.",
          done: false,
        },
        {
          title: "Obsidian MCP (after Claude Desktop is set up)",
          detail: "Install Obsidian, create a vault with folders: Calculus BC, AP Physics, Robotics, Projects. Add Obsidian MCP plugin. Claude can then read/write your entire knowledge base.",
          done: false,
        },
        {
          title: "Automated daily to-do list",
          detail: "Scheduled script (cron job or n8n) runs every morning → calls Claude API → Claude generates prioritized to-do based on your calendar/notes → pushes to Notion or Google Drive → syncs to phone.",
          done: false,
        },
        {
          title: "Prompt chain pipeline (Claude Code)",
          detail: "Script: you type rough prompt → Step 1 Claude call refines it → Step 2 Claude call executes refined prompt. Add command variants: /math (add rigor), /cad (Onshape context), /debug (structured debugging).",
          done: false,
        },
      ],
    },
    {
      id: "certs",
      label: "🏆 Free Certificates",
      color: "#06b6d4",
      items: [
        {
          title: "Google AI Essentials",
          detail: "Free certificate from Google covering AI fundamentals, prompt engineering, and using AI tools responsibly. Great foundation and looks solid on college apps. Find it on Google's learning platform at grow.google.",
          done: false,
        },
        {
          title: "HubSpot Digital Marketing",
          detail: "Free certification covering SEO, content marketing, social media, and email marketing. Directly useful for marketing your Fiverr CAD services and TikTok Shop pipeline. Find it at academy.hubspot.com.",
          done: false,
        },
        {
          title: "IBM SkillsBuild Cybersecurity",
          detail: "Free IBM certificate covering cybersecurity fundamentals. Looks great for college apps especially for STEM/engineering programs. Find it at skillsbuild.org.",
          done: false,
        },
        {
          title: "GitHub Foundations",
          detail: "Official GitHub certification covering version control, repos, branches, pull requests, and collaboration. Directly useful for your dev workflow and you're already setting up GitHub right now. Find it at examregistration.github.com.",
          done: false,
        },
        {
          title: "Claude AI Certification (Anthropic)",
          detail: "Anthropic's certification for working effectively with Claude. Extremely relevant given your entire stack is Claude-centered. Check anthropic.com for current availability.",
          done: false,
        },
      ],
    },
    {
      id: "vision",
      label: "🚀 The Big Picture",
      color: "#ec4899",
      items: [
        {
          title: "Your actual goal (don't lose sight of this)",
          detail: "Learn the math so you understand what you're asking AI to do. When you genuinely understand partial derivatives and integrals, you can direct Claude on robotic arm kinematics at a completely different level than someone copy-pasting. The math is the interface between you and harder problems.",
          done: false,
        },
        {
          title: "What you're building toward",
          detail: "Desktop for heavy work + SBC cluster as always-on local server + TikTok Shop for low-effort income + Fiverr CAD pipeline for skill-based income + Claude Pro as the intelligence layer connecting all of it. Self-funded AI-powered personal infrastructure.",
          done: false,
        },
        {
          title: "Senior year plan",
          detail: "Calculus 3 + AP Physics 2. By then you'll have Calc BC + Physics 1 as foundation, a working Claude pipeline, real freelance experience, and a hardware setup that can handle serious engineering work.",
          done: false,
        },
      ],
    },
  ],
};
 
export default function MasterPlan() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>("immediate");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
 
  const toggle = (sectionId: string, idx: number) => {
    const key = `${sectionId}-${idx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };
 
  const toggleExpand = (sectionId: string, idx: number) => {
    const key = `${sectionId}-${idx}`;
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };
 
  const activeData = data.sections.find((s) => s.id === activeSection);
  const totalItems = data.sections.reduce((acc, s) => acc + s.items.length, 0);
  const doneItems = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((doneItems / totalItems) * 100);
 
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e8f0",
      fontFamily: "'Courier New', monospace",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
        zIndex: 0,
      }} />
 
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
 
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, letterSpacing: 6, color: "#666", marginBottom: 8 }}>JAIDEN // MASTER PLAN</div>
          <h1 style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: 900,
            margin: 0,
            letterSpacing: -1,
            lineHeight: 1,
            fontFamily: "'Courier New', monospace",
          }}>
            BUILD THE<br />
            <span style={{ color: "#ff4d4d" }}>STACK.</span>
          </h1>
          <p style={{ color: "#555", fontSize: 13, marginTop: 12, letterSpacing: 1 }}>
            Everything from tonight's conversation. Don't let it die in a chat window.
          </p>
        </div>
 
        {/* Progress bar */}
        <div style={{
          background: "#111",
          border: "1px solid #222",
          borderRadius: 4,
          padding: "16px 20px",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ height: 6, background: "#1a1a1a", borderRadius: 3, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #ff4d4d, #f59e0b)",
                borderRadius: 3,
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#888", whiteSpace: "nowrap" }}>
            <span style={{ color: "#e8e8f0", fontWeight: 700 }}>{doneItems}</span> / {totalItems} done
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, color: progress === 100 ? "#22c55e" : "#333" }}>
            {progress}%
          </div>
        </div>
 
        {/* Section tabs */}
        <div style={{
          display: "flex",
          gap: 8,
          marginBottom: 24,
          flexWrap: "wrap",
        }}>
          {data.sections.map((s) => {
            const sectionDone = s.items.filter((_, i) => checked[`${s.id}-${i}`]).length;
            const isActive = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  background: isActive ? s.color : "#111",
                  border: `1px solid ${isActive ? s.color : "#222"}`,
                  color: isActive ? "#000" : "#666",
                  padding: "8px 14px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontFamily: "'Courier New', monospace",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {s.label}
                {sectionDone > 0 && (
                  <span style={{
                    background: isActive ? "rgba(0,0,0,0.2)" : s.color,
                    color: isActive ? "#000" : "#000",
                    borderRadius: 10,
                    padding: "1px 6px",
                    fontSize: 10,
                  }}>
                    {sectionDone}/{s.items.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
 
        {/* Active section */}
        {activeData && (
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}>
              <div style={{ width: 3, height: 24, background: activeData.color, borderRadius: 2 }} />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: activeData.color }}>
                {activeData.label.toUpperCase()}
              </span>
            </div>
 
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {activeData.items.map((item, i) => {
                const key = `${activeData.id}-${i}`;
                const isDone = checked[key];
                const isExpanded = expandedItems[key];
                return (
                  <div
                    key={i}
                    style={{
                      background: isDone ? "#0d1a0d" : "#0d0d12",
                      border: `1px solid ${isDone ? "#1a3a1a" : "#1a1a24"}`,
                      borderLeft: `3px solid ${isDone ? "#22c55e" : activeData.color}`,
                      borderRadius: 4,
                      overflow: "hidden",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "14px 16px",
                      cursor: "pointer",
                    }}
                      onClick={() => toggleExpand(activeData.id, i)}
                    >
                      {/* Checkbox */}
                      <div
                        onClick={(e) => { e.stopPropagation(); toggle(activeData.id, i); }}
                        style={{
                          width: 18,
                          height: 18,
                          border: `2px solid ${isDone ? "#22c55e" : "#333"}`,
                          borderRadius: 3,
                          background: isDone ? "#22c55e" : "transparent",
                          flexShrink: 0,
                          marginTop: 1,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {isDone && <span style={{ color: "#000", fontSize: 11, fontWeight: 900 }}>✓</span>}
                      </div>
 
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: isDone ? "#555" : "#e8e8f0",
                          textDecoration: isDone ? "line-through" : "none",
                          letterSpacing: 0.3,
                        }}>
                          {item.title}
                        </div>
                      </div>
 
                      <div style={{ color: "#444", fontSize: 12, flexShrink: 0 }}>
                        {isExpanded ? "▲" : "▼"}
                      </div>
                    </div>
 
                    {isExpanded && (
                      <div style={{
                        padding: "0 16px 14px 46px",
                        fontSize: 12,
                        color: "#666",
                        lineHeight: 1.7,
                        letterSpacing: 0.2,
                        borderTop: "1px solid #1a1a24",
                        paddingTop: 12,
                      }}>
                        {item.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
 
        {/* Footer */}
        <div style={{
          marginTop: 40,
          padding: "16px 0",
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          color: "#333",
          letterSpacing: 1,
        }}>
          <span>COLD SPRING, NY // CLASS OF 2026</span>
          <span>CALC BC → CALC 3 → ROBOTICS</span>
        </div>
      </div>
    </div>
  );
}
 