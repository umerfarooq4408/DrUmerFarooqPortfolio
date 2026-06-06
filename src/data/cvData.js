// ═══════════════════════════════════════════════════════════════
//  Dr. Umer Farooq — CV Data (single source of truth)
//  Source: Dr_Umer_Farooq_CV.tex
// ═══════════════════════════════════════════════════════════════

export const personal = {
    name: 'Dr. Umer Farooq',
    honorific: 'PhD (Computer Science)',
    title: 'Professor | Chairperson, Department of Computing | Researcher',
    tagline:
        'Advancing knowledge through Artificial Intelligence, Machine Learning, and Cloud Computing research.',
    email: 'umerfarooqshah@gmail.com',
    phone: '+92 332-8995684',
    phoneRaw: '+923328995684',
    location: 'City, Mansehra, KPK, Pakistan',
    shortLocation: 'Mansehra, KPK',
    scholar: 'https://scholar.google.com.pk/citations?user=LNhvO_oAAAAJ&hl=en',
    linkedin: 'https://www.linkedin.com/in/umer-farooq-0b980935/',
    orcid: 'https://orcid.org/0000-0003-4332-0111',
    cvFile: 'Dr_Umer_Farooq_CV.pdf',
}

export const summary = `Highly accomplished academic professional with a PhD in Computer Science and over 10 years of experience in teaching and mentoring students at the university level. Adept at developing and delivering comprehensive curricula that meet the needs of diverse student populations. Proven ability to engage students through innovative teaching methods and to inspire a passion for learning in the field of computer science. Demonstrates a strong commitment to academic excellence, continuous professional development, and fostering a collaborative learning environment. Skilled in research, curriculum design, and the application of cutting-edge educational technologies.`

export const stats = [
    { label: 'Publications', value: 22, suffix: '+' },
    { label: 'Years Teaching', value: 10, suffix: '+' },
    { label: 'MS Theses Supervised', value: 3, suffix: '' },
    { label: 'Academic Level', value: 'PhD', suffix: '', isText: true },
]

export const education = [
    {
        degree: 'PhD in Computer Science',
        institution: 'National College of Business Administration & Economics (NCBA&E), Lahore',
        sub: 'School of Computer Sciences',
        period: '2015 – 2021',
        thesisTitle:
            'Knowledge Heterogeneity Analysis & Network Model (KHAN) Using Artificial General Intelligence',
        supervisor: 'Dr. M. Adnan Khan',
        research:
            'Proposed the Knowledge Heterogeneity Analysis and Network (KHAN) model to address challenges in Industry 4.0, Knowledge Management, Cloud Computing, IoT, and Big Data. The model emphasizes transforming data from information to knowledge using cognitive science principles, classifying and clustering knowledge, and managing complex data with machine learning. The model is validated through simulations, supporting system evolution and future research directions.',
        interests: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing'],
    },
    {
        degree: 'M.Phil. in Computer Science',
        institution: 'National College of Business Administration & Economics (NCBA&E), Lahore',
        sub: 'School of Computer Sciences',
        period: '2007 – 2014',
    },
    {
        degree: 'BSCS — Bachelor of Science in Computer Science',
        institution: 'Shah Abdul Latif University, Khairpur',
        sub: 'Penta College of Information Technology, North Nazimabad, Karachi',
        period: '2002 – 2006',
    },
]

