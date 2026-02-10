// Team AI Strategy Page - Standalone Version

function renderTeamAIStrategy() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <!-- Page Header -->
    <div class="max-w-7xl mx-auto mb-8">
      <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold mb-2">MO 2026 Team AI Strategy</h1>
            <p class="text-lg text-indigo-100">Standardization → Prompt Enablement → Workflow-oriented Augmentation</p>
          </div>
          <div class="text-6xl opacity-20">🤖</div>
        </div>
      </div>
    </div>

    <div class="flex gap-8 max-w-7xl mx-auto">
      <!-- Left Navigation -->
      <nav class="w-64 flex-shrink-0">
        <div class="sticky top-4 bg-white rounded-xl shadow-md border border-slate-200 p-4">
          <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Contents</h3>
          <ul class="space-y-1 text-sm">
            <li><a href="#executive-summary" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Executive Summary</a></li>
            <li><a href="#ops-work-system" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Ops Work System Overview</a></li>
            <li><a href="#ops-workflow" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Ops Workflow & Challenges</a></li>
            <li><a href="#systemic-friction" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Systemic Friction Patterns</a></li>
            <li><a href="#enablement-layers" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">From Friction to Enablement</a></li>
            <li><a href="#execution-plan" class="nav-link block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Execution Plan</a></li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <div class="flex-1 space-y-6">
        <!-- 1. Executive Summary -->
        <div id="executive-summary" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
          <h2 class="text-2xl font-bold text-slate-900">Executive Summary</h2>
        </div>
        <div class="space-y-5">
          <!-- Context -->
          <div>
            <p class="text-slate-700 leading-relaxed">
              We operate in a highly dynamic Operations / Delivery environment, working closely with Contract Manufacturers to ensure factory readiness and sustained execution across the product lifecycle — from NPI and ramp, through mass production, to ongoing changes and end-of-life transitions.
            </p>
            <p class="text-slate-700 leading-relaxed mt-3">
              Our work depends on continuously translating evolving operational information into actionable outputs for different execution rhythms and audiences.
            </p>
          </div>

          <!-- Why change is needed -->
          <div>
            <h3 class="font-bold text-slate-900 mb-2">Why change is needed</h3>
            <p class="text-slate-700 leading-relaxed mb-3">
              AI capabilities have now matured to a point where a significant portion of repetitive, manual work — such as data extraction, restructuring, comparison, and first-draft preparation — can be handled more effectively by machines. Continuing to rely on manual effort for these activities limits how much time teams can spend on higher-value problem solving.
            </p>
            <p class="text-slate-700 leading-relaxed">
              At the same time, increased AI adoption is becoming an explicit organizational direction, requiring teams not just to experiment with tools, but to apply AI in a scalable, governed, and repeatable way.
              From both an organizational and individual perspective, AI represents a productivity shift. Adapting how work is performed is necessary to sustain competitiveness, resilience under change, and execution quality over time.
            </p>
          </div>

          <!-- Our approach and strategy -->
          <div>
            <h3 class="font-bold text-slate-900 mb-2">Our approach and strategy</h3>
            <p class="text-slate-700 leading-relaxed mb-3">
              So we intend to use AI as a force multiplier — not to replace existing systems, but to improve how operational work is defined, translated, and executed within compliance boundaries and current tool ecosystems.
            </p>
            <p class="text-slate-700 leading-relaxed mb-3">
              To do this in a sustainable and scalable way, our Team AI Application Strategy follows a layered progression:
            </p>
            <div class="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-l-4 border-indigo-500 rounded p-4 mb-3">
              <p class="font-semibold text-slate-900">
                Standardization → Prompt Enablement → Workflow-oriented Augmentation
              </p>
            </div>
            <ul class="space-y-2 text-sm text-slate-700 mb-3 ml-4">
              <li>• <strong>Standardization</strong> establishes shared definitions, structures, and sources of truth across the team</li>
              <li>• <strong>Prompt Enablement</strong> translates that standardized work into AI-readable instructions and repeatable outputs</li>
              <li>• <strong>Workflow-oriented Augmentation</strong> selectively connects high-impact segments into assisted or automated flows</li>
            </ul>
            <p class="text-slate-700 leading-relaxed mb-3">
              Rather than adopting AI everywhere at once, this progression allows us to first build a stable baseline, and then incrementally augment execution where value and readiness are clear.
            </p>
            <p class="text-slate-700 leading-relaxed">
              By aligning people first, then people with AI, and finally AI with workflows and systems, this approach strengthens execution resilience, improves agility in responding to change, and increases accuracy and consistency — while remaining controlled, compatible, and scalable.
            </p>
          </div>
        </div>
      </div>

        <!-- 2. Ops Work System Overview -->
        <div id="ops-work-system" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🏗️</div>
          <h2 class="text-2xl font-bold text-slate-900">Ops Work System Overview</h2>
        </div>

        <p class="text-slate-700 leading-relaxed mb-6">
          Our operations work spans two distinct but tightly interconnected work streams:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Work Stream 1: Project Lifecycle Execution -->
          <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">📊</span>
              <h3 class="font-bold text-blue-900">Work Stream 1: Project Lifecycle Execution</h3>
            </div>
            <p class="text-sm text-blue-700 mb-3 italic">Stage-driven execution across the product lifecycle</p>
            <ul class="space-y-1 text-sm text-blue-800">
              <li>• CM Selection</li>
              <li>• NPI – Factory Readiness</li>
              <li>• PVT / Ramp Execution</li>
              <li>• Sustaining & Change Management</li>
              <li>• EOM Planning</li>
            </ul>
          </div>

          <!-- Work Stream 2: Operating Cadence -->
          <div class="bg-green-50 border-2 border-green-200 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">⏱️</span>
              <h3 class="font-bold text-green-900">Work Stream 2: Operating Cadence</h3>
            </div>
            <p class="text-sm text-green-700 mb-3 italic">Execution rhythms independent of project stage</p>
            <ul class="space-y-1 text-sm text-green-800">
              <li>• Daily Execution & Coordination</li>
              <li>• Weekly Alignment & Reviews</li>
              <li>• Monthly Performance Tracking</li>
              <li>• Semi-annual Performance Assessment</li>
            </ul>
          </div>
        </div>

        <!-- Key Insight -->
        <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-500 rounded-lg p-5">
          <p class="text-slate-800 font-medium italic">
            Ops work focuses on <strong>translating evolving operational information</strong> into clear, actionable views across different project stages and operating rhythms, <strong>tailored to the needs of different audiences</strong>.
          </p>
        </div>
      </div>

        <!-- 3. Ops Workflow & Challenges -->
        <div id="ops-workflow" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">🔄</div>
          <h2 class="text-2xl font-bold text-slate-900">Ops Workflow & Challenges</h2>
        </div>

        <p class="text-sm text-slate-600 mb-6 italic">
          Our work spans two work streams: project-driven stages and regular team/individual rhythms. Below are the key activities and challenges in each.
        </p>

        <!-- A. Project-based Workflow (Stage-driven) -->
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
            <h3 class="text-lg font-bold text-blue-900">Project-based Workflow</h3>
            <span class="text-sm text-slate-500">(Stage-driven activities across product lifecycle)</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gradient-to-r from-blue-50 to-blue-100">
                  <th class="px-5 py-4 text-left font-semibold text-blue-900 border-b-2 border-blue-300">Stage</th>
                  <th class="px-5 py-4 text-left font-semibold text-blue-900 border-b-2 border-blue-300">Key Activities</th>
                  <th class="px-5 py-4 text-left font-semibold text-blue-900 border-b-2 border-blue-300">Key Challenges</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-blue-100">
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">CM Selection</td>
                  <td class="px-5 py-4 text-slate-700">Participate in CM evaluation & audit, capacity & risk assessment, selection criteria development</td>
                  <td class="px-5 py-4 text-red-700">Evaluation and audit observations are largely experience-driven and subjective; lack of standardized criteria or scoring framework by supplier type, geography, or product scope; difficult to systematically demonstrate team expertise and consistency across suppliers; individual experience is valuable but inherently partial and non-scalable</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">NPI - Factory Readiness</td>
                  <td class="px-5 py-4 text-slate-700">Facility & operator readiness coordination, capacity planning, proto/EVT/DVT support, launch timeline alignment</td>
                  <td class="px-5 py-4 text-red-700">High explanation cost across functions; readiness status updates require constant reformatting</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900 bg-amber-50">PVT/RAMP</td>
                  <td class="px-5 py-4 text-slate-700 bg-amber-50">
                    <strong>Daily execution monitoring</strong>, daily stand-ups (morning/evening), daily status reports,
                    production plan generation, CTB constraint analysis, multi-scenario simulation, blocker escalation
                  </td>
                  <td class="px-5 py-4 text-red-700 bg-amber-50">Plan versions change frequently as constraints, demand, and readiness evolve; evolving operational information needs to be reformatted repeatedly for different meetings and reports; multi-scenario simulations expand quickly, increasing cognitive and preparation load; high coordination cost to keep narratives aligned across stakeholders</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">Sustaining + EOM</td>
                  <td class="px-5 py-4 text-slate-700">Weekly sustaining reviews, PPR reviews, production/inventory monitoring, change review & validation,
                  liability control, stakeholder alignment, EOM transition planning</td>
                  <td class="px-5 py-4 text-red-700">Change impact assessment relies heavily on individual experience; EOM planning requires extensive historical data aggregation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- B. Cadence-based Workflow (Rhythm-driven) -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">B</div>
            <h3 class="text-lg font-bold text-green-900">Cadence-based Workflow</h3>
            <span class="text-sm text-slate-500">(Fixed-rhythm team/individual work independent of project stage)</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gradient-to-r from-green-50 to-green-100">
                  <th class="px-5 py-4 text-left font-semibold text-green-900 border-b-2 border-green-300">Cadence</th>
                  <th class="px-5 py-4 text-left font-semibold text-green-900 border-b-2 border-green-300">Key Activities</th>
                  <th class="px-5 py-4 text-left font-semibold text-green-900 border-b-2 border-green-300">Key Challenges</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-green-100">
                <tr class="hover:bg-green-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">Daily</td>
                  <td class="px-5 py-4 text-slate-700">Ongoing project discussions and ad-hoc meetings; rapid issue triage, blocker clarification, and decision follow-ups; during PVT/RAMP: BOD (beginning of day) and EOD (end of day) alignment sessions with suppliers and internal XFN; daily status reports; processing fragmented inputs from multiple channels (meetings, messages, emails, docs)</td>
                  <td class="px-5 py-4 text-red-700">High context-switching cost across topics and projects; information scattered across channels with no single structured view; decisions and insights often lost or inconsistently captured</td>
                </tr>
                <tr class="hover:bg-green-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">Weekly</td>
                  <td class="px-5 py-4 text-slate-700">Weekly status updates and blocker sync; periodic reviews (NPI Review, Sustaining Review, PPR); evolving project information structured differently for different audiences and purposes</td>
                  <td class="px-5 py-4 text-red-700">Repeated manual restructuring of the same information; high explanation cost to maintain consistency across review types; outputs depend heavily on individual writing and framing styles</td>
                </tr>
                <tr class="hover:bg-green-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">Monthly</td>
                  <td class="px-5 py-4 text-slate-700">KPI tracking and trend analysis; month-over-month performance comparison and narrative building</td>
                  <td class="px-5 py-4 text-red-700">Manual data aggregation and calculation; inconsistent storytelling across months; difficult to link metrics back to operational actions</td>
                </tr>
                <tr class="hover:bg-green-50 transition-colors">
                  <td class="px-5 py-4 font-semibold text-slate-900">Semi-annually</td>
                  <td class="px-5 py-4 text-slate-700">Performance review and self-assessment; individual impact documentation and level-based evaluation</td>
                  <td class="px-5 py-4 text-red-700">Heavy reliance on memory and scattered notes; difficult to systematically capture six months of contributions; high preparation cost concentrated in a short time window</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

        <!-- 4. Systemic Friction Patterns -->
        <div id="systemic-friction" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">🔍</div>
          <h2 class="text-2xl font-bold text-slate-900">Systemic Friction Patterns</h2>
        </div>

        <p class="text-slate-700 leading-relaxed mb-6">
          Across both project-based execution and cadence-based work, we observe a set of recurring friction patterns.
          These are not isolated inefficiencies, but structural characteristics of how operational information is currently created, transformed, and reused.
        </p>

        <p class="text-sm text-slate-600 mb-6 italic">
          Each pattern represents a recurring source of friction that cuts across stages, cadences, and deliverables.
        </p>

        <!-- Pattern Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Pattern 1 -->
          <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 class="font-bold text-blue-900 text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">🔄</span>
              High Repetition of Information Reformatting
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">👁️</span>
                  <h4 class="font-semibold text-blue-900 text-sm">What we see</h4>
                </div>
                <ul class="text-sm text-blue-800 space-y-1 ml-6">
                  <li>• The same evolving operational information is repeatedly rewritten and restructured</li>
                  <li>• Reformatting happens across project stages, review contexts, and audiences</li>
                  <li>• Output structure varies by individual, even when source information is identical</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">⚠️</span>
                  <h4 class="font-semibold text-blue-900 text-sm">Why it matters</h4>
                </div>
                <ul class="text-sm text-blue-800 space-y-1 ml-6">
                  <li>• Preparation effort scales with the number of forums, not with value created</li>
                  <li>• Output quality depends heavily on individual writing and framing skills</li>
                  <li>• Inconsistent narratives increase explanation cycles and alignment cost</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Pattern 2 -->
          <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
            <h3 class="font-bold text-purple-900 text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">📋</span>
              Lack of Standardized Structure and Evaluation Criteria
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">👁️</span>
                  <h4 class="font-semibold text-purple-900 text-sm">What we see</h4>
                </div>
                <ul class="text-sm text-purple-800 space-y-1 ml-6">
                  <li>• Many assessments rely primarily on individual experience and judgment</li>
                  <li>• No consistent structure for capturing observations, risks, or readiness signals</li>
                  <li>• Knowledge remains implicit and fragmented rather than explicit and reusable</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">⚠️</span>
                  <h4 class="font-semibold text-purple-900 text-sm">Why it matters</h4>
                </div>
                <ul class="text-sm text-purple-800 space-y-1 ml-6">
                  <li>• Team-level expertise is difficult to demonstrate systematically</li>
                  <li>• Valuable experience does not scale beyond individuals</li>
                  <li>• Consistency across time, projects, and team members is hard to sustain</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Pattern 3 -->
          <div class="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <h3 class="font-bold text-orange-900 text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">⚡</span>
              High Manual Effort in Dynamic Operating Conditions
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">👁️</span>
                  <h4 class="font-semibold text-orange-900 text-sm">What we see</h4>
                </div>
                <ul class="text-sm text-orange-800 space-y-1 ml-6">
                  <li>• Plans, assumptions, constraints, and priorities evolve frequently</li>
                  <li>• Manual tracking, comparison, and explanation struggle to keep pace with change</li>
                  <li>• Cognitive and coordination load increases rapidly as complexity grows</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">⚠️</span>
                  <h4 class="font-semibold text-orange-900 text-sm">Why it matters</h4>
                </div>
                <ul class="text-sm text-orange-800 space-y-1 ml-6">
                  <li>• Growing share of effort spent on maintaining alignment rather than advancing execution</li>
                  <li>• Responsiveness and agility degrade as complexity rises</li>
                  <li>• Risk of error and misalignment increases under time pressure</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Pattern 4 -->
          <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 class="font-bold text-green-900 text-lg mb-4 flex items-center gap-2">
              <span class="text-2xl">🗂️</span>
              Fragmented Information and Memory-Dependent Workflows
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">👁️</span>
                  <h4 class="font-semibold text-green-900 text-sm">What we see</h4>
                </div>
                <ul class="text-sm text-green-800 space-y-1 ml-6">
                  <li>• Decisions, insights, and context scattered across meetings, messages, emails, and personal notes</li>
                  <li>• No consistent structure for capturing and carrying forward operational context</li>
                  <li>• Important rationale and learnings fade over time</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm">⚠️</span>
                  <h4 class="font-semibold text-green-900 text-sm">Why it matters</h4>
                </div>
                <ul class="text-sm text-green-800 space-y-1 ml-6">
                  <li>• Work relies heavily on personal memory and last-minute reconstruction</li>
                  <li>• Continuity across cycles is difficult to maintain</li>
                  <li>• Preparation cost concentrates into short, high-pressure time windows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        <!-- 5. From Systemic Friction to Enablement Layers -->
        <div id="enablement-layers" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">🔗</div>
          <h2 class="text-2xl font-bold text-slate-900">From Systemic Friction to Enablement Layers</h2>
        </div>

        <!-- Introduction -->
        <div class="mb-6">
          <p class="text-slate-700 leading-relaxed mb-3">
            Across both project-based execution and cadence-based work, the friction patterns we observed are not isolated issues to solve one-by-one. They reflect a structural gap in how operational work is defined, translated, and executed across people, tools, and systems.
          </p>
          <p class="text-slate-700 leading-relaxed">
            So instead of mapping "one pattern → one solution", we use a <strong>layered enablement approach</strong> that creates a stable baseline first, then scales impact in a controlled way.
          </p>
        </div>

        <!-- Section Title -->
        <h3 class="text-lg font-bold text-slate-900 mb-5 border-b border-slate-200 pb-2">A Layered Enablement Approach</h3>

        <!-- Three Layers -->
        <div class="space-y-6 mb-8">

          <!-- Layer 1: Standardization -->
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">🧱</span>
              <h4 class="text-lg font-bold text-blue-900">Layer 1 — Standardization <span class="text-sm font-normal text-blue-700">(Human ↔ Human alignment)</span></h4>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-blue-800 mb-2">What it means</p>
              <ul class="space-y-1 text-sm text-blue-900">
                <li>• Establish a shared source of truth for core operational information</li>
                <li>• Standardize input structures (what we capture) and output formats (how we present)</li>
                <li>• Make evaluation criteria explicit where today it is mostly experience-driven</li>
              </ul>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-blue-800 mb-2">Why it matters</p>
              <ul class="space-y-1 text-sm text-blue-900">
                <li>• Reduces ambiguity and rework across people and forums</li>
                <li>• Makes expertise more visible, consistent, and reusable</li>
                <li>• Creates the foundation required for reliable AI support</li>
              </ul>
            </div>

            <div class="bg-blue-200 border-l-4 border-blue-600 rounded p-3 mt-3">
              <p class="text-sm text-blue-900 italic font-medium">
                Without standardization, AI tends to amplify inconsistency rather than reduce it.
              </p>
            </div>
          </div>

          <!-- Layer 2: Prompt Enablement -->
          <div class="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">🧩</span>
              <h4 class="text-lg font-bold text-purple-900">Layer 2 — Prompt Enablement <span class="text-sm font-normal text-purple-700">(Human ↔ AI alignment)</span></h4>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-purple-800 mb-2">What it means</p>
              <ul class="space-y-1 text-sm text-purple-900">
                <li>• Translate standardized work into AI-readable instructions</li>
                <li>• Build a team-shared Prompt Library as "living manuals" for deliverables</li>
                <li>• Define not only what to ask, but also the expected output structure and quality checks</li>
              </ul>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-purple-800 mb-2">Why it matters</p>
              <ul class="space-y-1 text-sm text-purple-900">
                <li>• Enables AI to interpret our work reliably and consistently</li>
                <li>• Improves output consistency across deliverables and team members</li>
                <li>• Raises baseline capability without depending on individual writing styles</li>
              </ul>
            </div>

            <div class="bg-purple-200 border-l-4 border-purple-600 rounded p-3 mt-3">
              <p class="text-sm text-purple-900 italic font-medium">
                Prompts here are not "chat tricks" — they are structured interfaces between our work and AI.
              </p>
            </div>
          </div>

          <!-- Layer 3: Automation -->
          <div class="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">⚙️</span>
              <h4 class="text-lg font-bold text-green-900">Layer 3 — Automation <span class="text-sm font-normal text-green-700">(Human ↔ AI ↔ System alignment)</span></h4>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-green-800 mb-2">What it means</p>
              <ul class="space-y-1 text-sm text-green-900">
                <li>• Connect standardized prompts into repeatable workflows where scope is clear</li>
                <li>• Reduce manual handoffs, coordination overhead, and repeated restructuring</li>
                <li>• Apply automation selectively to high-impact workflow segments while staying compatible with existing systems</li>
              </ul>
            </div>

            <div class="mb-3">
              <p class="text-sm font-semibold text-green-800 mb-2">Why it matters</p>
              <ul class="space-y-1 text-sm text-green-900">
                <li>• Improves execution resilience, agility, and accuracy under dynamic conditions</li>
                <li>• Scales impact without rebuilding from scratch</li>
                <li>• Frees capacity for higher-value problem solving and decision support</li>
              </ul>
            </div>

            <div class="bg-green-200 border-l-4 border-green-600 rounded p-3 mt-3">
              <p class="text-sm text-green-900 italic font-medium">
                Automation follows clarity — it does not precede it.
              </p>
            </div>
          </div>
        </div>

        <!-- Mermaid Diagram -->
        <div class="bg-slate-50 rounded-2xl p-12 mb-6">
          <div class="flex justify-center">
            <div class="mermaid" style="width: 100%; max-width: 1200px;">
