"use client";
import { useState } from "react";
import { Search, Building2, User, ChevronRight, Mail, GraduationCap } from "lucide-react";

export default function AlumniPage() {
    const [selectedDepartment, setSelectedDepartment] = useState("Biology");
    const [selectedBatch, setSelectedBatch] = useState("2020-2024");
    const [searchQuery, setSearchQuery] = useState("");

    type Alumni = {
        name: string;
        email: string;
    };

    const alumniData: Record<string, Record<string, Alumni[]>> = {
        "2020-2024": {
            "Biology": [
                { name: "ADVAIT PANDURANG PAI", email: "ppai69@gmail.com" },
                { name: "AKARSH VATSAL", email: "attuakarsh@gmail.com" },
                { name: "ANIKET RAY", email: "aniket.rik@gmail.com" },
                { name: "AYUSHI GUPTA", email: "ayu.ngp3@gmail.com" },
                { name: "BARNOPRIYO DUTTA", email: "barnopriyodutta@gmail.com" },
                { name: "JEEVAN SUBODH B", email: "jeevs.9999@gmail.com" },
                { name: "JYOTIRMOY BISWAL", email: "jyotirmoybiswal@gmail.com" },
                { name: "KARANDIKAR SOHAM MAHESH", email: "smkarandikar2011@hotmail.com" },
                { name: "M VINISHAA SREE", email: "roshanviji1977@gmail.com" },
                { name: "MANI KUMAR R", email: "ksrmanikumar@gmail.com" },
                { name: "PANDEY ANJANEY JAISHANKAR", email: "anjaneypandey0208@gmail.com" },
                { name: "PRITHU PURKAIT", email: "prithupurkait2001@gmail.com" },
                { name: "S KREDAI RAAMAN", email: "raamanyamuna@gmail.com" },
                { name: "SAGHEY SAJEEVAN", email: "sajeevanvp@ymail.com" },
                { name: "SHARWARY M R", email: "sharwary2002@gmail.com" },
                { name: "SHINJINI CHATTERJEE", email: "assttdatrgcob@gmail.com" },
                { name: "SIDDHARTH BOTHRA", email: "dimplebothra@rediffmail.com" },
                { name: "SOUVIK MANDAL", email: "souvikmandal2002@gmail.com" },
                { name: "SUDHANSHU BHARADWAJ", email: "sudhanshuavk@gmail.com" },
                { name: "TANMAI DHANI REDDY", email: "curious.demons@gmail.com" }
            ],
            "Chemistry": [
                { name: "ADITYA UMESH", email: "adityaumesh12@gmail.com" },
                { name: "ANKUR BHAUMIK", email: "abhaumik97@gmail.com" },
                { name: "ANIK BISWAS", email: "ashalatamallick72@gmail.com" },
                { name: "DEEPTI SAHU", email: "mailmedisha1trupti2@gmail.com" },
                { name: "DODIYA DEV NITESHKUMAR", email: "devdodiya27@gmail.com" },
                { name: "MAITREYA HALDAR", email: "aagamani1234@gmail.com" },
                { name: "NAKUL ABHAY BAPAT", email: "bapatnakul@gmail.com" },
                { name: "PRAJWAL.R.A", email: "prajwalra31@gmail.com" },
                { name: "PRANAV RAO", email: "pranavrao274@gmail.com" }
            ],
            "Earth & Environmental Sci.": [
                { name: "AARYMAN KAUL", email: "akkaul@tatapower.com" },
                { name: "NEELIMA BOBBY", email: "bobby139@hotmail.com" },
                { name: "TSUNGROJUNGLA WALLING", email: "awalling18@gmail.com" },
                { name: "PRIYANSHU KUMAR BODRA", email: "priyanshubodra985@gmail.com" }
            ],
            "Materials": [
                { name: "DHIRAJ S KORI", email: "sreedharkori2164@gmail.com" },
                { name: "DIKSHANT AFRIA", email: "dikshantafria@gmail.com" },
                { name: "EKTA", email: "ekta.kulkarni2002@gmail.com" },
                { name: "JAYSWAL KRISHNA DHARMENDRA", email: "k.d.jayaswal5642@gmail.com" },
                { name: "PRATIK BHOWMIK", email: "juniorop00000@gmail.com" },
                { name: "PRAVIR PRADIP PANDAO", email: "arjunppandao@gmail.com" },
                { name: "SANKET WAMAN PATIL", email: "sanketwpatil2002@gmail.com" },
                { name: "VAIBHAV RANJAN", email: "vaibhavranjan1305@gmail.com" },
                { name: "YASH VARDHAN BHOBIA", email: "raj_hmh@yahoo.com" }
            ],
            "Mathematics": [
                { name: "AATMAN SUPKAR", email: "aatmansupkar@gmail.com" },
                { name: "ABHIRAM M", email: "abhiramm@iisc.ac.in" },
                { name: "ADITYA PRIYA", email: "adityapriya2911@gmail.com" },
                { name: "ATHARVA SURESH GHUGARE", email: "atharvaghugre@gmail.com" },
                { name: "BARKUR ANVESH SHETTY", email: "banveshshetty@gmail.com" },
                { name: "DULAM KARTHIK", email: "Karthik.06.dulam@gmail.com" },
                { name: "HARSH AGGARWAL", email: "harsh.aggarwal939@gmail.com" },
                { name: "KUNAL SAMANTA", email: "kunalsamanta2015@gmail.com" },
                { name: "MOUSAM BISWAS", email: "mousambiswas2001@gmail.com" },
                { name: "RAGHURAM SUNDARARAJAN", email: "raghurams13@outlook.com" },
                { name: "SABYASACHI PRAMANIK", email: "sabyasachipramanik14@gmail.com" },
                { name: "SAKJIT DAS", email: "sakjitdas@gmail.com" },
                { name: "SHREEYA MOGHE", email: "moghe185shreeya@gmail.com" },
                { name: "SHUBH PRAKASH", email: "shubh.pr.704@gmail.com" },
                { name: "SUDHARSHAN K V", email: "kvs.2002@gmail.com" },
                { name: "VEDANT SHARMA", email: "" },
                { name: "VINAYAK NIRAJ", email: "vniraj02@gmail.com" }
            ],
            "Physics": [
                { name: "AADIL", email: "aadilahmad3263@gmail.com" },
                { name: "ABHINAV SINHA", email: "pp15966@gmail.com" },
                { name: "AJUDIYA KENIL RAJENDRABHAI", email: "kra635900@gmail.com" },
                { name: "ANEEK JANA", email: "jadabjana@gmail.com" },
                { name: "ANIRUDH VERMA", email: "anirudhverma33@gmail.com" },
                { name: "ANISH KUMAR", email: "care.agi.ak@outlook.com" },
                { name: "ANUVAB SARKAR", email: "anuvabbb8r2d2@gmail.com" },
                { name: "ARAMAAN MEHER", email: "aramaanmeher@gmail.com" },
                { name: "ARYAMAN BHUTANI", email: "aryaman276@gmail.com" },
                { name: "BRAHMACHARIMAYUM BALKRISHNA SHARMA", email: "" },
                { name: "DESH DEEPAK SUTHAR", email: "jsuthar88@yahoo.com" },
                { name: "DHASHIN KRISHNA M", email: "mdhashinkrishna@gmail.com" },
                { name: "DIYANSHU SANJAY WAHANE", email: "dinu.wahane@gmail.com" },
                { name: "GURKIRAT SINGH", email: "gurkirat.ac@gmail.com" },
                { name: "GURUVAYURAPPAN B", email: "balajirukmani@gmail.com" },
                { name: "HINGWE ARYAN KRISHNA", email: "aryanhingwe1612@gmail.com" },
                { name: "JYOTIRADITYA MISHRA", email: "anjalimohapatra@gmail.com" },
                { name: "KESHAV AGARWAL", email: "" },
                { name: "KORUKONDA SAI ANIRUDH KUMAR", email: "anirudhkumar2030@gmail.com" },
                { name: "M ADINATH", email: "adinath.mv@gmail.com" },
                { name: "MEGHA KATTIMANI", email: "kattimani@gmail.com" },
                { name: "NISARG CHADHA", email: "drachadha@yahoo.com" },
                { name: "PARTH JAYWANT DESHPANDE", email: "deshpandeparth27@gmail.com" },
                { name: "PONNA CHAITANYA VARDHAN", email: "Chaituviking@gmail.com" },
                { name: "PRASENJEET DEVIDAS FULMALI", email: "prasenjeetfulmali@gmail.com" },
                { name: "PREETPAL BEZBARUAH", email: "bikrambezbaruah@gmail.com" },
                { name: "PURNENDU  SEN", email: "senpurnendu2002@gmail.com" },
                { name: "PURNENDU DAS", email: "purmath2002@gmail.com" },
                { name: "RAKUL M V", email: "vpriya22121995@gmail.com" },
                { name: "RAMITA MONDAL", email: "naba331969@gmail.com" },
                { name: "RITVIK RAINA", email: "naba331969@gmail.com" },
                { name: "SAAKSHI PORWAL", email: "akhileshporwal01@gmail.com" },
                { name: "SANMIT CHAKRABORTY", email: "sanmitc97@gmail.com" },
                { name: "SARTHAK TALUKDAR", email: "sarthaktalukdar01@gmail.com" },
                { name: "SARAD M P", email: "saradmon2@gmail.com" },
                { name: "SATYARTH SRIVASTAV", email: "ssatyarth.daan20@gmail.com" },
                { name: "SENIN AHAMMED. A.P.", email: "seninahammedap@gmail.com" },
                { name: "SHAH HEMANSH ALKESH", email: "dr.shahalkesh@gmail.com" },
                { name: "SOMADITYA SANTRA", email: "somadityasantra@gmail.com" },
                { name: "SOUMADEEP SAHA", email: "soumadeepsaha2014@gmail.com" },
                { name: "SOURADEEP DAS", email: "soura2302@gmail.com" },
                { name: "SUDHANVA K V", email: "sudhanvakv@gmail.com" },
                { name: "SURESH KUMAR MEENA", email: "" },
                { name: "SURIYAH R K", email: "suriyahrk@gmail.com" },
                { name: "TALLAPUDI CHINNA DURGA SREE SAI SUKESH", email: "" },
                { name: "TEJAS BANSOD", email: "drtab999@gmail.com" },
                { name: "UJJWAL BASUMATARY", email: "ujjwalbasumatary@gmail.com" },
                { name: "UPPALAPATI NAGA JASWANTH VARMA", email: "jaswanthvarma536@gmail.com" },
                { name: "VIVEK RAJ SINGH", email: "vivekrajsingh.vrs.vns@gmail.com" }
            ],
            "Others": [
                { name: "AGRAWALLA BHAVYA BIJAY", email: "bhavyaagrawalla@gmail.com" },
                { name: "NAVANEETH K S", email: "navneethks2002@gmail.com" },
                { name: "HARSHVARDHAN MANTRY", email: "" }
            ]
        },
        "2017-2021": {
            "Biology": [
                { name: "ABHIJITH BIJI", email: "abhijithbiji@gmail.com" },
                { name: "ADWAITH B UDAY", email: "adwaithneelambari@gmail.com" },
                { name: "ARCHISHMAN DAKUA", email: "archishman99@gmail.com" },
                { name: "ASHIM KUMAR DUBEY", email: "thedashingboy.ashim@gmail.com" },
                { name: "BHOOMIKA ASHOK BHAT", email: "bhat.bhoomi@gmail.com" },
                { name: "GOPIKA RANJITH", email: "gopikaranjith@gmail.com" },
                { name: "HARI P NARAYANAN", email: "pradeepnarayanan2010@gmail.co" },
                { name: "HARSHITH NAGARAJ", email: "saps.nag@gmail.com" },
                { name: "HARSHITHA MOHAN", email: "mbmohan@gmail.com" },
                { name: "ILADEITI KURBAH MAWLONG", email: "rkurbah@yahoo.com" },
                { name: "K SREE ROOP", email: "sreeroopkayodhya@gmail.com" },
                { name: "KALYANI UTTAMRAO INGALE", email: "kalyaniingale17@gmail.com" },
                { name: "KARTHIKA KAVERI MAIAPPAN", email: "Maiappan@gmail.com" },
                { name: "MAALAVIKA PILLAI", email: "preejay2002@gmail.com" },
                { name: "MONICA U", email: "swarnalathaofficial@gmail.com" },
                { name: "NIVED KRISHNAN S", email: "nived.krishnans@yahoo.com" },
                { name: "PRANOY DAS", email: "sahajananda95@gmail.com" },
                { name: "ROHITH MARAKKATH SUNIL", email: "sunilb.marakkath@gmail.com" },
                { name: "SAYAN MALLICK", email: "mail2sayanm@gmail.com" },
                { name: "SUNREETA BHATTACHARYA", email: "sunreetab@gmail.com" },
                { name: "VIDHI SINHA", email: "vinayaksavaranand@gmail.com" }
            ],
            "Chemistry": [
                { name: "AISHADIPTO BISWAS", email: "aishadipto@gmail.com" },
                { name: "DHRUV LAL", email: "mailmepankaj20@rediffmail.com" },
                { name: "KOUSHIK DAS", email: "koushikdascob99@gmail.com" },
                { name: "NIKET MANOJ", email: "niketmanoj@gmail.com" },
                { name: "SAYANTAN MANDAL", email: "" },
                { name: "SHRIVIGNESH S", email: "tskovai@yahoo.com" },
                { name: "SOUMIK DAS", email: "soumikdas1701@gmail.com" }
            ],
            "Materials": [
                { name: "AADHITHYAN K", email: "m.kannan68@gmail.com" },
                { name: "ABDULLA SAMIN M V", email: "thasneemtharamal@gmail.com" },
                { name: "AMAN GUPTA", email: "amanai.gupta@gmail.com" },
                { name: "AMITRAJIT CHATTOPADHYAY", email: "mani03530@gmail.com" },
                { name: "ARKODIP MANDAL", email: "arkodipmandal99@gmail.com" },
                { name: "ASHISH ROUT", email: "ashishrout1999@gmail.com" },
                { name: "DEBABRATA GHOSH", email: "ghosh.argha.2013@gmail.com" },
                { name: "INGOLE ANIKET RAJENDRA", email: "ingolerv@gmail.com" },
                { name: "JANANANDHAN S", email: "sjananandhan@gmail.com" },
                { name: "K.N SRI SARAVANA", email: "guganmedicals@gmail.com" },
                { name: "KANAV JAIN", email: "kanavjain1999@gmail.com" },
                { name: "MANOJ R", email: "dcrathod1801@gmail.com" },
                { name: "NIDHISH SAGAR", email: "sagarnidhish@yahoo.co.in" },
                { name: "RAHUL SHAH", email: "rahulshahofficial@gmail.com" },
                { name: "S.SARANG", email: "sarangsreechakra@gmail.com" },
                { name: "SUKANYA MAJUMDER", email: "sukanya07majumder@gmail.com" },
                { name: "SUPARNA MONDAL", email: "mondal@bhelhwr.co.in" },
                { name: "UMATE KARTIK", email: "umatek@gmail.com" },
                { name: "YASH", email: "1728yash@gmail.com" }
            ],
            "Mathematics": [
                { name: "AARADHYA PANDEY", email: "aaradhyapandey98@gmail.com" },
                { name: "ABISHEK RAJAN", email: "abiwd@yahoo.com" },
                { name: "ADIT VISHNU P M", email: "aditvishnu3@gmail.com" },
                { name: "ADITHYA UPADHYA", email: "adithya.v.upadhya@gmail.com" },
                { name: "CHINMAYA KAUSIK", email: "quantum112358@gmail.com" },
                { name: "NABARUN DEKA", email: "nabarundeka15@gmail.com" },
                { name: "PIYUSH BHUWAN SATI", email: "bcsatimrvc@gmail.com" },
                { name: "RATHI VRUNDA NANDKUMAR", email: "rathivrunda@gmail.com" },
                { name: "ROHIT KUMAR", email: "arvindkumar@bel.co.in" },
                { name: "S SRIRAM", email: "sriramak47@gmail.com" },
                { name: "SHAFIL MAHEEN N", email: "shafilmaheenn@gmail.com" },
                { name: "SIDHARTH SOUNDARARAJAN", email: "sharadharajan@gmail.com" }
            ],
            "Physics": [
                { name: "ADEPU PREETHAM KUMAR", email: "bhagmathiashok@gmail.com" },
                { name: "ADITHYAN K V", email: "vikaskaranayil@yahoo.co.in" },
                { name: "ADITI AJITH PUJAR", email: "aditiapujar@gmail.com" },
                { name: "AGRIM SHARMA", email: "deepak.kr.1971@gmail.com" },
                { name: "AHMED NAZEER RAWTHER", email: "rawthern@gmail.com" },
                { name: "AMAN ANAND", email: "amanmathsrock123@gmail.com" },
                { name: "ANISH BHATTACHARYA", email: "" },
                { name: "ANSH KUHIKAR", email: "shilpakuhikar@yahoo.com" },
                { name: "ARCHISMAN PANIGRAHI", email: "apandada1@gmail.com" },
                { name: "ARPIT BEHERA", email: "arpit.b1999@gmail.com" },
                { name: "BARATH MOHAN U", email: "rathbarockz@gmail.com" },
                { name: "BHANDARU PHANI PARASAR", email: "phaniparasar.b@gmail.com" },
                { name: "DIVIJ MISHRA", email: "divijmishra@gmail.com" },
                { name: "DIVYOJ SINGH", email: "divyojs@gmail.com" },
                { name: "GIRISH BHARAT KUMBHAR", email: "5girishkumbhar7@gmail.com" },
                { name: "GOKUL KRISHNA", email: "gk.krishna737@gmail.com" },
                { name: "HARSH RAJ", email: "raj.hr733@gmail.com" },
                { name: "KAARTHIK VARMA", email: "kaarthikvarma@gmail.com" },
                { name: "KRUTHI K", email: "kruthi1999ph@gmail.com" },
                { name: "M PRASHANT KRISHNAN", email: "mprashantkrishnan00@gmail.com" },
                { name: "NANDAGOPAL M", email: "manojmanar@gmail.com" },
                { name: "NINAD HEMANT HUILGOL", email: "ninadhuilgol@gmail.com" },
                { name: "PATWARDHAN AMEYA", email: "" },
                { name: "PIUSH RANJAN JENA", email: "kishore_jena43@yahoo.co.in" },
                { name: "PRABHU ASHWITH VARADARAJ", email: "prabhu.ashwith13@gmail.com" },
                { name: "PRATYUSH MENON", email: "menon.vidya@gmail.com" },
                { name: "PRAVEEN J", email: "vjk@koremec.net" },
                { name: "R DHARANISH", email: "dharanish1132000@gmail.com" },
                { name: "RIMIKA JAISWAL", email: "rimika222@gmail.com" },
                { name: "S RAMACHANDRA BANGARI", email: "sramachandrabangari0@gmail.com" },
                { name: "S RISHI", email: "rishisakthivelu94@gmail.com" },
                { name: "S SHRIHARI", email: "sshrihari008@gmail.com" },
                { name: "SANDRA SANTHOSH", email: "SANTHOSHPIOUS2010@gmail.co" },
                { name: "SAYAN SINGHA", email: "sayansingha99@yahoo.in" },
                { name: "SIDDHARTH KUMAR", email: "socialforum07@gmail.com" },
                { name: "SOURAV RANJAN SARAF", email: "ssaraf67@gmail.com" },
                { name: "SREEKAR GUNDA", email: "captgsrao@gmail.com" },
                { name: "VINAY VIKRAMADITYA", email: "panda.tapas@gmail.com" },
                { name: "VIVEK MAURYA", email: "vivek.maurya21999@gmail.com" },
                { name: "YASH MEHUL MEHTA", email: "yashovardhanmehta@gmail.com" },
                { name: "DEVANG SEHGAL", email: "devangsehgal@gmail.com" }
            ],
            "Others": []
        },
        "2018-2022": {},
        "2019-2023": {
            "Biology": [
                { name: "ABHEEPSA NANDA", email: "abheepsa_nanda@yahoo.com" },
                { name: "ABHIKALPA SAIKIA SONOWAL", email: "abhikalpasaikia7@gmail.com" },
                { name: "AHAMED PANIKKAVEETTIL KALADIYIL", email: "mpk1997@gmail.com" },
                { name: "AKASH KALITA", email: "marlowesky01@gmail.com" },
                { name: "AMBARISH MALLICK", email: "Amallickedu@yahoo.com" },
                { name: "ANUSMITA BISWAS", email: "jayantab2002@gmail.com" },
                { name: "ARANYA DHIBAR", email: "dev.sudip99@gmail.com" },
                { name: "DIPAYAN AKHULI", email: "Dipayanakhuli2001@gmail.com" },
                { name: "KARTHIK V", email: "indra.rangiah@gmail.com" },
                { name: "NIKHITA KIRTHIVASAN", email: "nikhitak01@gmail.com" },
                { name: "NILAY AGARWAL", email: "nee.aga@gmail.com" },
                { name: "PABITRA SHARMA", email: "spab17082000@gmail.com" },
                { name: "PRAKHAR JAISWAL", email: "sp12373@rediffmail.com" },
                { name: "PRIYANSH CHAUDHARY", email: "priyansh23052002@gmail.com" },
                { name: "RASHI JINDAL", email: "rashijindal2001@gmail.com" },
                { name: "SAI SHYAM", email: "saish13579@gmail.com" },
                { name: "SUBHAM DAS", email: "dassubham0660@gmail.com" },
                { name: "TANISHQ TEJASWI", email: "tanishq.tejaswi@outlook.com" },
                { name: "THEJAS SATHEESH", email: "tsps2020@gmail.com" },
                { name: "YUKTA THYAGARAJ", email: "yuktthatgautam@gmail.com" }
            ],
            "Chemistry": [
                { name: "ADITYA BASU", email: "dr.nityagopalbasu@gmail.com" },
                { name: "ANTONY JAMES", email: "linumathew@mgu.ac.in" },
                { name: "ANUBHAV GOSWAMI", email: "anubhav.goswami3800@gmail.com" },
                { name: "ANWESHA GUHA", email: "reachshankha@gmail.com" },
                { name: "MD SAYAN SAFIK", email: "safikmanowara@gmail.com" },
                { name: "ROHIT RAJ", email: "209rohitraj@gmail.com" },
                { name: "SAHNIK RAY", email: "sahnik8527@gmail.com" },
                { name: "SHIV PAL YADAV", email: "shivpal575757@gmail.com" },
                { name: "SHRAMAN KUMAR SAHA", email: "shramansaha@iisc.ac.in" },
                { name: "SUKRIYO CHAKRABORTY", email: "sukriyo2001@gmail.com" }
            ],
            "Earth & Environmental Sci.": [
                { name: "BODA SRINIVAS", email: "srinivasnayak235@gmail.com" },
                { name: "DEBOJJAL BAGCHI", email: "sbagchi2065@gmail.com" },
                { name: "HARSH THAKUR", email: "kt.bpl.2011@gmail.com" },
                { name: "SATWIK GARIKIMUKKU", email: "satwikgarikimukku@gmail.com" },
                { name: "SOURAJYOTI BISWAS", email: "Biswas08433@gmail.com" }
            ],
            "Materials": [
                { name: "AMIT KUMAR", email: "Amit.Kr1726@gmail.com" },
                { name: "DAKSH SISODIA", email: "sonalsisodia@gmail.com" },
                { name: "HAROON ALI AFSAL", email: "" },
                { name: "JITENDRIYA PRAHARAJ", email: "jitendriya2000@gmail.com" },
                { name: "KOTTAMASU SAI ANAHITHA", email: "skottamasu@gmail.com" },
                { name: "ROSHAN P GOWDA", email: "roshan.pgowda@gmail.com" },
                { name: "SOUPTIK DEY", email: "sd1419.sd@gmail.com" },
                { name: "VIMLESH CHOUHAN", email: "" }
            ],
            "Mathematics": [
                { name: "ANISH SHRIPAD HEBBAR", email: "anishhebbar1728@gmail.com" },
                { name: "ANKUSH MOGER", email: "mogerankush@gmail.com" },
                { name: "ARITRA CHATTERJEE", email: "aritrachatterjee1312@gmail.com" },
                { name: "ARKA DAS", email: "arkadas2000rkp@gmail.com" },
                { name: "CHINMAY RATNAPARKHI", email: "chinmay.29082001@gmail.com" },
                { name: "IRISH DEBBARMA", email: "irishdb29@gmail.com" },
                { name: "M DHRUV", email: "mvrsastry14@gmail.com" },
                { name: "MIHIR GIRISH DHANAKSHIRUR", email: "meerashirur@yahoo.com" },
                { name: "N MOHITH RAJU", email: "snmohithraju@gmail.com" },
                { name: "PRASHANT ABHIJIT GOKHALE", email: "prashantgokhaleswim@gmail.com" },
                { name: "PRATHIK DIWAKAR", email: "" },
                { name: "PRAYAS RAUTRAY", email: "9778364774jojo@gmail.com" },
                { name: "RUTWIK PASANI", email: "rutwikpasani7@gmail.com" },
                { name: "SAI SANJEEV BALAKRISHNAN", email: "" },
                { name: "SARVAGYA JAIN", email: "sarvkjain@gmail.com" },
                { name: "SAUDITYA JAISWAL", email: "saudityaj@gmail.com" },
                { name: "SHRAVAN SINGH MEHRA", email: "shravansinghmehra@gmail.com" },
                { name: "SHREEPRANAV VARMA ENUGANDLA", email: "shreepranav@gmail.com" },
                { name: "SOUPTIK MUDI", email: "souptikphysics@gmail.com" },
                { name: "SPANDAN GHOSH", email: "" },
                { name: "SUNDARARAJAN SRINIVASAN", email: "srini.priya@gmail.com" },
                { name: "SURYANSH SHRIVASTAVA", email: "nkshrivastava_68@yahoo.com" },
                { name: "UPAMANYU YADDANAPUDI", email: "upamanyu.yaddanapudi@gmail.co" },
                { name: "VASISHT VASUDEVAN", email: "vidyavrv@gmail.com" }
            ],
            "Physics": [
                { name: "A ABHINAV JITH", email: "abhinavjith@outlook.com" },
                { name: "ABHIRUP GHOSH", email: "abhirupg65@gmail.com" },
                { name: "ADITYA S IYER", email: "aditya.iyer.9621@gmail.com" },
                { name: "ANAND S", email: "anandsanthosh777@gmail.com" },
                { name: "ANEESH KUSHAL", email: "cisha76@gmail.com" },
                { name: "ANIRUDDHA DEORANKAR", email: "adeorankar@gmail.com" },
                { name: "ARANYA CHAKRABORTY", email: "atanu.chakraborty@rediffmail.com" },
                { name: "ASHFAKH ALI KM", email: "ashfakh1000@gmail.com" },
                { name: "CHANDAN R T", email: "chandan.relekar@gmail.com" },
                { name: "CHINMAY K HARITAS", email: "chinmayharitas@gmail.com" },
                { name: "DARSHANA MANDAL", email: "mandal.ranjit65@gmail.com" },
                { name: "DIPANJAN DAS", email: "dipanjandas61382@gmail.com" },
                { name: "DURGA NAGA HAREESH NENDRAGANTI", email: "nl.harish@rediffmail.com" },
                { name: "HARISH KUMAR MAURYA", email: "harish20308@gmail.com" },
                { name: "HARSHA VARDHANUDU MATURI", email: "" },
                { name: "HARSHIT KHANDELWAL", email: "hkhandelwal2503@gmail.com" },
                { name: "HIMANSHU MADHUKAR TONGALE", email: "mbtongle@gmail.com" },
                { name: "JAYESH KUMAR JAISWAL", email: "jayeshjaiswal2007@gmail.com" },
                { name: "KALASH UTTAM CHANDAKAPURE", email: "" },
                { name: "KARTIK SHARMA", email: "jitender.hoteljanpath@gmail.com" },
                { name: "KAUSTUBH ROY", email: "kinshuk0109@gmail.com" },
                { name: "LAKSHMI MALVADI SHIVAKUMAR", email: "yoganarsimha253@gmail.com" },
                { name: "MANAS PRATIM BISWAS", email: "manasbiswas2000@gmail.com" },
                { name: "MUDIT BHATT", email: "mudit.bhatt.mb@gmail.com" },
                { name: "NANDEESH KUMAR K M", email: "nandeeshkkm@gmail.com" },
                { name: "NAVIN VINCENT", email: "ptvincent123@gmail.com" },
                { name: "PRANAV BHAMIDIPATI", email: "" },
                { name: "PRANAV TICKU", email: "param.09@gmail.com" },
                { name: "RAJ PARESH MEHTA", email: "rajmehta1401@gmail.com" },
                { name: "RAJARSHI BARMAN", email: "bpbjen1968@gmail.com" },
                { name: "RIJU DUTTA", email: "rijudutta2371@gmail.com" },
                { name: "RISHIK PERUGU", email: "perugurishik5@gmail.com" },
                { name: "RUDRA NATH MISTRY", email: "samir.mistry2017@gmail.com" },
                { name: "S SANJAY", email: "suriyasanjay007@gmail.com" },
                { name: "SAGNIK MONDAL", email: "tanusreemdl@gmail.com" },
                { name: "SALONI CHOURASIYA", email: "saloni7chourasiya@gmail.com" },
                { name: "SANKALP PATEL", email: "p2203sankalp@gmail.com" },
                { name: "SAYAN ROY", email: "binoysayan@gmail.com" },
                { name: "SHASHANK RAJ", email: "sunraj1041@gmail.com" },
                { name: "SHIRISH RAMESH", email: "rockrish127@gmail.com" },
                { name: "SHIVAM PRAKASH", email: "shivamprakash058@gmail.com" },
                { name: "SOUMI MONDAL", email: "soumimondal270201@gmail.com" },
                { name: "SOUMYADEEP BHATTACHARJEE", email: "sandip.soumyadeep@gmail.com" },
                { name: "SREYAS SATHEESH", email: "preethisatheesh99@gmail.com" },
                { name: "SUHAS SHEIKH", email: "feynman375@gmail.com" },
                { name: "SURYA", email: "ksurya2000@outlook.com" },
                { name: "VIVEK SAH", email: "VIVEKSAHIN2001@GMAIL.COM" }
            ],
            "Others": [
                { name: "PATWA SARVESH VINOD", email: "patwa.jinesh97@gmail.com" },
                { name: "RUSTAM BISWAS", email: "ishwarighale13@gmail.com" },
                { name: "SOMISETTY HARSHA VARDHAN", email: "somisetty111@gmail.com" }
            ]
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
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.email.toLowerCase().includes(searchQuery.toLowerCase())
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
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Personal Mail ID
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
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                        {alumni.email ? (
                                                            <a href={`mailto:${alumni.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                                                                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500" />
                                                                {alumni.email}
                                                            </a>
                                                        ) : (
                                                            <span className="text-slate-400 italic">Not available</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={3} className="px-6 py-12 text-center text-slate-500 text-sm">
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