export const experience = [
    {
        role: 'Professor',
        org: 'Hamdard University, Main Campus, Karachi',
        period: '23 Dec 2026 – Present',
        bullets: [
            'Delivering advanced graduate and postgraduate courses in Computer Science.',
            'Leading research initiatives, mentoring PhD/MS scholars, and contributing to international publications.',
        ],
    },
    {
        role: 'Chairperson, Department of Computing (FEST)',
        org: 'Hamdard University, Karachi',
        period: '3 June 2025 – Present',
        bullets: [
            'Heading the Department of Computing under the Faculty of Engineering Sciences & Technology (FEST).',
            'Overseeing academic planning, faculty management, curriculum design, accreditation, and departmental research strategy.',
        ],
    },
    {
        role: 'Associate Professor',
        org: 'Hamdard University, Main Campus, Karachi',
        period: '26 Dec 2024 – 22 Dec 2026',
        bullets: [
            'Taught advanced computer science courses and supervised MS/PhD research.',
            'Contributed to departmental governance, curriculum development, and quality enhancement.',
        ],
    },
    {
        role: 'Assistant Professor',
        org: 'Hamdard University, Main Campus, Karachi',
        period: '21 Aug 2024 – Dec 2024',
        bullets: ['Taught core and elective courses in Computer Science and Artificial Intelligence.'],
    },
    {
        role: 'Assistant Professor',
        org: 'Lahore Garrison University (LGU), Lahore',
        period: 'Apr 2021 – Aug 2024',
        bullets: [
            'Taught graduate and undergraduate courses; supervised MS theses in AI, Deep Learning and NLP.',
            'Served as Associate Editor, LGU Research Journal of Computer Science and IT (LGURJCSIT).',
            'Coordinated national and international conferences and ORIC research activities.',
        ],
    },
    {
        role: 'Lecturer',
        org: 'Lahore Garrison University (LGU), Lahore',
        period: 'Nov 2014 – Apr 2021',
        bullets: [
            'Delivered undergraduate courses across Computer Science programs.',
            'Contributed to journal editing, conference organization, and research mentorship.',
        ],
    },
    {
        role: 'Editor — LGURJCSIT',
        org: 'Lahore Garrison University, Lahore',
        period: 'Mar 2017 – Aug 2024',
        bullets: [
            'Editorial leadership for the LGU Research Journal of Computer Science and IT.',
            'Managed peer review, indexing initiatives, and journal quality assurance.',
        ],
    },
    {
        role: 'Lecturer (System Analyst)',
        org: 'NCBA & E, Lahore',
        period: '2011 – Jun 2014',
        bullets: ['Taught Computer Science courses and supported departmental systems analysis activities.'],
    },
]

export const leadership = [
    { title: 'Chairperson', detail: 'Department of Computing, FEST, Hamdard University, Karachi' },
    { title: 'Incharge BSCS Program', detail: '2024 – June 2025, Department of Computing, Hamdard University' },
    { title: 'Associate Editor', detail: 'LGU Research Journal of CS & IT (LGURJCSIT) — 2017 to 2024' },
    { title: 'Conference Co-Ordinator', detail: 'National & International Conferences (2017 – 2024)' },
    { title: 'ORIC Team Co-Ordinator', detail: 'Office of Research, Innovation & Commercialization' },
    { title: 'BIC LGU Member', detail: 'Board of Industrial Collaboration, LGU (2021 – 2022)' },
]

export const researchAreas = [
    {
        category: 'Core Research',
        icon: 'brain',
        items: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Cloud Computing', 'IoT'],
    },
    {
        category: 'Applied AI',
        icon: 'robot',
        items: ['NLP / BERT', 'CNN', 'LSTM', 'Explainable AI (XAI)', 'Fuzzy Inference'],
    },
    {
        category: 'Security',
        icon: 'shield',
        items: ['Intrusion Detection', 'Cyber Security', 'DDoS Mitigation', 'Cloud Security'],
    },
    {
        category: 'Knowledge Management',
        icon: 'database',
        items: ['KHAN Model', 'Knowledge Heterogeneity', 'Big Data', 'Industry 4.0'],
    },
    {
        category: 'Specialized Areas',
        icon: 'rocket',
        items: ['Smart Traffic Systems', 'Autonomous Vehicles', 'Fog–Cloud Computing', 'Blockchain'],
    },
    {
        category: 'Academic',
        icon: 'graduation',
        items: ['Curriculum Design', 'Journal Editing', 'Conference Co-ordination', 'Thesis Supervision'],
    },
]

export const teaching = [
    'Advance Theory of Automata',
    'Artificial Intelligence',
    'Artificial Neural Networks',
    'Database Management Systems',
    'Machine Learning',
    'Fuzzy Systems',
    'Social Network Analysis',
]

export const thesisSupervision = [
    {
        title: 'Real-Time Road Lane Detection and Classification using Deep Learning',
        domain: 'Deep Learning · Computer Vision',
        icon: 'road',
    },
    {
        title: 'Road Sign Detection and Classification using Deep Learning',
        domain: 'Deep Learning · Object Detection',
        icon: 'sign',
    },
    {
        title: 'Sentiment Analysis: A Semantic Approach to Opinion Mining Using the BERT Method',
        domain: 'NLP · BERT · Semantic Analysis',
        icon: 'comment',
    },
]

