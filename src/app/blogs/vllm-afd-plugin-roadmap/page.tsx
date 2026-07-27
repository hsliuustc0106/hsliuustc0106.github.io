import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From AFD Experiment to an Evidence-Driven vLLM Roadmap | HS Liu",
  description:
    "A code-level analysis of how the vLLM AFD Plugin separates Attention and FFN serving, plus its early results and evidence-driven roadmap.",
};

const sourceCommit =
  "https://github.com/vllm-project/afd-plugin/commit/ea7c56add16ec9ef7fb7e03ad592d3be942a88d6";
const sourceRoot =
  "https://github.com/vllm-project/afd-plugin/blob/ea7c56add16ec9ef7fb7e03ad592d3be942a88d6";

const codeMap = [
  {
    file: "afd_plugin/__init__.py",
    role: "Plugin bootstrap",
    detail:
      "Registers AFD model architectures and installs narrow compatibility hooks through vllm.general_plugins.",
    href: `${sourceRoot}/afd_plugin/__init__.py`,
  },
  {
    file: "afd_plugin/v1/worker/attention_model_runner.py",
    role: "Attention control path",
    detail:
      "Builds per-stage AFD metadata, injects it into vLLM's ForwardContext, and sends DP shape metadata.",
    href: `${sourceRoot}/afd_plugin/v1/worker/attention_model_runner.py`,
  },
  {
    file: "afd_plugin/model_executor/models/deepseek_v2.py",
    role: "Layer split point",
    detail:
      "Constructs role-specific modules and replaces the ordinary layer loop with send/receive boundaries around FFN.",
    href: `${sourceRoot}/afd_plugin/model_executor/models/deepseek_v2.py`,
  },
  {
    file: "afd_plugin/v1/worker/ffn_worker.py",
    role: "FFN service lifecycle",
    detail:
      "Starts the connector-driven daemon, rejects scheduler execution, and allocates no KV cache.",
    href: `${sourceRoot}/afd_plugin/v1/worker/ffn_worker.py`,
  },
  {
    file: "afd_plugin/v1/worker/ffn_model_runner.py",
    role: "Expert execution",
    detail:
      "Iterates layer and microbatch stages, receives hidden states, calls compute_ffn_output(), and returns results.",
    href: `${sourceRoot}/afd_plugin/v1/worker/ffn_model_runner.py`,
  },
  {
    file: "afd_plugin/connectors/base.py",
    role: "Backend-neutral contract",
    detail:
      "Defines the four tensor-transfer operations and the separate DP metadata control-plane interface.",
    href: `${sourceRoot}/afd_plugin/connectors/base.py`,
  },
  {
    file: "afd_plugin/connectors/gpu/p2p.py",
    role: "CUDA transport",
    detail:
      "Implements NCCL subgroup fan-in, token concatenation, output splitting, and graph-stable receive buffers.",
    href: `${sourceRoot}/afd_plugin/connectors/gpu/p2p.py`,
  },
];

