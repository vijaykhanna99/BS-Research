"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const physicsData = {
    name: "Physics",
    image: "/assets/physics-dept.jpg",
    description: "Understand the fundamental forces and laws of the universe.",
    overview: "The Physics major provides a strong grounding in both theoretical and experimental physics. The program covers the entire spectrum from classical mechanics and electromagnetism to quantum mechanics and statistical physics. Students have the opportunity to engage in cutting-edge research in various frontier areas of physics.",
    tag: "Physical Sciences",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    // Extracted from coreSemesters
    majorSemesters: [
        {
            title: "Semester 4",
            courses: [
                {
                    code: "UP 202",
                    name: "Intermediate Mechanics, Oscillations and Waves",
                    credits: "2:1",
                    instructor: "Nirmal Raj, R. Ganesan, D. S. Nadig",
                    instructors: [
                        { name: "Nirmal Raj", profile: "https://sites.google.com/view/nirmal-raj" },
                        { name: "R. Ganesan", profile: "https://physics.iisc.ac.in/people/r-ganesan/" },
                        { name: "D. S. Nadig", profile: "https://cct.iisc.ac.in/d-s-nadig/" }
                    ],
                    isElective: false,
                    description: "Special theory of relativity. Lorentz transformations. Energy-momentum relation. Lorentz four-vectors. Motion in non-inertial frames. Fictitious forces. Coriolis force. Foucault pendulum. Basic scattering theory. Vibrations of particles on a circle and a line. Orthonormal basis. Wave equation. Fourier transform Phase space. Hamiltonian equations, fixed points and stability. Nonlinear equations. Chaos. Logistics map and period doubling. Fluid mechanics. Euler equation. Bernoulli’s equation. Waves in fluids. Gravity waves. Viscosity. Navier-Stokes equation. Basic ideas about turbulence. Elasticity. Strain and stress tensors. Elastic moduli. Bending of rods. Waves in solids.",
                    instructorProfile: "https://sites.google.com/view/nirmal-raj",
                    books: [
                        "https://www.damtp.cam.ac.uk/user/tong/fluids.html",
                        "http://www.fluiddynamics.it",
                        "Elementary Fluid Dynamics by D. J. Acheson",
                        "Griffiths Electrodynamics for some parts of Special Relativity",
                        "For Classical Mechanics I: 'Classical Mechanics' by Tom W.B. Kibble and Frank H. Birkshire.",
                        "For non-linear dynamics and Chaos: 'Non-Linear Dynamics and Chaos' by Steven H. Strogatz",
                        "Kleppner, D. and Kolenkow, R.J. 2007 An Introduction to Mechanics (Special Indian Edition)",
                        "https://www.amazon.com/Classical-Mechanics-John-R-Taylor/dp/189138922X",
                        "The Feynman Lectures on Physics: https://www.feynmanlectures.caltech.edu/",
                        "Spacetime Physics by Taylor and Wheeler: https://www.amazon.in/Spacetime- Physics- IntroductionSpecial-Relativity/dp/0716723271"
                    ]
                },
                {
                    code: "UP 203",
                    name: "Intermediate Electromagnetism and the Quantum Physics of Radiation",
                    credits: "2:1",
                    instructor: "Ranjan Laha, Victor S Muthu, Abha Misra",
                    instructors: [
                        { name: "Ranjan Laha", profile: "https://chep.iisc.ac.in/faculty/" },
                        { name: "Victor S Muthu", profile: "https://physics.iisc.ac.in/people/d-victor-suvisesha-muthu/" },
                        { name: "Abha Misra", profile: "http://iap.iisc.ac.in/abha-misra/" }
                    ],
                    isElective: false,
                    description: "Electromagnetic Waves: Wave equation from Maxwell’s equations, polarization, energy and momentum in EM waves, propagation in linear media, reflection and refraction, Snell’s law and Fresnel’s equations, Brewster angle and total internal reflection. EM waves in conductors, skin depth, simple theories for dispersion of EM waves. Wave guides and coaxial cables, optical fibers Geometrical optics: Fermat’s principle, Snell’s law, reflection and refraction at spherical surfaces, convex and concave mirrors and lenses, real and virtual images. Physical Optics: Coherence, Young’s two slit experiment, multiple slits, diffraction grating, wavelength resolution and fringe visibility, Newton’s rings, Michelson and Fabry-Perot interferometer, diffraction from rectangular and circular apertures, Airy disc and resolving power of microscopes. Quantum optics: Photons, spontaneous and stimulated emission, Einstein A and B coefficients and relation to the Planck distribution, rate equations for absorption and emission, two level and three level systems, population inversion and light amplification, optical resonators and the basic working principle of a laser, examples of lasers: Ruby, He-Ne, semiconductor etc.",
                    instructorProfile: "https://chep.iisc.ac.in/faculty/",
                    books: [
                        "Griffiths, D.J. 2003 Introduction to Electrodynamics, 3rd edition, Prentice-Hall of India",
                        "Hecht, E. and Ganesan, A.R. 2008 Optics, 4th edition, Pearson",
                        "Ghatak, A. and Thyagarajan K 1991 Optical Electronics, Cambridge University Press"
                    ]
                },
                {
                    code: "UP 204",
                    name: "Intermediate Thermal Physics and the Physics of Materials",
                    credits: "2:1",
                    instructor: "Prabal Maiti, Upendra Behera, Minakshi Nayak",
                    instructors: [
                        { name: "Prabal Maiti", profile: "https://physics.iisc.ac.in/~maiti/" },
                        { name: "Upendra Behera", profile: "https://iiscprofiles.irins.org/profile/54856" },
                        { name: "Minakshi Nayak", profile: "" }
                    ],
                    isElective: false,
                    instructorProfile: "https://physics.iisc.ac.in/~maiti/",
                    description: "Review of kinetic theory and thermodynamics, Free energies, Phases and phase transitions, Vander Waals gas and the liquid gas transition, Thermodynamics of magnetic systems, Ensembles and rules of Statistical Mechanics, The Ideal Maxwell-Boltzmann Gas, The Ideal Fermi Gas, The Ideal Bose Gas, Crystal Structure, Lattice Vibrations, Band theory of electrons in crystalline solids, Thermal properties of crystalline solids.",
                    books: [
                        "Callen, H.B. Thermodynamics and Introduction to Thermostatics (2nd edition), Wiley Student Edition",
                        "Ken Dill and Sarina Bromberg, Molecular Driving forces, CRC Press",
                        "Kittel, C. Introduction to Solid State Physics, 5th/6th/7th edition, Wiley International",
                        "S. J. Blundell and K. M. Blundell, Concepts in thermal physics, Oxford University Press"
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
                    credits: "8:11",
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
                    code: "PH 201",
                    name: "Classical Mechanics",
                    credits: "3:0",
                    instructor: "Baladitya Suri",
                    isElective: false,
                    instructorProfile: "http://iap.iisc.ac.in/baladitya-suri/",
                    description: "Newton’s laws generalized co-ordinates. Lagrange’s principle of least action and equations. Conservation laws and symmetry. Integrable problems, elastic collisions and scattering. Small oscillations including systems with many degrees of freedom, free and forced oscillations, damped and undamped oscillations, normal modes, counting and density of states, parametric oscillations and Floquet's theorem, numerical computations in parametric oscillations. Hamilton’s equations. Poisson brackets. Hamilton Jacobi theory. Canonical perturbation theory, chaos, elements of special relativity. Lorentz transformations, relativistic mechanics. Nonlinear dynamics – nonlinear oscillator, critical points, flow, linearization, Lyapunov exponents, general Lyapunov stability. Introduction to Classical Field Theory - Massive and massless scalar fields, Noether's theorem.",
                    books: [
                        "Landau, L.D and Lifshitz, E.M. Mechanics, Third Edition, Butterworth- Heinemann",
                        "Goldstein H., Poole C., and Safko J Classical Mechanics, Third Edition (Pearson Education)",
                        "Rana, N.C. and Jog,P.S. Classical Mechanics, Mc Graw-Hill Education, New Delhi",
                        "Strogatz Steven H., Nonlinear dynamics and Chaos: CRC press, 2nd edition, Special Indian Edition",
                        "R Shankar, Principles of Quantum Mechanics, Second Edition, Springer (India), 2010",
                        "Kleppner D and Kolenkow R J, An Introduction to Mechanics (Special Indian Edition) (2021)"
                    ]
                },
                {
                    code: "PH 203",
                    name: "Quantum Mechanics I",
                    credits: "3:0",
                    instructor: "Banibrata Mukhopadhyay",
                    isElective: false,
                    instructorProfile: "https://physics.iisc.ac.in/~bm/",
                    description: "Wave function for a single particle. Hamiltonian. Schrodinger equation. Probability current. Wave packets. One-dimensional problems: particle in a box and on a circle, step, barrier and delta-function potentials. Tunneling, scattering and bound states. Energy bands in periodic potentials. Simple harmonic oscillator, operator approach. Ehrenfest’s theorem. Particle in an electromagnetic field. Aharonov-Bohm effect. Uncertainty relations. Hermitian and unitary operators. Orthonormal basis. Postulates of quantum mechanics. Matrix formulation of quantum mechanics Three-dimensional problems. Rotations, angular momentum operators, commutation relations. Spherical harmonics. Hydrogen atom, its spectrum and wave functions. Spin angular momentum. Spin-1/2 and two- level systems. Addition of angular momentum. Spin-orbit and hyperfine interactions. Time-independent perturbation theory. Stark and Zeeman effects.",
                    books: [
                        "C. Cohen-Tannoudji, B. Diu and F. Laloe, Quantum Mechanics, Vol.1 and 2, John Wiley & Sons, 2005",
                        "D. J. Griffiths, Introduction to Quantum Mechanics, Pearson, 2005",
                        "L.D .Landau and Lifshitz, Quantum Mechanics, (Vol. 3 of Course of Theoretical Physics), 1999",
                        "F. Schwabl, Quantum Mechanics, Springer, 1995",
                        "R. Shankar, Principles of Quantum Mechanics, Springer, 2010"
                    ]
                },
                {
                    code: "PH 205",
                    name: "Mathematical Methods of Physics",
                    credits: "3:0",
                    instructor: "Justin David",
                    isElective: false,
                    instructorProfile: "https://scholar.google.co.in/citations?user=c8LNB4cAAAAJ&hl=en",
                    description: "Linear vector spaces, linear operators and matrices, systems of linear equations. Eigen values and Eigenvectors, classical orthogonal polynomials. Linear ordinary differential equations, exact and series methods of solution, special functions. Linear partial differential equations of physics, separation of variables method of solution. Complex variable theory; analytic functions. Taylor and Laurent expansions, classification of singularities, analytic continuation, contour integration, dispersion relations. Fourier and Laplace transforms.",
                    books: [
                        "Arfken, G, Weber H. and Harris F., Mathematical methods for Physicists, 7th edition, Academic Press",
                        "Dennery, P. and Krzywicki, A. 1967 Mathematics for Physicists, Harper and Row",
                        "Riley, K. Hobson M.,Bence, S. Mathematical Methods for Physics and Engineering, CUP, 1997"
                    ]
                },
                {
                    code: "PH 211",
                    name: "General Physics Laboratory",
                    credits: "0:3",
                    instructor: "T Das Gupta and Srimanta Middey",
                    instructors: [
                        { name: "T Das Gupta", profile: "http://iap.iisc.ac.in/tapajyoti-das-gupta/" },
                        { name: "Srimanta Middey", profile: "https://physics.iisc.ac.in/people/srimanta-middey/" }
                    ],
                    isElective: false,
                    description: "Identification of NaCl monocrystals (with X-ray unit). Gamma ray absorption with Multi Channel Analyzer (calibration & attenuation coefficient). NMR: Nuclear Magnetic Resonance (find the magnetogyric ratio of Hydrogen and Fluorine). Velocity of sound in liquids (Raman-Nath experiment). Normal modes in (3D) acoustic chamber. Solar cell (IV Characteristics). UV-VIS spectroscopy (Band gap of semiconductor, thickness measurement). X-ray fluorescence with Multi Channel Analyzer. Rutherford Scattering. Elastic Plastic Deformation."
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
                    code: "PH 202",
                    name: "Statistical Mechanics",
                    credits: "3:0",
                    instructor: "Shibananda Das",
                    isElective: false,
                    instructorProfile: "https://physics.iisc.ac.in/people/shibananda-das/",
                    description: "Phenomena and experiments; thermodynamic entropy and the 0th, 1st and 2nd Laws; Free energies, Legendre transformations, Maxwell relations; Stability, equilibrium, van der Waals eqn of state & phase transitions; Elements of probability theory and the central limit theorem; The postulates of equilibrium classical statistical mechanics and their mechanical basis; the postulates of quantum statistical mechanics; the density matrix; the 3rd Law; Partition functions; ensembles and their equivalence; numerical methods; Noninteracting systems: ideal classical and quantum gases with examples; interacting systems: virial expansion, lattice gas, Ising model (1D and Bragg- Williams/Curie-Weiss); Random walks, Brownian motion, and the Langevin equation.",
                    books: [
                        "Kardar, M. 2007: Statistical Physics of Particles. Cambridge University Press",
                        "Mazenko G.F. 2000: Equilibrium statistical mechanics, Wiley, New York",
                        "Reif, F. 2010: Fundamentals of Statistical and Thermal Physics, Sarat Book Distributors",
                        "Bhattacharjee, J.K. 1996: Statistical Physics: Equilibrium and Nonequilibrium Aspects, Allied, New Delhi",
                        "Landau, L.D. and Lifshitz, E.M. 1980 Statistical Physics, Pergamon",
                        "Statistical Mechanics, R K Pathria",
                        "Concepts in Thermal Physics, Blundell and Blundell"
                    ]
                },
                {
                    code: "PH 204",
                    name: "Quantum Mechanics II",
                    credits: "3:0",
                    instructor: "Biplob Bhattacharjee",
                    isElective: false,
                    description: "Recap of quantum mechanics I, WKB approximation and variational methods, Density Matrices, Time dependent perturbation theory, Fermi golden rule, Transitions caused by a periodic external field, Dipole transitions and selection rules, Decay of an unstable state, Born cross section for weak potential scattering, Adiabatic and sudden approximations, Berry phase and the Aharonov-Bohm effect, Scattering theory: partial wave analysis, low energy scattering, scattering length, Born approximation, optical theorem, Wigner-Eckart theorem, Quantization of the radiation field. One out of the following topics: Entanglement, the Dirac equation and Hartree-Fock theory.",
                    books: [
                        "Landau, L.D. and Lifshitz, E.M.1974 Quantum Mechanics, Pergamon, NY",
                        "Cohen-Tannoudji, C.,Diu,B.andLaloe,F.1977 Quantum Mechanics(2Vols.),John Wiley",
                        "ModernQuantum Mechanics, by Sakurai and Napolitano",
                        "Quantum Mechanics by Schwabl",
                        "Quantum Mechanics by Schiff",
                        "The Principles of Quantum Mechanics by Dirac"
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
                    credits: "12:15",
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
                    code: "UPH 400",
                    name: "Project II",
                    credits: "0:15",
                    instructor: "Faculty",
                    isElective: false,
                    disableDetails: true,
                    description: "Continuation of research project.",
                },
                {
                    code: "",
                    name: "Electives",
                    credits: "3:6",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                }
            ],
            totalCredits: "16-21",
            ReducedLoad: "16-18",
            EnhancedLoad: "16-21",
        },
    ],
    staff: {
        coordinators: ["Victor Suvisesha Muthu", "Prasad Hegde"],
        instructorsUg: ["Haritha Pamuluri", "Nandha Gopal P", "Jesla P K"],
        teachingAssistants: ["Rashmi R K", "Tyby Monachan", "Pavithra P N", "Haneena P K", "Aria Kutty"]
    },
    hideElectiveMonthTabs: true,
    electives: [
        [
            { code: "AE 202", name: "Fluid Dynamics", credits: "3:0" },
            { code: "AE 210", name: "Gas Dynamics", credits: "3:0" },
            { code: "HE 215", name: "Nuclear and Particle Physics", credits: "3:0" },
            { code: "HE 315", name: "Advanced Mathematical Physics", credits: "3:0" },
            { code: "HE 316", name: "Advanced Mathematical Methods in Physics", credits: "3:0" },
            { code: "HE 322", name: "QCD and Collider Physics", credits: "3:0" },
            { code: "HE 379", name: "Physics Beyond Standard Model", credits: "3:0" },
            { code: "HE 381", name: "Quantum Field Theory on a Quantum Computer", credits: "3:0" },
            { code: "HE 384", name: "Quantum Computation", credits: "3:0" },
            { code: "HE 386", name: "Experimental High Energy Physics", credits: "3:0" },
            { code: "HE 389", name: "AdS/CFT -or- Quantum Gravity in Anti-de Sitter Space", credits: "3:0" },
            { code: "HE 390", name: "Black Holes, Holography and Quantum Information", credits: "3:0" },
            { code: "HE 391", name: "Quantum Mechanics III", credits: "3:0" },
            { code: "HE 392", name: "Standard Model of Particle Physics", credits: "3:0" },
            { code: "HE 392", name: "String Theory", credits: "3:0" },
            { code: "HE 393", name: "String Theory II", credits: "3:0" },
            { code: "HE 395", name: "Quantum Field Theory - I", credits: "3:0" },
            { code: "HE 396", name: "Quantum Field Theories - II", credits: "3:0" },
            { code: "HE 397", name: "The Standard Model of Particle Physics", credits: "3:0" },
            { code: "HE 398", name: "General Relativity", credits: "3:0" },
            { code: "IN 201", name: "Analytical Instrumentation", credits: "3:0" },
            { code: "IN 205", name: "Optical Instrumentation lab 1", credits: "0:3" },
            { code: "IN 206", name: "Signals and Systems for Digital Health", credits: "2:1" },
            { code: "IN 214", name: "Semiconductor Devices and Circuits", credits: "3:0" },
            { code: "IN 221", name: "Sensors and Transducers", credits: "3:0" },
            { code: "IN 222", name: "Microcontrollers and Applications", credits: "3:0" },
            { code: "IN 222", name: "Sensors and Transducers Laboratory", credits: "2:1" },
            { code: "IN 223", name: "Plasma Processes", credits: "3:0" },
            { code: "IN 224", name: "Nanoscience and Device fabrication", credits: "3:0" },
            { code: "IN 227", name: "Control Systems Design", credits: "3:0" },
            { code: "IN 228", name: "Automatic System Control Engineering", credits: "3:0" },
            { code: "IN 229", name: "Advanced Instrumentation Electronics", credits: "3:0" },
            { code: "IN 232", name: "Concepts in solid state physics", credits: "3:0" },
            { code: "IN 234", name: "Biomedical Optics and Spectroscopy", credits: "3:0" },
            { code: "IN 244", name: "Optical Metrology", credits: "2:1" },
            { code: "IN 247", name: "Principles of Tomographic Imaging", credits: "3:0" },
            { code: "IN 266", name: "Introduction to Quantum Measurement and Control", credits: "3:0" },
            { code: "IN 267", name: "Fluorescence Microscopy and Imaging", credits: "3:0" },
            { code: "IN 268", name: "Microfluidic Devices and Applications", credits: "2:1" },
            { code: "IN 270", name: "Digital Signal Processing", credits: "3:0" },
            { code: "IN 271", name: "Cryogenic Instrumentation and Applications", credits: "3:0" },
            { code: "IN 280", name: "Optical Instrumentation", credits: "2:1" },
            { code: "IN 299", name: "Dissertation Project", credits: "0:19" },
            { code: "IN 302", name: "Classical and Quantum Optics", credits: "3:0" },
            { code: "IN 332", name: "2D MATERIALS", credits: "3:0" },
            { code: "PH 205", name: "Math Methods of Physics", credits: "3:0" },
            { code: "PH 206", name: "Electromagnetic Theory", credits: "3:0" },
            { code: "PH 207", name: "Electronics I", credits: "1:2" },
            { code: "PH 208", name: "Condensed Matter Physics-I", credits: "3:0" },
            { code: "PH 209", name: "Electronics II", credits: "2:1" },
            { code: "PH 211", name: "General Physics Laboratory", credits: "0:3" },
            { code: "PH 212", name: "Experiments in Condensed Matter Physics", credits: "0:3" },
            { code: "PH 213", name: "Advanced Experiments in Condensed Matter Physics", credits: "0:4" },
            { code: "PH 215", name: "Nuclear and Particle Physics", credits: "3:0" },
            { code: "PH 217", name: "Fundamentals of Astrophysics", credits: "3:0" },
            { code: "PH 231", name: "Workshop practice", credits: "0:1" },
            { code: "PH 250A", name: "Project I", credits: "0:6" },
            { code: "PH 250B", name: "Project - II", credits: "0:6" },
            { code: "PH 300", name: "Seminar Course", credits: "1:0" },
            { code: "PH 300", name: "Seminar Course", credits: "0:1" },
            { code: "PH 301", name: "Seminar Course", credits: "2:0" },
            { code: "PH 303", name: "Spatial dynamics in Biology", credits: "2:1" },
            { code: "PH 316", name: "Advanced Mathematical Methods", credits: "3:0" },
            { code: "PH 320", name: "Condensed Matter Physics - II", credits: "3:0" },
            { code: "PH 322", name: "Molecular Simulation", credits: "3:0" },
            { code: "PH 325", name: "Advanced Statistical Physics", credits: "3:0" },
            { code: "PH 326", name: "Principles and Techniques of Magnetic Resonance - I", credits: "3:0" },
            { code: "PH 327", name: "Principles and Techniques of Magnetic Resonance II", credits: "3:0" },
            { code: "PH 330", name: "Advanced Independent Project", credits: "0:3" },
            { code: "PH 333", name: "Physics of Disordered Systems", credits: "3:0" },
            { code: "PH 335", name: "Modern Topics in Condensed Matter", credits: "3:0" },
            { code: "PH 340", name: "Quantum Statistical Field Theory", credits: "3:0" },
            { code: "PH 345", name: "High Pressure Physics", credits: "2:0" },
            { code: "PH 350", name: "Physics of Soft Condensed Matter", credits: "3:0" },
            { code: "PH 351", name: "Crystal Growth, Thin films and Characterization", credits: "3:0" },
            { code: "PH 352", name: "Semiconductor Physics", credits: "3:0" },
            { code: "PH 353", name: "Principles of Magnetism", credits: "3:0" },
            { code: "PH 354", name: "Computational physics", credits: "3:0" },
            { code: "PH 355", name: "Statistical Mechanics of time Dependent Phenomena", credits: "3:0" },
            { code: "PH 359", name: "Physics at the Nanoscale", credits: "3:0" },
            { code: "PH 360", name: "Biological Physics", credits: "3:0" },
            { code: "PH 362", name: "Radiative Processess in Astrophysics", credits: "2:0" },
            { code: "PH 363", name: "Introduction to Fluid Mechanics and Plasma Physics", credits: "2:0" },
            { code: "PH 364", name: "Topological Phases of Matter (Theory and experiment)", credits: "3:0" },
            { code: "PH 365", name: "Galaxies and Interstellar Medium", credits: "3:0" },
            { code: "PH 366", name: "Physics of Advanced Optical Materials", credits: "3:0" },
            { code: "PH 367", name: "Plasma Physics and Applications", credits: "3:0" },
            { code: "PH 371", name: "General Relativity & Cosmology", credits: "3:0" },
            { code: "PH 372", name: "Radiative Processess in Astrophysics", credits: "3:0" },
            { code: "PH 373", name: "Introduction to Fluid Mechanics and Plasma Physics", credits: "3:0" },
            { code: "PH 375", name: "Symmetry, Topology, and Entanglement in Condensed Matter", credits: "3:0" },
            { code: "PH 377", name: "Astronomical Techniques (Seminar Course)", credits: "0:2" },
            { code: "PH 380", name: "Non-equilibrium Quantum Many-Body Dynamics", credits: "3:0" },
            { code: "PH 391", name: "Quantum Mechanics III", credits: "3:0" },
            { code: "PH 392", name: "Standard Model of Particle Physics", credits: "3:0" },
            { code: "PH 395", name: "Quantum Field Theory I", credits: "3:0" },
            { code: "PH 396", name: "Gauge Field Theories", credits: "3:0" },
            { code: "PH 398", name: "General Relativity", credits: "3:0" },
            { code: "QT 202", name: "Introduction to Quantum Measurement", credits: "3:0" },
            { code: "QT 204", name: "Introduction to Materials for Quantum Technologies", credits: "3:0" },
        ]
    ],
    electivesIntro: (
        <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
                Along with below Suggested Electives for Physics Major and Minor, Any courses offered by <strong>Centre for High Energy Physics (CHEP)</strong> / <strong>Instrumentation and Applied Physics (IAP)</strong> / <strong>Physics departments</strong> will be considered towards Major and Minor electives with the consent of the course instructor.
            </p>
            <div className="space-y-2">
                <p><strong>Note:</strong></p>
                <p><strong>January - April Semester:</strong> Please choose courses specifically offered for the January semester. These courses are tailored for the start of the year.</p>
                <p><strong>August - December Semester:</strong> For those starting in the August semester, select courses that are available for the August intake.</p>
            </div>
        </div>
    ),
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
                <p className="text-gray-700 mb-8 italic">
                    Students fulfilling the following academic requirements during the 5th year will be eligible for the MS degree:
                </p>

                <div className="space-y-8">
                    {/* 1. Credit Requirements */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Credit Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>20 credits</strong> from the Project / Dissertation</li>
                            <li><strong>12 credits</strong> from blackboard (theory) courses</li>
                        </ul>
                    </div>

                    {/* 2. Mandatory Courses */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Mandatory Courses</h3>
                        <p className="text-gray-700 mb-4 text-sm">The following courses are prescribed for the 5th year MS programme:</p>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="py-2 px-4 font-bold text-gray-900 w-1/4">Course Code</th>
                                        <th className="py-2 px-4 font-bold text-gray-900">Course Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr>
                                        <td className="py-2 px-4 font-medium">PH 206 (3:0)</td>
                                        <td className="py-2 px-4">Electromagnetic Theory</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">PH 208 (3:0)</td>
                                        <td className="py-2 px-4">Condensed Matter Physics I <span className="text-gray-400 mx-2">OR</span> IN 232 (3:0): Concepts in Solid State Physics</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">PH 217 (3:0)</td>
                                        <td className="py-2 px-4">Fundamentals of Astrophysics</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium">PH/HE 215 (3:0)</td>
                                        <td className="py-2 px-4">Nuclear and Particle Physics</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3. Rules */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Course Completion Rules</h3>
                        <div className="space-y-4 text-gray-700 text-sm">
                            <div>
                                <p className="font-bold text-gray-900 mb-1">If none of the above mandatory courses were completed during the first four years (BS):</p>
                                <p className="pl-4 border-l-2 border-orange-300 text-gray-600">Students must complete all mandatory courses in the 5th year.</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 mb-1">If all mandatory courses were already completed during the first four years (BS):</p>
                                <p className="pl-4 border-l-2 border-green-300 text-gray-600">To meet the 12-credit requirement, students may choose any other 200- or 300-level course(s) from any department, subject to approval.</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 mb-1">If some (but not all) mandatory courses were completed during the first four years (BS):</p>
                                <p className="pl-4 border-l-2 border-blue-300 text-gray-600">Students must complete the remaining mandatory courses and may take additional 200- or 300-level course(s) from any department to fulfill requirements.</p>
                            </div>
                        </div>
                    </div>

                    {/* Important Note */}
                    <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800 border border-yellow-100">
                        <strong>Important:</strong> All course selections in the 5th year are subject to approval by the student’s Advisor, Instructor, and Undergraduate Coordinator.
                    </div>
                </div>
            </div>
        </details>
    )
};

export default function PhysicsPage() {
    return <DepartmentTemplate {...physicsData} />;
}
