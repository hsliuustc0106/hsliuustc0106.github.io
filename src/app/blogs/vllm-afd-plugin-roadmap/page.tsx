import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From AFD Experiment to an Evidence-Driven vLLM Roadmap | HS Liu",
  description:
    "How the vLLM AFD Plugin separates Attention and FFN serving, what its early results show, and how the project roadmap turns an experimental release into verifiable support claims.",
};

const workstreams = [
  {
    number: "01",
    title: "Compatibility, CI/CD, and releases",
    description:
      "Define a maintainable vLLM alignment window, mirrored package versions, CPU-safe checks on every pull request, and tag-triggered GitHub and PyPI releases.",
  },
  {
    number: "02",
    title: "Model expansion",
    description:
      "Adapt DeepSeek-V4 and GLM-5.2 through the native vLLM lifecycle, with backend validation and known exclusions documented per model.",
  },
  {
    number: "03",
    title: "Prefill and cache compatibility",
    description:
      "Test chunked prefill and prefix caching independently and together, using long prompts and replayable coding-agent traces.",
  },
  {
    number: "04",
    title: "NVIDIA and AMD recipes",
    description:
      "Build reproducible, topology-specific large-scale serving recipes with correctness, performance, sustained-load, and recovery evidence.",
  },
  {
    number: "05",
    title: "Kimi-K3 feasibility",
    description:
      "Treat heterogeneous-attention prefill as a study first, and promote it to a support target only when measured goodput and tail TTFT justify it.",
  },
  {
    number: "06",
    title: "Repository-backed agent skills",
    description:
      "Create thin orchestration skills for upgrades, model adaptation, hardware recipes, E2E tests, and releases while keeping deterministic logic in the repository.",
  },
];

const supportLayers = [
  {
    layer: "1",
    title: "Core compatibility",
    claim: "The plugin works with one exact vLLM version.",
    evidence:
      "Contract tests, package build/install, plugin-disabled isolation, and pinned-version checks.",
  },
  {
    layer: "2",
    title: "Model + backend",
    claim: "A named model works correctly on a named backend.",
    evidence:
      "Model review, correctness or accuracy results, exact environment, and backend-specific E2E tests.",
  },
  {
    layer: "3",
    title: "Recipe + topology",
    claim: "A named topology has a reproducible, measured serving recipe.",
    evidence:
      "Hardware and network disclosure, launch commands, correctness, performance, sustained load, and validation review.",
  },
];

