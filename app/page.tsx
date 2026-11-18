"use client"

import { useState } from "react"

const tabs = ["Requirements", "Evidence", "Limits"] as const
type Tab = (typeof tabs)[number]

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("Requirements")

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const direction = event.key === "ArrowRight" ? 1 : -1
    const next = (tabs.indexOf(activeTab) + direction + tabs.length) % tabs.length
    setActiveTab(tabs[next])
    document.getElementById(`tab-${tabs[next].toLowerCase()}`)?.focus()
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content" tabIndex={-1}>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Evidence First home"><span className="mark">E</span><span>Evidence <strong>First</strong></span></a>
        <nav aria-label="Main navigation"><a href="#case-study">Case study</a><a href="#method">Method</a><a href="#about">About</a></nav>
        <span className="top-note">LEARNING NOTEBOOK <span className="top-dot" /></span>
      </header>

      <section className="hero wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> AN AI-ASSISTED EVALUATION NOTEBOOK</p>
          <h1 id="hero-title">A better answer<br />needs better <em>evidence.</em></h1>
          <p className="hero-subtitle">A small study in looking closely, making a case, and knowing what a case can&apos;t tell you.</p>
          <p className="hero-byline">By Shivraj Sonwane <span aria-hidden="true">·</span> AI-assisted learning project</p>
          <a href="#case-study" className="text-link">Explore the case study <span aria-hidden="true">↘</span></a>
        </div>
        <aside className="prompt-note" aria-label="The prompt">
          <div className="note-top"><span>FIELD NOTE 01</span><span>THE PROMPT</span></div>
          <div className="quote-mark" aria-hidden="true">“</div>
          <blockquote>Write a limerick<br />about a dog.</blockquote>
          <div className="note-rule" />
          <p className="note-caption">ONE PROMPT · TWO RESPONSES<br />A SHARED RUBRIC</p>
          <span className="note-index">01 / 01</span>
        </aside>
      </section>

      <section className="case-section" id="case-study" aria-labelledby="case-title">
        <div className="wrap">
          <div className="section-kicker"><span>01</span><span>THE CASE STUDY</span><span className="kicker-line" /></div>
          <div className="case-heading"><div><h2 id="case-title">Two dog limericks.<br /><em>One shared rubric.</em></h2></div><p className="case-intro">A side-by-side reading of two responses to the same simple prompt. The question isn&apos;t which model is “best”—it&apos;s what the evidence in this example supports.</p></div>
          <div className="comparison" aria-label="Comparison of two model responses">
            <article className="response response-a">
              <div className="response-head"><span className="response-letter">A</span><div><p className="response-label">RESPONSE A</p><h3>gpt-4-0314 <span>· 2023</span></h3></div><span className="model-tag">EARLIER</span></div>
              <div className="response-body"><span className="body-marker">OBSERVED</span><p>On the page: a five-line dog limerick with a comic premise. The second line feels padded, and the rhyme in the middle depends on how a word is pronounced.</p></div>
              <div className="response-foot"><span>READING NOTE</span><span>01 — A</span></div>
            </article>
            <article className="response response-b">
              <div className="response-head"><span className="response-letter">B</span><div><p className="response-label">RESPONSE B</p><h3>GPT-5 <span>· 2025</span></h3></div><span className="model-tag preferred">PREFERRED HERE</span></div>
              <div className="response-body"><span className="body-marker">OBSERVED</span><p>On the page: a clear rhyme pattern and a coherent comic sequence—tail chasing, a pail, then a nap. The action lands as one connected scene.</p></div>
              <div className="response-foot"><span>READING NOTE</span><span>01 — B</span></div>
            </article>
          </div>
          <div className="verdict"><span className="verdict-label">THE READING</span><p>For this exercise, <strong>we prefer B.</strong> The reasoning is visible in the lines, not in a score.</p><span className="verdict-mark" aria-hidden="true">↗</span></div>
          <div className="improvement"><span className="improvement-icon" aria-hidden="true">↳</span><p><strong>A possible revision for A</strong><br />Shorten its second line and choose clearer rhymes for its third and fourth.</p></div>
          <a className="source-link" href="https://progress.openai.com/?prompt=2" target="_blank" rel="noreferrer">Read the original responses <span aria-hidden="true">↗</span></a>
          <p className="source-note">Source: OpenAI Progress · Reviewed November 17, 2026. This is a comparison of two responses, not a benchmark.</p>
        </div>
      </section>

      <section className="inspect-section" aria-labelledby="inspect-title">
        <div className="wrap inspect-grid">
          <div className="inspect-intro"><div className="section-kicker"><span>02</span><span>OPEN NOTEBOOK</span></div><h2 id="inspect-title">Inspect the<br /><em>judgment.</em></h2><p>Follow the reasoning, not just the conclusion. Each note shows what was considered—and what remains uncertain.</p><span className="inspect-index">A SMALL EXERCISE IN TRANSPARENCY</span></div>
          <div className="inspect-panel">
            <div className="panel-heading"><span>JUDGMENT NOTES</span><span className="panel-status"><span /> THREE LENSES</span></div>
            <div className="tab-list" role="tablist" aria-label="Judgment details">
              {tabs.map((tab) => <button key={tab} id={`tab-${tab.toLowerCase()}`} type="button" role="tab" aria-selected={activeTab === tab} aria-controls="judgment-panel" tabIndex={activeTab === tab ? 0 : -1} onClick={() => setActiveTab(tab)} onKeyDown={handleTabKeyDown}>{tab}<span className="tab-arrow" aria-hidden="true">↗</span></button>)}
            </div>
            <div className="tab-content" id="judgment-panel" role="tabpanel" aria-labelledby={`tab-${activeTab.toLowerCase()}`} tabIndex={0}>
              {activeTab === "Requirements" && <><p className="tab-overline">THE SHARED RUBRIC</p><h3>What did the prompt ask for?</h3><ul className="check-list"><li><span>01</span>Five-line structure</li><li><span>02</span>AABBA rhyme</li><li><span>03</span>A coherent comic scene</li></ul><p className="panel-footnote">Both responses meet the topic and five-line format.</p></>}
              {activeTab === "Evidence" && <><p className="tab-overline">WHAT THE LINES SHOW</p><h3>Specific reasons, not a leaderboard.</h3><ul className="evidence-list"><li><span className="evidence-dot dot-a">A</span><p>A padded second line; a middle rhyme whose strength depends on pronunciation.</p></li><li><span className="evidence-dot dot-b">B</span><p>A clear rhyme pattern; tail-chasing, pail and nap form a connected comic sequence.</p></li></ul><p className="panel-footnote">That is why B is preferred for this exercise.</p></>}
              {activeTab === "Limits" && <><p className="tab-overline">WHERE THE CLAIM ENDS</p><h3>One example has a small reach.</h3><ul className="limits-list"><li>One example is not a benchmark.</li><li>Poetry involves taste and pronunciation.</li><li>Newer is not automatically better.</li></ul><p className="panel-footnote">This reading describes only the responses linked above.</p></>}
            </div>
            <div className="panel-bottom"><span>NOTE 01 / 03</span><span>READ CLOSELY · CLAIM CAREFULLY</span></div>
          </div>
        </div>
      </section>

      <section className="method-section wrap" id="method" aria-labelledby="method-title">
        <div className="section-kicker"><span>03</span><span>METHOD</span><span className="kicker-line" /></div>
        <div className="method-layout"><h2 id="method-title">A simple method<br />for <em>a smaller claim.</em></h2><div className="method-steps"><article><span>01</span><div><h3>Hold the prompt steady</h3><p>Compare two responses to the same request, against the same criteria.</p></div></article><article><span>02</span><div><h3>Point to what you see</h3><p>Describe concrete choices in structure, rhyme and the scene—not a vague impression.</p></div></article><article><span>03</span><div><h3>Keep the conclusion local</h3><p>Say which response works better here, and name what this single reading cannot establish.</p></div></article></div></div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title"><div className="wrap about-layout"><div className="section-kicker"><span>04</span><span>ABOUT THIS NOTEBOOK</span></div><div className="about-copy"><h2 id="about-title">Learning to look<br />a little <em>closer.</em></h2><p>Evidence First is a project by <strong>Shivraj Sonwane</strong>, created for a Handshake learning mission. It documents AI-assisted learning practice: reading outputs, making a reasoned comparison, and being honest about the limits.</p><p>This is not a certification, a benchmark, or paid employment. It is one small exercise in evidence-first evaluation.</p><div className="about-stamp"><span>MADE FOR LEARNING</span><span>NOT A BENCHMARK</span></div></div></div></section>

      <footer className="footer wrap"><a className="wordmark footer-wordmark" href="#top"><span className="mark">E</span><span>Evidence <strong>First</strong></span></a><p>Built for learning. Claims grounded in the source.</p><a className="footer-source" href="https://github.com/shivrajks/evidence-first-project-website" target="_blank" rel="noopener noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a><a className="back-top" href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
      </main>
    </>
  )
}
