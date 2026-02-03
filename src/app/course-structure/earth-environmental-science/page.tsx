"use client";
import React from 'react';
import DepartmentTemplate from "@/components/course-structure/DepartmentTemplate";

const earthScienceData = {
    name: "Earth & Environmental Science",
    image: "/assets/earth-science-dept.jpg",
    description: "Investigate the Earth's systems and environmental challenges.",
    overview: "The Earth & Environmental Science major offers an interdisciplinary approach to understanding the Earth's systems. The curriculum covers topics ranging from climate science and environmental chemistry to geochemistry and ecological systems, preparing students to address critical environmental challenges.",
    tag: "Planetary Sciences",
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
    // Extracted from coreSemesters
    majorSemesters: [
        {
            title: "Semester 4",
            courses: [
                {
                    code: "UEES 206",
                    name: "Experimental Methods in Environmental Chemistry",
                    credits: "2:1",
                    instructor: "Sreenivasan Ramaswami",
                    isElective: false,
                    description: "Introduction to enviro/water laboratory: fundamental instruments, lab water types and grades of chemicals. Solutions: concentration, dilution factor, preparing solutions. Water quality parameters: pH, electrical conductivity, turbidity & dissolved oxygen. Solids in water: total, suspended, dissolved. Hardness and alkalinity. Spectrophotometric determination: principle, limits, determination of ammonium-nitrogen, phosphatephosphorous. Nitrogen in water – determination of nitrogen compounds (N-NH +, N-NO -, N-NO - and TN) and material balance. Organic parameters: COD, BOD, TOC. Chromatographic techniques, determination of anions by ion chromatography. Different wastewater sources, water & environmental pollution. Lab component includes: Safety instructions, pH meter calibration, conductivity measurement, turbidity standards, DO measurement, hardness/alkalinity determination, and nitrogen compound analysis.",
                    instructorProfile: "https://www.suspaani-lab.com/team/sreenivasan-ramaswami",
                    books: [
                        "APHA, Standard methods for the examination of water and wastewater. American Public Health Association, 23rd edition, Washington DC, (2017)",
                        "ISO standards"
                    ]
                },
                {
                    code: "UEES 207",
                    name: "Geophysical Processes",
                    credits: "3:0",
                    instructors: [
                        { name: "Attreyee Ghosh", profile: "https://ceas.iisc.ac.in/~aghosh/" },
                        { name: "Pawan Bharadwaj", profile: "https://ceas.iisc.ac.in/author/pawan-bharadwaj/" },
                        { name: "Binod Sreenivasan", profile: "https://ceas.iisc.ac.in/~bsreeni/" }
                    ],
                    isElective: false,
                    description: "Subduction zone processes (earthquakes, volcanism, India-Eurasia collision, Pacific northwest subduction); Processes in divergent zones (mid-oceanic ridge system, types of spreading ridges, continental rifting; Transform faults (continental and oceanic transforms); Hotspots and mantle plumes; Large igneous provinces; LIPs and mass extinctions. Applications of Physics and Computation to the Earth Sciences: The second half of this course will focus on the applications of the basic principles of classical physics, computation, and mathematics to the earth sciences. Topics will be selected from: mechanics of rotating bodies, Geo dynamo, thermal convection, maxwell's equations, oscillations and normal modes, seismic wave propagation, mechanics of faulting, diffusion, and heat transfer.",
                    books: [
                        "William Lowrie, Fundamentals of Geophysics, Cambridge University Press"
                    ]
                },
                {
                    code: "UEES 208",
                    name: "Introduction To Mineralogy and Petrology",
                    credits: "2:1",
                    instructor: "K. Sajeev",
                    isElective: false,
                    description: "Introduction to crystallography and mineralogy, Classification and nomenclature of sedimentary, igneous, and metamorphic rocks and their textures, igneous structures and field relationships, introduction to thermodynamics and phase rule, chemical petrology, Mantle melting, Magma diversity, tectonics and magmatism, metamorphic textures and mineral assemblages, Metamorphic facies and reactions, Geochronological methods. Lab component includes: Study of minerals and rocks in hand specimens, optical mineralogy, and study of thin sections.",
                    instructorProfile: "https://ceas.iisc.ac.in/author/sajeev-krishnan/",
                    books: [
                        "John D. Winter, Principles of Igneous and Metamorphic Petrology, 2nd Edition, 2010",
                        "S. M. Sengupta, Introduction to Sedimentology, 1994"
                    ]
                },
                {
                    code: "UHS**",
                    name: "Humanities",
                    credits: "0:3",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                    detailsLink: "/assets/Humanities%20Courses.%20.pdf",
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "3:0",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },

            ],
            totalCredits: "15-21",
        },
        {
            title: "Semester 5",
            courses: [
                {
                    code: "UEES 301T",
                    name: "Introduction to Earth Systems",
                    credits: "2:1",
                    instructor: "Sambuddha Misra",
                    isElective: false,
                    description: "Geological time scale and Evolution of Vertebrates, invertebrate and Plants, Origin Of Atmosphere and compositional-structural-energy evolution, Greenhouse effect, oxygenation and genesis of ozone layer, Evidence of early Life, residence time of trace gases in the atmosphere, radiation laws and budget, glacial interglacial cycles, Carbon cycle, rock cycle, energy balance model, Hydrosphere, hydrological cycle, Ocean circulation, aqueous contamination and effect on biosystem, weathering and erosion, evolution of ocean, Life diversification. Lab includes: Geochemistry of Earth's crust, mantle, core; radiometric dating.",
                    instructorProfile: "https://ceas.iisc.ac.in/author/sambuddha-misra/",
                    books: [
                        "Roland Martin, Earth’s evolving systems; The history of Planet Earth 2nd edition",
                        "Steven M. Stanley and John A. Luczaj Earth System History, W. H. Freeman and Company"
                    ]
                },
                {
                    code: "UES 314",
                    name: "Design Principles in Environmental Engineering",
                    credits: "3:0",
                    instructor: "Lakshminarayana Rao",
                    isElective: false,
                    description: "Laws of Conservation: Mass, Energy and Momentum Balances. Fundamentals of Chemical Reaction Engineering: Thermodynamics, Stoichiometry, and Kinetics of Chemical Reactions, Chemical Reactors – Stirred Tank and Plug Flow Reactors. Design for wastewater treatment processes: Physical Unit Operations such as Sedimentation and Filtration, Chemical and Biological Treatment Processes. Design for Air Pollution Control: Gas-Liquid Interactions, Absorption and Adsorption Processes, Particulate Emission Control.",
                    instructorProfile: "https://www.plasmalabiisc.com/principal-investigator",
                    books: [
                        "Davis, M. and Masten, S. 2004. Principles of Environmental Engineering, McGraw Hill",
                        "Davis, M. and Cornwell, D. 2006. Introduction to Environmental Engineering, McGraw Hill",
                        "Mihelcic, J. and Zimmerman, J. B. 2010. Environmental Engineering: Fundamentals, Sustainability and Design, John Wiley",
                        "Spellman F. R. and Whiting, N. E. 2005. Environmental Engineer’s Mathematics Handbook, CRC Press"
                    ]
                },
                {
                    code: "UEES 313",
                    name: "Experimental Methods in Environmental Engineering",
                    credits: "2:1",
                    instructor: "Yagnaseni Roy",
                    isElective: false,
                    description: "Selection strategy of environmental remediation method for practical applications, Adsorption for pollutants in liquid and gaseous effluents - mechanisms of adsorption, isotherm & kinetic studies, desorption overview of packed and fluidized beds for practical scale. Absorption for CO2 sequestration - stripping, practical implementation in tray and packed columns, system design and sizing. Zero liquid discharge by evaporative techniques - energy requirement calculation, determination of salt composition. Coagulation, flocculation, and sedimentation - fundamental principles, design and sizing of settling tanks. Membrane filtration - osmotic pressure, fouling, practical-scale system design parameters. Environmental impact of discussed remediation techniques - fuel requirement, global warming potential. Lab component includes: Batch adsorption of dye molecules, CO2 absorption, Evaporation experiments, and Filtration studies.",
                    instructorProfile: "https://www.s3iisc.com/people",
                    books: [
                        "“Industrial Separation Processes: Fundamentals”, André B. de Haan, Hans Bosch, Year: 2013, Publisher: De Gruyter",
                        "“Separation Process Principles, 3rd Edition” Seader, Henley, and Roper, Year: 2011, Publisher: Wiley"
                    ]
                },
                {
                    code: "UHS**",
                    name: "Humanities",
                    credits: "0:3",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                    detailsLink: "/assets/Humanities%20Courses.%20.pdf",
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "3:0",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
        },
        {
            title: "Semester 6",
            courses: [
                {
                    code: "UES 304",
                    name: "Introduction to Ecological Systems",
                    credits: "3:0",
                    instructor: "Sumanta Bagchi",
                    isElective: false,
                    description: "Ecosystem structure and function, biodiversity, ecological processes, population biology.",
                    instructorProfile: "https://ces.iisc.ac.in/?q=user/85",
                },
                {
                    code: "UES 306",
                    name: "Introduction to Fluid Dynamics",
                    credits: "3:0",
                    instructor: "Bishnupriya Sahoo",
                    isElective: false,
                    description: "Fluid properties, kinematics, conservation laws, Navier-Stokes equation.",
                    instructorProfile: null,
                },
                {
                    code: "UHS**",
                    name: "Humanities",
                    credits: "0:3",
                    instructor: "-",
                    isElective: true,
                    instructorProfile: null,
                    detailsLink: "/assets/Humanities Courses. .pdf",
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "3:0",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
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

        },
        {
            title: "Semester 8",
            courses: [
                {
                    code: "UES 402",
                    name: "Project II",
                    credits: "0:15",
                    instructor: "Faculty",
                    isElective: false,
                    disableDetails: true,
                },
                {
                    code: "-",
                    name: "Elective",
                    credits: "6:0",
                    instructor: "-",
                    isElective: true,
                    isStarred: true,
                    instructorProfile: null,
                },
            ],
            totalCredits: "16-21",
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
                            <li><strong>20 credits</strong> from the Project / Dissertation with the Masters’ thesis advisor.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Coursework Requirement (12 Credits)</h4>
                        <p className="mb-4">
                            Students must complete <strong>Any 4 courses (12 credits)</strong> from the participating Departments/Centres:
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-teal-50 border border-teal-100 rounded-lg px-4 py-3 text-teal-900 font-medium">Civil Engineering (CiE)</div>
                            <div className="bg-teal-50 border border-teal-100 rounded-lg px-4 py-3 text-teal-900 font-medium">Centre for Atmospheric and Oceanic Sciences (CAOS)</div>
                            <div className="bg-teal-50 border border-teal-100 rounded-lg px-4 py-3 text-teal-900 font-medium">Centre for Earth Sciences (CEaS)</div>
                            <div className="bg-teal-50 border border-teal-100 rounded-lg px-4 py-3 text-teal-900 font-medium">Centre for Sustainable Technologies (CST)</div>
                        </div>

                        <div className="mt-4 bg-gray-50 border-l-4 border-teal-500 p-4 text-sm text-gray-700">
                            <strong>Note:</strong> Equivalent courses as per the students’ handbook may also be taken after a discussion with the EES coordinators.
                        </div>
                    </div>
                </div>
            </div>
        </details>
    ),
    staff: {
        coordinators: ["Dr. Sreenivasan Ramaswami", "Ramananda Chakrabarti"],
        instructorsUg: ["Saranya K", "Sharath Raj"],
        teachingAssistants: ["Soorya P S", "Veeresh S"]
    },
    electives: [
        [
            { code: "AS 202", name: "Geophysical Fluid Dynamics", credits: "3:0" },
            { code: "AS 203", name: "Atmospheric Thermodynamics", credits: "3:0" },
            { code: "AS 204", name: "Atmospheric Radiation and Climate", credits: "3:0" },
            { code: "AS 205", name: "Ocean Dynamics", credits: "2:1" },
            { code: "AS 207", name: "Introduction to Atmospheric Dynamics", credits: "3:0" },
            { code: "AS 208", name: "Satellite Meteorology", credits: "3:0" },
            { code: "AS 209", name: "Mathematical Methods in Climate Science", credits: "3:0" },
            { code: "AS 210", name: "Numerical methods in atmospheric modeling", credits: "3:0" },
            { code: "AS 211", name: "Observational Techniques", credits: "2:1" },
            { code: "AS 214", name: "Atmospheric Boundary Layer", credits: "3:0" },
            { code: "AS 216", name: "Introduction to climate system", credits: "3:0" },
            { code: "AS 302", name: "Climate Modeling", credits: "3:0" },
            { code: "AS 307", name: "Chemistry and Physics of Atmosphere and Climate", credits: "3:0" },
            { code: "AS 308", name: "Ocean Modeling", credits: "2:1" },
            { code: "AS 310", name: "The Science of Climate Change", credits: "3:0" },
            { code: "AS 311", name: "Topics in Tropical Convection", credits: "3:0" },
            { code: "AS 313", name: "Non-Linear Model in Climate Sciences", credits: "3:0" },
            { code: "CE 201", name: "Basic Geo-mechanics", credits: "3:0" },
            { code: "CE 202", name: "Foundation Engineering", credits: "3:0" },
            { code: "CE 203", name: "Surface Water Hydrology", credits: "3:0" },
            { code: "CE 204", name: "Solid Mechanics", credits: "3:0" },
            { code: "CE 205", name: "Finite Element Method", credits: "3:0" },
            { code: "CE 206", name: "Ground Improvement and Geosynthetics", credits: "3:0" },
            { code: "CE 206", name: "Earth and Earth Retaining Structures", credits: "3:0" },
            { code: "CE 206N", name: "Earth and Earth Retaining Structures", credits: "3:0" },
            { code: "CE 207", name: "Geo-environmental Engineering", credits: "3:0" },
            { code: "CE 207", name: "Geo-environmental Engineering", credits: "2:0" },
            { code: "CE 207N", name: "Geo-environmental Engineering", credits: "3:0" },
            { code: "CE 208", name: "Ground Improvement and Geosynthetics", credits: "3:0" },
            { code: "CE 209", name: "Mechanics of Structural Concrete", credits: "3:0" },
            { code: "CE 210", name: "Structural Dynamics", credits: "3:0" },
            { code: "CE 211", name: "Mathematics for Engineers", credits: "3:0" },
            { code: "CE 212", name: "Design of Water Supply and Sewerage Systems", credits: "3:0" },
            { code: "CE 212", name: "Computational Fluid Dynamics in Water Resources Engineering", credits: "3:0" },
            { code: "CE 212N", name: "Computational Fluid Dynamics in Water Resources Engineering", credits: "3:0" },
            { code: "CE 213", name: "Systems Techniques in Water Resources and Environmental Engineering", credits: "3:0" },
            { code: "CE 213", name: "Experimental Methods in Environmental Engineering", credits: "0:1" },
            { code: "CE 213N", name: "Systems Techniques in Water Resources and Environmental Engineering", credits: "3:0" },
            { code: "CE 214", name: "Ground Water Hydrology", credits: "3:0" },
            { code: "CE 215", name: "Stochastic Hydrology", credits: "3:0" },
            { code: "CE 216", name: "An Introduction to Finite Elements in Solid Mechanics", credits: "3:0" },
            { code: "CE 216", name: "Finite Element Structural Analysis", credits: "3:0" },
            { code: "CE 217", name: "Linear Structural Dynamics", credits: "3:0" },
            { code: "CE 217", name: "Structural Dynamics", credits: "3:0" },
            { code: "CE 218", name: "Fire structural engineering", credits: "3:0" },
            { code: "CE 218", name: "Optimization Methods", credits: "3:0" },
            { code: "CE 219", name: "Non-linear Structural Mechanics", credits: "3:0" },
            { code: "CE 219", name: "SOIL DYNAMICS", credits: "3:0" },
            { code: "CE 219", name: "Stability of Structures", credits: "3:0" },
            { code: "CE 220", name: "Design of Substructures", credits: "3:0" },
            { code: "CE 221", name: "Earthquake Geotechnical Engineering", credits: "3:0" },
            { code: "CE 222", name: "Fundamentals of Soil Behaviour", credits: "3:0" },
            { code: "CE 222N", name: "Fundamentals of Soil Behaviour", credits: "2:1" },
            { code: "CE 224", name: "Behaviour and Testing of Unsaturated Soils", credits: "2:1" },
            { code: "CE 225", name: "Engineering Rock Mechanics", credits: "3:0" },
            { code: "CE 226", name: "Open-channel Flow", credits: "3:0" },
            { code: "CE 227", name: "Engineering Seismology", credits: "3:0" },
            { code: "CE 228", name: "Continuum Plasticity", credits: "3:0" },
            { code: "CE 229", name: "Non-Destructive Evaluation Methods for Concrete Structures", credits: "3:0" },
            { code: "CE 230", name: "Pavement Engineering", credits: "3:0" },
            { code: "CE 231", name: "Design of Substructures", credits: "3:0" },
            { code: "CE 231", name: "Soil Stabilization by Admixtures", credits: "3:0" },
            { code: "CE 231", name: "Forensic Geotechnical Engineering", credits: "3:0" },
            { code: "CE 231", name: "Soil Stabilization by Admixtures", credits: "2:0" },
            { code: "CE 231N", name: "Micro-characterization of Clay Soils", credits: "0:1" },
            { code: "CE 232", name: "Fundamentals of Soil behaviour", credits: "2:0" },
            { code: "CE 232", name: "Soil Stabilization by Admixtures", credits: "2:0" },
            { code: "CE 232", name: "Geotechnical Engineering and Rehabilitation of Dams", credits: "3:0" },
            { code: "CE 233", name: "Earthquake Geotechnical Engineering", credits: "3:0" },
            { code: "CE 234", name: "Earthquake Geotechnical Engineering", credits: "3:0" },
            { code: "CE 234", name: "Nonlinear Analysis in Earthquake Engineering", credits: "3:0" },
            { code: "CE 234", name: "Soil Dynamics", credits: "2:0" },
            { code: "CE 234", name: "Earthquake Geotechnical Engineering", credits: "2:0" },
            { code: "CE 235", name: "Optimization Methods", credits: "3:0" },
            { code: "CE 236", name: "Fracture Mechanics", credits: "3:0" },
            { code: "CE 237", name: "Soil Dynamics", credits: "3:0" },
            { code: "CE 237", name: "Rock Mechanics", credits: "2:0" },
            { code: "CE 237", name: "Soil Dynamics", credits: "2:0" },
            { code: "CE 238", name: "Structural Masonry", credits: "3:0" },
            { code: "CE 238", name: "Computational Geotechnics", credits: "3:0" },
            { code: "CE 239", name: "Stochastic Structural Dynamics", credits: "3:0" },
            { code: "CE 239", name: "Computational Geotechnics", credits: "3:0" },
            { code: "CE 239N", name: "Stochastic Structural Dynamics", credits: "3:0" },
            { code: "CE 240", name: "Uncertainty Modeling and Analysis", credits: "3:0" },
            { code: "CE 241", name: "Advanced Structural Dynamics", credits: "3:0" },
            { code: "CE 241", name: "Introduction to the Theory of Plasticity", credits: "2:0" },
            { code: "CE 241", name: "Reliability in Geotechnical Systems", credits: "3:0" },
            { code: "CE 241", name: "Introduction to the Theory of Plasticity", credits: "3:0" },
            { code: "CE 242", name: "Probabilistic Methods in Civil Engineering", credits: "3:0" },
            { code: "CE 242", name: "Fire structural engineering", credits: "3:0" },
            { code: "CE 243", name: "Bridge Engineering", credits: "3:0" },
            { code: "CE 244", name: "Monte Carlo simulations in structural mechanics", credits: "3:0" },
            { code: "CE 245", name: "Design of Water Supply and Sewerage Systems", credits: "3:0" },
            { code: "CE 245N", name: "Design of Water Supply and Sewerage Systems", credits: "3:0" },
            { code: "CE 246", name: "Urban Hydrology", credits: "3:0" },
            { code: "CE 247", name: "Remote Sensing and GIS for Water Resources Engineering", credits: "3:0" },
            { code: "CE 247N", name: "Remote Sensing and GIS for Water Resources & Environmental Engineering", credits: "3:0" },
            { code: "CE 248", name: "Regionalization in Hydrology and Water Resources Engineering", credits: "3:0" },
            { code: "CE 248N", name: "Regionalization in Hydrology and Water Resources Engineering", credits: "3:0" },
            { code: "CE 249", name: "Water Quality Modeling", credits: "3:0" },
            { code: "CE 251", name: "Computational Methods in Water Resources Engineering", credits: "3:0" },
            { code: "CE 252", name: "Ground Water Engineering", credits: "3:0" },
            { code: "CE 253", name: "Computational Methods in Water Resources Engineering", credits: "3:0" },
            { code: "CE 253", name: "Soft Computing in Water Resources & Environmental Engineering", credits: "3:0" },
            { code: "CE 253", name: "Water Quality Modelling", credits: "3:0" },
            { code: "CE 254", name: "Advanced Fracture Mechanics", credits: "3:0" },
            { code: "CE 255", name: "Urban Hydrology", credits: "3:0" },
            { code: "CE 256", name: "Stochastic Hydrology", credits: "3:0" },
            { code: "CE 257", name: "Advanced Hydrology", credits: "3:0" },
            { code: "CE 258", name: "Remote Sensing and GIS for Water Resources & Environmental Engineering", credits: "3:0" },
            { code: "CE 259", name: "Regionalization in Hydrology and Water Resources Engineering", credits: "3:0" },
            { code: "CE 261", name: "Urban Transportation Systems Planning", credits: "3:0" },
            { code: "CE 261", name: "Traffic Engineering", credits: "3:0" },
            { code: "CE 262", name: "Public Transportation Systems Planning", credits: "3:0" },
            { code: "CE 262", name: "Geoinformatic in Transport Engineering", credits: "3:0" },
            { code: "CE 263", name: "Modelling Transport and Traffic", credits: "3:0" },
            { code: "CE 264", name: "Traffic Engineering", credits: "3:0" },
            { code: "CE 265", name: "Geo-informatics in Transportation Engineering", credits: "3:0" },
            { code: "CE 266", name: "Pavement Engineering", credits: "3:0" },
            { code: "CE 267", name: "Transportation Statistics and Micro-simulation", credits: "3:0" },
            { code: "CE 268", name: "Discrete Choice Modelling Methods for Transportation Planning", credits: "3:0" },
            { code: "CE 269", name: "Traffic Engineering", credits: "3:0" },
            { code: "CE 270", name: "Travel Demand Modeling", credits: "3:0" },
            { code: "CE 271", name: "Discrete Choice Modeling Methods for Transportation Planning", credits: "3:0" },
            { code: "CE 272", name: "Traffic Network Equilibrium", credits: "3:0" },
            { code: "CE 272", name: "Continuum Damage Mechanics", credits: "2:0" },
            { code: "CE 273", name: "Markov Decision Processes", credits: "3:0" },
            { code: "CE 273", name: "Fracture Mechanics of Concrete Structures", credits: "3:0" },
            { code: "CE 274", name: "Sustainable Urban Transportation Planning", credits: "3:0" },
            { code: "CE 274", name: "Seismic Analysis and Design of Structures", credits: "3:0" },
            { code: "CE 275", name: "Nonlinear FEM in Structural Engineering", credits: "3:0" },
            { code: "CE 275", name: "Nonlinear Finite Element Analysis", credits: "2:0" },
            { code: "CE 276", name: "Structural Masonry", credits: "3:0" },
            { code: "CE 277", name: "Remote Sensing in Ecohydrology", credits: "3:0" },
            { code: "CE 278", name: "Optimization Methods", credits: "3:0" },
            { code: "CE 279", name: "Computational Geotechnics", credits: "3:0" },
            { code: "CE 281", name: "Multiscale Fracture of Quasi-Brittle Materials", credits: "3:0" },
            { code: "CE 282", name: "Advanced Concrete Design (Plain, Reinforced and Prestressed)", credits: "3:0" },
            { code: "CE 283", name: "Random vibrations and structural reliability", credits: "3:0" },
            { code: "CE 287", name: "Stochastic Structural Dynamics", credits: "3:0" },
            { code: "CE 288", name: "Elements of Wavelet Theory and Application to Structural Dynamics", credits: "3:0" },
            { code: "CE 288", name: "Elements of Wavelet Theory and Application to Structural Dynamics", credits: "2:0" },
            { code: "CE 289", name: "Engineering Seismology", credits: "3:0" },
            { code: "CE 290", name: "Structural System Identification", credits: "3:0" },
            { code: "CE 291", name: "Uncertainty modelling and analysis", credits: "3:0" },
            { code: "CE 291", name: "Computation in Structural Mechanics", credits: "3:0" },
            { code: "CE 292", name: "FEM for structural dynamic and stability analyses", credits: "3:0" },
            { code: "CE 293", name: "Bridge Engineering", credits: "3:0" },
            { code: "CE 294", name: "Monte Carlo Simulations in Structural Mechanics", credits: "3:0" },
            { code: "CE 296", name: "Random Vibrations and Structural Reliability", credits: "3:0" },
            { code: "CE 297", name: "Problems in the Mathematical Theory of Elasticity", credits: "3:0" },
            { code: "CE 298", name: "Parallel computing in mechanics problems", credits: "3:0" },
            { code: "CE 299", name: "Project", credits: "0:22" },
            { code: "CH 201", name: "Engineering Mathematics", credits: "3:0" },
            { code: "CH 202", name: "Numerical Methods", credits: "3:0" },
            { code: "CH 203", name: "Transport Processes", credits: "3:0" },
            { code: "CH 204", name: "Thermodynamics", credits: "3:0" },
            { code: "CH 205", name: "Chemical Reaction Engineering", credits: "3:0" },
            { code: "CH 206", name: "Seminar Course", credits: "1:0" },
            { code: "CH 207", name: "Experimental Methods in Chemical Engineering II", credits: "0:2" },
            { code: "CH 207", name: "Applied statistics and design of experiments", credits: "1:0" },
            { code: "CH 234", name: "Rheology of Complex Fluids and Particulate Materials", credits: "3:0" },
            { code: "CH 235", name: "Modeling in Chemical Engineering", credits: "3:0" },
            { code: "CH 236", name: "Statistical Thermodynamics", credits: "3:0" },
            { code: "CH 242", name: "Special Topics in Theoretical Biology", credits: "3:0" },
            { code: "CH 243", name: "Mechanics of Particle suspensions", credits: "3:0" },
            { code: "CH 245", name: "Interfacial and Colloidal Phenomena", credits: "3:0" },
            { code: "CH 248", name: "Molecular Systems Biology", credits: "3:0" },
            { code: "CH 249", name: "Structural and Functional DNA Nanotechnology", credits: "3:0" },
            { code: "CH 299", name: "Dissertation Project", credits: "0:32" },
            { code: "ES 201", name: "Introduction to Earth System Science", credits: "2:1" },
            { code: "ES 201", name: "Introduction to Earth System", credits: "3:0" },
            { code: "ES 202", name: "Biogeochemistry", credits: "3:0" },
            { code: "ES 203", name: "Introduction to Petrology", credits: "3:0" },
            { code: "ES 204", name: "Origin and Evolution of the Earth", credits: "3:0" },
            { code: "ES 205", name: "Mathematics for Geophysicists", credits: "3:0" },
            { code: "ES 206", name: "Topics in Geophysics", credits: "3:0" },
            { code: "ES 207", name: "Earth Science Laboratory", credits: "0:3" },
            { code: "ES 208", name: "Applied Petrology and Geochemistry", credits: "3:0" },
            { code: "ES 208", name: "Mantle Convection", credits: "3:0" },
            { code: "ES 209", name: "Geochemistry or Understanding Natural Materials: A Geochemical Approach", credits: "3:0" },
            { code: "ES 209", name: "Biogeochemistry", credits: "3:0" },
            { code: "ES 210", name: "Radiogenic Isotope Geochemistry", credits: "3:0" },
            { code: "ES 210", name: "Tectonics and Crustal Evolution", credits: "3:0" },
            { code: "ES 211", name: "Origin and Evolution of the Earth", credits: "3:0" },
            { code: "ES 211", name: "Economic minerals and tectonic processes", credits: "2:1" },
            { code: "ES 211", name: "Applied Petrology", credits: "3:0" },
            { code: "ES 212", name: "Fluid dynamics of planetary interiors", credits: "3:0" },
            { code: "ES 212", name: "Lithosphere Dynamics", credits: "3:0" },
            { code: "ES 213", name: "Isotope Geochemistry", credits: "3:0" },
            { code: "ES 214", name: "Mathematics for Geophysics", credits: "3:0" },
            { code: "ES 214", name: "Topics in stratigraphy and geochronology", credits: "3:0" },
            { code: "ES 215", name: "Introduction to Chemical Oceanography", credits: "3:0" },
            { code: "ES 216", name: "Advanced Chemical Oceanography", credits: "3:0" },
            { code: "ES 217", name: "Earth System Processes and Interactions", credits: "3:0" },
            { code: "ES 218", name: "Introduction to Seismology", credits: "3:0" },
            { code: "ES 220", name: "Introduction to satellite Geodesy", credits: "3:0" },
            { code: "ES 221", name: "Dynamics of Planetary Interiors", credits: "3:0" },
            { code: "ES 222", name: "Data Analysis for Earth System Science", credits: "3:0" },
            { code: "ES 225", name: "Scientific writing and presentation", credits: "1:0" },
            { code: "ES 299", name: "Dissertation Project", credits: "0:25" },
            { code: "ES 401", name: "Natural Hazards and Their Mitigation", credits: "3:0" },
            { code: "ST 203", name: "Design, Technology and Sustainability", credits: "3:0" },
            { code: "ST 206", name: "Environmental and Natural Resources Management", credits: "2:1" },
            { code: "ST 210", name: "Principles and Applications of GIS and Remote Sensing", credits: "3:1" },
            { code: "ST 213", name: "Turbo Machine in Renewable Energy", credits: "3:0" },
            { code: "ST 214", name: "Mathematical Analysis of Experimental Data", credits: "3:0" },
            { code: "ST 216", name: "Physics in Experiments with Classical Statistics", credits: "3:0" },
            { code: "ST 218", name: "Sustainable Wastewater Management", credits: "3:0" },
            { code: "ST 220", name: "Principles of Remote Sensing", credits: "3:0" },
            { code: "ST 226", name: "Sustainable Water Management", credits: "3:0" },
            { code: "UES 306", name: "Surface and Ground Water Quality", credits: "3:0" },
            { code: "UES 309", name: "Waste water treatment", credits: "3:0" },
            { code: "WR 204", name: "Aqueous Geochemistry", credits: "3:0" }
        ]
    ],
    electivesIntro: (
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
                In addition to below listed electives, courses offered by the EES programme i.e;{" "}
                <a href="http://ceas.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Centre for Earth Sciences (CEaS)</a>,{" "}
                <a href="http://cst.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Centre for Sustainable Technologies (CST)</a>,{" "}
                <a href="http://civil.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Civil Engineering (CiE)</a>,{" "}
                <a href="http://caos.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Centre for Atmospheric and Oceanic Sciences (CAOS)</a>, and{" "}
                <a href="https://icwar.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Interdisciplinary Centre for Water Research (ICWaR) (Selected courses)</a>.
            </p>
            <p className="text-xs text-gray-500 italic">
                * Please discuss course selection with EES coordinators.
            </p>
        </div>
    ),
    hideElectiveMonthTabs: true
};

export default function EarthSciencePage() {
    return <DepartmentTemplate {...earthScienceData} />;
}
