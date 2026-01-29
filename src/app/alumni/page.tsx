"use client";
import { useState } from "react";
import { Search, Building2, User, ChevronRight, GraduationCap } from "lucide-react";

export default function AlumniPage() {
    const [selectedDepartment, setSelectedDepartment] = useState("Biology");
    const [selectedBatch, setSelectedBatch] = useState("2020-2024");
    const [searchQuery, setSearchQuery] = useState("");

    type Alumni = {
        name: string;
    };

    const alumniData: Record<string, Record<string, Alumni[]>> = {
        "2020-2024": {
            "Biology": [
                { name: "ADVAIT PANDURANG PAI" },
                { name: "AKARSH VATSAL" },
                { name: "ANIKET RAY" },
                { name: "AYUSHI GUPTA" },
                { name: "BARNOPRIYO DUTTA" },
                { name: "JEEVAN SUBODH B" },
                { name: "JYOTIRMOY BISWAL" },
                { name: "KARANDIKAR SOHAM MAHESH" },
                { name: "M VINISHAA SREE" },
                { name: "MANI KUMAR R" },
                { name: "PANDEY ANJANEY JAISHANKAR" },
                { name: "PRITHU PURKAIT" },
                { name: "S KREDAI RAAMAN" },
                { name: "SAGHEY SAJEEVAN" },
                { name: "SHARWARY M R" },
                { name: "SHINJINI CHATTERJEE" },
                { name: "SIDDHARTH BOTHRA" },
                { name: "SOUVIK MANDAL" },
                { name: "SUDHANSHU BHARADWAJ" },
                { name: "TANMAI DHANI REDDY" }
            ],
            "Chemistry": [
                { name: "ADITYA UMESH" },
                { name: "ANKUR BHAUMIK" },
                { name: "ANIK BISWAS" },
                { name: "DEEPTI SAHU" },
                { name: "DODIYA DEV NITESHKUMAR" },
                { name: "MAITREYA HALDAR" },
                { name: "NAKUL ABHAY BAPAT" },
                { name: "PRAJWAL.R.A" },
                { name: "PRANAV RAO" }
            ],
            "Earth & Environmental Sci.": [
                { name: "AARYMAN KAUL" },
                { name: "NEELIMA BOBBY" },
                { name: "TSUNGROJUNGLA WALLING" },
                { name: "PRIYANSHU KUMAR BODRA" }
            ],

            "Mathematics": [
                { name: "AATMAN SUPKAR" },
                { name: "ABHIRAM M" },
                { name: "ADITYA PRIYA" },
                { name: "ATHARVA SURESH GHUGARE" },
                { name: "BARKUR ANVESH SHETTY" },
                { name: "DULAM KARTHIK" },
                { name: "HARSH AGGARWAL" },
                { name: "KUNAL SAMANTA" },
                { name: "MOUSAM BISWAS" },
                { name: "RAGHURAM SUNDARARAJAN" },
                { name: "SABYASACHI PRAMANIK" },
                { name: "SAKJIT DAS" },
                { name: "SHREEYA MOGHE" },
                { name: "SHUBH PRAKASH" },
                { name: "SUDHARSHAN K V" },
                { name: "VEDANT SHARMA" },
                { name: "VINAYAK NIRAJ" }
            ],
            "Physics": [
                { name: "AADIL" },
                { name: "ABHINAV SINHA" },
                { name: "AJUDIYA KENIL RAJENDRABHAI" },
                { name: "ANEEK JANA" },
                { name: "ANIRUDH VERMA" },
                { name: "ANISH KUMAR" },
                { name: "ANUVAB SARKAR" },
                { name: "ARAMAAN MEHER" },
                { name: "ARYAMAN BHUTANI" },
                { name: "BRAHMACHARIMAYUM BALKRISHNA SHARMA" },
                { name: "DESH DEEPAK SUTHAR" },
                { name: "DHASHIN KRISHNA M" },
                { name: "DIYANSHU SANJAY WAHANE" },
                { name: "GURKIRAT SINGH" },
                { name: "GURUVAYURAPPAN B" },
                { name: "HINGWE ARYAN KRISHNA" },
                { name: "JYOTIRADITYA MISHRA" },
                { name: "KESHAV AGARWAL" },
                { name: "KORUKONDA SAI ANIRUDH KUMAR" },
                { name: "M ADINATH" },
                { name: "MEGHA KATTIMANI" },
                { name: "NISARG CHADHA" },
                { name: "PARTH JAYWANT DESHPANDE" },
                { name: "PONNA CHAITANYA VARDHAN" },
                { name: "PRASENJEET DEVIDAS FULMALI" },
                { name: "PREETPAL BEZBARUAH" },
                { name: "PURNENDU  SEN" },
                { name: "PURNENDU DAS" },
                { name: "RAKUL M V" },
                { name: "RAMITA MONDAL" },
                { name: "RITVIK RAINA" },
                { name: "SAAKSHI PORWAL" },
                { name: "SANMIT CHAKRABORTY" },
                { name: "SARTHAK TALUKDAR" },
                { name: "SARAD M P" },
                { name: "SATYARTH SRIVASTAV" },
                { name: "SENIN AHAMMED. A.P." },
                { name: "SHAH HEMANSH ALKESH" },
                { name: "SOMADITYA SANTRA" },
                { name: "SOUMADEEP SAHA" },
                { name: "SOURADEEP DAS" },
                { name: "SUDHANVA K V" },
                { name: "SURESH KUMAR MEENA" },
                { name: "SURIYAH R K" },
                { name: "TALLAPUDI CHINNA DURGA SREE SAI SUKESH" },
                { name: "TEJAS BANSOD" },
                { name: "UJJWAL BASUMATARY" },
                { name: "UPPALAPATI NAGA JASWANTH VARMA" },
                { name: "VIVEK RAJ SINGH" }
            ],

        },
        "2017-2021": {
            "Biology": [
                { name: "ABHIJITH BIJI" },
                { name: "ADWAITH B UDAY" },
                { name: "ARCHISHMAN DAKUA" },
                { name: "ASHIM KUMAR DUBEY" },
                { name: "BHOOMIKA ASHOK BHAT" },
                { name: "GOPIKA RANJITH" },
                { name: "HARI P NARAYANAN" },
                { name: "HARSHITH NAGARAJ" },
                { name: "HARSHITHA MOHAN" },
                { name: "ILADEITI KURBAH MAWLONG" },
                { name: "K SREE ROOP" },
                { name: "KALYANI UTTAMRAO INGALE" },
                { name: "KARTHIKA KAVERI MAIAPPAN" },
                { name: "MAALAVIKA PILLAI" },
                { name: "MONICA U" },
                { name: "NIVED KRISHNAN S" },
                { name: "PRANOY DAS" },
                { name: "ROHITH MARAKKATH SUNIL" },
                { name: "SAYAN MALLICK" },
                { name: "SUNREETA BHATTACHARYA" },
                { name: "VIDHI SINHA" }
            ],
            "Chemistry": [
                { name: "AISHADIPTO BISWAS" },
                { name: "DHRUV LAL" },
                { name: "KOUSHIK DAS" },
                { name: "NIKET MANOJ" },
                { name: "SAYANTAN MANDAL" },
                { name: "SHRIVIGNESH S" },
                { name: "SOUMIK DAS" }
            ],

            "Mathematics": [
                { name: "AARADHYA PANDEY" },
                { name: "ABISHEK RAJAN" },
                { name: "ADIT VISHNU P M" },
                { name: "ADITHYA UPADHYA" },
                { name: "CHINMAYA KAUSIK" },
                { name: "NABARUN DEKA" },
                { name: "PIYUSH BHUWAN SATI" },
                { name: "RATHI VRUNDA NANDKUMAR" },
                { name: "ROHIT KUMAR" },
                { name: "S SRIRAM" },
                { name: "SHAFIL MAHEEN N" },
                { name: "SIDHARTH SOUNDARARAJAN" }
            ],
            "Physics": [
                { name: "ADEPU PREETHAM KUMAR" },
                { name: "ADITHYAN K V" },
                { name: "ADITI AJITH PUJAR" },
                { name: "AGRIM SHARMA" },
                { name: "AHMED NAZEER RAWTHER" },
                { name: "AMAN ANAND" },
                { name: "ANISH BHATTACHARYA" },
                { name: "ANSH KUHIKAR" },
                { name: "ARCHISMAN PANIGRAHI" },
                { name: "ARPIT BEHERA" },
                { name: "BARATH MOHAN U" },
                { name: "BHANDARU PHANI PARASAR" },
                { name: "DIVIJ MISHRA" },
                { name: "DIVYOJ SINGH" },
                { name: "GIRISH BHARAT KUMBHAR" },
                { name: "GOKUL KRISHNA" },
                { name: "HARSH RAJ" },
                { name: "KAARTHIK VARMA" },
                { name: "KRUTHI K" },
                { name: "M PRASHANT KRISHNAN" },
                { name: "NANDAGOPAL M" },
                { name: "NINAD HEMANT HUILGOL" },
                { name: "PATWARDHAN AMEYA" },
                { name: "PIUSH RANJAN JENA" },
                { name: "PRABHU ASHWITH VARADARAJ" },
                { name: "PRATYUSH MENON" },
                { name: "PRAVEEN J" },
                { name: "R DHARANISH" },
                { name: "RIMIKA JAISWAL" },
                { name: "S RAMACHANDRA BANGARI" },
                { name: "S RISHI" },
                { name: "S SHRIHARI" },
                { name: "SANDRA SANTHOSH" },
                { name: "SAYAN SINGHA" },
                { name: "SIDDHARTH KUMAR" },
                { name: "SOURAV RANJAN SARAF" },
                { name: "SREEKAR GUNDA" },
                { name: "VINAY VIKRAMADITYA" },
                { name: "VIVEK MAURYA" },
                { name: "YASH MEHUL MEHTA" },
                { name: "DEVANG SEHGAL" }
            ],

        },
        "2018-2022": {},
        "2019-2023": {
            "Biology": [
                { name: "ABHEEPSA NANDA" },
                { name: "ABHIKALPA SAIKIA SONOWAL" },
                { name: "AHAMED PANIKKAVEETTIL KALADIYIL" },
                { name: "AKASH KALITA" },
                { name: "AMBARISH MALLICK" },
                { name: "ANUSMITA BISWAS" },
                { name: "ARANYA DHIBAR" },
                { name: "DIPAYAN AKHULI" },
                { name: "KARTHIK V" },
                { name: "NIKHITA KIRTHIVASAN" },
                { name: "NILAY AGARWAL" },
                { name: "PABITRA SHARMA" },
                { name: "PRAKHAR JAISWAL" },
                { name: "PRIYANSH CHAUDHARY" },
                { name: "RASHI JINDAL" },
                { name: "SAI SHYAM" },
                { name: "SUBHAM DAS" },
                { name: "TANISHQ TEJASWI" },
                { name: "THEJAS SATHEESH" },
                { name: "YUKTA THYAGARAJ" }
            ],
            "Chemistry": [
                { name: "ADITYA BASU" },
                { name: "ANTONY JAMES" },
                { name: "ANUBHAV GOSWAMI" },
                { name: "ANWESHA GUHA" },
                { name: "MD SAYAN SAFIK" },
                { name: "ROHIT RAJ" },
                { name: "SAHNIK RAY" },
                { name: "SHIV PAL YADAV" },
                { name: "SHRAMAN KUMAR SAHA" },
                { name: "SUKRIYO CHAKRABORTY" }
            ],
            "Earth & Environmental Sci.": [
                { name: "BODA SRINIVAS" },
                { name: "DEBOJJAL BAGCHI" },
                { name: "HARSH THAKUR" },
                { name: "SATWIK GARIKIMUKKU" },
                { name: "SOURAJYOTI BISWAS" }
            ],

            "Mathematics": [
                { name: "ANISH SHRIPAD HEBBAR" },
                { name: "ANKUSH MOGER" },
                { name: "ARITRA CHATTERJEE" },
                { name: "ARKA DAS" },
                { name: "CHINMAY RATNAPARKHI" },
                { name: "IRISH DEBBARMA" },
                { name: "M DHRUV" },
                { name: "MIHIR GIRISH DHANAKSHIRUR" },
                { name: "N MOHITH RAJU" },
                { name: "PRASHANT ABHIJIT GOKHALE" },
                { name: "PRATHIK DIWAKAR" },
                { name: "PRAYAS RAUTRAY" },
                { name: "RUTWIK PASANI" },
                { name: "SAI SANJEEV BALAKRISHNAN" },
                { name: "SARVAGYA JAIN" },
                { name: "SAUDITYA JAISWAL" },
                { name: "SHRAVAN SINGH MEHRA" },
                { name: "SHREEPRANAV VARMA ENUGANDLA" },
                { name: "SOUPTIK MUDI" },
                { name: "SPANDAN GHOSH" },
                { name: "SUNDARARAJAN SRINIVASAN" },
                { name: "SURYANSH SHRIVASTAVA" },
                { name: "UPAMANYU YADDANAPUDI" },
                { name: "VASISHT VASUDEVAN" }
            ],
            "Physics": [
                { name: "A ABHINAV JITH" },
                { name: "ABHIRUP GHOSH" },
                { name: "ADITYA S IYER" },
                { name: "ANAND S" },
                { name: "ANEESH KUSHAL" },
                { name: "ANIRUDDHA DEORANKAR" },
                { name: "ARANYA CHAKRABORTY" },
                { name: "ASHFAKH ALI KM" },
                { name: "CHANDAN R T" },
                { name: "CHINMAY K HARITAS" },
                { name: "DARSHANA MANDAL" },
                { name: "DIPANJAN DAS" },
                { name: "DURGA NAGA HAREESH NENDRAGANTI" },
                { name: "HARISH KUMAR MAURYA" },
                { name: "HARSHA VARDHANUDU MATURI" },
                { name: "HARSHIT KHANDELWAL" },
                { name: "HIMANSHU MADHUKAR TONGALE" },
                { name: "JAYESH KUMAR JAISWAL" },
                { name: "KALASH UTTAM CHANDAKAPURE" },
                { name: "KARTIK SHARMA" },
                { name: "KAUSTUBH ROY" },
                { name: "LAKSHMI MALVADI SHIVAKUMAR" },
                { name: "MANAS PRATIM BISWAS" },
                { name: "MUDIT BHATT" },
                { name: "NANDEESH KUMAR K M" },
                { name: "NAVIN VINCENT" },
                { name: "PRANAV BHAMIDIPATI" },
                { name: "PRANAV TICKU" },
                { name: "RAJ PARESH MEHTA" },
                { name: "RAJARSHI BARMAN" },
                { name: "RIJU DUTTA" },
                { name: "RISHIK PERUGU" },
                { name: "RUDRA NATH MISTRY" },
                { name: "S SANJAY" },
                { name: "SAGNIK MONDAL" },
                { name: "SALONI CHOURASIYA" },
                { name: "SANKALP PATEL" },
                { name: "SAYAN ROY" },
                { name: "SHASHANK RAJ" },
                { name: "SHIRISH RAMESH" },
                { name: "SHIVAM PRAKASH" },
                { name: "SOUMI MONDAL" },
                { name: "SOUMYADEEP BHATTACHARJEE" },
                { name: "SREYAS SATHEESH" },
                { name: "SUHAS SHEIKH" },
                { name: "SURYA" },
                { name: "VIVEK SAH" }
            ],

        }
    };

    const batches = [
        "2020-2024", "2019-2023", "2018-2022", "2017-2021",
        "2016-2020", "2015-2019", "2014-2018", "2013-2017",
        "2012-2016", "2011-2015", "2010-2014", "2009-2013",
        "2008-2012", "2007-2011", "2006-2010"
    ];

    // Get departments for the selected batch
    const departments = Object.keys(alumniData[selectedBatch] || {});

    // Ensure selectedDepartment is valid for new batch
    if (!departments.includes(selectedDepartment) && departments.length > 0) {
        setSelectedDepartment(departments[0]);
    }

    const currentAlumni = (alumniData[selectedBatch]?.[selectedDepartment] || []).filter(alumni =>
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-12 md:py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Alumni Directory
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Connect with our distinguished graduates.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 -mt-8 relative z-20">

                <div className="bg-white rounded-2xl shadow-xl min-h-[600px] border border-slate-100 overflow-hidden flex flex-col md:flex-row">

                    {/* Sidebar Filters */}
                    <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 shadow-inner">

                        {/* Batch Selector (Dropdown for scalability) */}
                        <div className="mb-6">
                            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Batch
                            </h2>
                            <div className="relative">
                                <select
                                    value={selectedBatch}
                                    onChange={(e) => setSelectedBatch(e.target.value)}
                                    className="w-full appearance-none bg-white border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-8 font-semibold shadow-sm cursor-pointer outline-none transition-all hover:border-blue-400"
                                >
                                    {batches.map((batch) => (
                                        <option key={batch} value={batch}>
                                            Batch {batch}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Building2 className="w-4 h-4" /> Departments
                        </h2>
                        <div className="space-y-1">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDepartment(dept)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${selectedDepartment === dept
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                                        }`}
                                >
                                    {dept}
                                    {selectedDepartment === dept && <ChevronRight className="w-3 h-3" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">{selectedDepartment}</h2>
                                <p className="text-slate-500 text-sm mt-1">
                                    {currentAlumni.length} alumni listed in Batch {selectedBatch}
                                </p>
                            </div>

                            {/* Search */}
                            <div className="relative group w-full md:w-64">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
                                    placeholder="Search by name..."
                                />
                            </div>
                        </div>

                        {/* Table View */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-20">
                                                SL.No
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Name
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        {currentAlumni.length > 0 ? (
                                            currentAlumni.map((alumni, index) => (
                                                <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-mono">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">
                                                                {alumni.name.charAt(0)}
                                                            </div>
                                                            <div className="text-sm font-semibold text-slate-900">
                                                                {alumni.name}
                                                            </div>
                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={2} className="px-6 py-12 text-center text-slate-500 text-sm">
                                                    No alumni found matching your criteria.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
