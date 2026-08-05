import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From DDPM to Stable Diffusion: A Historical Timeline | HS Liu",
  description:
    "How DDPM, faster sampling, language-image representations, classifier-free guidance, and latent diffusion converged in the August 2022 Stable Diffusion release.",
};

const stableDiffusionCommit =
  "https://github.com/CompVis/stable-diffusion/tree/69ae4b35e0a0f6ee1af8bb9a5d0016ccb27e36dc";
const stableDiffusionSource =
  "https://github.com/CompVis/stable-diffusion/blob/69ae4b35e0a0f6ee1af8bb9a5d0016ccb27e36dc";

const milestones = [
  {
    date: "June 2020",
    title: "DDPM makes iterative denoising competitive",
    detail:
      "A neural network learns to reverse a fixed Gaussian noising process, turning repeated denoising into a high-quality generative model.",
    href: "https://arxiv.org/abs/2006.11239",
    label: "Foundation",
  },
  {
    date: "October–November 2020",
    title: "The sampling path becomes a design choice",
    detail:
      "DDIM reuses the DDPM training objective with a faster non-Markovian reverse process, while the score-SDE view unifies stochastic and deterministic continuous-time sampling.",
    href: "https://arxiv.org/abs/2010.02502",
    label: "Sampling",
  },
  {
    date: "February 2021",
    title: "CLIP connects language and visual concepts",
    detail:
      "Contrastive training on image–text pairs produces a reusable text representation that Stable Diffusion later adopts as its frozen prompt encoder.",
    href: "https://arxiv.org/abs/2103.00020",
    label: "Representation",
  },
  {
    date: "2021–2022",
    title: "Text guidance becomes part of the generator",
    detail:
      "Classifier-free guidance combines conditional and unconditional predictions; GLIDE demonstrates the approach in a large text-conditional diffusion model.",
    href: "https://arxiv.org/abs/2207.12598",
    label: "Conditioning",
  },
  {
    date: "December 2021",
    title: "Latent diffusion stops denoising every pixel",
    detail:
      "A pretrained autoencoder compresses images before diffusion, and cross-attention injects text into the denoising network.",
    href: "https://arxiv.org/abs/2112.10752",
    label: "Efficiency",
  },
  {
    date: "April–May 2022",
    title: "Text-to-image diffusion becomes a field",
    detail:
      "DALL·E 2 and Imagen demonstrate other strong ways to combine language representations with diffusion, establishing the context in which Stable Diffusion arrives.",
    href: "https://arxiv.org/abs/2204.06125",
    label: "Context",
  },
  {
    date: "August 22, 2022",
    title: "Stable Diffusion is released publicly",
    detail:
      "Latent diffusion, cross-attention, CLIP text features, classifier-free guidance, and practical samplers become available together as code and downloadable weights.",
    href: "https://stability.ai/news-updates/stable-diffusion-public-release",
    label: "Integration",
  },
];

const interfaceRows = [
  {
    source: "--prompt",
    mechanism: "Frozen text encoder",
    meaning:
      "The prompt is converted into CLIP token features used as cross-attention context.",
  },
  {
    source: "--scale",
    mechanism: "Classifier-free guidance",
    meaning:
      "Controls how far the prediction moves from the unconditional direction toward the conditional direction.",
  },
  {
    source: "--ddim_steps",
    mechanism: "Sampling schedule",
    meaning:
      "Chooses how many reverse updates are evaluated; the released script defaults to 50.",
  },
  {
    source: "--ddim_eta",
    mechanism: "DDIM stochasticity",
    meaning:
      "An eta value of zero selects the deterministic DDIM case in the reference script.",
  },
  {
    source: "--H, --W, --C, --f",
    mechanism: "Latent geometry",
    meaning:
      "For a 512×512 image, four latent channels and a factor-eight downsampling produce a 4×64×64 denoising state.",
  },
  {
    source: "--plms",
    mechanism: "Alternative sampler",
    meaning:
      "Swaps the default DDIM sampler for PLMS without replacing the trained denoising model.",
  },
];