const ownershipRows = [
  ["Request lifecycle and scheduler", "Owns", "None"],
  ["KV cache and attention", "Owns", "None"],
  ["Embeddings, norm, residual, sampling", "Owns", "None"],
  ["Dense or MoE FFN modules", "Role-dependent", "Owns"],
  ["Expert execution loop", "None", "Connector-driven"],
  ["Connector and transfer metadata", "Sends / receives", "Receives / sends"],
];

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
                July 27, 2026 · 18 min read
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
              , with systems framing inspired by the{" "}
              <a
                href="https://gentlecold.top/20260714/fastafd-attention-ffn-disaggregation-analysis/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                FastAFD architecture analysis
              </a>
              . Code observations are pinned to AFD Plugin commit{" "}
              <a
                href={sourceCommit}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium underline decoration-indigo-400 underline-offset-4"
              >
                ea7c56a
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

            <section id="code-map">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Reading the architecture from the code
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                AFD is not implemented as one large fork of vLLM. It is a chain
                of deliberately small interception points: plugin registration
                selects AFD-aware workers and model classes; the Attention
                runner injects execution metadata; the model wrapper introduces
                the layer boundary; and a connector-driven FFN runner consumes
                that boundary.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Source file</th>
                        <th className="px-5 py-4 font-semibold">
                          Runtime responsibility
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Architectural consequence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {codeMap.map((item) => (
                        <tr key={item.file}>
                          <td className="px-5 py-4 align-top">
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                            >
                              {item.file}
                            </a>
                          </td>
                          <td className="px-5 py-4 align-top font-medium text-slate-950 dark:text-white">
                            {item.role}
                          </td>
                          <td className="px-5 py-4 align-top leading-relaxed text-slate-600 dark:text-slate-400">
                            {item.detail}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="bootstrap">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                1. Bootstrap: change the model lifecycle, not the API
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  The package exposes{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                    afd_plugin:register_afd
                  </code>{" "}
                  as a{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                    vllm.general_plugins
                  </code>{" "}
                  entry point. Registration maps native architecture names to
                  plugin-owned wrappers such as{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                    AFDDeepseekV3ForCausalLM
                  </code>
                  . Worker initialization then rewrites the model configuration
                  to select that registered architecture.
                </p>
                <p>
                  This is why clients still use{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                    vllm serve
                  </code>
                  . The public engine and OpenAI-compatible endpoint remain on
                  the Attention service; the substitution happens below the
                  serving interface, at worker and model construction time.
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-xl bg-slate-950">
                <div className="border-b border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Conceptual bootstrap path
                </div>
                <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
{`vllm serve
  └─ general_plugins entry point
      └─ register AFD model architectures
          └─ parse additional_config["afd"]
              ├─ role="attention" → AFDAttentionWorker
              └─ role="ffn"       → AFDFFNWorker
                  └─ rewrite model architecture → AFD model wrapper`}
                </pre>
              </div>
            </section>

            <section id="ownership">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                2. Role-specific construction removes unused state
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The DeepSeek decoder wrapper does more than skip half of a
                normal forward pass. During construction, each role creates
                only the modules it needs. The Attention layer builds
                self-attention and request-facing state; the FFN layer builds
                dense MLP or MoE modules. On the FFN worker,{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  get_kv_cache_spec()
                </code>{" "}
                returns an empty mapping and sampling is explicitly
                unsupported.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-100 dark:bg-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold text-slate-700 dark:text-slate-300">
                          Ownership
                        </th>
                        <th className="px-5 py-4 font-semibold text-blue-700 dark:text-blue-300">
                          Attention worker
                        </th>
                        <th className="px-5 py-4 font-semibold text-emerald-700 dark:text-emerald-300">
                          FFN worker
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {ownershipRows.map(([item, attention, ffn]) => (
                        <tr key={item}>
                          <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                            {item}
                          </td>
                          <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                            {attention}
                          </td>
                          <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                            {ffn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                One subtlety: normalization and other shared lifecycle
                components may exist on both role-specific wrappers where the
                upstream model-loading contract requires them. “Split” means
                role-required construction, not a blanket claim that every
                non-expert parameter exists on only one side.
              </p>
            </section>

            <section id="layer-flow">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                3. One layer, end to end
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The actual split point lives inside the model wrapper&apos;s
                layer loop. Attention computes through post-attention
                normalization, sends that hidden state to FFN, and later
                receives the expert result. The residual stays on the
                Attention side, preserving request-local transformer state.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["01", "Prepare step metadata", "The Attention runner records token counts, stage IDs, graph flags, and a transaction ID in ForwardContext."],
                  ["02", "Receive the prior FFN result", "From layer 1 onward, Attention first receives the previous layer's returned FFN tensor."],
                  ["03", "Run Attention locally", "The wrapper executes input norm, self-attention, residual handling, and post-attention norm."],
                  ["04", "Dispatch the split tensor", "The connector sends the normalized hidden states with layer/stage/token metadata."],
                  ["05", "Aggregate on FFN", "The GPU P2P path concatenates tensors from the Attention peers mapped to the same FFN rank."],
                  ["06", "Compute experts", "The FFN runner calls the model wrapper's compute_ffn_output(hidden_states, layer_idx)."],
                  ["07", "Split and return", "The connector slices the aggregate output by the original per-peer token lengths and sends each slice home."],
                  ["08", "Complete the model", "After the last dispatch, Attention performs one final receive, then continues to final norm and sampling."],
                ].map(([number, title, detail]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                  >
                    <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 overflow-hidden rounded-xl bg-slate-950">
                <div className="border-b border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Simplified execution pseudocode
                </div>
                <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
{`# Attention process
for layer in layers:
    previous_ffn = receive_if_pending()
    attn_state, residual = layer.compute_attention(previous_ffn, residual)
    send_to_ffn(attn_state, layer_id, microbatch_id)
final_state = receive_last_ffn()
sample(final_norm(final_state, residual))

# FFN process: driven by connector metadata, not request scheduling
for layer_id in layers:
    for microbatch_id in active_stages:
        aggregate, transfer = receive_attention_states()
        expert_output = model.compute_ffn_output(aggregate, layer_id)
        split_and_return(expert_output, transfer.peer_token_lengths)`}
                </pre>
              </div>
            </section>

            <section id="connector-contract">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                4. The connector is a two-plane protocol
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The connector abstraction separates tensor movement from
                execution coordination. The data plane has four symmetric
                operations; the control plane carries per-stage DP token counts
                and warmup or graph-capture state so the FFN side can allocate
                the correct buffers before tensors arrive.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900 dark:bg-violet-950/30">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    Control plane
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-violet-950/80 dark:text-violet-200">
                    <li>• stage → DP token-count metadata</li>
                    <li>• graph-capture and warmup flags</li>
                    <li>• receive shape and reusable-buffer preparation</li>
                    <li>• triggers the connector-driven FFN step</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950/30">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    Tensor data plane
                  </p>
                  <ul className="space-y-3 font-mono text-sm leading-relaxed text-cyan-950/80 dark:text-cyan-200">
                    <li>send_attn_output()</li>
                    <li>recv_attn_output()</li>
                    <li>send_ffn_output()</li>
                    <li>recv_ffn_output()</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Each transfer carries backend-neutral{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  layer_idx
                </code>
                ,{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  stage_idx
                </code>
                , and per-peer sequence lengths. Backends can attach their own
                transfer state without changing the model-facing call sites.
                That is what lets NCCL P2P, CAMP2P/HCCL, and asynchronous CAM
                share one layer loop.
              </p>
            </section>

            <section id="topology">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                5. GPU topology: fan in, compute, fan out
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                For{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
                  P2pNcclAFDConnector
                </code>
                , global ranks are ordered FFN first, then Attention. The
                current topology requires at least as many Attention ranks as
                FFN ranks and an integer ratio. Each FFN rank owns one subgroup
                of consecutive Attention peers.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  <div className="space-y-3">
                    <div className="rounded-lg border border-blue-200 bg-white p-3 text-center text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-slate-950 dark:text-blue-300">
                      Attention A0 · t₀ tokens
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white p-3 text-center text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-slate-950 dark:text-blue-300">
                      Attention A1 · t₁ tokens
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white p-3 text-center text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-slate-950 dark:text-blue-300">
                      Attention A2 · t₂ tokens
                    </div>
                  </div>
                  <div className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
                    concat
                    <div className="mt-1 text-2xl">→</div>
                  </div>
                  <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-center dark:border-emerald-900 dark:bg-emerald-950/40">
                    <div className="font-semibold text-emerald-900 dark:text-emerald-200">
                      FFN F0
                    </div>
                    <div className="mt-2 font-mono text-xs text-emerald-700 dark:text-emerald-400">
                      shape = (t₀+t₁+t₂, hidden)
                    </div>
                    <div className="mt-2 text-sm text-emerald-800/80 dark:text-emerald-300">
                      larger expert batch
                    </div>
                  </div>
                  <div className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
                    split [t₀,t₁,t₂]
                    <div className="mt-1 text-2xl">→</div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-violet-200 bg-white p-3 text-center text-sm font-medium text-violet-800 dark:border-violet-900 dark:bg-slate-950 dark:text-violet-300">
                      result for A0
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-white p-3 text-center text-sm font-medium text-violet-800 dark:border-violet-900 dark:bg-slate-950 dark:text-violet-300">
                      result for A1
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-white p-3 text-center text-sm font-medium text-violet-800 dark:border-violet-900 dark:bg-slate-950 dark:text-violet-300">
                      result for A2
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The important systems effect is aggregation: FFN sees tokens
                from several independently scheduled Attention lanes as one
                expert batch. The cost is a round trip at every split layer.
                AFD wins only when improved expert utilization and independent
                capacity planning outweigh communication, synchronization, and
                the extra FFN devices.
              </p>
            </section>

            <section id="pipeline-model">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                6. Ubatching turns the round trip into a pipeline
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                A synchronous implementation that executes Attention, sends,
                waits for FFN, receives, and only then starts the next slice
                would serialize the new boundary. AFD&apos;s stage metadata and
                ubatch wrapper create multiple in-flight slices so Attention
                work for one stage can overlap FFN work for another.
              </p>

              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["Stage 0", "Attention L₀", "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"],
                  ["Stage 0", "FFN L₀", "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"],
                  ["Stage 1", "Attention L₀", "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"],
                  ["Stage 0", "Attention L₁", "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"],
                ].map(([stage, work, color], index) => (
                  <div key={`${stage}-${work}-${index}`} className="text-center">
                    <div className={`rounded-lg px-3 py-4 text-sm font-semibold ${color}`}>
                      {work}
                    </div>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Useful pipeline mental model
                </p>
                <div className="overflow-x-auto text-center font-mono text-lg text-slate-950 dark:text-white">
                  T<sub>step</sub> ≈ startup + max(T<sub>A</sub>, T<sub>F</sub>)
                  × (mL − 1)
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Here T<sub>A</sub> and T<sub>F</sub> are per-stage Attention
                  and FFN times, m is the ubatch count, and L is the number of
                  split layers. This simplified model, also used to reason
                  about FastAFD-style pipelines, explains why balance matters:
                  steady state is limited by the slower side. It is not a
                  performance formula implemented by the plugin.
                </p>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                More stages are not automatically better. They create overlap
                but also multiply small-kernel launches, metadata handling, and
                graph shapes. The currently validated DBO path is intentionally
                limited to exactly two ubatches; the async CAM prefill path owns
                a separate ubatching mechanism and currently does not support
                graph execution.
              </p>
            </section>

            <section id="failure-boundaries">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                7. The code makes invalid ownership fail fast
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  ["No scheduler-driven FFN", "AFDFFNWorker.execute_model() raises instead of silently running request work on the expert service."],
                  ["No FFN KV cache", "The FFN worker returns an empty KV-cache specification and skips cache allocation."],
                  ["No sampling on FFN", "GPUFFNModelRunner.sample_tokens() raises; token selection remains request-local on Attention."],
                  ["Exact role validation", "Both model runners parse the same AFD config with an expected role, catching mismatched launches early."],
                  ["Shape-checked transfers", "Connector metadata validates the leading token dimension before send and return operations."],
                  ["Backend isolation", "Connector-specific configuration and transfer state stay behind the factory and base contract."],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                  >
                    <h3 className="font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                ))}
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
                <li className="flex gap-3">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    4.
                  </span>
                  <a
                    href="https://gentlecold.top/20260714/fastafd-attention-ffn-disaggregation-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                  >
                    FastAFD architecture and performance analysis
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