// ═══════════════════════════════════════════════════════════════
//  PUBLICATIONS — 15 Journal articles
// ═══════════════════════════════════════════════════════════════
export const journalPublications = [
    {
        id: 'j1',
        authorPos: 3,
        title:
            'Autonomous Vehicles Congestion Model: A Transparent LSTM-Based Prediction Model Cooperated with Explainable Artificial Intelligence (EAI)',
        journal: 'Egyptian Informatics Journal',
        date: '29 November 2024',
        year: 2024,
        category: 'W',
        url: 'https://www.sciencedirect.com/science/article/pii/S1110866524001452?via%3Dihub',
    },
    {
        id: 'j2',
        authorPos: 2,
        title:
            'Enhancing traffic flow and congestion management in smart cities utilizing SVM-based linear regression approach',
        journal: 'International Journal of Advanced and Applied Sciences',
        date: '6 October 2024',
        year: 2024,
        category: 'X',
        url: 'https://www.sciencedirect.com/science/article/pii/S1110866524001452?via%3Dihub',
    },
    {
        id: 'j3',
        authorPos: 4,
        title:
            'Enhanced and Optimized Industrial Processes Management using Machine Learning (ML) and Block Chain',
        journal: 'Pakistan Journal of Scientific Research',
        date: '29 May 2024',
        year: 2024,
        category: 'Y',
        url: 'https://pjosr.com/index.php/pjosr/article/view/1110',
    },
    {
        id: 'j4',
        authorPos: 3,
        title: 'Floating Non-Parametric Control Charts for Process Parameter Using Computation',
        journal: 'Journal of Computing & Biomedical Informatics',
        date: '1 June 2024',
        year: 2024,
        category: 'Y',
        url: 'https://www.jcbi.org/index.php/Main/article/view/513/447',
    },
    {
        id: 'j5',
        authorPos: 6,
        title: 'Intellectual Gesticulation Identification Assembly',
        journal: 'Journal of Computing & Biomedical Informatics',
        date: '1 June 2024',
        year: 2024,
        category: 'Y',
        url: 'https://jcbi.org/index.php/Main/article/view/436',
    },
    {
        id: 'j6',
        authorPos: 2,
        title:
            'Securing cloud environments: a Convolutional Neural Network (CNN) approach to intrusion detection system',
        journal: 'Journal of Computing & Biomedical Informatics',
        date: '1 March 2024',
        year: 2024,
        category: 'Y',
        url: 'https://www.jcbi.org/index.php/Main/article/view/376',
    },
    {
        id: 'j7',
        authorPos: 2,
        title:
            'A Critical Review of Artificial Intelligence Based Approaches in Intrusion Detection: A Comprehensive Analysis',
        journal: 'Journal of Engineering',
        date: '15 April 2024',
        year: 2024,
        category: 'X',
        url: 'https://onlinelibrary.wiley.com/doi/10.1155/2024/3909173',
    },
    {
        id: 'j8',
        authorPos: 4,
        title: 'Intelligent model for brain tumor identification using deep learning',
        journal: 'Applied Computational Intelligence and Soft Computing',
        date: '21 January 2022',
        year: 2022,
        category: 'X',
        url: 'https://onlinelibrary.wiley.com/doi/10.1155/2022/8104054',
    },
    {
        id: 'j9',
        authorPos: 5,
        title:
            'An Intelligent Proposed Model for Task Offloading in Fog–Cloud Collaboration Using Logistics Regression',
        journal: 'Computational Intelligence and Neuroscience',
        date: '25 January 2022',
        year: 2022,
        category: 'Y',
        url: 'https://onlinelibrary.wiley.com/doi/10.1155/2022/3606068',
    },
    {
        id: 'j10',
        authorPos: 6,
        title: 'Cloud-IoT Integration: Cloud Service Framework for M2M Communication',
        journal: 'Intelligent Automation & Soft Computing',
        date: '03 September 2021',
        year: 2021,
        category: 'X',
        url: 'https://www.techscience.com/iasc/v31n1/44314',
    },
    {
        id: 'j11',
        authorPos: 4,
        title:
            'Comparative Analysis: Intrusion Detection in Multi-Cloud Environment to Identify Way Forward',
        journal: 'International Journal of Advanced Trends in Computer Science and Engineering',
        date: 'June 2021',
        year: 2021,
        category: 'Y',
        url: 'http://www.warse.org/IJATCSE/archives/Volume%2010%20No.3%20%282021%29',
    },
    {
        id: 'j12',
        authorPos: 7,
        title: 'Semantic analysis of Urdu English Tweets Empowered by Machine Learning',
        journal: 'Intelligent Automation and Soft Computing',
        date: '26 July 2021',
        year: 2021,
        category: 'X',
        url: 'https://www.techscience.com/iasc/v30n1/43973',
    },
    {
        id: 'j13',
        authorPos: 1,
        title: 'Heterogenetic Knowledge Classification Using Fuzzy Inference for Unified Data Clusters',
        journal: 'EAI Endorsed Transactions on Scalable Information Systems',
        date: '13 November 2019',
        year: 2019,
        category: 'X',
        url: 'https://eudl.eu/doi/10.4108/eai.13-7-2018.160072',
    },
    {
        id: 'j14',
        authorPos: 5,
        title: 'Detection and mitigation of DDoS attack in cloud computing using machine learning algorithm',
        journal: 'ISeCure',
        date: '2019',
        year: 2019,
        category: 'X',
        url: 'https://www.isecurejournal.com/article_90886.html',
    },
    {
        id: 'j15',
        authorPos: 5,
        title: 'An adaptive approach: Smart traffic congestion control system',
        journal: 'Journal of King Saud University — Computer and Information Sciences',
        date: '23 October 2018',
        year: 2018,
        category: 'W',
        url: 'https://www.sciencedirect.com/science/article/pii/S1319157818308565?via%3Dihub',
    },
]

