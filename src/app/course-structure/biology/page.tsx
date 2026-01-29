"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const biologyData = {
    name: "Biology",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
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
                    code: "UHS",
                    name: "Humanities (Optional)",
                    credits: "2:0",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "11:15",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "15-21",
            ReducedLoad: "15-17",
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
                    code: "UB 309",
                    name: "Genetics",
                    credits: "2:0",
                    instructor: "Kavita Babu",
                    isElective: false,
                    instructorProfile: "https://cns.iisc.ac.in/people/kavita-babu/",
                    description: "Genes to genomics with an emphasis on model systems, Mendel’s Principals, Extension of Mendel’s laws, Inheritance with respect to chromosomes, Gene mapping, DNA structure and replication, Gene mutation analysis, Gene expression, Gene and genome analysis, Gene regulation in prokaryotes, Epigenetics, Gene regulation in Eukaryotes, Genetics of Development, Genetics of Cancer, Population Genetics",
                    books: [
                        "Genetics: From Genes to Genomes",
                        "Leland Hartwell, Michael Goldberg, Janice Fisher and Leroy Hood 6th Edition, Copyright@2018"
                    ]
                },
                {
                    code: "UHS",
                    name: "Humanities (Optional)",
                    credits: "2:0",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                    detailsLink: "/assets/Humanities%20Courses.%20.pdf",
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "14:16",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
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
                    code: "UB 304",
                    name: "Experiments in Neurobiology",
                    credits: "0:1",
                    instructor: "Arnab Barik and Ashesh Dhawale",
                    isElective: false,
                    instructorProfile: "https://cns.iisc.ac.in/people/arnab-barik/",
                    instructors: [
                        { name: "Arnab Barik", profile: "https://cns.iisc.ac.in/people/arnab-barik/" },
                        { name: "Ashesh Dhawale", profile: "https://cns.iisc.ac.in/people/ashesh-dhawale/" }
                    ],
                    description: "The vertebrate nervous system and its organization; demonstration of tissue sectioning techniques; preparation of primary neuronal cultures and imaging neurons; recording and manipulating activity live neurons; rate coding; macrostimulation; effect of temperature and stretch on conduction velocity; neuropharmacology – effects of nicotine MSG; measuring the somatosensory homunculus; measuring alpha rhythm and surprise potentials with EEG; building a blink interface by recording eye potentials."
                },
                {
                    code: "UHS",
                    name: "Humanities (Optional)",
                    credits: "2:0",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                    detailsLink: "/assets/Humanities%20Courses.%20.pdf",
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "14:17",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
        },
        {
            title: "Semester 7",
            courses: [

                {
                    code: "-",
                    name: "Elective",
                    credits: "08:13",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },

            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",

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
            totalCredits: "16",
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
            {
                code: "EC 201",
                name: "Theoretical and Mathematical Ecology",
            },
            {
                code: "EC 204",
                name: "Evolutionary Biology",
            },
            {
                code: "EC 206",
                name: "Evolutionary Genetics",
                href: "https://www.venomicslab.com/eg",
            },
            {
                code: "EC 309A",
                name: "Ecosystems and Global Change",
                href: "https://sites.google.com/view/sbagchi-ec309a/",
            },
            {
                code: "EC 306",
                name: "Advanced Ecological Statistics",
            },
            {
                code: "NS 211",
                name: "Optical Spectroscopy and Microscopy",
            },
            {
                code: "NS 212",
                name: "Neural Signal Processing",
                href: "https://cns.iisc.ac.in/sray/NS212.html",
            },
            {
                code: "NS 303",
                name: "Topics in Systems and Cognitive Neuroscience",
            },
            {
                code: "NS 304",
                name: "Topics in Molecular and Cellular Neuroscience",
            },
            {
                code: "MB 208",
                name: "Theoretical and Computational Neuroscience",
                href: "http://mbu.iisc.ac.in/~mb208/index.htm",
            },
            {
                code: "MB 207",
                name: "DNA-Protein interaction, Regulation of gene expression, Nanobiology",
            },
            {
                code: "MB 211",
                name: "Advanced Methods in Molecular Simulations",
            },
            {
                code: "MB 215",
                name: "Neuronal Ion Transport in Health and Disease",
            },
            {
                code: "MB 216",
                name: "Relaxation Theory and Applications to Solution State Biomolecular NMR Spectroscopy",
            },
            {
                code: "MB 303",
                name: "Elements of Structural Biology",
                href: "https://bglabmbu.weebly.com/course-mb303.html",
            },
            {
                code: "MB 305",
                name: "Biomolecular NMR Spectroscopy",
            },
            {
                code: "MB 333",
                name: "Advanced course for Cryo-EM sample preparation and 3D image reconstruction",
            },
            {
                code: "BE 211",
                name: "Cell Mechanics",
            },
            {
                code: "BE 214",
                name: "Fundamentals of Bioengineering II",
            },
            {
                code: "BE 215",
                name: "Chemistry for Bioengineers",
            },
            {
                code: "BE 207",
                name: "Mathematical Methods for Bioengineers",
            },
            {
                code: "BE 216",
                name: "Dynamical Systems Biology",
            },
            {
                code: "BE 218",
                name: "Computational Epidemiology",
                href: "https://ece.iisc.ac.in/~rajeshs/BE218.htm",
            },
            {
                code: "BE 222",
                name: "Stem Cell Technology",
            },
            {
                code: "BE 223",
                name: "Space Biology and Engineering",
            },
            {
                code: "BE 224",
                name: "Diagnostics and Devices",
            },
            {
                code: "BE 227",
                name: "Synthetic Biology and Genetic Engineering",
            },
            {
                code: "BE 228",
                name: "Introduction to Mathematical Oncology",
            },
            {
                code: "BE 229",
                name: "Statistics for Bioengineers",
            },
            {
                code: "BE 230",
                name: "Data Science for Bioengineers",
            },
            {
                code: "BC 205 / RD 2",
                name: "Fundamentals of Physiology and Medicine",
                href: "https://morphogenesisiisc.wixsite.com/home/fpm",
            },
            {
                code: "BC 210 / MC 2",
                name: "Molecular Basis of Ageing and Regeneration",
            },
            {
                code: "BC 207",
                name: "Multi-omics Approaches in Biology",
            },
            {
                code: "BC 302",
                name: "Current Trends in Drug Discovery",
            },
            {
                code: "BC 303",
                name: "Single Molecule Approaches in Biology",
            },
            {
                code: "MC 202",
                name: "Developmental Genetics",
            },
            {
                code: "MC 210 / RD 2",
                name: "Molecular Oncology",
            },
            {
                code: "MC 214",
                name: "Basic and Applied Virology",
            },
            {
                code: "MC 215",
                name: "Lysosomes and Autophagy",
            },
            {
                code: "MC 216",
                name: "Biological Safety: Principles and practices",
            },
            {
                code: "MC 217",
                name: "Fundamentals of Immunotherapy",
            },
            {
                code: "RD 205",
                name: "Genetics and Genomic Medicine",
            },
            {
                code: "DB 250",
                name: "Research Applications of Flow Cytometry",
            },
            {
                code: "CH 248",
                name: "Molecular Systems Biology",
            },
            {
                code: "ME 251",
                name: "Biomechanics",
            },
            {
                code: "DS 202",
                name: "Algorithmic Foundations of Big Data Biology",
            },
            {
                code: "ME 264",
                name: "Mechanics in Biology",
            },
        ],
        [
            {
                code: "EC 101",
                name: "Process of Scientific Thinking",
            },
            {
                code: "EC 202",
                name: "Ecology: Pattern and Process",
            },
            {
                code: "EC 207",
                name: "Scientific Writing for Ecologists",
            },
            {
                code: "EC 301",
                name: "Animal Behaviour: Mechanisms and Evolution",
            },
            {
                code: "EC 302",
                name: "Plant-Animal Interactions (Ecology, Behaviour and Evolution)",
            },
            {
                code: "EC 303",
                name: "Stochastic and Spatial Dynamics in Biology",
            },
            {
                code: "EC 305",
                name: "Quantitative Ecology: Research Design and Inference",
            },
            {
                code: "DB 202",
                name: "General Biology",
            },
            {
                code: "NS 201",
                name: "Systems Neuroscience",
            },
            {
                code: "NS 202",
                name: "Molecular and Cellular Basis of Behaviour",
            },
            {
                code: "NS 203",
                name: "Cognitive Neuroscience",
            },
            {
                code: "NS 204",
                name: "Developmental Neuroscience",
            },
            {
                code: "MB 214",
                name: "Neuronal Physiology and Plasticity",
                href: "http://mbu.iisc.ac.in/~mb214/",
            },
            {
                code: "MB 201",
                name: "Introduction to Biophysical Chemistry",
            },
            {
                code: "MB 202",
                name: "Introduction to Macromolecular X-ray crystallography",
            },
            {
                code: "MB 204",
                name: "Molecular Spectroscopy and its Biological Applications",
            },
            {
                code: "MB 205",
                name: "Introduction to X-ray Crystallography",
            },
            {
                code: "MB 206",
                name: "Conformational and Structural aspects of biopolymers",
            },
            {
                code: "MB 222",
                name: "Electron microscopy and 3D image processing for Life sciences",
            },
            {
                code: "MB 305",
                name: "Biomolecular NMR Spectroscopy",
            },
            {
                code: "BE 206",
                name: "Biology for Engineers",
            },
            {
                code: "BE 207",
                name: "Mathematical Methods for Bioengineers",
            },
            {
                code: "BE 210",
                name: "Drug Delivery: Principles and Applications",
            },
            {
                code: "BE 211",
                name: "Cell Mechanics",
            },
            {
                code: "BE 213",
                name: "Fundamentals of Bioengineering I",
            },
            {
                code: "BE 219",
                name: "Essentials of Research and Innovation",
            },
            {
                code: "BE 201",
                name: "Fundamental of Biomaterials and Living Matter",
            },
            {
                code: "BE 202",
                name: "Thermodynamics and Transport in Biological Systems",
            },
            {
                code: "BC 201",
                name: "Cell Biology",
            },
            {
                code: "BC 202",
                name: "Protein Structure and Function",
            },
            {
                code: "BC 203",
                name: "General Biochemistry",
            },
            {
                code: "BC 303",
                name: "Single Molecule Approaches in Biology",
            },
            {
                code: "BC 306",
                name: "Essentials in Immunology",
            },
            {
                code: "MC 203",
                name: "Essentials in Microbiology",
            },
            {
                code: "MC 205",
                name: "Pathogen – Host interactions and Immune evasion mechanisms",
            },
            {
                code: "MC 206",
                name: "RNA Biology",
            },
            {
                code: "MC 207",
                name: "Molecular Biology",
            },
            {
                code: "MC 212",
                name: "Advances in Cell Biology",
            },
            {
                code: "MC 208",
                name: "Principles of Genetic Engineering",
            },
            {
                code: "RD 201",
                name: "Genetics",
            },
            {
                code: "RD 204",
                name: "Principles of Signal Transduction in Biological Systems",
            },
            {
                code: "RD 213",
                name: "Stem Cells and Mammalian Development",
            },
            {
                code: "DB 201",
                name: "Mathematics and Statistics for Biologists",
            },
            {
                code: "DB 250",
                name: "Research Applications of Flow Cytometry",
            },
            {
                code: "DS 201",
                name: "Bioinformatics",
            },
            {
                code: "CH 242",
                name: "Special Topics in Theoretical Biology",
            },
            {
                code: "PH 360",
                name: "Biophysics",
            },
            {
                code: "MT 271",
                name: "Introduction to Biomaterials",
            },
        ],
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