const referenceItems = [
  {
    title: "Denoising Diffusion Probabilistic Models",
    href: "https://arxiv.org/abs/2006.11239",
  },
  {
    title: "Denoising Diffusion Implicit Models",
    href: "https://arxiv.org/abs/2010.02502",
  },
  {
    title: "Score-Based Generative Modeling through Stochastic Differential Equations",
    href: "https://arxiv.org/abs/2011.13456",
  },
  {
    title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
    href: "https://arxiv.org/abs/2103.00020",
  },
  {
    title: "Classifier-Free Diffusion Guidance",
    href: "https://arxiv.org/abs/2207.12598",
  },
  {
    title: "GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models",
    href: "https://arxiv.org/abs/2112.10741",
  },
  {
    title: "High-Resolution Image Synthesis with Latent Diffusion Models",
    href: "https://arxiv.org/abs/2112.10752",
  },
  {
    title: "Progressive Distillation for Fast Sampling of Diffusion Models",
    href: "https://arxiv.org/abs/2202.00512",
  },
  {
    title: "Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL·E 2)",
    href: "https://arxiv.org/abs/2204.06125",
  },
  {
    title: "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen)",
    href: "https://arxiv.org/abs/2205.11487",
  },
  {
    title: "Stable Diffusion public release announcement",
    href: "https://stability.ai/news-updates/stable-diffusion-public-release",
  },
  {
    title: "CompVis Stable Diffusion repository",
    href: stableDiffusionCommit,
  },
  {
    title: "Stable Diffusion v1.4 model card",
    href: "https://huggingface.co/CompVis/stable-diffusion-v1-4",
  },
];