// ═══════════════════════════════════════════════════════════════
//  PUBLICATIONS — 7 Conference papers
// ═══════════════════════════════════════════════════════════════
export const conferencePublications = [
    {
        id: 'c1',
        authors: 'N. A. Al-Dmour, U. Farooq, I. Sarwar, M. W. Iqbal, M. Aqeel, W. A. Khan, H. A. Hamadi',
        title: 'Cyber Security Threats on Multifunctional Devices and Mitigation Techniques',
        venue: 'IEEE 2023 International Conference on Business Analytics for Technology and Security (ICBATS)',
        year: 2023,
        doi: 'https://doi.org/10.1109/ICBATS57792.2023.10111138',
    },
    {
        id: 'c2',
        authors: 'S. E. A. Alnawayseh, T. A. Khan, U. Farooq, S. Zulfiqar, S. Khan, A. H. Al-Kassem',
        title: 'Research Challenges and Future Facet of Cellular Computing',
        venue: 'IEEE 2023 International Conference on Business Analytics for Technology and Security (ICBATS)',
        year: 2023,
        doi: 'https://doi.org/10.1109/ICBATS57792.2023.10111407',
    },
    {
        id: 'c3',
        authors: 'A. Abualkishik, M. Saleem, U. Farooq, M. Asif, M. Hassan, J. A. Malik',
        title: 'Genetic Algorithm-Based Adaptive FSO Communication Link',
        venue: 'IEEE 2023 International Conference on Business Analytics for Technology and Security (ICBATS)',
        year: 2023,
        doi: 'https://doi.org/10.1109/ICBATS57792.2023.10111157',
    },
    {
        id: 'c4',
        authors: 'M. S. Munir, K. Parveen, U. Farooq, K. Shaalan, A. Z. Abualkishik, A. S. Mohammed',
        title: 'Use of Different Machine Learning Algorithms for Hate Speech Detection',
        venue: '2022 International Conference on Cyber Resilience (ICCR), pp. 1–7',
        year: 2022,
        doi: 'https://doi.org/10.1109/ICCR56254.2022.9995800',
    },
    {
        id: 'c5',
        authors: 'M. Mehmood, N. Fatima, A. Z. Abualkishik, U. Farooq, A. Ibrahim, K. Agha',
        title: 'An Empirical Study Exploring the Factors of Stress Level among Doctors',
        venue: '2022 International Conference on Cyber Resilience (ICCR), pp. 1–8',
        year: 2022,
        doi: 'https://doi.org/10.1109/ICCR56254.2022.9996031',
    },
    {
        id: 'c6',
        authors: 'A. Ali, N. A. Somroo, U. Farooq, M. Asif, I. Akour, W. Mansoor',
        title: 'Smartphone Security Hardening: Threats to Organizational Security and Risk Mitigation',
        venue: '2022 International Conference on Cyber Resilience (ICCR), pp. 1–12',
        year: 2022,
        doi: 'https://doi.org/10.1109/ICCR56254.2022.9995769',
    },
    {
        id: 'c7',
        authors: 'M. Shahid, K. Munir, S. Muneer, M. Jarrah, U. Farooq',
        title: 'Implementation of ML Algorithm for Mung Bean Classification using Smart Phone',
        venue: '2022 International Conference on Business Analytics for Technology and Security (ICBATS)',
        year: 2022,
        doi: 'https://doi.org/10.1109/ICBATS54253.2022.9759090',
    },
]

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'contact', label: 'Contact' },
]
