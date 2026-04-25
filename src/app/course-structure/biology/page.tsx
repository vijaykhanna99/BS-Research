"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const biologyData = {
    name: "Biology",
    image: "/assets/biology-dept.jpg",
    description: "Explore the science of life, from molecular biology to ecology.",
    overview: "The curriculum for the Biology major is rigorously designed to provide a comprehensive scientific foundation. Building on the core coursework of the first three semesters, the program transitions into specialized advanced topics and research opportunities. All students are required to complete a minimum of 131 credits to qualify for the Bachelor of Science (Research) degree.",
    tag: "Life Sciences",
    colorClass: "text-green-600",
    bgClass: "bg-green-50",
    staff: {
        coordinators: ["Sumanta Bagchi", "Jayanta Chatterjee"],
        instructorsUg: ["Vikrant Kumar Sinha", "Eswara Rao Tatta", "Sadhana Mutalik", "Shruti Shree D P", "Safeena Majeed"],
        teachingAssistants: ["Padma S", "Raga S S", "Smitha B B", "Monica S", "Asiya Rehman", "Uma N"]
    },
    // Extracted from coreSemesters
    majorSemesters: [
        {
            title: "Semester 4",
            courses: [
                {
                    code: "UB 205",
                    name: "Introductory Physiology",
                    credits: "2:0",
                    instructor: "Nikhil Gandasi and Naresh Loudya",
                    isElective: false,
                    instructorProfile: "https://dbg.iisc.ac.in/people/faculty/nikhil-gandasi/",
                    instructors: [
                        { name: "Nikhil Gandasi", profile: "https://dbg.iisc.ac.in/people/faculty/nikhil-gandasi/" },
                        { name: "Naresh Loudya", profile: "https://mcb.iisc.ac.in/research-single/naresh-loudya" }
                    ],
                    description: "Mammalian Physiology: Introduction to physiology, internal environment, control of internal environment by feedback systems, renal physiology, body fluids and kidneys, urine formation by the kidneys, principles of membrane transport, transporters, pumps and ion channels, cell signalling and endocrine regulation, hormonal regulation of energy metabolism, hormonal regulation of calcium metabolism, hormonal control of reproduction in males and females, pregnancy and lactation; structure of heart, cardiac muscle contraction, cardiac cycle, electric conductivity of heart, regulation of cardiac homeostasis, structure and function of arteries and vein, blood pressure, blood flow, capillary exchange, physiology of lymphatic system.\n\nPlant Physiology: Plant organs and their functions, Plant cell structure and cell wall, phytochrome and light signaling, plant hormones and signaling, photosynthesis and photorespiration, transport in plant life (water, minerals, and solutes), secondary metabolites, control of flowering, plant senescence, and stress physiology.",
                    books: [
                        "Hall, J. E., Guyton and Hall Textbook of Medical Physiology, Elsevier, 12th Edition, 2011",
                        "Jameson, J. L. and De Groot, L. J., Endocrinology, Elsevier, 6th Edition, 2010",
                        "Taiz, L. and Zeiger, E., Plant Physiology, Sinauer Associates, 5th Edition, 2010"
                    ]
                },
                {
                    code: "UB 206",
                    name: "Experiments in Biochemistry and Physiology",
                    credits: "0:2",
                    instructor: "Shantanu Shukla and Mahipal Ganji",
                    isElective: false,
                    instructorProfile: "https://mrdg.iisc.ac.in/people/faculty/shantanu-shukla/",
                    instructors: [
                        { name: "Shantanu Shukla", profile: "https://dbg.iisc.ac.in/people/shantanu-shukla/" },
                        { name: "Mahipal Ganji", profile: "https://biochem.iisc.ac.in/mahipal-ganji.php" }
                    ],
                    description: "Expression of recombinant proteins, purification and characterisation. Quantitation of proteins using biochemical assays and physicochemical characterisation of proteins by immunoassays (solid phase and Western blotting). Enzyme assays and determining the specific activity of enzymes. Assessing metabolic activity of cells and their susceptibility to drugs.",
                },
                {
                    code: "UB 207",
                    name: "General Biochemistry",
                    credits: "2:0",
                    instructor: "Somnath Dutta and Mahavir Singh",
                    isElective: false,
                    instructorProfile: "https://mbu.iisc.ac.in/people/somnath/",
                    instructors: [
                        { name: "Somnath Dutta", profile: "http://mbu.iisc.ac.in/Dutta_Lab/index.html" },
                        { name: "Mahavir Singh", profile: "http://mbu.iisc.ac.in/people.htm" }
                    ],
                    description: "Biochemical properties of proteins, nucleic acids, lipids, and carbohydrates, basics of protein structures, protein sequencing, protein purification and characterization strategies, methods of DNA sequencing, biological membranes and membrane proteins, structure of nucleic acids, protein–nucleic acid (DNA/RNA) interaction. Basic concepts of enzymes and enzyme kinetics, mechanisms of enzyme actions, basic concepts of metabolism and its design, catabolism and anabolism, energy generation and storage, glycolysis, citric acid cycle, oxidative phosphorylation, gluconeogenesis, fatty acid metabolism, integration of metabolism etc.",
                    books: [
                        "Voet, D. and Voet, J. G., Biochemistry, Wiley, 4th Edition, 2010",
                        "Berg, J. M., Tymoczko, J. L. and Styrer, L., Biochemistry, W. H. Freeman& Co., 7th Edition, 2011"
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
                    credits: "11-15",
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
                    code: "UB 301L",
                    name: "Experiments in Microbiology",
                    credits: "0:1",
                    instructor: "Dipshikha Chakravortty",
                    isElective: false,
                    instructorProfile: "https://mcbl.iisc.ac.in/dipshikhachakravortty/",
                    description: "Students will get hands-on experience in understanding the basic concepts of microbiology. The topics include the microbial growth curve, microbial nutritional requirements, genetic engineering techniques, plasmid isolation, creation of genetic knockout in bacteria, bacterial infection in cell culture system, estimation of infection by colony forming unit (CFU) analysis and fluorescence technique."
                },
                {
                    code: "UB 307L",
                    name: "Experiments in Ecology and Evolution",
                    credits: "0:2",
                    instructor: "Kartik Shanker",
                    isElective: false,
                    instructorProfile: "http://www.ces.iisc.ernet.in/kartik/",
                    description: "Students will explore key concepts in Ecology, Evolution and Behaviour using field methods, laboratory manipulations and computer simulations. Students will design many of their own experiments and will utilize different modes of scientific communication, including oral presentations and documentaries. Topics include niche and population dynamics, competition and predation, trophic interactions, evolution and adaptation, natural and sexual selection, and conservation. This module also includes a mandatory field trip where students develop an independent research project."
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
                    credits: "11-16",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
        {
            title: "Semester 6",
            courses: [
                {
                    code: "UB 302",
                    name: "Developmental Biology",
                    credits: "2:0",
                    instructor: "Usha Vijayraghavan, Ramray Bhat and Utpal Nath",
                    isElective: false,
                    instructorProfile: "https://mcbl.iisc.ac.in/usha-vijayraghavan/",
                    instructors: [
                        { name: "Usha Vijayraghavan", profile: "https://mcbl.iisc.ac.in/usha-vijayraghavan/" },
                        { name: "Ramray Bhat", profile: "https://be.iisc.ac.in/ramray-bhat/" },
                        { name: "Utpal Nath", profile: "https://mcb.iisc.ac.in/research-single/utpal-nath" }
                    ],
                    description: "Introduction, history, and concepts of developmental biology; the current understanding on the mechanisms of development using model organisms, including invertebrates, vertebrates and plants; general principles for the making of a complex, multicellular organism from a single cell; the creation of multi-cellularity (cellularization, cleavage), reorganisation into germ layers (gastrulation), cell type determination; creation of specific organs, (organogenesis); molecular mechanisms underlying morphogenetic movements, differentiation, and interactions during development; fundamental differences between animal and plant development; embryogenesis in plant – classical and modern views; axisspecification and pattern formation in angiosperm embryos; organization and homeostasis in the shoot and root meristems; patterning in vegetative and flower meristems; growth and tissue differentiation in plants; stem cells and regeneration; evolution of developmental mechanisms",
                    books: [
                        "Wolpert, L. and Tickle, C., Principles of Development, Oxford University Press, 4th Edition, 2010",
                        "Gilbert, S. F., Developmental Biology, 9th edition, Sinauer Associates, 2010",
                        "Slack, J. M. W., Essential Developmental Biology, John Wiley & Sons, 3rd Edition, 2012",
                        "Leyser, O. and Day, S., Mechanisms in Plant Development, Willey-Blackwell, 2003",
                        "Taiz, L. and Zeiger, E., Plant Physiology, 5th edition, Sinauer Associates, 2010",
                        "Alberts, B., Molecular Biology of the Cell, Garland Science, 5th Edition, 2008"
                    ]
                },
                {
                    code: "UB 303",
                    name: "Experiments in Molecular Biophysics",
                    credits: "0:1",
                    instructor: "Vidya Mangala Prasad",
                    isElective: false,
                    instructorProfile: "https://mbu.iisc.ac.in/people/vidya/index.html",
                    description: "UV spectroscopy of proteins (quantitation and determination of extinction coefficient), Estimation of free sulfhydryl groups in proteins by Ellman’s assay, Fluorescence spectroscopy of proteins, determination of tryptophan accessibility by acrylamide quenching, CD spectroscopy of proteins and calculation of helical contents, CD spectroscopy of DNA (monitoring the role of salt and oligonucleotide sequence in the formation of G-quadruplexes), UV spectroscopy of DNA (determination of melting temperature and influence of buffer composition), computational biophysics: molecular visualization and graphics."
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
                    credits: "14-17",
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
                    credits: "08:16",
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
                    code: "UB 400",
                    name: "Project: Biology",
                    credits: "0:16",
                    instructor: "Banibrata Mukhopadhyay",
                    isElective: false,
                    disableDetails: true,
                    instructorProfile: "http://www.physics.iisc.ernet.in/~bm/",
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
                <p className="text-gray-900 font-medium mb-4 text-lg">
                    Fulfilment of 12 credits from the courses offered by the following departments and 20 credits from the project.
                </p>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <ul className="divide-y divide-gray-100 text-gray-700">
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Biochemistry (BC)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Centre for Ecological Sciences (CES)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Centre for Neuroscience (CNS)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Microbiology and Cell Biology (MCB)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Molecular Biophysics Unit (MBU)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Developmental Biology and Genetics (DBG)</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors">Department of Bioengineering (BE) formally BSSE</li>
                        <li className="px-5 py-3 hover:bg-gray-50 transition-colors bg-blue-50/50 text-blue-800 font-medium">Course offered for Integrated PhD by Biological Science Division - DB & LS Course codes.</li>
                    </ul>
                </div>
            </div>
        </details>
    ),
    electives: [
        [
            { code: "UC 207L", name: "Instrumental Methods of Chemical Analysis Laboratory", credits: "0:1" },
            { code: "UC 207T", name: "Instrumental Methods of Chemical Analysis", credits: "2:0" },
            { code: "UC 303", name: "Basic Organometallic Chemistry", credits: "3:0" },
            { code: "UC 402", name: "Molecular Spectroscopy,Dynamics and Photochemistry", credits: "3:0" },
            { code: "UCY 204", name: "THERMODYNAMICS AND ELECTROCHEMISTRY", credits: "3:0" },
            { code: "UCY 205", name: "INORGANIC CHEMISTRY : CHEMISTRY OF ELEMENTS", credits: "3:0" },
            { code: "UCY 206", name: "BASIC ORGANIC REACTIONS", credits: "3:0" },
            { code: "UCY 301", name: "ORGANIC AND INORGANIC CHEMISTRY LABORATORY", credits: "0:3" },
            { code: "UCY 302", name: "PHYSICAL AND ANALYTICAL CHEMISTRY LABORATORY", credits: "0:3" },
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
            { code: "BC 201", name: "Cell Biology", credits: "2:0" },
            { code: "BC 202", name: "Proteins: Structure and Function", credits: "2:0" },
            { code: "BC 203", name: "General Biochemistry", credits: "3:0" },
            { code: "BC 204", name: "Advances in Plant Biotechnology and Molecular Biology", credits: "2:0" },
            { code: "BC 205", name: "Fundamentals of Physiology and Medicine", credits: "2:0" },
            { code: "BC 206", name: "Essentials in Immunology", credits: "2:0" },
            { code: "BC 207", name: "Proteomics in Practice", credits: "2:0" },
            { code: "BC 209", name: "Dessertation Project", credits: "2:0" },
            { code: "BC 210", name: "Molecular Basis of Ageing and Regeneration", credits: "3:0" },
            { code: "BC 302", name: "Current Trends in Drug Discovery", credits: "3:0" },
            { code: "BC 303", name: "Single-Molecule Approaches in Biology", credits: "2:0" },
            { code: "BC 306", name: "Essentials in Immunology", credits: "3:0" },
            { code: "BE 201", name: "Introduction to Biometerials", credits: "3:0" },
            { code: "BE 202", name: "Thermodynamics and Transport in Biological Systems", credits: "3:0" },
            { code: "BE 203", name: "Bioengineering Practicum 1", credits: "0:1" },
            { code: "BE 204", name: "Bioengineering Practicum 2", credits: "0:1" },
            { code: "BE 206", name: "Biology for Engineers", credits: "3:0" },
            { code: "BE 207", name: "Mathematical Methods for Bioengineers", credits: "3:0" },
            { code: "BE 209", name: "Digital Epidemiology", credits: "1:0" },
            { code: "BE 210", name: "Drug Delivery: Principles and Applications", credits: "3:0" },
            { code: "BE 211", name: "Cell Mechanics", credits: "3:0" },
            { code: "BE 212", name: "Research Communication", credits: "1:0" },
            { code: "BE 213", name: "Fundamentals of Bioengineering 1", credits: "2:0" },
            { code: "BE 214", name: "Fundamentals of Bioengineering 2", credits: "2:0" },
            { code: "BE 215", name: "Chemistry for Bioengineers", credits: "3:0" },
            { code: "BE 216", name: "Dynamical Systems Biology", credits: "3:0" },
            { code: "BE 217", name: "Introduction to Disease Modeling", credits: "3:0" },
            { code: "BE 218", name: "Computational Epidemiology", credits: "3:1" },
            { code: "BE 219", name: "Essentials of Research and Innovation", credits: "2:0" },
            { code: "BE 220", name: "Industry Seminar", credits: "2:0" },
            { code: "BE 221", name: "Introduction to Data Science for Bioengineers", credits: "3:0" },
            { code: "BE 222", name: "Stem Cell Technology", credits: "3:0" },
            { code: "BE 223", name: "Space Biology and Bioengineering", credits: "2:0" },
            { code: "BE 224", name: "Diagnostics and Devices", credits: "3:0" },
            { code: "BE 226", name: "Synthetic Biology and Genetic Engineering", credits: "2:0" },
            { code: "BE 227", name: "Synthetic Biology and Protein Engineering", credits: "2:0" },
            { code: "BE 228", name: "Introduction to Mathematical Oncology", credits: "3:0" },
            { code: "BE 229", name: "Statistics for Bioengineers", credits: "1:0" },
            { code: "BE 230", name: "Data Science for Bioengineers", credits: "2:0" },
            { code: "BE 301", name: "AI for Biomedical Research", credits: "3:0" },
            { code: "CH 242", name: "Special Topics in Theoretical Biology", credits: "3:0" },
            { code: "CH 248", name: "Molecular Systems Biology", credits: "3:0" },
            { code: "DB 201", name: "Mathematics and Statistics for Biologists", credits: "2:0" },
            { code: "DB 202", name: "General Biology", credits: "2:0" },
            { code: "DB 250", name: "Research Applications of Flow Cytometry", credits: "2:0" },
            { code: "DS 201", name: "Bioinformatics", credits: "2:0" },
            { code: "DS 301", name: "Bioinformatics", credits: "2:0" },
            { code: "EC 101", name: "Process of Scientific Thinking", credits: "1:0" },
            { code: "EC 201", name: "Theoretical and Mathematical Ecology", credits: "2:1" },
            { code: "EC 202", name: "Ecology: Pattern and Process", credits: "2:1" },
            { code: "EC 203", name: "Ecology: Principles and Applications", credits: "2:0" },
            { code: "EC 204", name: "Evolutionary Biology", credits: "2:0" },
            { code: "EC 204", name: "Evolutionary Biology", credits: "2:1" },
            { code: "EC 206", name: "Evolutionary Genetics", credits: "2:1" },
            { code: "EC 301", name: "Animal Behaviour : Mechanisms and Evolution", credits: "2:1" },
            { code: "EC 302", name: "Plant-Animal Interactions (Ecology, Behaviour and Evolution)", credits: "2:1" },
            { code: "EC 303", name: "Stochastic and Spatial Dynamics in Biology", credits: "2:1" },
            { code: "EC 305", name: "Quantitative Ecology : Research Design and Inference", credits: "2:1" },
            { code: "EC 306", name: "Advanced ecological statistics", credits: "2:1" },
            { code: "EC 309", name: "Ecosystems and Global Change", credits: "2:0" },
            { code: "EC 309A", name: "Ecosystems and Global Change", credits: "3:0" },
            { code: "LS 205", name: "Ecology and Evolution", credits: "3:0" },
            { code: "LS 206", name: "Developmental Biology and Genetics", credits: "3:0" },
            { code: "LS 207", name: "Fundamentals of Molecular Biology", credits: "3:0" },
            { code: "LS 208", name: "Physiology and Neurobiology", credits: "2:0" },
            { code: "MB 201", name: "Introduction to Biophysical Chemistry", credits: "2:0" },
            { code: "MB 204", name: "Molecular Spectroscopy and its Biological Applications", credits: "3:0" },
            { code: "MB 205", name: "Introduction to X-ray Crystallography", credits: "2:0" },
            { code: "MB 206", name: "Conformational and Structural aspects of biopolymers", credits: "3:0" },
            { code: "MB 207", name: "DNA - Protein interaction, Regulation of gene expression, Nanobiology", credits: "2:0" },
            { code: "MB 208", name: "Theoretical and Computational Neuroscience", credits: "3:1" },
            { code: "MB 209", name: "Cellular Neurophysiology", credits: "3:1" },
            { code: "MB 210", name: "Peptides and Drug - Design", credits: "2:0" },
            { code: "MB 211", name: "Advanced Methods in Molecular Simulations", credits: "3:1" },
            { code: "MB 212", name: "Electron microscopy and 3D image processing for Life sciences", credits: "2:0" },
            { code: "MB 214", name: "Neuronal Physiology and Plasticity", credits: "3:0" },
            { code: "MB 215", name: "Neuronal Ion Transport in Health and Disease", credits: "2:0" },
            { code: "MB 216", name: "AI in Structural Biophysics and Molecular Therapeutics", credits: "2:0" },
            { code: "MB 222", name: "Electron microscopy and 3D image processing for Life sciences", credits: "3:0" },
            { code: "MB 303", name: "Elements of Structural Biology", credits: "3:0" },
            { code: "MB 305", name: "Biomolecular NMR Spectroscopy", credits: "3:0" },
            { code: "MB 315", name: "Relaxation Theory and Applications to Solution State Biomolecular NMR", credits: "2:0" },
            { code: "MB 316", name: "Relaxation Theory and Applications to Solution State Biomolecular NMR", credits: "3:1" },
            { code: "MB 333", name: "Advanced course for Cryo-EM sample preparation and 3D image", credits: "2:1" },
            { code: "MC 202", name: "Developmental Genetics", credits: "2:0" },
            { code: "MC 203", name: "Essentials in Microbiology", credits: "3:0" },
            { code: "MC 205", name: "Pathogen - Host interactions and immune evasion mechanisms", credits: "2:0" },
            { code: "MC 206", name: "RNA Biology", credits: "2:0" },
            { code: "MC 207", name: "Molecular Biology", credits: "3:0" },
            { code: "MC 208", name: "Principles of Genetic Engineering", credits: "2:0" },
            { code: "MC 210", name: "Molecular Oncology", credits: "2:0" },
            { code: "MC 211", name: "Molecular basis of Ageing and Regeneration", credits: "3:0" },
            { code: "MC 212", name: "Advances in Cell Biology", credits: "2:0" },
            { code: "MC 213", name: "Laboratory Rotations", credits: "2:0" },
            { code: "MC 214", name: "Basic and Applied Virology", credits: "2:0" },
            { code: "MC 215", name: "Lysosomes and Autophagy", credits: "2:0" },
            { code: "MC 216", name: "Biological Safety: Principles and practices", credits: "1:0" },
            { code: "MC 217", name: "Fundamentals of Immunotherapy", credits: "2:0" },
            { code: "MC 218", name: "Advances in Molecular Biology", credits: "2:0" },
            { code: "NS 201", name: "Systems Neuroscience", credits: "2:0" },
            { code: "NS 202", name: "Molecular and Cellular Basis of Behaviour", credits: "2:0" },
            { code: "NS 203", name: "Cognitive Neuroscience", credits: "2:0" },
            { code: "NS 204", name: "Developmental Neuroscience", credits: "2:0" },
            { code: "NS 211", name: "Optical Spectroscopy and Microscopy", credits: "3:0" },
            { code: "NS 212", name: "Neural Signal Processing", credits: "2:1" },
            { code: "NS 301", name: "Topics in Systems and Cognitive Neuroscience", credits: "2:0" },
            { code: "NS 302", name: "Topics in Molecular and Cellular Neuroscience", credits: "3:0" },
            { code: "NS 303", name: "Topics in Systems and Cognitive Neuroscience", credits: "3:0" },
            { code: "NS 304", name: "Topics in Molecular and Cellular Neuroscience", credits: "3:0" },
            { code: "RD 201", name: "Genetics", credits: "2:0" },
            { code: "RD 204", name: "Principles of Signal Transduction in Biological Systems", credits: "2:0" },
            { code: "RD 205", name: "Genetics and Genomic Medicine", credits: "2:0" },
            { code: "RD 206", name: "Molecular Oncology", credits: "2:0" },
            { code: "RD 209", name: "Molecular basis of ageing and regeneration", credits: "2:0" },
            { code: "RD 210", name: "Fundamentals of Physiology and Medicine", credits: "2:0" },
            { code: "RD 212", name: "Research Methods in experimental Biology", credits: "0:1" },
            { code: "RD 213", name: "Stem cells and Mammalian development", credits: "2:0" },
        ]
    ],
    electivesIntro: (
        <span>
            Below is the list of suggested electives. In addition to the electives listed below, courses offered by the Biological Sciences departments i.e; <strong>Biochemistry (BC) / Microbiology and Cell Biology (MCB) / Centre for Neuroscience (CNS) / Centre for Ecological Sciences (CES) / Molecular Biophysics Unit (MBU) / Developmental Biology and Genetics (DBG)</strong>, Course offered for Integrated PhD by Biological Science Division -DB & LS Course codes & <strong>Department of Bioengineering (formally BSSE)</strong> will be considered towards Biology Major and Minor electives.
        </span>
    )
};

export default function BiologyPage() {
    return <DepartmentTemplate {...biologyData} />;
}