export default function DdpmToStableDiffusionTimeline() {
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
                Deep Learning
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                August 5, 2026 · 16 min read
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              From DDPM to Stable Diffusion: A Historical Timeline
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              Stable Diffusion did not emerge from one breakthrough. It was the
              August 2022 convergence of a learned denoising process, faster
              sampling paths, language–image representations, guidance, and
              compressed latent-space generation.
            </p>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              By Hongsheng Liu
            </div>
          </header>

          <aside className="mb-10 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/40">
            <p className="mb-2 font-semibold text-indigo-950 dark:text-indigo-100">
              Scope and source note
            </p>
            <p className="leading-relaxed text-indigo-900/80 dark:text-indigo-200">
              This is a historical path from the 2020 DDPM paper to the public
              release of Stable Diffusion on August 22, 2022—not a survey of
              later DiTs, flow models, consistency models, or video systems.
              Claims are linked to primary papers, the official{" "}
              <a
                href="https://stability.ai/news-updates/stable-diffusion-public-release"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                release announcement
              </a>
              , the{" "}
              <a
                href={stableDiffusionCommit}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                CompVis implementation
              </a>
              , and its{" "}
              <a
                href="https://huggingface.co/CompVis/stable-diffusion-v1-4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-indigo-400 underline-offset-4"
              >
                model card
              </a>
              . Code observations are pinned to the release-day commit{" "}
              <a
                href={stableDiffusionCommit}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium underline decoration-indigo-400 underline-offset-4"
              >
                69ae4b3
              </a>
              . Stable Diffusion was not the first diffusion or text-to-image
              diffusion model; its historical importance here is integration
              and accessibility.
            </p>
          </aside>

          <nav className="mb-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-lg font-semibold text-slate-950 dark:text-white">
              Table of contents
            </h2>
            <ol className="grid gap-2 text-sm sm:grid-cols-2">
              {[
                ["#introduction", "1. The endpoint determines the history"],
                ["#timeline", "2. Timeline at a glance"],
                ["#ddpm", "3. DDPM: learn the reverse process"],
                ["#sampling", "4. DDIM and the sampling path"],
                ["#conditioning", "5. From text features to guidance"],
                ["#latent-diffusion", "6. Latent diffusion"],
                ["#contemporaries", "7. The 2022 landscape"],
                ["#stable-diffusion", "8. Stable Diffusion assembled"],
                ["#implementation", "9. Reading the released interface"],
                ["#release", "10. What the public release changed"],
                ["#takeaway", "11. The takeaway"],
                ["#references", "12. References"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16">
            <section id="introduction">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                The endpoint determines the history
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  A paper-by-paper timeline can make research look like a relay
                  race: DDPM hands the baton to DDIM, which hands it to latent
                  diffusion, which is replaced by Stable Diffusion. That is not
                  what happened. Each result changed a different part of the
                  system, and most of the earlier parts remained in the final
                  stack.
                </p>
                <p>
                  The useful historical question is therefore not “Which model
                  won?” It is “Which bottleneck did this milestone remove?”
                  DDPM supplied the learning problem. DDIM made the reverse
                  trajectory negotiable. CLIP supplied reusable text features.
                  Classifier-free guidance turned conditioning into a direct
                  quality–diversity control. Latent diffusion reduced the space
                  in which the expensive denoiser operated.
                </p>
                <p>
                  Stable Diffusion&apos;s contribution was to make those pieces
                  legible as one runnable pipeline. The system still had
                  limitations, but by August 2022 the key research abstractions
                  had become command-line controls that a much broader group of
                  people could inspect and use.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["Process", "DDPM", "How to learn denoising"],
                  ["Path", "DDIM", "How to sample faster"],
                  ["Language", "CLIP", "How to represent prompts"],
                  ["Control", "CFG", "How strongly to follow them"],
                  ["Space", "LDM", "Where denoising happens"],
                ].map(([axis, method, question]) => (
                  <div
                    key={axis}
                    className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      {axis}
                    </p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                      {method}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="timeline">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Timeline at a glance
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The dates provide the historical spine. The labels identify the
                subsystem each milestone changed, so chronology does not become
                a false replacement chain.
              </p>

              <div className="relative space-y-5 before:absolute before:bottom-3 before:left-[1.15rem] before:top-3 before:w-px before:bg-indigo-200 dark:before:bg-indigo-900 sm:before:left-[8.75rem]">
                {milestones.map((milestone) => (
                  <div
                    key={`${milestone.date}-${milestone.title}`}
                    className="relative grid gap-3 pl-12 sm:grid-cols-[7rem_1fr] sm:pl-0"
                  >
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 sm:pt-5 sm:text-right">
                      {milestone.date}
                    </div>
                    <span className="absolute left-3 top-5 h-4 w-4 rounded-full border-4 border-white bg-indigo-600 ring-1 ring-indigo-300 dark:border-slate-950 dark:ring-indigo-800 sm:left-[8.27rem]" />
                    <a
                      href={milestone.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        {milestone.label}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {milestone.title} ↗
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                        {milestone.detail}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section id="ddpm">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                DDPM: learn the reverse process
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  The forward process in the 2020{" "}
                  <a
                    href="https://arxiv.org/abs/2006.11239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    DDPM paper
                  </a>{" "}
                  is deliberately simple. At every timestep it adds a small
                  amount of Gaussian noise. After enough steps, the structured
                  data distribution has been pushed toward a standard normal
                  distribution. The generative task is to learn the reverse:
                  start from noise and repeatedly predict how to move toward a
                  cleaner sample.
                </p>
                <p>
                  A useful training identity samples any noisy state directly,
                  rather than simulating every earlier step. If ᾱ
                  <sub>t</sub> records the cumulative retained signal, then a
                  training example can be written as:
                </p>
              </div>

              <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                <div className="overflow-x-auto font-mono text-lg text-slate-950 dark:text-white">
                  x<sub>t</sub> = √ᾱ<sub>t</sub> x<sub>0</sub> + √(1 − ᾱ
                  <sub>t</sub>) ε, &nbsp; ε ~ N(0, I)
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  The network receives x<sub>t</sub> and t and is commonly
                  trained to predict the sampled noise ε with a mean-squared
                  error objective.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                    Training
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-blue-950 dark:text-blue-100">
                    One random noise level
                  </h3>
                  <p className="mt-3 leading-relaxed text-blue-900/80 dark:text-blue-200">
                    Select an image, timestep, and noise sample; construct x
                    <sub>t</sub>; predict the noise. Different timesteps can be
                    trained independently across a batch.
                  </p>
                </div>
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900 dark:bg-violet-950/30">
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-400">
                    Sampling
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-violet-950 dark:text-violet-100">
                    A sequential reverse chain
                  </h3>
                  <p className="mt-3 leading-relaxed text-violet-900/80 dark:text-violet-200">
                    Begin at x<sub>T</sub> and repeatedly evaluate the denoiser
                    to obtain x<sub>T−1</sub>, x<sub>T−2</sub>, and so on. This
                    dependency is why generation is slow even though training
                    is highly parallel.
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex min-w-[680px] items-center justify-between gap-3 text-center">
                  {[
                    ["x₀", "image"],
                    ["x₂₀₀", "light noise"],
                    ["x₄₀₀", "structure fades"],
                    ["x₆₀₀", "heavy noise"],
                    ["x₈₀₀", "little signal"],
                    ["x₁₀₀₀", "Gaussian noise"],
                  ].map(([state, label], index) => (
                    <div key={state} className="flex items-center gap-3">
                      <div>
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-xl border font-mono font-semibold ${
                            index < 2
                              ? "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300"
                              : index < 4
                                ? "border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300"
                                : "border-slate-300 bg-slate-200 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          }`}
                        >
                          {state}
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          {label}
                        </p>
                      </div>
                      {index < 5 && (
                        <span className="text-xl text-slate-400">→</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
                  Schematic only: DDPM adds small increments of noise; the
                  learned generative process follows the arrows in reverse.
                </p>
              </div>
            </section>

            <section id="sampling">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                DDIM: change the path, not the trained denoiser
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  DDPM tied high sample quality to a long Markov chain, but its
                  training loss did not uniquely determine that chain. The{" "}
                  <a
                    href="https://arxiv.org/abs/2010.02502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    DDIM paper
                  </a>{" "}
                  constructs non-Markovian forward processes with the same
                  training objective. Their reverse process can visit a sparse
                  subset of timesteps, so an already-trained noise predictor
                  can generate with many fewer evaluations.
                </p>
                <p>
                  DDIM also exposes a stochasticity parameter. At η = 0, the
                  reverse update is deterministic for a fixed initial noise.
                  This makes the latent trajectory easier to reproduce and
                  interpolate. The paper reports 10×–50× wall-clock speedups in
                  its experiments, but that number is not a universal property:
                  it depends on the schedule, implementation, hardware, and
                  accepted quality trade-off.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "Reused",
                    "Noise predictor",
                    "The network and DDPM-style training objective can stay the same.",
                  ],
                  [
                    "Changed",
                    "Reverse trajectory",
                    "The sampler can skip many of the training diffusion timesteps.",
                  ],
                  [
                    "Still costly",
                    "Each evaluation",
                    "A large U-Net is still executed once per selected sampling step.",
                  ],
                ].map(([label, title, detail]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      {label}
                    </p>
                    <h3 className="mt-2 font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:bg-cyan-950/30">
                <h3 className="font-semibold text-cyan-950 dark:text-cyan-200">
                  The continuous-time bridge
                </h3>
                <p className="mt-2 leading-relaxed text-cyan-900/80 dark:text-cyan-300">
                  The 2020{" "}
                  <a
                    href="https://arxiv.org/abs/2011.13456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-cyan-500 underline-offset-4"
                  >
                    score-SDE framework
                  </a>{" "}
                  describes noising with an SDE, generation with a reverse-time
                  SDE, and an equivalent probability-flow ODE. This did not
                  replace DDPM or DDIM; it clarified that the learned score,
                  stochastic process, and numerical solver are related but
                  separable design choices.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  Parallel branch, not a Stable Diffusion component
                </p>
                <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-300">
                  February 2022&apos;s{" "}
                  <a
                    href="https://arxiv.org/abs/2202.00512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-amber-500 underline-offset-4"
                  >
                    progressive distillation
                  </a>{" "}
                  repeatedly trained a student to replace two deterministic
                  teacher steps with one. It is historically important to
                  few-step generation, but Stable Diffusion v1 did not depend
                  on it, so it remains outside this article&apos;s causal spine.
                </p>
              </div>
            </section>

            <section id="conditioning">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                From text features to classifier-free guidance
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                “Text conditioning” hides three different jobs. A text encoder
                represents the prompt. The denoiser needs a mechanism for
                reading that representation. Guidance then decides how strongly
                the sampling direction should follow it. Stable Diffusion uses
                a different research idea for each job.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Job</th>
                        <th className="px-5 py-4 font-semibold">Mechanism</th>
                        <th className="px-5 py-4 font-semibold">
                          What it contributes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                          Represent the prompt
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          Frozen CLIP ViT-L/14 text encoder
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-400">
                          Converts tokenized language into contextual features.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                          Inject the features
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          Cross-attention in the latent U-Net
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-400">
                          Lets spatial denoising features attend to prompt
                          tokens at several resolutions.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-950 dark:text-white">
                          Strengthen the condition
                        </td>
                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                          Classifier-free guidance
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-400">
                          Combines unconditional and conditional noise
                          predictions at sampling time.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                <div className="overflow-x-auto font-mono text-lg text-slate-950 dark:text-white">
                  ε<sub>guided</sub> = ε<sub>uncond</sub> + s(ε
                  <sub>cond</sub> − ε<sub>uncond</sub>)
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  At s = 1 this reduces to the conditional prediction. Larger
                  values push farther in the direction that distinguishes the
                  prompt-conditioned prediction from the unconditional one.
                </p>
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  The model learns both predictions by sometimes dropping the
                  conditioning during training. This avoids the separate noisy
                  image classifier required by classifier guidance. In the{" "}
                  <a
                    href="https://arxiv.org/abs/2112.10741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    GLIDE study
                  </a>
                  , human evaluators preferred classifier-free guidance over
                  CLIP guidance for both photorealism and caption similarity.
                </p>
                <p>
                  CLIP guidance and a CLIP text encoder are therefore not the
                  same thing. Stable Diffusion v1 uses CLIP to encode language,
                  but its sampling guidance comes from the denoiser&apos;s own
                  conditional and unconditional predictions.
                </p>
              </div>
            </section>

            <section id="latent-diffusion">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Latent diffusion: compress before denoising
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  DDPM and many early text-to-image systems spent their repeated
                  U-Net evaluations in pixel space. At high resolution this is
                  expensive, yet most individual pixels contain locally
                  redundant information. The{" "}
                  <a
                    href="https://arxiv.org/abs/2112.10752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    latent diffusion paper
                  </a>{" "}
                  separates perceptual compression from semantic generation.
                </p>
                <p>
                  First, an autoencoder learns an encoder E and decoder D. The
                  diffusion model operates on z = E(x), while the decoder turns
                  the final latent back into pixels. The denoiser no longer has
                  to preserve imperceptible pixel-level detail at every reverse
                  step; the autoencoder handles that representational burden.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.4fr_auto_1fr]">
                  {[
                    ["Pixels", "3 × 512 × 512", "border-blue-200 text-blue-800 dark:border-blue-900 dark:text-blue-300"],
                    ["Encoder E", "compress ×8", "border-cyan-200 text-cyan-800 dark:border-cyan-900 dark:text-cyan-300"],
                    ["Latent diffusion", "4 × 64 × 64 + text", "border-violet-300 text-violet-800 dark:border-violet-900 dark:text-violet-300"],
                    ["Decoder D", "reconstruct", "border-emerald-200 text-emerald-800 dark:border-emerald-900 dark:text-emerald-300"],
                  ].map(([title, detail, color], index) => (
                    <div key={title} className="contents">
                      <div
                        className={`rounded-xl border bg-white p-4 text-center dark:bg-slate-950 ${color}`}
                      >
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 font-mono text-xs opacity-80">
                          {detail}
                        </p>
                      </div>
                      {index < 3 && (
                        <span className="text-center text-2xl text-slate-400">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
                  Stable Diffusion v1 uses four latent channels and a
                  factor-eight spatial downsampling for its standard 512×512
                  path. The dimensions describe representation size, not an
                  exact end-to-end speedup.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Cross-attention adds conditions
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                    Intermediate U-Net features supply attention queries, while
                    prompt features supply keys and values. The same interface
                    can accept text or other structured conditioning without
                    concatenating a full condition map to every pixel.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    Compression is not free
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                    The autoencoder is lossy. Fine text, faces, and small
                    structures can be damaged before or after diffusion. Latent
                    diffusion reduces spatial cost; it does not remove the
                    sequential sampler or guarantee faithful reconstruction.
                  </p>
                </div>
              </div>
            </section>

            <section id="contemporaries">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                The 2022 landscape: Stable Diffusion was not first
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                By August 2022, several systems had already demonstrated strong
                text-to-image diffusion. Their architectures differed, which
                makes “first” less useful than asking what each system made
                possible.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <a
                  href="https://arxiv.org/abs/2112.10741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    December 2021
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    GLIDE ↗
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    A large text-conditional diffusion model comparing CLIP and
                    classifier-free guidance, with image editing through
                    inpainting.
                  </p>
                </a>
                <a
                  href="https://arxiv.org/abs/2204.06125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    April 2022
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    DALL·E 2 / unCLIP ↗
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    A prior maps text to a CLIP image representation, then a
                    diffusion decoder generates pixels conditioned on that
                    representation.
                  </p>
                </a>
                <a
                  href="https://arxiv.org/abs/2205.11487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-800"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    May 2022
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    Imagen ↗
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Uses a large frozen T5 language model for text
                    understanding and diffusion models for high-fidelity image
                    generation.
                  </p>
                </a>
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-950/30">
                <p className="font-semibold text-indigo-950 dark:text-indigo-200">
                  Stable Diffusion&apos;s historical distinction
                </p>
                <p className="mt-2 leading-relaxed text-indigo-900/80 dark:text-indigo-300">
                  It combined latent-space efficiency with a public release of
                  code and downloadable weights under a use-restricted model
                  license. The significance was not being the first system to
                  turn text into images; it was making a capable system much
                  easier to inspect, run, adapt, and distribute.
                </p>
              </div>
            </section>

            <section id="stable-diffusion">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Stable Diffusion: the research stack assembled
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  Stable Diffusion v1 is a particular latent diffusion
                  configuration, not a new family detached from the LDM paper.
                  Its{" "}
                  <a
                    href={`${stableDiffusionSource}/configs/stable-diffusion/v1-inference.yaml`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    inference configuration
                  </a>{" "}
                  names the architecture directly: a four-channel latent
                  diffusion model, a U-Net with spatial Transformer blocks and
                  768-dimensional cross-attention context, a KL autoencoder,
                  and a frozen CLIP embedder.
                </p>
                <p>
                  The original repository describes an approximately 860M
                  parameter U-Net and a 123M parameter text encoder. Its
                  standard path starts with a 512×512 output target, but the
                  iterative denoising state is only 4×64×64. This is the
                  practical payoff of latent diffusion: every sampling step
                  runs the expensive generative network on a compressed spatial
                  grid.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.4fr_auto_1fr] lg:items-center">
                  <div className="space-y-3">
                    <div className="rounded-xl border border-cyan-200 bg-white p-4 dark:border-cyan-900 dark:bg-slate-950">
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        Language path
                      </p>
                      <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                        Prompt → frozen CLIP encoder
                      </p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Conditional and empty-prompt embeddings
                      </p>
                    </div>
                    <div className="rounded-xl border border-blue-200 bg-white p-4 dark:border-blue-900 dark:bg-slate-950">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                        Initial state
                      </p>
                      <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                        Gaussian latent noise
                      </p>
                      <p className="mt-1 font-mono text-sm text-slate-600 dark:text-slate-400">
                        z<sub>T</sub> ∈ R<sup>4×64×64</sup>
                      </p>
                    </div>
                  </div>
                  <div className="hidden text-3xl text-slate-400 lg:block">→</div>
                  <div className="rounded-2xl border-2 border-violet-300 bg-white p-6 text-center dark:border-violet-800 dark:bg-slate-950">
                    <p className="text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-400">
                      Repeated denoising
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                      Latent U-Net + cross-attention
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Predict conditional and unconditional noise, combine them
                      with CFG, and let DDIM or PLMS update the latent.
                    </p>
                    <div className="mt-4 rounded-lg bg-violet-50 px-3 py-2 font-mono text-xs text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                      z<sub>T</sub> → z<sub>t</sub> → … → z<sub>0</sub>
                    </div>
                  </div>
                  <div className="hidden text-3xl text-slate-400 lg:block">→</div>
                  <div className="rounded-xl border border-emerald-200 bg-white p-5 text-center dark:border-emerald-900 dark:bg-slate-950">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                      Pixel reconstruction
                    </p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                      VAE decoder
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Final latent → 512×512 RGB image
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
                  Original reconstruction of the Stable Diffusion v1 inference
                  path from its configuration and reference sampling script.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  [
                    "1. Encode language",
                    "The frozen CLIP encoder produces prompt context. An empty prompt produces the unconditional context required by CFG.",
                  ],
                  [
                    "2. Initialize the latent",
                    "Sampling starts from Gaussian noise shaped by the requested pixel dimensions, latent channels, and factor-eight downsampling.",
                  ],
                  [
                    "3. Denoise repeatedly",
                    "At every selected timestep the U-Net reads the noisy latent, timestep, and text context, then predicts noise for the sampler update.",
                  ],
                  [
                    "4. Decode once",
                    "Only after the reverse process reaches its final latent does the autoencoder decoder reconstruct the full-resolution image.",
                  ],
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

            <section id="implementation">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Reading the released system through its interface
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The original{" "}
                <a
                  href={`${stableDiffusionSource}/scripts/txt2img.py`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  text-to-image script
                </a>{" "}
                exposes the research history as runtime parameters. The
                following mapping is more informative than treating the script
                as an opaque image generator.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Released interface
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Research mechanism
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Runtime meaning
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {interfaceRows.map((row) => (
                        <tr key={row.source}>
                          <td className="px-5 py-4 align-top font-mono text-xs font-medium text-indigo-600 dark:text-indigo-400">
                            {row.source}
                          </td>
                          <td className="px-5 py-4 align-top font-medium text-slate-950 dark:text-white">
                            {row.mechanism}
                          </td>
                          <td className="px-5 py-4 align-top leading-relaxed text-slate-600 dark:text-slate-400">
                            {row.meaning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl bg-slate-950">
                <div className="border-b border-slate-800 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Conceptual inference loop—not copied implementation code
                </div>
                <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-slate-300">
                  <code>{`text = clip_encode(prompt)
empty = clip_encode("")
z = gaussian_noise(channels=4, height=H / 8, width=W / 8)

for t in sampling_schedule:
    eps_uncond = unet(z, t, empty)
    eps_cond = unet(z, t, text)
    eps = eps_uncond + guidance_scale * (eps_cond - eps_uncond)
    z = sampler_step(z, eps, t)

image = vae_decode(z)`}</code>
                </pre>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                This loop makes the composition explicit. The U-Net is the
                trained noise predictor inherited from diffusion modeling.
                CLIP and cross-attention provide the condition. CFG modifies
                the prediction. DDIM or PLMS owns the state update. The VAE
                decoder operates only after iterative sampling finishes.
              </p>
            </section>

            <section id="release">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                What the August 2022 public release changed
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  Stability AI announced the public release on August 22, 2022.
                  The CompVis repository provided the model definition and
                  inference scripts, while model weights were distributed with
                  a CreativeML OpenRAIL-M license permitting commercial and
                  non-commercial use subject to use-based restrictions. This
                  combination matters more historically than any claim that
                  Stable Diffusion invented diffusion itself.
                </p>
                <p>
                  The reference repository described the model as relatively
                  lightweight and runnable on a consumer-class GPU with about
                  10 GB of VRAM. Hardware and software have changed since then,
                  but at release time this placed experimentation on a very
                  different accessibility curve from multi-billion-parameter,
                  service-only text-to-image systems.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "Inspectable",
                    "The architecture, configuration, and sampling scripts could be read as one system rather than inferred from a hosted API.",
                  ],
                  [
                    "Runnable",
                    "Downloadable weights and a documented local pipeline allowed direct experimentation with prompts, samplers, and guidance.",
                  ],
                  [
                    "Adaptable",
                    "A public latent representation and U-Net checkpoint created a foundation for fine-tuning and downstream tooling.",
                  ],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
                  >
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
                <h3 className="font-semibold text-amber-950 dark:text-amber-200">
                  Accessibility did not remove model risk
                </h3>
                <p className="mt-2 leading-relaxed text-amber-900/80 dark:text-amber-300">
                  The v1.4 model card documents a lossy autoencoder, weak face
                  and text rendering, predominantly English training captions,
                  dataset biases, possible memorization, and unsafe-content
                  risks. Public availability expanded who could study the
                  system, but it also made licensing, provenance, safety
                  filtering, and responsible deployment part of the technical
                  story.
                </p>
              </div>
            </section>

            <section
              id="takeaway"
              className="rounded-2xl bg-slate-950 p-7 text-white sm:p-9"
            >
              <h2 className="mb-5 text-3xl font-bold tracking-tight">
                The takeaway
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                <p>
                  The path from DDPM to Stable Diffusion was not a sequence of
                  discarded models. DDPM&apos;s noise-prediction problem remained
                  inside the latent U-Net. DDIM&apos;s separation of model and
                  sampler became a user-visible step-count choice. CLIP supplied
                  prompt features, classifier-free guidance supplied control,
                  and latent diffusion supplied the affordable spatial domain.
                </p>
                <p>
                  Stable Diffusion&apos;s pioneering role should therefore be
                  stated precisely: it made a powerful combination of existing
                  diffusion research broadly inspectable and runnable. That is
                  a different claim from being the first diffusion model—and a
                  more useful explanation of why August 2022 became a turning
                  point.
                </p>
              </div>
            </section>

            <section id="references">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                References
              </h2>
              <ol className="space-y-4 text-slate-700 dark:text-slate-300">
                {referenceItems.map((reference, index) => (
                  <li key={reference.href} className="flex gap-3">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      {index + 1}.
                    </span>
                    <a
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                    >
                      {reference.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← Back to all blogs
            </Link>
            <a
              href={stableDiffusionCommit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              Explore the Stable Diffusion source ↗
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
