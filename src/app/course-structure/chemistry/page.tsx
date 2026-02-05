"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const chemistryData = {
    name: "Chemistry",
    image: "/assets/chemistry-dept.jpg",
    description: "Study matter, its properties, composition, and reactivity.",
    overview: "The Chemistry major offers a rigorous journey through the fundamental principles of chemical sciences. From understanding atomic structures to complex organic synthesis and physical chemistry, students are equipped with both theoretical knowledge and practical laboratory skills. The curriculum includes specialized electives and a significant research component. All students are required to complete a minimum of 131 credits to qualify for the Bachelor of Science (Research) degree.",
    tag: "Chemical Sciences",
    colorClass: "text-purple-600",
    bgClass: "bg-purple-50",
    staff: {
        coordinators: ["Dr. Anoop Thomas", "Garima Jindal"],
        instructorsUg: ["Tanaya Kundu", "Mamata Mahato", "Sachind Prabha", "Siddhartha De"],
        teachingAssistants: ["Guruprasad B B", "Mahitha M K", "Akshata Hegde"]
    },
    // Extracted from coreSemesters
    majorSemesters: [
        {
            title: "Semester 4",
            courses: [
                {
                    code: "UCY 204",
                    name: "Thermodynamics and Electrochemistry",
                    credits: "3:0",
                    instructor: "Naga Phani Aetukuri",
                    isElective: false,
                    description: "Equations of state, Laws of thermodynamics, State and path functions, Intensive and extensive quantities, Energy, Enthalpy, Specific heat, Entropy; Application to engines; Free energy; Chemical potential, Activity and activity coefficient; Mixtures, and chemical equilibrium, Solution thermodynamics; Phase transitions; Unary and binary phase diagrams; Introductory Electrochemistry, Electrode thermodynamics, Nernst equation and electrochemical cells; Electrode kinetics, Transition state theory and Butler-Volmer equation; Mass transfer and cyclic voltammograms; Interfacial phenomena and Electrical double layers; Electrolyte theory, Debye-Hückel theory and conductivity of electrolytes.",
                    instructorProfile: "https://sscu.iisc.ac.in/aetukuri/",
                    books: [
                        "D.A Mc Quarrie, and J.D Simon, Physical Chemistry – A Molecular approach",
                        "R.J Silbey, R.A. Alberty, and M.G. Bawendi, Physical Chemistry",
                        "R.S. Berry, S.A. Rice, and J. Ross, Physical Chemistry",
                        "E. Fermi, Thermodynamics",
                        "D.R. Crow, Principles and Applications of Electrochemistry",
                        "A.J. Bard and L.R. Faulkner, Electrochemical Methods: Fundamentals and Applications",
                        "J. Newman and K.E. Thomas-Alyea, Electrochemical Systems",
                        "P.T. Kissinger and W.R. Heineman, Laboratory Methods in Electroanalytical Chemistry"
                    ]
                },
                {
                    code: "UCY 205",
                    name: "Inorganic Chemistry: Chemistry Of Elements",
                    credits: "3:0",
                    instructor: "Susanta Hazra",
                    isElective: false,
                    description: "Main Group: Hydrogen and its compounds – ionic, covalent, and metallic hydrides, hydrogen bonding; chemistry of lithium, beryllium, boron, nitrogen, oxygen and halogen groups. MOT - polyatomic molecules (distortion), bioinorganic chemistry: s and p-block elements in biology (Na, Ca, Mg, P, Cl). Chemistry of lanthanides and actinides. Chemistry of d-block elements: MOT, descriptive chemistry of metals: periodic trends, chemistry of various oxidation states of transition metals, oxidation states and EMFs of groups.",
                    instructorProfile: "https://ipc.iisc.ac.in/sh.php",
                    books: [
                        "D. F. Shriver and P. W. Atkins, Inorganic Chemistry (4th edition)",
                        "J. E. Huheey, E. A. Keiter and R. L. Keiter, Inorganic Chemistry: Principles of Structure and Reactivity",
                        "N. N. Greenwood and A. Earnshaw, Chemistry of the Elements",
                        "F. A. Cotton and G. Wilkinson, Advanced Inorganic Chemistry"
                    ]
                },
                {
                    code: "UCY 206",
                    name: "Basic Organic Reactions",
                    credits: "3:0",
                    instructor: "Santanu Mukherjee",
                    isElective: false,
                    description: "Acids and Bases: Effect of Structure, Kinetic and Thermodynamic Acidity, General and Specific Acid/ Base Catalysis; Reactions of Carbon-Carbon Multiple Bonds: Addition of Halogens, Hydrogen Halides and Inter - Halogen Compounds, Hydration, Epoxidation, Dihydroxylation, Ozonolysis, Cyclopropanation, Hydrogenation; Reactions of Carbonyl Compounds: Addition to Carbonyls, Oxidation, Reduction, Rearrangements and their Applications, C–C Bond Forming Reactions involving Carbonyls; Introduction to Pericyclic Reactions: Cycloadditions, Electrocyclic Reactions, Sigmatropic Rearrangement and Group Transfer Reactions. Introduction to Organometallic Reagents: Grignard Reagents, Organolithium, Organocopper and Organozinc Compounds.",
                    instructorProfile: "https://orgchem.iisc.ac.in/sm/",
                    books: [
                        "R. O. C. Norman, and J. M. Coxon, 1993 Principles of Organic Synthesis, 3rd edition",
                        "W. Carruthers and I. Coldham, Modern Methods of Organic Synthesis, 4th edition, Cambridge University Press",
                        "J. Clayden, N. Greeves, S. Warren and P. Wothers, Organic Chemistry, Oxford University Press",
                        "F.A. Carey and J.R. Sundberg, Advanced Organic Chemistry, Part A & Part B, 5th edition, Springer"
                    ]
                },
                {
                    code: "UC 207",
                    name: "Instrumental Methods of Chemical Analysis",
                    credits: "2:1",
                    instructor: "Veerabhadrarao Kaliginedi and Anoop Thomas",
                    isElective: false,
                    instructorProfile: "https://ipc.iisc.ac.in/vk_lab/",
                    instructors: [
                        { name: "Veerabhadrarao Kaliginedi", profile: "https://ipc.iisc.ac.in/vk.php" },
                        { name: "Anoop Thomas", profile: "https://ipc.iisc.ac.in/at.php" }
                    ],
                    description: "Propagation of errors in measurement, statistical analysis of data, etc., Separation Techniques: extraction and separation, principles of chromatography, Electroanalytical Techniques: voltammetry and its variants, ion selective electrodes and electrochemical techniques for analysis, Spectroscopic Techniques: atomic absorption/emission, electronic, fluorescence, and vibrational (IR and Raman), Spectroscopy: basic principles, operation and application to chemical problems, NMR Spectroscopy, Basic principles and operation, Application of one dimensional NMR for identification of chemicals, Mass Spectrometry: Principles and Applications.",
                    books: [
                        "Skoog, Fundamentals of Analytical Chemistry, 8th edition, West, Holler and Crouch"
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
                    credits: "5:9",
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
                    code: "CD 211",
                    name: "Physical Chemistry I: Quantum Chemistry & Group Theory",
                    credits: "3:0",
                    instructor: "Sujit Das and Upendra Harbola",
                    isElective: false,
                    instructorProfile: "https://mrc.iisc.ac.in/people/faculty/sujit-das/",
                    instructors: [
                        { name: "Sujit Das", profile: "https://mrc.iisc.ac.in/sujit-das/" },
                        { name: "Upendra Harbola", profile: "https://ipc.iisc.ac.in/uh.php" }
                    ],
                    description: "Postulates of Quantum Mechanics and introduction to operators; Exactly solvable problems Perturbational and Variational Methods, Hückel model, Many electron Atoms, Slater determinants, Hartree-Fock Variational method for atoms; Molecular Quantum Mechanics, Symmetry and Group theory, Point Groups, Reducible and Irreducible Representations (IR), Great Orthogonality theorem, Projection operators, applications to molecular orbitals and normal modes of vibration and selection rules in spectroscopy.",
                    books: [
                        "I. N. Levine, Quantum Chemistry",
                        "D. Griffiths, Introduction to Quantum Mechanics",
                        "F. A. Cotton, Chemical Applications of Group Theory"
                    ]
                },
                {
                    code: "CD 212",
                    name: "Inorganic Chemistry: Main Group & Coordination",
                    credits: "3:0",
                    instructor: "Abhishake Mondal and Geetharani Kalimuthu",
                    isElective: false,
                    instructorProfile: "https://sscu.iisc.ac.in/people/faculty/abhishake-mondal/",
                    instructors: [
                        { name: "Abhishake Mondal", profile: "https://sscu.iisc.ac.in/mondal/" },
                        { name: "Geetharani Kalimuthu", profile: "https://ipc.iisc.ac.in/kgr.php" }
                    ],
                    description: "Unusual bonding in hyper- and low valent compounds. Multiple bonding in main group compounds. Chains, rings, and cage. Main group organometallics. Chemistry of Group 8 elements. Coordination chemistry: Spectral properties; Orgel diagrams; Tanabe-Sugano diagrams; Magnetic properties; inorganic reactions and mechanisms: hydrolysis reactions, substitution reactions trans-effect; isomerization reactions, redox reactions; metal-metal bonding and clusters; mixed valence systems.",
                    books: [
                        "Shriver and Atkins, Inorganic Chemistry",
                        "Bochmann, M., Cotton, F. A., Wilkinson, G. and Murilla, C. A. Advanced Inorganic Chemistry",
                        "Huheey, J. E., Keiter, E. A., Keiter, R. L. and Medhi, O. K. Inorganic Chemistry"
                    ]
                },
                {
                    code: "CD 213",
                    name: "Organic Chemistry: Structure & Reactivity",
                    credits: "3:0",
                    instructor: "Vignesh Palani and Mrinmoy De",
                    isElective: false,
                    instructorProfile: "https://palanilab.in",
                    instructors: [
                        { name: "Vignesh Palani", profile: "https://orgchem.iisc.ac.in/vignesh-palani/" },
                        { name: "Mrinmoy De", profile: "https://orgchem.iisc.ac.in/mrinmoy-de/" }
                    ],
                    description: "Stereochemistry and chirality; Conformation of acyclic and cyclic compounds including medium rings, effect of conformation on reactivity. Methods of deducing organic reaction mechanisms: Kinetic analysis, Hammond postulate, Curtin-Hammett principle. Linear free energy relationships – Hammett equation. Kinetic isotope effects. Solvent effects on reaction rates. Reactive intermediates, classical and nonclassical carbocations, carbanions, free radicals, carbenes, nitrenes, arynes, radical ions, diradicals. Photochemistry. Concerted reactions. FMO theory, Wood-ward-Hoffman rules.",
                    books: [
                        "Anslyn, E. V. and Dougherty, D. A. Modern Physical Organic Chemistry",
                        "Smith, M. B. and March J. March’s Advanced Organic Chemistry",
                        "Carey, F. A. and Sundberg, R. J. Advanced Organic Chemistry",
                        "Lowry, T. M. and Richardson, K. S. Mechanism and Theory in Organic Chemistry"
                    ]
                },
                {
                    code: "UCY 301",
                    name: "Organic and Inorganic Chemistry (Lab)",
                    credits: "0:3",
                    instructor: "P Rajamalli and Sharvan Kumar",
                    isElective: false,
                    instructorProfile: "https://mrc.iisc.ac.in/people/faculty/p-rajamalli/",
                    instructors: [
                        { name: "P Rajamalli", profile: "https://mrc.iisc.ac.in/rajamalli-p/" },
                        { name: "Sharvan Kumar", profile: "https://orgchem.iisc.ac.in/sharvan-kumar/" }
                    ],
                    description: "Synthesis of Fe-acac complex, Acetylferrocene, Tris-(8-hydroxyquinoline) aluminium, VO(acac)2, Suzuki-Miyaura cross-coupling, Synthesis of Pd2(dba)3, Mn (III) salen complex, polyoxometallate complexes, Ni (II) Schiff base complexes, Europium (III) and Terbium (III) complexes, Cu(I) catalyzed fast and organic solvent-free tandem click chemistry, Cr-coordination complexes, Wittig reaction, Grignard Reaction, Diels Alder reaction, Oxidation of Isoborneol to Camphor, Reduction and other synthesis.",
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
                    credits: "6:9",
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
                    code: "CD 221",
                    name: "Physical Chemistry II: Statistical Mechanics",
                    credits: "3:0",
                    instructor: "Sai G Ramesh",
                    isElective: false,
                    description: "Thermodynamics: Basic Ideas and postulates, equilibrium conditions, thermodynamic potentials; Postulates of statistical mechanics: Phase space, ensembles, ergodic hypothesis; Ensembles: Canonical, grand canonical, Isothermal-Isobaric; Fermi-Dirac and Bose-Einstein Statistics; Ideal Monatomic and Diatomic Gases; Black Body Radiation; Crystals: Einstein and Debye models; Electron Conduction in Metals; Non-Ideal Gases; Classical Liquids; Debye-Hueckel Theory; Ising Model.",
                    instructorProfile: "https://ipc.iisc.ac.in/~sairamesh/",
                    books: [
                        "E. Fermi, Thermodynamics",
                        "H .B. Callen, Thermodynamics and Introduction to Thermostatistics",
                        "D. A. McQuarrie, Statistical Mechanics",
                        "D. Chandler, Introduction to Modern Statistical Mechanics",
                        "B. Bagchi, Statistical Mechanics for Chemistry and Material Science"
                    ]
                },
                {
                    code: "CD 223",
                    name: "Organic Synthesis",
                    credits: "3:0",
                    instructor: "Vignesh Palani and Durga Prasad Rao Hari",
                    isElective: false,
                    instructorProfile: "https://palanilab.in",
                    instructors: [
                        { name: "Vignesh Palani", profile: "https://orgchem.iisc.ac.in/vignesh-palani/" },
                        { name: "Durga Prasad Rao Hari", profile: "https://orgchem.iisc.ac.in/durga-prasad-hari/" }
                    ],
                    description: "Synthetic methods, methodologies and mechanisms in reductions, oxidations of carbon-carbon and carbon-heteroatom bonds; Carbon-carbon bond-forming methodologies through ionic, radical, concerted and organometallic reaction mechanisms; Approaches to multi-step synthesis with examples of chosen natural and un-natural product synthesis, through anti-thetic analysis and logical synthesis.",
                    books: [
                        "House, H. O. Modern Synthetic Methods",
                        "Smith, M. B. Organic Synthesis",
                        "Corey, E. J. and Chung, Logic in Chemical Synthesis"
                    ]
                },
                {
                    code: "CY 303",
                    name: "Basic Organometallic Chemistry",
                    credits: "3:0",
                    instructor: "P Thilagar",
                    isElective: false,
                    description: "Structure and bonding in organometallic compounds – isolobal analogies, metal carbonyls, carbenes and NHC complexes, olefin and acetylene complexes, alkyls and allyl complexes, metallocenes. Major reaction types – oxidative addition, reductive elimination, insertion, isomerization and rearrangement reactions. Catalytic reactions: metathesis, hydrogenation, allylic activation, C-C coupling reactions, C-X coupling.",
                    instructorProfile: "https://ipc.iisc.ac.in/pt.php",
                    books: [
                        "Elschenbroich, Ch. Organometallics",
                        "Gupta, B. D. and Elias, A. J. Basic Organometallic Chemistry"
                    ]
                },
                {
                    code: "UCY 302",
                    name: "Physical and Analytical Chemistry (Lab)",
                    credits: "0:3",
                    instructor: "Soumen Ghosh",
                    isElective: false,
                    description: "Chemical kinetics. Langmuir adsorption, chemical analysis by potentiometric and conductometric methods, cyclic voltammetry, flame photometry, electronic states by UV-Visible spectroscopy, IR spectroscopy, solid state chemistry synthesis of solids and chemical analysis. Thermogravimetry. X-ray diffraction, electrical and magnetic properties of solids. Vacuum techniques in preparative chemistry.",
                    instructorProfile: "https://ipc.iisc.ac.in/sg.php",
                    books: [
                        "Vogel, A. I. Vogel’s text book of quantitative chemical analysis"
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
                    credits: "6:9",
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
                    code: "UC 402",
                    name: "Molecular Spectroscopy, Dynamics and Photochemistry",
                    credits: "3:0",
                    instructor: "Soumen Ghosh",
                    isElective: false,
                    description: "Energy levels of molecules and their symmetry, Polyatomic rotations and normal mode vibrations. Electronic energy states and conical intersections; time-dependent perturbation theory and selection rules; microwave, infrared and Raman, electronic spectroscopy; energy transfer by collisions. Unimolecular and bimolecular reactions, rate laws; temperature and energy dependence of rate constants, collision theory, RRKM; photochemistry, quantum yield, photochemical reactions, chemiluminescence, bioluminescence, kinetics and photo-physics.",
                    instructorProfile: "https://ipc.iisc.ac.in/sg.php",
                    books: [
                        "Levine, I. N., Molecular Spectroscopy",
                        "McHale, J. L., Molecular Spectroscopy",
                        "Steinfeld, J. I., Fransisco, J. S. and Hase, W. L., Chemical Kinetics and Dynamics",
                        "Laidler, K. J., Chemical Kinetics"
                    ]
                },
                {
                    code: "EL",
                    name: "Electives",
                    credits: "8-13",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    description: "Choose from Department Electives.",
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
                    code: "UCY 400",
                    name: "Bachelor's Project",
                    credits: "0:12",
                    instructor: "Coord: Anoop Thomas",
                    isElective: false,
                    disableDetails: true,
                    description: "The final year research project aims to introduce undergraduate students to actual research. Students perform research under the supervision of a faculty member of the chemical sciences division. Students are required to submit a project report towards the end of the semester as well as make a short presentation emphasizing their novel findings.",
                    instructorProfile: "https://ipc.iisc.ac.in/anoop.php",
                },
                {
                    code: "EL",
                    name: "Elective",
                    credits: "4:0",
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
                <div className="space-y-6 text-gray-700">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Project Requirement</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>20 credits</strong> from the Project / Dissertation.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Coursework Requirement (12 Credits)</h4>
                        <p className="mb-3">Students must complete <strong>12 credits</strong> (200 or 300 level) through one of the following options:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border-l-4 border-blue-500 rounded-r-lg p-4 shadow-sm border border-gray-200 border-l-0">
                                <span className="block font-bold text-blue-800 mb-1">Option A</span>
                                6 credits from Chemical Sciences Division <br />
                                <span className="text-gray-500 text-sm font-bold">+</span> <br />
                                6 credits from <strong>Any</strong> Division
                            </div>
                            <div className="bg-white border-l-4 border-purple-500 rounded-r-lg p-4 shadow-sm border border-gray-200 border-l-0">
                                <span className="block font-bold text-purple-800 mb-1">Option B</span>
                                All 12 credits from Chemical Sciences Division
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Chemical Sciences Division Departments & Codes</h4>
                        <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Inorganic and Physical Chemistry (IPC)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Organic Chemistry (OC)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Solid State and Structural Chemistry Unit (SSCU)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Materials Research Centre (MRC)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Integrated PhD Courses (CD)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>MSc Chemical Sciences Programme (CY)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </details>
    ),
    electives: [
        [
            { code: "CD 204", name: "Chemistry of Materials", credits: "3:0" },
            { code: "CD 211", name: "Physical Chemistry – I Quantum Chemistry and Group Theory", credits: "3:0" },
            { code: "CD 212", name: "Inorganic Chemistry – Main group and coordination chemistry", credits: "3:0" },
            { code: "CD 213", name: "Organic Chemistry – Structure and Reactivity", credits: "3:0" },
            { code: "CD 214", name: "Basic Mathematics", credits: "3:0" },
            { code: "CD 215", name: "Organic & Inorganic Chemistry Laboratory", credits: "0:4" },
            { code: "CD 221", name: "Physical Chemistry II: Statistical Mechanics", credits: "3:0" },
            { code: "CD 222", name: "Material Chemistry", credits: "3:0" },
            { code: "CD 223", name: "Organic synthesis", credits: "3:0" },
            { code: "CD 224", name: "Computers in Chemistry", credits: "2:1" },
            { code: "CD 225", name: "Physical and Analytical Chemistry Laboratory", credits: "0:4" },
            { code: "CD 241", name: "Research Project for M S Thesis", credits: "0:10" },
            { code: "CD 241", name: "Research Project", credits: "0:14" },
            { code: "CD 301", name: "Advanced NMR Spectroscopy", credits: "3:0" },
            { code: "CD 402", name: "Molecular Spectroscopy, Dynamics and Photochemistry", credits: "3:0" },
            { code: "CY 224", name: "Chemistry of Biomolecules", credits: "3:0" },
            { code: "CY 225", name: "Spectroscopic Methods for Structure Determination", credits: "3:0" },
            { code: "CY 303", name: "Inorganic Chemistry-2: Organometallic Chemistry", credits: "3:0" },
            { code: "IP 203", name: "Group Theory and Molecular Spectroscopy", credits: "3:0" },
            { code: "IP 214", name: "Crystallography for Chemists", credits: "2:1" },
            { code: "IP 311", name: "Bio and Medicinal Inorganic Chemistry", credits: "3:0" },
            { code: "IP 312", name: "Advanced Organometallic Chemistry", credits: "3:0" },
            { code: "IP 313", name: "Electrochemical Energy Conversion and Storage", credits: "3:0" },
            { code: "IP 314", name: "Ultrafast Optics and Spectroscopy", credits: "3:0" },
            { code: "IP 321", name: "Laser Spectroscopy and Dynamics", credits: "3:0" },
            { code: "IP 322", name: "Polymer Chemistry", credits: "3:0" },
            { code: "IP 323", name: "Topics in Basic and Applied Electrochemistry", credits: "3:0" },
            { code: "IP 324", name: "Photophysics and Photochemistry: Fundamentals and Applications", credits: "3:0" },
            { code: "IP 326", name: "Time-dependent Statistical Mechanics", credits: "3:0" },
            { code: "MR 203", name: "Introduction to Biomaterials", credits: "3:0" },
            { code: "MR 222", name: "Chemistry of Materials", credits: "3:0" },
            { code: "MR 301", name: "Quantum Mechanical Principles in Materials", credits: "3:0" },
            { code: "MR 303", name: "Nanomaterials Synthesis and Devices", credits: "3:0" },
            { code: "MR 304", name: "Characterization Techniques in Materials Science", credits: "1:2" },
            { code: "MR 305", name: "Functional Dielectrics", credits: "3:0" },
            { code: "MR 306", name: "Electron Microscopy in Materials Characterization", credits: "3:0" },
            { code: "MR 308", name: "Computational Modeling of Materials", credits: "2:1" },
            { code: "OC 203", name: "Organic Chemistry I", credits: "3:0" },
            { code: "OC 231", name: "Chemistry of Proteins and Peptides", credits: "3:0" },
            { code: "OC 232", name: "Graduate Colloquium", credits: "2:0" },
            { code: "OC 234", name: "Organic synthesis", credits: "3:0" },
            { code: "OC 301", name: "Organic Synthesis II", credits: "3:0" },
            { code: "OC 302", name: "Asymmetric Catalysis: From Fundamentals to Frontiers", credits: "3:0" },
            { code: "OC 303", name: "Carbohydrate Chemistry", credits: "3:0" },
            { code: "OC 304", name: "Physical Methods of Structure Elucidation", credits: "3:0" },
            { code: "SS 201", name: "Thermodynamics and Statistical Mechanics", credits: "3:0" },
            { code: "SS 202", name: "Introductory Quantum Chemistry", credits: "3:0" },
            { code: "SS 205", name: "Symmetry and Structure in the Solid State", credits: "3:0" },
            { code: "SS 206", name: "Statistical Mechanics of Liquids and Simple Systems", credits: "3:0" },
            { code: "SS 207", name: "Non-equilibrium Statistical Mechanics : Applications to Biological Systems", credits: "3:0" },
            { code: "SS 208", name: "Principles of Solid State Physics", credits: "3:0" },
            { code: "SS 209", name: "Electrochemical Systems", credits: "3:0" },
            { code: "SS 303", name: "Polymeric Materials: Synthesis and Physical Properties", credits: "3:0" },
            { code: "SS 304", name: "Solar Energy: Advanced Materials and Devices", credits: "3:0" },
            { code: "SS 305", name: "Stochastic Thermodynamics", credits: "3:0" },
            { code: "SS 306", name: "Deep Learning for Physical and Chemical Systems", credits: "3:0" },
            { code: "SS 309", name: "Electrochemical Technologies", credits: "3:0" },
        ]
    ],
    electivesIntro: (
        <span>
            Electives for Chemistry Major and Minor - In addition to below listed electives,  courses offered by the Chemical Sciences Division i.e; <strong>Inorganic and Physical Chemistry (IPC), Organic Chemistry (OC), Solid State and Structural Chemistry Unit (SSCU), Materials Research Centre (MRC) and Chemical Division</strong> Courses offered for Integrated PhD students - CD & Courses offered for MSc Chemical Sciences Program-CY) will also be considered towards Chemistry Major and Minor electives.
        </span>
    )
};

export default function ChemistryPage() {
    return <DepartmentTemplate {...chemistryData} />;
}
