"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const mathData = {
    name: "Mathematics",
    image: "/assets/mathematics-dept.jpg",
    description: "Dive into the language of the universe through numbers and logic.",
    overview: "The Mathematics major focuses on the core areas of modern mathematics, including algebra, analysis, topology, and geometry. The program is designed to develop rigorous mathematical thinking and problem-solving skills, preparing students for research in pure and applied mathematics.  All students are required to complete a minimum of 131 credits to qualify for the Bachelor of Science (Research) degree.",
    tag: "Formal Sciences",
    colorClass: "text-red-600",
    bgClass: "bg-red-50",
    // Extracted from coreSemesters
    majorSemesters: [
        {
            title: "Semester 4",
            courses: [
                {
                    code: "UM 204",
                    name: "Introduction to Basic Analysis",
                    credits: "3:1",
                    instructor: "Muna Naik",
                    isElective: false,
                    description: "Basic notions from set theory, countable and uncountable sets. Metric spaces: definition and examples, basic topological notions. The topology of Rn: topology induced by norms, the Heine-Borel theorem, connected sets. Sequences and series: essential definitions, absolute versus conditional convergence of series, some tests of convergence of series. Continuous functions: properties, the sequential and the open- set characterizations of continuity, uniform continuity. Differentiation in one variable. The Riemann integral: formal definitions and properties, continuous functions and integration, the Fundamental Theorem of Calculus. Uniform convergence: definition, motivations and examples, uniform convergence and integration, the Weierstrass Approximation Theorem.",
                    instructorProfile: "https://math.iisc.ac.in/2023/10/31/newfaculty-muna.html",
                    books: [
                        "Tao, T. 2014., Analysis I, 3rd edition, Texts and Readings in Mathematics, vol. 37, Hindustan Book Agency",
                        "Tao, T. 2014., Analysis II, 3rd edition, Texts and Readings in Mathematics, vol. 38, Hindustan Book Agency",
                        "Apostol, T. M., Mathematical Analysis, 2nd edition, Narosa"
                    ]
                },
                {
                    code: "UM 205",
                    name: "Introduction to Algebraic Structures",
                    credits: "3:1",
                    instructor: "Abhishek Banerjee",
                    isElective: false,
                    description: "Set theory: equivalence classes, partitions, posets, axiom of choice/Zorn’s lemma, countable and uncountable sets. Combinatorics: induction, pigeonhole principle, inclusion-exclusion, Möbius inversion formula, recurrence relations. Number theory: Divisibility and Euclids algorithm, Pythagorean triples, solving cubics, Infinitude of primes, arithmetic functions, Fundamental theorem of arithmetic, Congruences, Fermat’s little theorem and Euler’s theorem, ring of integers modulo n, factorisation of polynomials, algebraic and transcendental numbers. Graph theory: Basic definitions, trees, Eulerian tours, matchings, matrices associated to graphs. Algebra: groups, permutations, group actions, Cayley’s theorem, dihedral groups, introduction to rings and fields.",
                    instructorProfile: "https://math.iisc.ac.in/~library/abhishek-banerjee.html",
                    books: [
                        "L. Childs, A Concrete Introduction to Higher Algebra, 3rd edition, Springer-Verlag",
                        "M. A. Armstrong, Groups and Symmetry, Springer-Verlag",
                        "Miklos Bona, A Walk Through Combinatorics: An Introduction to Enumeration and Graph Theory, World Scientific",
                        "D. M. Burton., Elementary Number Theory, McGraw Hill",
                        "Niven, Zuckerman, H. S. and Montgomery, H. L., An Introduction to the Theory of Numbers, 5th edition, Wiley Student Editions",
                        "Fraleigh, G., A First Course in Abstract Algebra, 7th edition, Pearson"
                    ]
                },
                {
                    code: "-",
                    name: "Humanities ** / Elective",
                    customNameRender: (
                        <div className="flex flex-wrap items-center gap-1 font-medium text-gray-900">
                            <a href="/assets/Humanities%20Courses.%20.pdf" target="_blank" className="text-gray-900 hover:text-blue-600 hover:underline transition-colors" onClick={(e) => e.stopPropagation()}>Humanities **</a>
                            <span className="text-gray-400">/</span>
                            <button onClick={() => document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-900 hover:text-blue-600 hover:underline transition-colors">Elective</button>
                        </div>
                    ),
                    credits: "9-12",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "15-21",
            ReducedLoad: "15-17",
            EnhancedLoad: "15-21",
        },
        {
            title: "Semester 5",
            courses: [
                {
                    code: "MA 200",
                    name: "Multivariable Calculus",
                    credits: "3:1",
                    instructor: "E K Narayanan",
                    isElective: false,
                    description: "Prerequisite: UM 204. Functions on Rn, directional derivatives, total derivative, higher order derivatives and Taylor series. The inverse and implicit function theorem, Integration on Rn, differential forms on Rn, closed and exact forms. Green’s theorem, Stokes’ theorem and the Divergence theorem.",
                    instructorProfile: "https://math.iisc.ac.in/~naru/",
                    books: [
                        "Munkres, Analysis on manifolds (Primary text)",
                        "Spivak, Calculus on manifolds",
                        "Rudin, Principle of Mathematical Analysis",
                        "J. H. Hubbard and B.B. Hubbard, Vector Calculus, Linear algebra and differential forms"
                    ]
                },
                {
                    code: "MA 212",
                    name: "Algebra I",
                    credits: "3:0",
                    instructor: "Shaunak Deo",
                    isElective: false,
                    description: "Prerequisite: UM 205. Part A: Group theory - Basic definitions, examples, Cyclic groups and its subgroups, Homomorphisms, quotient groups, isomorphism theorems, Group actions, Sylow’s theorems, simplicity of An for n≥5, Direct and semi-direct products, Solvable and nilpotent groups, Free groups. Part B: Ring theory - Basic definitions, examples, Ring homomorphisms, quotient rings, properties of ideals, Localization, ring of fractions, The Chinese remainder theorem, Euclidean domains, principal ideal domains, unique factorization domains, Polynomial rings over fields, irreducibility criteria. Part C: Module theory - Basic definitions and examples, Homomorphisms and quotient modules, Direct sums and free modules, Tensor product of modules, Structure theorem of modules over PID’s and consequences, Noetherian rings and modules, Hilbert basis theorem.",
                    instructorProfile: "https://math.iisc.ac.in/2020/11/20/new-faculty.html",
                    books: [
                        "Artin, Algebra, M. Prentice-Hall of India, 1994",
                        "Dummit, D. S. and Foote, R. M., Abstract Algebra, McGraw-Hill, 1986",
                        "Lang, S., Algebra (3rd Ed.), Springer, 2002",
                        "Hungerford, Algebra, Graduate Texts in Mathematics 73, Springer Verlag, 1974",
                        "Nathan Jacobson, Basic Algebra I & II, Dover, 2009",
                        "Nathan Jacobson, Lectures in Abstract Algebra I, II & III, Graduate Text in Mathematics, Springer Verlag, 1951"
                    ]
                },
                {
                    code: "MA 219",
                    name: "Linear Algebra",
                    credits: "3:1",
                    instructor: "Apoorva Khare",
                    isElective: false,
                    description: "Prerequisite: UM 102/UMA 102. Vector spaces: Definition, Basis and dimension, Direct sums. Linear transformations: Definition, Rank-nullity theorem, Algebra of linear transformations, Dual spaces, Matrices. Systems of linear equations: Elementary theory of determinants, Cramer’s rule. Eigenvalues and eigenvectors, the characteristic polynomial, the Cayley- Hamilton Theorem, the minimal polynomial, algebraic and geometric multiplicities, Diagonalization, The Jordan canonical form. Symmetry: Group of motions of the plane, Discrete groups of motion, Finite groups of SO(3). Bilinear forms: Symmetric, skew symmetric and Hermitian forms, Sylvester’s law of inertia, Spectral theorem for the Hermitian and normal operators on finite dimensional vector spaces.",
                    instructorProfile: "https://math.iisc.ac.in/~khare/",
                    books: [
                        "Artin, M., Algebra, Prentice Hall of India, 1994",
                        "Halmos, P., Finite dimensional vector spaces, Springer-Verlag (UTM), 1987",
                        "Hoffman, K. and Kunze, R., Linear Algebra (2nd Ed.), Prentice-Hall of India, 1992"
                    ]
                },
                {
                    code: "MA 231",
                    name: "Topology",
                    credits: "3:1",
                    instructor: "Siddhartha Gadgil",
                    isElective: false,
                    description: "Open and closed sets, continuous functions, Metric topology, Product topology, Connectedness and path connectedness, Compactness, Countability axioms, Separation axioms, Complete metric spaces, Quotient topology, Topological groups, Orbit spaces, Urysohn’s lemma, Metrizability, Baire Category theorem. Note: The course MA 231 can be deferred to VII semester, with the approval of the subject coordinator.",
                    instructorProfile: "https://math.iisc.ac.in/~gadgil/",
                    books: [
                        "Armstrong, M. A., Basic Topology, Springer (India), 2004",
                        "Munkres, J. R., Topology, Pearson Education, 2005",
                        "Viro, O.Ya., Ivanov, O.A., Netsvetaev, N., and Kharlamov, V.M., Elementary Topology: Problem Textbook, AMS, 2008"
                    ]
                },
                {
                    code: "-",
                    name: "Humanities ** / Elective",
                    customNameRender: (
                        <div className="flex flex-wrap items-center gap-1 font-medium text-gray-900">
                            <a href="/assets/Humanities%20Courses.%20.pdf" target="_blank" className="text-gray-900 hover:text-blue-600 hover:underline transition-colors" onClick={(e) => e.stopPropagation()}>Humanities **</a>
                            <span className="text-gray-400">/</span>
                            <button onClick={() => document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-900 hover:text-blue-600 hover:underline transition-colors">Elective</button>
                        </div>
                    ),
                    credits: "3-6",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
        {
            title: "Semester 6",
            courses: [
                {
                    subCourses: [
                        {
                            code: "MA 213",
                            name: "Algebra II",
                            credits: "3:1",
                            instructor: "R Venkatesh",
                            isElective: false,
                            description: "Prerequisite: MA 212. Part A: Field theory - Theory of symmetric polynomials – Newton’s theorem, Basic theory of field extensions, Algebraic and transcendental extensions (and transcendence degree), Construction with straight edge and compass; Gauss-Wantzel theorem, Algebraic closure – Steinitz’s theorem, Splitting fields, normal extensions, Separable extensions, Finite fields: construction, subfields, Frobenius, Primitive element theorem, Dedekind-Artin linear independence of (semi)group characters. Part B: Galois theory - Fundamental theorem of Galois theory (including Normal Basis Theorem), Composite extensions and Galois group, Galois group of cyclotomic extensions, finite fields, Galois groups of polynomials, Fundamental theorem of Algebra, Solvable and radical extensions, insolvability of a quintic.",
                            instructorProfile: "https://math.iisc.ac.in/~library/r-venkatesh.html",
                            books: [
                                "Artin, M., Algebra, Prentice Hall of India, 1994",
                                "Dummit, D. S. and Foote, R. M., Abstract Algebra, McGraw-Hill, 1986",
                                "Lang, S., Algebra (3rd Ed.), Springer, 2002",
                                "Jonathan Alperin and Rowen Bell, Groups and Representations, Graduate Texts in Mathematics 162, Springer Verlag, 1995",
                                "Hungerford, Algebra, Graduate Texts in Mathematics 73, Springer Verlag, 1974",
                                "Galois Theory, Artin, E., University of Notre Dame Press, 1944",
                                "Nathan Jacobson, Basic Algebra I & II, Dover, 2009",
                                "Nathan Jacobson, Lectures in Abstract Algebra I, II & III, Graduate Text in Mathematics, Springer Verlag, 1951"
                            ]
                        },
                        {
                            code: "MA 222",
                            name: "Measure & Integration",
                            credits: "3:1",
                            instructor: "Harish Seshadri",
                            isElective: false,
                            description: "Prerequisite: UM 204. Construction of Lebesgue measure, Measurable functions, Lebesgue integration, Abstract measure and abstract integration, Monotone convergence theorem, Dominated convergence theorem, Fatou’s lemma, Comparison of Riemann integration and Lebesgue integration, Product sigma algebras, Product measures, Sections of measurable functions, Fubini’s theorem, Signed measures and Radon-Nikodym theorem, Lp-spaces, Characterization of continuous linear functionals on Lp - spaces, Change of variables, Complex measures, Riesz representation theorem.",
                            instructorProfile: "https://math.iisc.ac.in/~harish/",
                            books: [
                                "Royden, H. L., Real Analysis, Macmillan, 1988",
                                "Folland, G.B., Real Analysis: Modern Techniques and their Applications (2nd Ed.), Wiley",
                                "Hewitt, E. and Stromberg, K., Real and Abstract Analysis, Springer, 1969"
                            ]
                        }
                    ]
                },
                {
                    code: "MA 224",
                    name: "Complex Analysis",
                    credits: "3:1",
                    instructor: "Gautam Bharali",
                    isElective: false,
                    description: "Prerequisite: UM 204. Complex numbers, holomorphic and analytic functions, Cauchy-Riemann equations, Cauchy’s integral formula, Liouville’s theorem and proof of fundamental theorem of algebra, the maximum-modulus principle. Isolated singularities, residue theorem, Argument Principle. Mobius transformations, conformal mappings, Schwarz lemma, automorphisms of the disc and complex plane. Normal families and Montel’s theorem. The Riemann mapping theorem. If time permits - analytic continuation and/or Picard’s theorem.",
                    instructorProfile: "https://math.iisc.ac.in/~bharali/",
                    books: [
                        "Ahlfors, L. V., Complex Analysis, McGraw-Hill, 1979",
                        "Conway, J. B., Functions of One Complex Variable, Springer-Verlag, 1978",
                        "Stein, E.M, and Shakarchi, R., Complex Analysis, Princeton University Press, 2003"
                    ]
                },
                {
                    code: "MA 241",
                    name: "Ordinary Differential Equations",
                    credits: "3:1",
                    instructor: "Vamsi Pritham Pingali",
                    isElective: false,
                    description: "Prerequisite: UM 204. Basics concepts: Introduction and examples through physical models, First and second order equations, general and particular solutions, linear and nonlinear systems, linear independence, solution techniques. Existence and Uniqueness Theorems: Peano’s and Picard’s theorems, Grownwall’s inequality, Dependence on initial conditions and associated flows. Linear system: The fundamental matrix, stability of equilibrium points, Phase- plane analysis, Sturm-Liouvile theory. Nonlinear system and their stability: Lyapunov’s method, Non-linear Perturbation of linear systems, Periodic solutions and Poincare- Bendixson theorem.",
                    instructorProfile: "https://math.iisc.ac.in/~library/vamsi-pritham-pingali.html",
                    books: [
                        "Hartman, Ordinary Differential Equations, P. Birkhaeuser, 1982",
                        "Coddington, E. A. and Levinson, N., Theory of Ordinary Differential Equations, Tata McGraw-Hill, 1972",
                        "Perko, L., Differential Equations and Dynamical Systems, Springer-Verlag, 1991"
                    ]
                },
                {
                    code: "-",
                    name: "Humanities ** / Elective",
                    customNameRender: (
                        <div className="flex flex-wrap items-center gap-1 font-medium text-gray-900">
                            <a href="/assets/Humanities%20Courses.%20.pdf" target="_blank" className="text-gray-900 hover:text-blue-600 hover:underline transition-colors" onClick={(e) => e.stopPropagation()}>Humanities **</a>
                            <span className="text-gray-400">/</span>
                            <button onClick={() => document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-900 hover:text-blue-600 hover:underline transition-colors">Elective</button>
                        </div>
                    ),
                    credits: "6-9",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
        {
            title: "Semester 7",
            courses: [
                {
                    code: "-",
                    name: "Elective",
                    credits: "16:0",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },

            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
        {
            title: "Semester 8",
            courses: [
                {
                    code: "UM 400",
                    name: "Project II",
                    credits: "0:13",
                    instructor: "Faculty",
                    isElective: false,
                    disableDetails: true,
                },
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
    ],
    customMastersContent: (
        <details className="group">
            <summary className="list-none cursor-pointer outline-none">
                <div className="flex items-start justify-between gap-4 py-2 hover:bg-gray-50 rounded-lg -mx-2 px-2 transition-colors">
                    <div className="text-lg text-gray-700 leading-relaxed">
                        <p>
                            Students have the option to continue for the <strong>Master of Science (MS) degree</strong> after completing four years of the Bachelor of Science (BS).
                        </p>
                        <div className="mt-2 text-blue-600 font-bold text-base hover:underline select-none">
                            <span className="inline-flex items-center group-open:hidden">
                                View 5th Year Requirements
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                            <span className="hidden group-open:inline-flex items-center">
                                Hide 5th Year Requirements
                                <svg className="w-4 h-4 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                        </div>
                    </div>
                    <div className="text-gray-400 mt-1 transition-transform duration-300 group-open:rotate-180">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </summary>

            <div className="mt-6 pt-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                <div className="space-y-8 text-gray-700">

                    {/* Mandatory Courses */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg border-b border-gray-200 pb-2">Mandatory Courses</h4>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200 text-gray-900">
                                    <tr>
                                        <th className="py-2 px-4 font-bold w-1/4">Course Code</th>
                                        <th className="py-2 px-4 font-bold">Course Name</th>
                                        <th className="py-2 px-4 font-bold w-24">Term</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr>
                                        <td className="py-2 px-4 font-medium">MA 389A (1:0)</td>
                                        <td className="py-2 px-4">Seminar on topics in mathematics I</td>
                                        <td className="py-2 px-4 text-blue-600 font-medium">AUG</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">MA 389B (1:0)</td>
                                        <td className="py-2 px-4">Seminar on topics in mathematics II</td>
                                        <td className="py-2 px-4 text-orange-600 font-medium">JAN</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">MA 213 (3:1)</td>
                                        <td className="py-2 px-4">Algebra II</td>
                                        <td className="py-2 px-4 text-orange-600 font-medium">JAN</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">MA 222 (3:1)</td>
                                        <td className="py-2 px-4">Analysis II</td>
                                        <td className="py-2 px-4 text-orange-600 font-medium">JAN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Soft Core Courses */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg border-b border-gray-200 pb-2">Soft Core Requirement</h4>
                        <p className="mb-4 text-sm">Students must complete <strong>any 3 courses</strong> from the list below:</p>
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 223 (3:0): Functional Analysis</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 232 (3:0): Intro to Algebraic Topology</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 242 (3:0): Partial Differential Equations</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 361 (3:0): Probability Theory</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 235 (3:0): Intro to Differentiable Manifolds</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 220 (3:0): Rep. Theory of Finite Groups</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 312 (3:0): Commutative Algebra</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 313 (3:0): Algebraic Number Theory</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 262 (3:0): Intro to Stochastic Processes</div>
                            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>MA 321 (3:0): Analysis III</div>
                        </div>
                    </div>

                    {/* Remaining Credits */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg border-b border-gray-200 pb-2">Remaining Credits</h4>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-gray-800">
                            <p className="font-bold mb-1">13 Credits Requirement</p>
                            <p>
                                The remaining <strong>13 credits</strong> could be comprised of:
                            </p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>Master’s projects A & B</li>
                                <li>Courses offered by any department</li>
                                <li>A combination of projects and courses</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </details>
    ),
    staff: {
        coordinators: ["Vamsi Pritham Pingali", "Purvi Gupta"],
        instructorsUg: ["Manpreet Singh", "Sathish Kumar"],
        teachingAssistants: []
    },
    electives: [
        [
            { code: "MA 213", name: "Algebra II", credits: "3:1" },
            { code: "MA 222", name: "Analysis II", credits: "3:1" },
            { code: "MA 218", name: "Number Theory", credits: "3:0" },
            { code: "MA 220", name: "Representation theory of Finite groups", credits: "3:0" },
            { code: "MA 222A", name: "Topics in Measure Theory", credits: "3:0" },
            { code: "MA 223", name: "Functional Analysis", credits: "3:0" },
            { code: "MA 232", name: "Introduction to Algebraic Topology", credits: "3:0" },
            { code: "MA 235", name: "Introduction to differentiable manifolds", credits: "3:0" },
            { code: "MA 237", name: "Introduction to Tilings", credits: "3:0" },
            { code: "MA 242", name: "Partial Differential Equations", credits: "3:0" },
            { code: "MA 262", name: "Introduction to Stochastic Processes", credits: "3:0" },
            { code: "MA 305", name: "Analysis on Lie Groups", credits: "3:0" },
            { code: "MA 312", name: "Commutative Algebra", credits: "3:0" },
            { code: "MA 313", name: "Algebraic Number Theory", credits: "3:0" },
            { code: "MA 315", name: "Lie Algebra and their representations", credits: "3:0" },
            { code: "MA 319", name: "Algebraic Combinatorics", credits: "3:0" },
            { code: "MA 319A", name: "Schubert calculus", credits: "3:0" },
            { code: "MA 321", name: "Analysis III", credits: "3:0" },
            { code: "MA 326", name: "Fourier Analysis", credits: "3:0" },
            { code: "MA 333", name: "Riemannian Geometry", credits: "3:0" },
            { code: "MA 339", name: "Geometric Analysis", credits: "3:0" },
            { code: "MA 340", name: "Advanced Functional Analysis", credits: "3:0" },
            { code: "MA 341", name: "Matrix Analysis and Positivity", credits: "3:0" },
            { code: "MA 347A", name: "Topics in Finite Element Methods", credits: "3:1" },
            { code: "MA 361", name: "Probability theory", credits: "3:0" },
            { code: "MA 376", name: "Extremal Combinatorics", credits: "3:0" },
            { code: "MA 379", name: "Linear Algebraic Groups", credits: "3:0" },
            { code: "MA 380", name: "Introduction to Complex Dynamics", credits: "3:0" },
            { code: "UB 205", name: "Introductory Physiology", credits: "2:0" },
            { code: "UB 206", name: "Experiments in Biochemistry and Physiology", credits: "0:2" },
            { code: "UB 207", name: "General Biochemistry", credits: "2:0" },
            { code: "UB 301L", name: "Experiments in Microbiology", credits: "0:1" },
            { code: "UB 302", name: "Developmental Biology", credits: "2:0" },
            { code: "UB 303", name: "Experiments in Molecular Biophysics", credits: "0:1" },
            { code: "UB 304", name: "Experiments in Neurobiology", credits: "0:1" },
            { code: "UB 307L", name: "Experiments in Ecology and Evolution", credits: "0:2" },
            { code: "UB 309", name: "Genetics", credits: "2:0" },
            { code: "UC 207L", name: "Instrumental Methods of Chemical Analysis Laboratory", credits: "0:1" },
            { code: "UC 207T", name: "Instrumental Methods of Chemical Analysis", credits: "2:0" },
            { code: "UC 303", name: "Basic Organometallic Chemistry", credits: "3:0" },
            { code: "UC 402", name: "Molecular Spectroscopy,Dynamics and Photochemistry", credits: "3:0" },
            { code: "UCY 204", name: "THERMODYNAMICS AND ELECTROCHEMISTRY", credits: "3:0" },
            { code: "UCY 205", name: "INORGANIC CHEMISTRY : CHEMISTRY OF ELEMENTS", credits: "3:0" },
            { code: "UCY 206", name: "BASIC ORGANIC REACTIONS", credits: "3:0" },
            { code: "UCY 301", name: "ORGANIC AND INORGANIC CHEMISTRY LABORATORY", credits: "0:3" },
            { code: "UEES 206L", name: "Experimental Methods in Environmental Chemistry Lab", credits: "0:1" },
            { code: "UEES 206T", name: "Experimental Methods in Environmental Chemistry", credits: "2:0" },
            { code: "UEES 207", name: "GEOPHYSICAL PROCESSES", credits: "3:0" },
            { code: "UEES 208L", name: "INTRODUCTION TO MINERALOGY AND PETROLOGY LAB", credits: "0:1" },
            { code: "UEES 208T", name: "INTRODUCTION TO MINERALOGY AND PETROLOGY", credits: "2:0" },
            { code: "UEES 301L", name: "Introduction to Earth System Laboratory", credits: "0:1" },
            { code: "UEES 301T", name: "Introduction to Earth System", credits: "2:0" },
            { code: "UEES 313L", name: "Lab: Experimental Methods In Environmental Engineering", credits: "0:1" },
            { code: "UEES 313T", name: "Experimental methods in Environmental Engineering", credits: "2:0" },
            { code: "UENG 101L", name: "Algorithms And Programming Laboratory", credits: "0:1" },
            { code: "UENG 101T", name: "Algorithms And Programming", credits: "3:0" },
            { code: "UENG 102L", name: "Introduction to Electrical and Electronics Engineering Laboratory", credits: "0:1" },
            { code: "UENG 102T", name: "Introduction To Electrical And Electronics Engineering", credits: "3:0" },
            { code: "UENG 206", name: "Introduction to Mechanical Engineering", credits: "3:0" },
            { code: "UES 314", name: "DESIGN PRINCIPLES IN ENVIRONMENTAL ENGINEERING", credits: "3:0" },
            { code: "UI 202", name: "In-Semester Project", credits: "0:1" },
            { code: "UI 301", name: "In-semester Project", credits: "0:1" },
            { code: "UI 302", name: "In-Semester Project", credits: "0:1" },
            { code: "UMC 102", name: "Computer Systems", credits: "3:0" },
            { code: "UMC 103", name: "Discrete Mathematics", credits: "2:0" },
            { code: "UMC 201", name: "Data Structures and Algorithms", credits: "3:1" },
            { code: "UMC 202", name: "Numerical Methods", credits: "3:1" },
            { code: "UMC 203", name: "Introduction to Artificial Intelligence and Machine Learning", credits: "3:1" },
            { code: "UMC 205", name: "Automata and Computability", credits: "3:1" },
            { code: "UMC 301", name: "Applied Data Science and Artificial Intelligence", credits: "3:1" },
            { code: "UMT 202L", name: "Structure of Materials Laboratory", credits: "0:1" },
            { code: "UMT 202T", name: "Structure of Materials", credits: "2:0" },
            { code: "UMT 203", name: "Materials Thermodynamics", credits: "3:0" },
            { code: "UMT 205", name: "Mechanical Properties of Materials", credits: "3:0" },
            { code: "UMT 301", name: "Materials Kinetics", credits: "3:0" },
            { code: "UMT 302L", name: "Materials Processing Lab", credits: "0:1" },
            { code: "UMT 302T", name: "Introduction To Materials Processing", credits: "2:0" },
            { code: "UMT 309", name: "Functional Properties of Materials", credits: "3:0" },
            { code: "UMT 310L", name: "Introduction to Materials Manufacturing Laboratory", credits: "0:1" },
            { code: "UMT 310T", name: "Introduction to Materials Manufacturing", credits: "2:0" },
            { code: "UMT 311", name: "Functional Property Characterization Laboratory", credits: "0:1" },
            { code: "UMT 312L", name: "Mechanical Testing Lab", credits: "0:1" },
            { code: "UMT 312T", name: "Mechanical Testing And Failure Of Materials", credits: "2:0" },
            { code: "UMT 401", name: "Functional Properties of Materials II", credits: "3:0" },
            { code: "UP 202L", name: "Intermediate Mechanics, Oscillations and Waves Laboratory", credits: "0:1" },
            { code: "UP 202T", name: "Intermediate Mechanics, Oscillations and Waves", credits: "2:0" },
            { code: "UP 203L", name: "Intermediate Electromagnetism and the Quantum Physics of Radiation Laboratory", credits: "0:1" },
            { code: "UP 203T", name: "Intermediate Electromagnetism and the Quantum Physics of Radiation", credits: "2:0" },
            { code: "UP 204L", name: "Intermediate Thermal Physics and the Physics of Materials Laboratory", credits: "0:1" },
            { code: "UP 204T", name: "Intermediate Thermal Physics and the Physics of Materials", credits: "2:0" },
        ]
    ]
};

export default function MathematicsPage() {
    return <DepartmentTemplate {...mathData} />;
}
