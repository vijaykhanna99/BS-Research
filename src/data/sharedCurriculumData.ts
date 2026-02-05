
export const semesters = [
    {
        title: "Semester 1",
        courses: [
            {
                code: "UMA 101",
                type: "Basic Courses",
                name: "Analysis and Linear Algebra I",
                credits: "4:0",
                instructor: "Soumya Das",
                isElective: false,
                instructorProfile: "https://math.iisc.ac.in/~library/soumya-das.html",
                description: "One-variable Calculus: Real and Complex numbers; Convergence of sequences and series; Continuity, intermediate value theorem, existence of maxima and minima; Differentiation, mean value theorem, Taylor series; Integration, fundamental theorem of Calculus, improper integrals. Linear Algebra: Vector spaces (over real and complex numbers), basis and dimension; Linear transformations and matrices.",
                books: [
                    "Apostol, T. M., Calculus, Volume I, 2nd edition, Wiley, India, 2007",
                    "Strang, G., Linear Algebra and its Applications, 4th Edition, Brooks/Cole, 2006"
                ]
            },
            {
                code: "UBL 101",
                type: "Basic Courses",
                name: "Introductory Biology I",
                credits: "3:1",
                instructor: "Sumanta Bagchi",
                isElective: false,
                instructorProfile: "https://ces.iisc.ac.in/?q=user/85",
                description: "SECTION_THEORY\nOrganismal Biology and the Molecular Basis of Life. Introduction to the World of Living Organisms; Levels of Biological Organisation; the Scientific Method and Causation in Biology; Diversity of life on Earth; Evolution: History and Evolution of Life on Earth; Mechanisms of Evolution; the Evidence for Evolution and Natural Selection; Adaptation, Speciation and Diversification; Phylogenetics; Sex and Sexual selection; Animal Behavior: Classical Experiments in Ethology; Communities and Ecosystem: Species Interactions, Trophic Cascades, Ecology and Global Change; Why Biodiversity Matters? Introduction to Chemical Evolution; Thermodynamic Principles and Biological Macromolecules (water, lipids, carbohydrates, nucleic acids, proteins, enzymes); Placing Biomolecules in the Cellular Context: Cell as a Unit of Life and the Site for Life Processes. Elementary Enzymology.\nSECTION_LAB\nUnderstanding methods and concepts in evolution, ecology, and behaviour by observing, describing and quantifying; experimental manipulations; representing and interpreting data; titration of amino acids, estimation of reducing and nonreducing sugars, estimation of proteins, DNA, RNA, lipids. Techniques like thin layer chromatography for lipids, melting curves for DNA and SDS-PAGE for proteins.",
                books: [
                    "Campbell Biology (10th/11th editions) By JB Reese, LA Urrey, ML Cain, SA Wasserman. Pearson Global Editions",
                    "Ernst Mayr, This is Biology: The Science of the Living World, Harvard University Press, 1997",
                    "Jerry A. Coyne, Why Evolution is True, Viking Penguin, New York, USA, 2009",
                    "Jonathan Weiner, The Beak of the Finch, Vintage Books, New York, USA, 1995",
                    "Sean B. Carroll, The Serengeti Rules: The Quest to Discover How Life Works and Why it Matters, Princeton University Press, New Jersey, 2016",
                    "Wilson, E. O., Life on Earth. Freely available at: http://eowilsonfoundation.org/e-o-wilson-s-life-on-earth",
                    "Wilson, E. O. The Future of Life, Alfred A. Knopr, 2002",
                    "Lodish, H. et al., Molecular Cell Biology, W. H. Freeman Publishers, 6th Edition, 2008",
                    "Krebs, J. E. et al., Lewin’s Genes X, Jones and Bartlett Publishers, 10th Edition, 2011",
                    "Nelson, D. L. and Cox, M. M., Lehninger Principles of Biochemistry, W. H. Freeman Publishers, 5th Edition, 2009",
                    "Berg, J. M., Tymoczko, J. L. and Styrer, L., Biochemistry, W. H. Freeman & Co., 6th Edition, 2006",
                    "Voet, D. and Voet, J. G., Biochemistry, Wiley, 4th Edition, 2010"
                ]
            },
            {
                code: "UCY 101",
                type: "Basic Courses",
                name: "Introductory Chemistry I",
                credits: "3:1",
                instructor: "Anshu Pandey",
                isElective: false,
                instructorProfile: "https://sscu.iisc.ac.in/pandey/",
                description: "Overview of atoms, molecules and chemical bonding, intermolecular forces and interaction potentials. Introduction to quantum mechanics, postulates, exemplary exact solutions. Chemical thermodynamics, state functions, spontaneity, reaction thermodynamics. Chemical equilibrium and chemical kinetics, reaction coordinate diagrams. Properties of solutions, colligative properties.",
                books: [
                    "D. A. McQuarrie, and J. D. Simon, Physical Chemistry – A Molecular Approach",
                    "R. J. Silbey, R. A. Alberty and M. G. Bawendi, Physical Chemistry",
                    "R. S. Berry, S. A. Rice and J. Ross, Physical Chemistry"
                ]
            },
            {
                code: "UPHT 101",
                type: "Basic Courses",
                name: "Introductory Physics I",
                credits: "3:1",
                instructor: "Sebabrata Mukherjee",
                isElective: false,
                instructorProfile: "https://physics.iisc.ac.in/people/sebabrata-mukherjee/",
                description: "Kinetics, laws of motion. Circular motion, work. Kinetic and potential energy. Line integrals. Conservative forces. Friction, terminal velocity in air. Systems of particles. Conservation of linear momentum. Scattering in one and two dimensions. Angular momentum. Moment of inertia. Rotation about one axis. Precession of gyroscope. Central force. Reduction of two- body problem to one-body problem and effective one-body potential. Planetary motion and Kepler’s laws. Simple pendulum damped and forced, resonance. Coupled oscillators, normal modes. Small oscillations. Transverse waves on a string. Linearsuperposition, interference, beats. Fourier series. Sound wavesin air. Doppler effect.",
                books: [
                    "Kittel,C., Knight, W.D., Ruderman, M.A., Helmholz, A.C. and Moyer,B.J.2011 Mechanics, Berkeley Physics Course: Volume 1, 2nd edition",
                    "Kleppner,D. and Kolenkow,R.J.2007 An Introduction To Mechanics(Special Indian Edition)",
                    "David Halliday, Robert Resnick, Jearl Walker: Fundamentals of Physics",
                    "Raymond A. Serway and John W. Jewett: Physicsfor Scientists and Engineers with Modern Physics",
                    "Hugh D. Young and Roger A. Freedman: University Physics with Modern Physics",
                    "Vector Analysis(Schaum's Series) by M. R. Spiegel",
                    "Classical Mechanics By N. C. Rana & P. S. Joag"
                ]
            },
            {
                code: "UHS",
                type: "Humanities",
                name: "Humanities",
                credits: "2:0",
                instructor: "-",
                isElective: false,
                instructorProfile: "-",
                detailsLink: "/assets/Humanities%20Courses.%20.pdf",
            },
        ],
        totalCredits: "18",
    },
    {
        title: "Semester 2",
        courses: [
            {
                code: "UENG 103",
                type: "Engineering",
                name: "Introduction to Earth and Its Environment",
                credits: "3:0",
                instructor: "Ramananda Chakrabarti, Attreyee Ghosh and Sambuddha Misra",
                isElective: false,
                description: "Nucleosynthesis, formation of planets, minerals, rocks and bulk earth composition; radioactivity and age of the earth; mantle convection and plate tectonics; introduction to stable isotope geochemistry; general application of stable isotopes; the carbon cycle; The S cycle; The nitrogen cycle; chemical weathering and global thermostat; shortterm climate variation; wind and oceanic circulation; Thermohaline circulation and its role in climate change; surficial water cycle aqueous chemistry; redox chemistry in aquatic environment – implication and application; carbonate chemistry and its application; instrumentation in environmental and low-temperature geochemistry",
                instructorProfile: "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/",
                instructors: [
                    { name: "Ramananda Chakrabarti", profile: "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/" },
                    { name: "Attreyee Ghosh", profile: "https://ceas.iisc.ac.in/~aghosh/" },
                    { name: "Sambuddha Misra", profile: "https://ceas.iisc.ac.in/author/sambuddha-misra/" }
                ],
                books: [
                    "Environmental and Low-temperature Geochemistry - Peter Ryan",
                    "How to Build a Habitable Planet - Langmuir and Broecker"
                ]
            },
            {
                code: "UBL 102",
                type: "Basic Courses",
                name: "Introductory Biology II",
                credits: "3:1",
                instructor: "Dipshikha Chakravortty",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://mcbl.iisc.ac.in/dipshikhachakravortty/",
                description: "SECTION_THEORY\nIntroduction to the microbial world and its diversity; the importance of microbes in the exploration of basic principles of biology; bacterial growth and its modulation by nutrient availability in the medium; structure and function of a bacterial cell; structure of cell wall; isolation of auxotrophs; introduction to viruses – life cycles of temperate and lytic bacteriophages, structure and function of extra-chromosomal elements and their applications in molecular microbiology.\nIntroduction to cell biology, eukaryotic cells and their intracellular organization; introduction to the light microscopes and other methods of studying intracellular organelles; further studies on endoplasmic reticulum, Golgi apparatus, lysosomes, mitochondria, nucleus (organization and function), plasma membrane structure and its function, the cytoskeleton, the cell cycle.\nMendelian genetics (segregation and independent assortment); sex determination and sex linkage in diploids; cytoplasmic inheritance; pedigrees, markers, mapping and genetic disorders; gene frequencies and HardyWeinberg principle.\nSECTION_LAB\nLight microscopy, identification of microorganisms, staining techniques (Gram’s, acid fast), bacterial plating, tests for antibiotic resistance, cell media and tissue culture; cell counting, immunostaining for actin, microtubules, DNA and identifying interphase and various mitotic phases; Drosophila crosses using red eye and white eye mutants, observation of Barr body in buccal mucosa cells, preparation of mitotic/ polytene chromosomes from Drosophila larvae; and karyotyping using human metaphase plate photos",
                books: [
                    "Berg, J. M., Tymoczko, J. L. and Styrer, L., Biochemistry, W. H. Freeman & Co., 6th Edition, 2006",
                    "Stanier, R. Y., Adelberg, E. A. and Ingraham, J. L., General Microbiology, MacMillan Press, 5th Edition, 2007",
                    "Alberts, B., Molecular Biology of the Cell, Garland Science, 5th Edition, 2008",
                    "Strick berger, M. W., Genetics, Prentice-Hall, India, 3rd Edition, 2008",
                    "Daniel, H., Essential Genetics: A genomics perspective, Jones & Bartlett, 3rd Edition, 2002",
                    "Strachan, T. and Read, A. P., Human Molecular Genetics, Garland Science, 3rd Edition, 2004"
                ]
            },
            {
                code: "UCY 102",
                type: "Basic Courses",
                name: "Introductory Chemistry II",
                credits: "3:1",
                instructor: "Sreedhara M B",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://ipc.iisc.ac.in/sreedhara.php",
                description: "Multi-electron atoms – periodic trends, Chemical bonding: ionic solids, CFT: d-orbital splitting, tetrahedral, square planar, cubic and octahedral crystal fields, covalent bonding, Lewis model (2 Dim), VSEPR (3 Dim) hybridization, Molecular orbital theory: heteronuclear diatomics, triatomics, Shapes of main group compounds, Acid -base chemistry: concepts, measures of acid-base strength, HSAB, Main group chemistry: carbon group compounds and noble gases.",
                books: [
                    "Lee, J. D. Concise Inorganic Chemistry, 5/E, Oxford University Press, Indian Edition",
                    "Miessler, G. L. and Tarr, D.A. Pearson Inorganic Chemistry, Third Edition",
                    "Shriver, D. F., Atkins, P. W. and Langford, C. H. Inorganic Chemistry, Oxford University Press",
                    "Huheey, J. E., Keiter, E.A. and Keiter, R. L. Inorganic Chemistry, 4/E, Pearson Education Asia"
                ]
            },
            {
                code: "UMA 102",
                type: "Basic Courses",
                name: "Analysis and Linear Algebra II",
                credits: "4:0",
                instructor: "Purvi Gupta",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://math.iisc.ac.in/~purvigupta/",
                description: "Linear Algebra continued: Inner products and Orthogonality; Determinants; Eigenvalues and Eigenvectors; Diagonalisation of symmetric matrices. Multivariable calculus: Functions on Rn partial and total derivatives; Chain rule; Maxima, minima and saddles; Lagrange multipliers; Integration in Rn, change of variables, Fubini’s theorem; Gradient, Divergence and Curl; Line and Surface integrals in R2 and R3; Stokes, Green’s and Divergence theorems. Introduction to Ordinary Differential Equations; Linear ODEs and Canonical forms for linear transformations.",
                books: [
                    "Apostol, T. M., Calculus, Volume II, 2nd edition, Wiley, India, 2007",
                    "Strang, G., Linear Algebra and its Applications, 4th Edition, Brooks/Cole, 2006",
                    "Artin, M., Algebra, Prentice Hall of India",
                    "Hirsch, M., Smale, S. and Devaney, R. L., Differential Equations, Dynamical Systems, and an Introduction to Chaos, 2nd edition, Academic Press, 2004"
                ]
            },
            {
                code: "UPH 102",
                type: "Basic Courses",
                name: "Introductory Physics II",
                credits: "3:1",
                instructor: "Gaurav Narain",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://chep.iisc.ac.in/faculty/",
                description: "Introduction, review of vector algebra, vector calculus: gradient, divergence, curl, Gauss’ theorem and Stokes’ theorem, Laplacian etc. Coulomb’s law, electric field, electrostatic potential, Uniqueness theorem, conductors, capacitance, method of images, bound charges and dipole moment density, energy stored in electric fields. Magnetostatics: electric currents, Biot-savart law, Ampere’s law, magnetic fields of straight wires, circular loops and infinite solenoids, vector potential, magnetic dipole moment and bound currents. Lorentz force and Faraday’s law, inductance, energy stored in a magnetic field. Linear dielectric and magnetic materials, bound current, magnetism, charge conservation, displacement current, Maxwell’s equations.",
                books: [
                    "Purcell, E.M. 2011 Electricity and Magnetism, Berkeley Physics Course-Volume2, 2nd edition, Tata Mc Graw Hill",
                    "Griffiths, D.J. 2003 Introduction to Electrodynamics, 3rd edition, Prentice- Hall of India. SICS"
                ]
            },
            {
                code: "UHS**",
                type: "Humanities",
                name: "Humanities",
                credits: "0-2",
                instructor: "-",
                isElective: true,
                instructorProfile: "",
                detailsLink: "/assets/Humanities%20Courses.%20.pdf",
            },
            {
                code: "UENG 102",
                type: "Optional Elective",
                name: "Electrical and Electronics Engineering",
                credits: "3:1",
                instructor: "Deepak D'Souza, Kaushik Basu",
                isElective: true,
                instructorProfile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
                instructors: [
                    { name: "Deepak D'Souza", profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/" },
                    { name: "Kaushik Basu", profile: "https://eecs.iisc.ac.in/people/kaushik-basu/" },
                ],
            },
        ],
        totalCredits: "15-21",
    },
    {
        title: "Semester 3",
        courses: [
            {
                code: "UENG 201",
                type: "Engineering",
                name: "Introduction to Materials Science",
                credits: "3:0",
                instructor: "Suchandrima Das",
                isElective: false,
                instructorProfile: "https://crystalmechanicslab.com/",
                description: "Bonding, types of materials, basics of crystal structures and crystallography. Thermodynamics, thermochemistry, unary systems, methods of structural characterization. Thermodynamics of solid solutions, phase diagrams, defects, diffusion. Solidification. Solid-solid phase transformations. Mechanical behaviour: elasticity, plasticity, fracture. Electrochemistry and corrosion. Band structure, electrical, magnetic and optical materials. Classes of practical materials systems: metallic alloys, ceramics, semiconductors, composites.",
                books: [
                    "W.D. Callister: Materials Science and Engineering, Wiley India (2007)"
                ]
            },
            {
                code: "UBL 201",
                type: "Basic Courses",
                name: "Introductory Biology III",
                credits: "3:1",
                instructor: "Dipankar Nandi",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://biochem.iisc.ac.in/dipankar-nandi.php",
                description: "SECTION_THEORY\nMolecular biology (central dogma, DNA repair, replication, transcription, genetic code and translation); examples of post-transcriptional and post-translational modifications; genetic methods of gene transfer in bacteria. Introduction to the immune system – the players and mechanisms, innate immunity, adaptive responses, B cell receptor and immunoglobulins, T cell activation and differentiation and Major Histocompatibility Complex encoded molecules. Overview of the nervous system, ionic basis of resting membrane potential and action potentials, neurodevelopment, neurotransmitters, sensory systems, motor systems, learning and memory, attention and decision making.\nSECTION_LAB\nM13 infection, plaque assay, preparation of bacterial competent cells, transformation, transduction, conjugation, β -galactosidase assay. Immune organs and isolation of cells from lymph node, spleen and thymus; lymphocyte and macrophage activation studies, nitrite detection, ELISA and cell cycle analysis; gross anatomy of the human brain; staining of mouse brain sections; generation of action- potential; psychophysical and cognitive neurobiology experiments.",
                books: [
                    "Lodish, H., Berk, A., Kaiser, C. A., Krieger, M., Scott, M. P., Bretscher, A., Ploegh, H. and Matsudaira, P., Molecular Cell Biology, W. H. Freeman Publishers, 6th Edition, 2007",
                    "Kindt, T., Goldsby, R. and Osborne, B. A., Kuby Immunology, W. H. Freeman Publishers, 6th Edition, 2006",
                    "Bear, M., Connors, B. and Paradiso, M., Neuroscience: Exploring the Brain, Lippincott Williams & Wilkins, 3rd Edition, 2006"
                ]
            },
            {
                code: "UCY 201",
                type: "Basic Courses",
                name: "Introductory Chemistry III",
                credits: "3:1",
                instructor: "Akkattu T Biju",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://orgchem.iisc.ac.in/atbiju/",
                description: "Part 1: Nomenclature of Organic Compounds, Orbital Picture of Molecular Structure, Aromaticity, Acids and Bases, Organic Reactions and Mechanism: Substitution, Aromatic Substitution, Elimination, Addition And Rearrangements, Oxidation-Reduction etc. Part 2: Introduction to Chirality and Stereochemistry; Elements of Symmetry; Configurational Nomenclatures; Optical Activity; Chiral Resolution and Kinetic Resolution; Stereospecific and Stereoselective Reactions and Mechanisms; Conformation of Acyclic and Cyclic Systems.",
                books: [
                    "Solomons, T. W. G. and Fryhle, C. 2009 Organic Chemistry, John Wiley & Sons",
                    "McMurry, J. E. 2007 Organic Chemistry 7th edition, Thomson",
                    "Bruice, P. Y. Organic Chemistry, 6th edition, Pearson",
                    "Nasipuri, D. Stereochemistry of Organic Compounds, Principles and Applications",
                    "Eliel, E. L. Stereochemistry of Carbon Compounds"
                ]
            },
            {
                code: "UMA 201",
                type: "Basic Courses",
                name: "Probability and Statistics",
                credits: "4:0",
                instructor: "Sanchayan Sen",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://math.iisc.ac.in/~library/sanchayan-sen.html",
                description: "Basic notions of probability, conditional probability and independence, Bayes’ theorem, random variables and distributions, expectation and variance, conditional expectation, moment generating functions, limit theorems. Samples and sampling distributions, estimation of parameters, testing of hypotheses, regression, correlation and analysis of variance.",
                books: [
                    "Ross, S., Introduction to Probability and Statistics for Engineers and Scientists, Academic Press; 4th ed. (2009)",
                    "Freedman, Pisani and Purves, Statistics, Viva Books; 4th ed. (2011)",
                    "Feller, W., An Introduction to Probability Theory and its Applications - Vol. 1, Wiley; 3rd ed. (2008)",
                    "Ross, S., A First Course in Probability, Pearson Education; 9th ed. (2013)",
                    "Athreya, S., Sarkar, D. and Tanner, S., Probability and Statistics (with Examples using R), Unfinished book"
                ]
            },
            {
                code: "UPH 201",
                type: "Basic Courses",
                name: "Introductory Physics III",
                credits: "3:1",
                instructor: "Prerna Sharma",
                isElective: false,
                isStarred: true,
                instructorProfile: "https://physics.iisc.ac.in/people/prerna-sharma/",
                description: "Temperature, The First Law of Thermodynamics, Kinetic Theory of Gases and Maxwell-Boltzmann Statistics, Heat Engines, Entropy and the Second Law of Thermodynamics, Relativity, Introduction to Quantum Physics, Basics of Quantum Mechanics, Atomic, Molecular and Solid-state physics, Nuclear Physics, Particle Physics and Cosmology.",
                books: [
                    "Serway and Jewett, Physicsfor Scientists and Engineers(7th Edition)",
                    "Young and Freedman, University Physics(12thEdition)",
                    "Halliday, Resnick and Walker, Fundamentals of Physics, Extended (8thEdition)",
                    "Harris Benson, University Physics, Revised Edition",
                    "KennethKrane, Modern Physics, Second Edition",
                    "Resnick -- introduction to sp"
                ]
            },
            {
                code: "UHS**",
                type: "Humanities",
                name: "Humanities",
                credits: "2-0",
                instructor: "-",
                isElective: true,
                instructorProfile: "",
                detailsLink: "/assets/Humanities%20Courses.%20.pdf",
            },
            {
                code: "UENG 101",
                type: "Optional Elective",
                name: "Algorithms and Programming",
                credits: "3:1",
                instructor: "L Sunil Chandran, Viraj Kumar",
                isElective: true,
                instructorProfile: "https://eecs.iisc.ac.in/people/sunil-chandran-l/",
                instructors: [
                    { name: "L Sunil Chandran", profile: "https://eecs.iisc.ac.in/people/sunil-chandran-l/" },
                    { name: "Viraj Kumar", profile: "https://eecs.iisc.ac.in/people/prof-viraj-kumar/" }
                ],
            },
        ],
        totalCredits: "15-21",
    },
];

export const electiveMonth = [
    {
        title: "January - April Semester",
    },
    {
        title: "August - December Semester",
    },
];
