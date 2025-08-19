import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BarChart3,
  Dna,
  TrendingUp,
  Microscope,
  ExternalLink,
  ScatterChartIcon as Scatter3D,
} from "lucide-react"

export default function DataScienceEngineeringPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-slate-900 tracking-wide">
              Alizee Wouters
            </Link>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm" className="border-slate-300 bg-transparent">
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl mb-8 flex items-center justify-center mx-auto">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">Data Science Engineering</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-700 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Bioinformatics and data analysis projects that combine computational methods with biological insights to
              solve complex research questions and extract meaningful patterns.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Dna className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    Protein Secondary Structure Prediction Using ESM and Random Forests{" "}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This project focused on predicting the secondary structure of proteins from their amino acid
                    sequences. Representations were extracted using Meta AI's ESM (Evolutionary Scale Modeling), a
                    pre-trained transformer-based protein language model. These embeddings were used as input features
                    for a Random Forest classifier to assign secondary structure labels (e.g., helix, strand, turn) to
                    individual amino acids. The final predictions were evaluated using Codabench, with the model
                    achieving strong performance by combining deep learning-based representations with classical machine
                    learning techniques.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Repository</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Complete implementation available on GitHub with detailed documentation, code, and methodology.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm"
                      >
                        <a
                          href="https://github.com/aliwouters/Protein-Secondary-Structure-Prediction-Using-ESM-and-Random-Forests"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Model Performance</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Overall Accuracy:</span>
                          <span className="font-medium text-slate-900">62%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Weighted Avg F1-Score:</span>
                          <span className="font-medium text-slate-900">0.56</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Best Class (Helix):</span>
                          <span className="font-medium text-slate-900">F1: 0.79</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Dataset Size:</span>
                          <span className="font-medium text-slate-900">25,000 samples</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    Intron-Exon Classification Using DNA Language Models
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This project focused on identifying intron and exon regions within genomic DNA sequences. Using
                    labeled nucleotide sequences, the task was framed as a binary classification problem where each base
                    was assigned a label indicating whether it belonged to an exon (1) or intron (0). The approach
                    incorporated advanced DNA language models to extract contextual embeddings from raw sequences. Model
                    experimentation included traditional classifiers and modern transformer-based architectures capable
                    of processing long-range dependencies. Final predictions were evaluated on Codabench for
                    nucleotide-level accuracy, demonstrating the effectiveness of language modeling in genomic sequence
                    analysis.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Repository</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Complete implementation with DNA language models, preprocessing pipelines, and evaluation
                        metrics available on GitHub.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm"
                      >
                        <a
                          href="https://github.com/aliwouters/Intron-Exon-Classification-Using-DNA-Language-Models/tree/main"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Genomic Applications</h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Gene annotation and genome assembly
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Alternative splicing detection
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Variant impact prediction
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Personalized medicine and drug discovery
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    SNP Caller – Identifying Genetic Variants from Sequencing Data
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This two-part project involved developing a single nucleotide polymorphism (SNP) caller to identify
                    and characterize genetic variation in a specific individual based on sequencing data. In Part 1, the
                    task was to extract sequencing reads from a BAM file that overlapped known putative SNP positions.
                    For each SNP position, the observed bases, their corresponding quality scores (Phred scores), and
                    the read identifiers were collected. In Part 2, the objective was to estimate the genotype
                    probabilities (AA, AB, BB) for each SNP site using the data collected in Part 1. A probabilistic
                    model was implemented to compute posterior genotype probabilities based on observed base calls and
                    their associated quality scores, using log probabilities and the log-sum-exp trick to ensure
                    numerical stability during inference.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Repository</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Complete SNP calling pipeline with BAM file processing, quality score analysis, and genotype
                        probability estimation available on GitHub.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white text-sm"
                      >
                        <a
                          href="https://github.com/aliwouters/SNP-Caller-Identifying-Genetic-Variants-from-Sequencing-Data/tree/main"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technical Implementation</h4>
                      <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                          BAM file parsing and read extraction
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                          Phred quality score analysis
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                          Probabilistic genotype inference
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                          Log-sum-exp numerical stability
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    Transcript Abundance Estimation with the EM Algorithm
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This project used the Expectation-Maximization (EM) algorithm to estimate the relative abundances of
                    RNA isoforms from RNA-seq data. Following the RSEM framework, sequencing reads were mapped to two
                    isoforms with differing effective lengths, and isoform proportions were iteratively updated based on
                    read compatibility. The project included both a manual derivation and a Python implementation of the
                    EM procedure. Experiments showed that isoform length significantly impacts abundance estimates, with
                    longer isoforms receiving lower weight due to reduced sequencing probability. When lengths were
                    equal, estimates were unbiased and evenly distributed.
                  </p>

                  <div className="space-y-6">
                    {/* First row - Manual Length Bias Analysis and Equal Length Analysis */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Manual Length Bias Analysis */}
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Manual Length Bias Analysis</h4>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/em-algorithm-math.png"
                            alt="EM Algorithm Mathematical Derivation showing length bias analysis with theta calculations and probability distributions"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* Equal Length Analysis */}
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Equal Length Analysis</h4>
                        <div className="text-slate-700 space-y-3 text-sm">
                          <div className="bg-white p-4 rounded-lg border border-slate-200">
                            <h5 className="font-medium text-slate-800 mb-2">
                              When both isoforms have equal length (10), no bias exists:
                            </h5>
                            <p>• r₁'s contribution splits evenly between transcripts</p>
                            <p>
                              • Effects cancel out → θ<sub>A</sub> = θ<sub>B</sub> = 0.5
                            </p>
                            <p>
                              When t<sub>B</sub> is twice as long, it has lower effective sequencing probability per
                              base, giving more weight to t<sub>A</sub>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second row - Project Repository (full width) */}
                    <div className="bg-purple-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Repository</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Complete EM algorithm implementation with RSEM framework adaptation and RNA-seq abundance
                        estimation available on GitHub.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm"
                      >
                        <a
                          href="https://github.com/aliwouters/Transcript-Abundance-Estimation-with-the-Expectation-Maximization-Algorithm/tree/main"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200/50 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Scatter3D className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">
                    Visualizing High-Dimensional Data with t-SNE
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This project implements the t-SNE (t-Distributed Stochastic Neighbor Embedding) algorithm from
                    scratch to visualize high-dimensional data in 2D space. The implementation includes the complete
                    mathematical framework for computing pairwise similarities in high-dimensional space using Gaussian
                    distributions, followed by optimization in low-dimensional space using t-distributions. The project
                    explores how different variance parameters (σ²) affect neighborhood preservation and demonstrates
                    the algorithm's effectiveness on various datasets including synthetic clusters and real-world
                    high-dimensional data.
                  </p>

                  <div className="space-y-6">
                    {/* Project Repository (full width) */}
                    <div className="bg-orange-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Repository</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Complete t-SNE implementation from scratch with mathematical derivations, parameter exploration,
                        and visualization examples. Includes detailed analysis of how variance parameters affect
                        similarity calculations and neighborhood preservation in dimensionality reduction.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm"
                      >
                        <a
                          href="https://github.com/aliwouters/Visualizing-High-Dimensional-Data-with-t-SNE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                    {/* Graphs and Figures Section */}
                    <div className="bg-orange-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Graphs and Figures</h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        The plots show how the similarity probabilities (p₁ⱼ) from the first point to all others change
                        depending on the value of σ². When σ² is small (e.g., 0.1), the similarity drops off quickly, so
                        only very close neighbors are highlighted. When σ² is large (e.g., 100), the similarity spreads
                        broadly and all points look more similar. The best balance occurs when σ² = 1, where the
                        neighborhood is captured meaningfully without over-smoothing or being too narrow. The color
                        intensity in each graph reflects how strongly each point is considered a neighbor of the first
                        point.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-sigma-0.1.png"
                            alt="t-SNE similarity probabilities with σ² = 0.1 showing narrow neighborhood"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-sigma-1.png"
                            alt="t-SNE similarity probabilities with σ² = 1 showing balanced neighborhood"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-sigma-10.png"
                            alt="t-SNE similarity probabilities with σ² = 10 showing broader neighborhood"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-sigma-100.png"
                            alt="t-SNE similarity probabilities with σ² = 100 showing very broad neighborhood"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* Additional q₁ⱼ Probabilities Graph */}
                      <div className="mt-6">
                        <h5 className="font-medium text-slate-800 mb-3">Low-Dimensional q₁ⱼ Probabilities</h5>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          This graph uses the low-dimensional representation set equal to the original data (yᵢ = xᵢ) to
                          visualize the q₁ⱼ probabilities, which measure how likely each point is to be a neighbor of
                          the first point in the low-dimensional space. Unlike the earlier p₁ⱼ plots, which are
                          sensitive to σ², this plot reflects the heavy-tailed Student-t distribution used in t-SNE. As
                          a result, the influence of distant points decays more slowly, producing a more spread-out
                          similarity pattern compared to the sharper focus seen with p₁ⱼ when σ² = 1.
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-q-probabilities.png"
                            alt="t-SNE q₁ⱼ probabilities with yᵢ = xᵢ showing Student-t distribution effects"
                            className="w-full h-auto max-w-md mx-auto"
                          />
                        </div>
                      </div>

                      {/* KL-Divergence Validation Graph */}
                      <div className="mt-6">
                        <h5 className="font-medium text-slate-800 mb-3">KL-Divergence Validation</h5>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          This graph compares the high-dimensional similarity matrix (p₁ⱼ) with the low-dimensional
                          similarity matrix (q₁ⱼ), using the KL-divergence as a measure of how well the low-dimensional
                          space preserves neighborhood relationships. The graph shows that the divergence decreases over
                          iterations of optimization, indicating that the low-dimensional embedding is improving its
                          match to the original data structure. The lower the KL-divergence, the better the alignment
                          between how points relate in the high-dimensional space versus their projection. This helps
                          validate the effectiveness of the t-SNE mapping process.
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-kl-divergence.png"
                            alt="t-SNE transformation result showing two well-separated clusters with KL-divergence of 0.1054"
                            className="w-full h-auto max-w-md mx-auto"
                          />
                        </div>
                      </div>

                      {/* Perplexity and Sigma-Squared Analysis */}
                      <div className="mt-6">
                        <h5 className="font-medium text-slate-800 mb-3">Perplexity and Sigma-Squared Analysis</h5>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          The graph in part (j) shows how different values of the variance parameter (sigma squared)
                          affect the KL-divergence between the high-dimensional and low-dimensional similarity
                          distributions. As sigma squared increases, the KL-divergence decreases, suggesting that the
                          low-dimensional space better captures the structure of the high-dimensional data. However,
                          extremely large values may lead to over-smoothing, while very small values may overemphasize
                          local structure. This graph illustrates the importance of tuning sigma squared to achieve a
                          good balance between preserving local neighborhoods and maintaining global relationships in
                          the projection.
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <img
                            src="/images/tsne-perplexity-histogram.png"
                            alt="Histogram showing distribution of σ² values for different perplexity settings with corresponding KL-divergence values"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Bioinformatics Impact & Applications</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  These computational biology projects demonstrate the power of combining machine learning with genomic
                  data analysis. From protein structure prediction to genetic variant calling, each project contributes
                  to advancing precision medicine and our understanding of biological systems.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Protein Analysis</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Drug target identification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Structural biology insights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      Therapeutic design
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Genomic Medicine</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Personalized treatment plans
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Disease risk assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Population genetics studies
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Computational Methods</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                      Language model applications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                      Probabilistic inference
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                      High-throughput analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