export default function VllmAfdPluginRoadmap() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white"
          >
            HS Liu
          </Link>
          <div className="hidden space-x-6 md:flex">
            <Link
              href="/"
              className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <Link
              href="/publications"
              className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              Publications
            </Link>
            <Link
              href="/projects"
              className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="font-medium text-indigo-600 dark:text-indigo-400"
            >
              Blogs
            </Link>
          </div>
          <Link
            href="/blogs"
            className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 md:hidden"
          >
            ← All blogs
          </Link>
        </div>
      </nav>

      <article className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                LLM Serving
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                July 27, 2026 · 11 min read
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              From AFD Experiment to an Evidence-Driven vLLM Roadmap
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              The vLLM AFD Plugin makes Attention and FFN independently
              deployable. The harder next step is making every compatibility,
              model, backend, and topology claim independently verifiable.
            </p>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              By Hongsheng Liu
            </div>
          </header>

          <aside className="mb-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/40">
            <p className="mb-2 font-semibold text-indigo-950 dark:text-indigo-100">
              Source note
            </p>
            <p className="leading-relaxed text-indigo-900/80 dark:text-indigo-200">
              This post connects the official{" "}
              <a
                href="https://vllm.ai/blog/2026-07-23-vllm-afd-plugin"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                vLLM AFD Plugin announcement
              </a>{" "}
              with the proposed{" "}
              <a
                href="https://github.com/vllm-project/afd-plugin/issues/155"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                project roadmap RFC
              </a>
              . The plugin and roadmap are experimental; the performance
              results discussed below are focused validation results, not
              general production claims.
            </p>
          </aside>

          <div className="space-y-16">
            <section id="why-afd">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Why split Attention from FFN?
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  Mixture-of-Experts inference combines two workloads with
                  different scaling pressures. Attention is stateful: it owns
                  scheduling, sequence state, and the KV cache. The FFN or
                  expert path is dominated by routed computation and
                  all-to-all communication. A shared worker topology forces
                  both paths into the same resource allocation even when their
                  bottlenecks differ.
                </p>
                <p>
                  Attention–FFN Disaggregation (AFD) preserves vLLM&apos;s
                  request-facing control plane while moving expert execution
                  behind a narrow connector interface. Attention and FFN ranks
                  can then scale independently, and backend-specific
                  communication can evolve without leaking into the serving
                  API.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  <div className="rounded-xl border border-blue-200 bg-white p-5 dark:border-blue-900 dark:bg-slate-950">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                      Request path
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      Attention service
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      API, scheduler, batching, KV cache, model lifecycle, and
                      sampling
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-2xl text-slate-400">
                    →
                  </div>
                  <div className="rounded-xl border border-violet-200 bg-white p-5 dark:border-violet-900 dark:bg-slate-950">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                      Data path
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      AFD connector
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Hidden states, routing metadata, graph state, and returned
                      FFN outputs
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-2xl text-slate-400">
                    →
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-white p-5 dark:border-emerald-900 dark:bg-slate-950">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Expert path
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      FFN service
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Lightweight daemon for expert computation without request
                      traffic or KV cache
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                  FFN results return through the connector before the Attention
                  path continues.
                </p>
              </div>
            </section>

            <section id="current-state">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                What the first release establishes
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The plugin integrates through{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  vllm.general_plugins
                </code>{" "}
                and{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  --additional-config
                </code>
                , without modifying the vLLM source tree. Its current matrix
                includes NVIDIA GPU and Ascend NPU paths, synchronous decode and
                asynchronous prefill connectors, and wrappers for DeepSeek
                V2/V3-family and GLM MoE models.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                  <h3 className="mb-3 text-lg font-semibold text-slate-950 dark:text-white">
                    Synchronous decode
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    P2P NCCL on GPU and CAMP2P/HCCL on NPU exchange activations
                    and FFN outputs synchronously. Their current graph paths are
                    decode-only.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
                  <h3 className="mb-3 text-lg font-semibold text-slate-950 dark:text-white">
                    Asynchronous prefill
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    CAM asynchronous dispatch and combine operators overlap
                    Attention and FFN stages with AFD-managed MoE ubatching.
                    Graph execution is not yet supported on this path.
                  </p>
                </div>
              </div>
            </section>

            <section id="performance">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Early performance signals—and their limits
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The announcement reports two focused experiments. They are
                useful because they expose both the opportunity and the main
                systems lesson: disaggregation only helps when the
                Attention-to-FFN allocation matches the workload.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Experiment</th>
                        <th className="px-5 py-4 font-semibold">Comparison</th>
                        <th className="px-5 py-4 font-semibold">
                          Reported result
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                          Ascend synchronous decode
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          64A16F versus EP64
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          +11.3% tokens/s/die at 16K input; +9.0% at 32K
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                          Ascend asynchronous prefill
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          AFD versus DP4PCP8 baseline at 12 req/s
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          Median TTFT from 15.1s to 8.0s, about 47% lower
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5 dark:bg-amber-950/30">
                <p className="font-semibold text-amber-950 dark:text-amber-200">
                  Read these as path validation, not universal speedups.
                </p>
                <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-300">
                  The decode study used simulated logical scale and forced
                  expert balancing that changes model outputs. The prefill
                  study used a reduced 10-layer model. A smaller 48A16F decode
                  allocation also trailed the EP64 baseline, reinforcing that
                  topology selection is part of the result.
                </p>
              </div>
            </section>

            <section id="support-claims">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Support is a stack, not a checkbox
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The roadmap&apos;s most important idea is to replace a global
                “supported” label with three evidence layers. A successful
                import does not validate a model, and a successful launch does
                not validate a production topology.
              </p>

              <div className="space-y-4">
                {supportLayers.map((item) => (
                  <div
                    key={item.layer}
                    className="grid gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800 md:grid-cols-[3rem_1fr_1.2fr]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                      {item.layer}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {item.claim}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Minimum evidence
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {item.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="roadmap">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Six workstreams, not six release phases
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The roadmap is organized by dependency rather than calendar.
                Compatibility and delivery are foundational, while model,
                prefill, hardware, feasibility, and contributor-tooling work
                can advance in parallel when their prerequisites exist.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {workstreams.map((workstream) => (
                  <div
                    key={workstream.number}
                    className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
                  >
                    <div className="mb-4 text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400">
                      {workstream.number}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-950 dark:text-white">
                      {workstream.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      {workstream.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="measurement">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Measure realistic prefill, not just launch success
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  The prefill workstream proposes a four-mode matrix: chunked
                  prefill and prefix caching are tested with both features off,
                  each enabled independently, and both enabled together.
                  Correctness comes before performance interpretation.
                </p>
                <p>
                  Fixed 16K, 32K, and 128K prompts isolate long-context
                  behavior. Multi-turn coding-agent trace replay adds growing
                  shared prefixes and incremental tool output—the pattern that
                  real agent systems produce. Reporting should include failure
                  or hang behavior, TTFT tails, SLO-constrained prefill goodput,
                  and cache effectiveness, not only averages.
                </p>
              </div>
            </section>

            <section id="takeaway" className="rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="mb-5 text-3xl font-bold tracking-tight">
                The takeaway
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                <p>
                  AFD creates a clean systems boundary: keep vLLM&apos;s
                  scheduler and KV-cache-aware Attention path intact, then make
                  expert compute independently deployable through connectors.
                  The launch proves that this boundary can work across multiple
                  backends and execution modes.
                </p>
                <p>
                  The roadmap defines what must happen next: narrow version
                  contracts, backend-specific model evidence, reproducible
                  topology recipes, realistic workload evaluation, and honest
                  negative results. That evidence discipline is what can turn
                  a promising experimental plugin into durable serving
                  infrastructure.
                </p>
              </div>
            </section>

            <section id="references">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                References
              </h2>
              <ol className="space-y-4 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    1.
                  </span>
                  <a
                    href="https://vllm.ai/blog/2026-07-23-vllm-afd-plugin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                  >
                    Announcing vLLM AFD Plugin: Disaggregating Attention and FFN
                    for Flexible MoE Serving
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    2.
                  </span>
                  <a
                    href="https://github.com/vllm-project/afd-plugin/issues/155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                  >
                    [Draft] [RFC]: afd-plugin project roadmap
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    3.
                  </span>
                  <a
                    href="https://github.com/vllm-project/afd-plugin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                  >
                    vLLM AFD Plugin repository
                  </a>
                </li>
              </ol>
            </section>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-800">
            <Link
              href="/blogs"
              className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← Back to all blogs
            </Link>
            <a
              href="https://github.com/vllm-project/afd-plugin/issues/155"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              Join the RFC discussion ↗
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-200 px-4 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-4xl text-sm text-slate-500 dark:text-slate-400">
          © 2026 Hongsheng Liu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