flowchart LR
    S["<b style='font-size:28px'>Layer 1: Standardization</b><br/><span style='font-size:20px'>Human ↔ Human alignment</span><br/><span style='font-size:17px'>Shared definitions · Input/Output structures</span>"]

    P["<b style='font-size:28px'>Layer 2: Prompt Enablement</b><br/><span style='font-size:20px'>Human ↔ AI alignment</span><br/><span style='font-size:17px'>Prompt library · Output consistency</span>"]

    A["<b style='font-size:28px'>Layer 3: Automation</b><br/><span style='font-size:20px'>Human ↔ AI ↔ System alignment</span><br/><span style='font-size:17px'>Repeatable workflows · Scoped augmentation</span>"]

    S ---|enables| P
    P ---|enables| A

    style S fill:#e0efff,stroke:#3b82f6,stroke-width:3px
    style P fill:#f3e8ff,stroke:#8b5cf6,stroke-width:3px
    style A fill:#ecfdf5,stroke:#10b981,stroke-width:3px,stroke-dasharray: 6 4
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <p class="text-indigo-900 font-medium">
            <strong>How the layers work together:</strong> Standardization enables reliable prompts. Reliable prompts enable scalable automation. Over time, automation outcomes feed back into clearer standards and stronger reuse.
          </p>
        </div>
      </div>

        <!-- 6. Execution Plan: Standardize → Prompt → Automate -->
        <div id="execution-plan" class="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
            <h2 class="text-2xl font-bold text-slate-900">Execution Plan: Standardize → Prompt → Automate</h2>
          </div>

          <!-- Entry Point: Team OKR Metrics -->
          <div class="mb-6">
            <h3 class="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Entry Point: Team OKR Metrics</h3>

            <p class="text-slate-700 leading-relaxed mb-3">
              Team OKR Metrics represent the most comprehensive and critical reflection of factory delivery and supply execution health across our manufacturing operations. They span supply commitment, production discipline, capacity readiness, labor fulfillment, and campus enablement — effectively covering the full scope of our operational responsibility.
            </p>

            <p class="text-slate-700 leading-relaxed mb-3">
              Because these metrics sit at the center of how performance is reviewed, risks are discussed, and priorities are adjusted throughout the year, the quality of their interpretation directly impacts execution quality.
            </p>

            <p class="text-slate-700 leading-relaxed mb-3">
              The goal of this phase is not to redefine targets, but to ensure that:
            </p>
            <ul class="space-y-2 text-slate-700 mb-3 ml-6">
              <li>• Everyone interprets each metric in the same way</li>
              <li>• Deviations are discussed on a consistent basis</li>
              <li>• Both humans and AI can reliably reason about metric movements</li>
            </ul>

            <p class="text-slate-700 leading-relaxed">
              By establishing a clear, shared metric reference in Q2, we make OKR execution more controllable, reviews more efficient, and downstream AI enablement feasible without ambiguity — while also improving cross-functional alignment and decision quality across the broader supply chain organization.
            </p>
          </div>
          <!-- Table A: Standardization Plan (Q2) -->
          <div class="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 class="text-lg font-bold text-blue-900 mb-2">Table A — Standardization Plan (Q1-Q2): Team OKR Metrics</h3>
            <p class="text-sm text-blue-700 mb-4"><strong>Objective:</strong> Create a shared metric reference so Team OKRs can be interpreted consistently across execution reviews, leadership discussions, and AI-assisted analysis.</p>

            <div class="overflow-x-auto">
              <table class="w-full text-sm bg-white rounded-lg">
                <thead class="bg-gradient-to-r from-blue-100 to-blue-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Team OKR Metric</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Actions</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Deliverables</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Ex-factory to Supply Commit Attainment %</td>
                    <td class="px-4 py-3 text-slate-600">Align calculation formula, weighting logic, and common misread scenarios</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry (definition + calculation notes)</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Production Schedule Adherence %</td>
                    <td class="px-4 py-3 text-slate-600">Align deviation criteria and measurement window</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + deviation interpretation notes</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Capacity Utilization</td>
                    <td class="px-4 py-3 text-slate-600">Align capacity baseline assumptions and utilization logic</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + capacity assumption notes</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Manufacturing Lead Time Achieve Rate</td>
                    <td class="px-4 py-3 text-slate-600">Align start/end points and inclusion rules</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + lead time criteria</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">BTO On-time Ship %</td>
                    <td class="px-4 py-3 text-slate-600">Align on-time criteria and exception handling</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + exception handling notes</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">CTO On-time Ship %</td>
                    <td class="px-4 py-3 text-slate-600">Align configuration impact to on-time targets</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + configuration impact notes</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Labor Fulfillment %</td>
                    <td class="px-4 py-3 text-slate-600">Align labor counting rules (regular / OT / temp)</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + labor counting rules</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Campus Readiness On-time %</td>
                    <td class="px-4 py-3 text-slate-600">Align readiness checkpoints and dependency handling</td>
                    <td class="px-4 py-3 text-slate-600">Metric reference entry + readiness dependency notes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Output -->
            <div class="mt-4 bg-blue-100 border-l-4 border-blue-500 rounded p-4">
              <p class="text-sm text-blue-900">
                <strong>Output (Q1-Q2):</strong> A Team OKR Metrics Reference that documents how each metric is calculated, interpreted, and discussed — forming the foundation for consistent execution reviews and subsequent AI prompt enablement.
              </p>
            </div>
          </div>

          <!-- Table B: Prompt Enablement Plan (Q3) -->
          <div class="bg-purple-50 rounded-xl p-6 mb-6">
            <h3 class="text-lg font-bold text-purple-900 mb-2">Table B — Prompt Enablement Plan (Q2-Q3): Team OKR Understanding & Upstream Signals</h3>
            <p class="text-sm text-purple-700 mb-4">Translating standardized work into AI-readable instructions for interpretation and insight generation</p>

            <div class="overflow-x-auto">
              <table class="w-full text-sm bg-white rounded-lg">
                <thead class="bg-gradient-to-r from-purple-100 to-purple-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/4">Knowledge Domain</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/2">Deliverables (Prompt Library)</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/4">Intended Use</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Team OKR Metrics & OKR Insight <span class="text-slate-500 font-normal">(metric definitions per Table A)</span></td>
                    <td class="px-4 py-3 text-slate-600">
                      <ul class="space-y-1 text-sm">
                        <li>• Metric explanation prompt</li>
                        <li>• Calculation reasoning prompt</li>
                        <li>• Risk & deviation interpretation prompt</li>
                        <li>• OKR insight & narrative drafting prompt</li>
                        <li>• "What changed / why / impact / action" prompt</li>
                      </ul>
                    </td>
                    <td class="px-4 py-3 text-slate-600">Help MO quickly understand metric movements and implications; support leadership-ready OKR and performance narratives</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">CTB & Demand Forecast Understanding</td>
                    <td class="px-4 py-3 text-slate-600">
                      <ul class="space-y-1 text-sm">
                        <li>• CTB logic explanation prompt</li>
                        <li>• Demand signal interpretation prompt</li>
                        <li>• Constraint & risk questioning prompts</li>
                      </ul>
                    </td>
                    <td class="px-4 py-3 text-slate-600">Help MO interpret upstream signals faster; improve risk awareness and scenario discussion; clarify this is for understanding & validation, not ownership</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Production Plan Review</td>
                    <td class="px-4 py-3 text-slate-600">
                      <ul class="space-y-1 text-sm">
                        <li>• Plan explanation prompt</li>
                        <li>• Assumption validation checklist prompt</li>
                        <li>• Scenario challenge prompts</li>
                      </ul>
                    </td>
                    <td class="px-4 py-3 text-slate-600">Review and challenge CM production plans; support structured discussion with stakeholders</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Note -->
            <div class="mt-4 bg-purple-100 border-l-4 border-purple-500 rounded p-4">
              <p class="text-sm text-purple-900">
                <strong>Note:</strong> This prompt work is not about replacing ownership. CTB and Demand Forecast are owned upstream; these prompts help MO understand and validate signals faster to improve execution responsiveness.
              </p>
            </div>
          </div>

          <!-- Table C: Automation Exploration Plan (Q4) -->
          <div class="bg-green-50 rounded-xl p-6">
            <h3 class="text-lg font-bold text-green-900 mb-2">Table C — Automation Exploration Plan (Q4): Selective, High-impact</h3>
            <p class="text-sm text-green-700 mb-4">Selectively connecting standardized prompts into repeatable workflows for high-value use cases</p>

            <div class="overflow-x-auto">
              <table class="w-full text-sm bg-white rounded-lg">
                <thead class="bg-gradient-to-r from-green-100 to-green-50">
                  <tr>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Automation Candidate</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Scope</th>
                    <th class="px-4 py-3 text-left font-semibold text-slate-700 w-1/3">Deliverables</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">OKR Insight & Narrative Generator</td>
                    <td class="px-4 py-3 text-slate-600">Generate draft OKR insights and narratives from standardized metrics and prompts</td>
                    <td class="px-4 py-3 text-slate-600">OKR insight draft output format; leadership-ready narrative template</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">Product-level Production Plan Simulation (not SKU-level)</td>
                    <td class="px-4 py-3 text-slate-600">Generate product-level plan for scenario discussion and simulation</td>
                    <td class="px-4 py-3 text-slate-600">Product-level simulation output; assumptions & constraint log format</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-4 py-3 font-medium text-slate-900">FDOS v1</td>
                    <td class="px-4 py-3 text-slate-600">MO database + standardized templates + navigation paths ready for usage</td>
                    <td class="px-4 py-3 text-slate-600">FDOS v1 (data foundation + key views)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Note -->
            <div class="mt-4 bg-green-100 border-l-4 border-green-500 rounded p-4">
              <p class="text-sm text-green-900">
                <strong>Note:</strong> Automation candidates are chosen based on clear scope, high interpretation cost, and demonstrated value from prompt work. The goal is to support decision-making and reduce manual reformatting—not to replace human judgment or ownership.
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  `;

  // Initialize Mermaid diagrams after DOM update
  setTimeout(() => {
    if (window.mermaid) {
      window.mermaid.run();
    }
  }, 100);

  // Smooth scroll and navigation highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('[id]');

  // Smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Highlight active section on scroll
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('bg-blue-50', 'text-blue-600', 'font-semibold');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('bg-blue-50', 'text-blue-600', 'font-semibold');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });
}

// Initialize the page on load
document.addEventListener('DOMContentLoaded', renderTeamAIStrategy);
