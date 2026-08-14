export const DATA = {
	version: "v1.5.6b",
	header: {
		picture: "./images/picture.png",
		fullName: "Filippo Chinni Carella",
		nationality: "Italian",
		birthDate: "27/06/2002",
		location: "Milan, Italy",
		locations: ["Bari, Italy", "Turin, Italy", "Milan, Italy", "Bologna, Italy", "Rome, Italy", "Lugano, Switzerland"],
		locationInfo: "**(Willing to relocate)**",
		email: "!!<filippochinni02@gmail.com><filippochinni02@gmail.com>",
		other: "!!<LinkedIn><https://www.linkedin.com/in/filippo-chinni-carella>",
	},
	sections: [
		{
			sectionTitle: "Presentation",
			type: "text-only",
			content: "Graduate Student in Computer Science. Software & AI Engineer and Data Scientist.\n\
			Specialized in Software Design and Documentation. Educated and experienced in AI and Data Engineering."
		},
		{
			sectionTitle: "Education",
			type: "generic-table",
			content: [
				{
					entryKey: "Nov 2024 - Sep 2025",
					title: "Alta Scuola Politecnica",
					subtitle: "Politecnico di Milano & Politecnico di Torino",
					description: "Alta Scuola Politecnica (lit. Higher Polytechnic School) is a multidisciplinary international honour program created by Politecnico di Milano and Politecnico di Torino.\nOnly the best 150 students from all master\'s courses of the two universities are selected each academic year. ASP students are initiated into a path of advanced interdisciplinary training to understand the relationships between science, innovation, technology and socio-economic systems.",
					grade: "",
					extra: "!!<Official Admitted Candidates List><https://www.polito.it/sites/default/files/2024-11/DD%202280%20del%2018%20novembre%202024_ASP_Graduatoria%20finale%202024_25_F.pdf> | [!!<Alt Link><https://web.archive.org/web/20250613133423/https:/www.polito.it/sites/default/files/2024-11/DD%202280%20del%2018%20novembre%202024_ASP_Graduatoria%20finale%202024_25_F.pdf>]",
					media: [],
					icon: "./images/icons/alta_scuola_politecnica.jpg"
				},
				{
					entryKey: "Sep 2024 - Present",
					title: "::M.sc Degree::: Computer Engineering (Curriculum: Artificial Intelligence and Data Analytics)",
					subtitle: "Politecnico di Torino, Turin",
					description: "",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/politecnico_torino.jpg"
				},
				{
					entryKey: "Oct 2021 - Jul 2024",
					title: "::B.sc Degree::: Computer Science and Technologies for Software Production",
					subtitle: "Università degli Studi di Bari, Bari",
					description: "",
					grade: "Grade 110/110 Cum Laude and Special Mention",
					extra: "::Bachelor's Thesis::: \"__Hyperparameter Optimization: Techniques, Particle Swarm Optimization, with Application in Drone Vision__\"",
					media: ["./images/media/bachelor_degree_certificate.jpeg"],
					icon: "./images/icons/uniba.png"
				},
				{
					entryKey: "2016 - 2021",
					title: "High School Diploma: Diploma in Scientific Studies",
					subtitle: "Liceo Scientifico A. Scacchi, Bari",
					description: "",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/liceo_scacchi.png"
				}
			]
		},
		{
			sectionTitle: "Work Experience",
			type: "generic-table",
			content: [
				{
					entryKey: "Jan 2026 - Present",
					title: "AUTO1 Group | ::Junior Data Scientist::",
					subtitle: "Milan, Italy - (Hybrid)",
					description: "Developed and deployed Machine Learning models to support vehicle selling optimization and demand management. Integrated data analytics into processes such as demand forecasting, dynamic pricing, finance risk prediction.",
					extra: "",
					media: [],
					icon: "./images/icons/auto1.jpg"
				},
				{
					entryKey: "Mar 2025 - Sep 2025",
					title: "DeepTree | ::Student Consultant::",
					subtitle: "Milan, Italy - (Hybrid)",
					description: "Worked as a Student Consultant for DeepTree at the REDI project with the goal of turning DeepTree (the startup's main product) from an intelligent M&A platform used by analysts towards an intelligent M&A AI analyst.",
					extra: "",
					media: [],
					icon: "./images/icons/deeptree.jpg"
				},
				{
					entryKey: "Feb 2024 - Jul 2024",
					title: "CILab - Computation Intelligence Lab | ::Intern::",
					subtitle: "Bari, Italy - (On-site)",
					description: "Worked on a real-world Computer Vision problem: Semantic Segmentation with drones for Agricolture. In particular focusing on Hyperparameter Optimization and research & develop Particle Swarm Optimization (PSO) algorithms.",
					extra: "",
					media: [],
					icon: "./images/icons/cilab.jpg"
				}
			]
		},
		{
			sectionTitle: "Portfolio",
			type: "entries-list",
			content: [
				{
					title: "Personal GitHub Profile: !!<filippochinni><https://github.com/filippochinni?tab=repositories>",
					subtitle: "Prominent projects I developed:",
					description: "!!<InventoryApp><https://github.com/filippochinni/inventory-app>: Android App for Stocktaking - Full Development Lifecycle\n\
					!!<RankerApp><https://github.com/filippochinni/ranker-app>: Utility tool for a personal project about making Rankings of various media\n",
					extra: "",
					media: [],
					icon: "./images/icons/github.png"
				},
				{
					title: "University-related GitHub Profile: !!<FilippoChinniUNIVERSITY><https://github.com/FilippoChinniUNIVERSITY>",
					subtitle: "Prominent projects I developed:",
					description: "!!<PronuntiApp><https://github.com/FilippoChinniUNIVERSITY/PronuntiApp>: Android App for Speech Therapy - Mobile Software Development Project\n\
					!!<Pacman (on LandTiger SoC)><https://github.com/FilippoChinniUNIVERSITY/PacMan-LandTiger>: Pacman developed on System on Chip (SoC) - LandTiger LPC1768\n\
					::Bachelor's Thesis::: !!<Paper><https://drive.google.com/file/d/1Ew50b8u7d7MQaOyo6f-5lWjxfeeLSAeu/view?usp=sharing> | !!<LateX Repo><https://github.com/FilippoChinniUNIVERSITY/Bachelor-Thesis-Paper> | !!<Code Repo><https://github.com/FilippoChinniUNIVERSITY/Bachelor-Thesis>",
					extra: "",
					media: [],
					icon: "./images/icons/github.png"
				},
			]
		},
		{
			sectionTitle: "Skills",
			type: "bullet-lists",
			content: [
				{
					h1: "Software Developing",
					list: [
						"**Software Engineering:** designed and developed multiple full-cycle software projects of all kinds adopting the best practices from conception to deployment",
						"**Software Design:** designed informal and UML diagrams and schemas on all levels of abstraction",
						"**Software Documentation:** written countless documentation documents for many projects, including Requirements Engineering, Software Design, UI/UX Design, Software Testing, and more",
						"**Testing & Debugging:** can execute Automated Testing (e.g., Unit Testing) and successfully find bugs",
						"**Database:** designed both Relational (SQL) and NoSQL Databases. Trained on complex queries",
						"**Project Management:** can make estimations and plans; experienced with Agile methodologies (SCRUM) and ALM tools (GitHub, GitLab, Redmine, Jira)",
						"**Version Control:** experienced with versioning tools (Git, SVN) and best practices (GitFlow)",
						"**DevOps**: have knowledge of CI/CD pipelines and QA tools (SonarCloud, Fortify, ...). Worked with REST APIs. Deployed an HomeLab server for personal use (using Linux, Docker, Nginx, ...)",
					]
				},
				{
					h1: "Artificial Intelligence and Data Science",
					list: [
						"**Machine Learning:** attended multiple courses on the topic, and based my Bachelor's Thesis on a Machine/Deep Learning theme, Hyperparameter Optimization",
						"**Data Engineering:** attended a specialized extra course on Intelligent Data Analysis. Learned Data Preprocessing and Feature Engineering",
						"**Big Data Processing:** experience with tools such as Hadoop, Spark, and MapReduce",
						"**AI Engineering:** experience with model training and evaluation, and have knowledge of MLOps, LLMs, RAG Architectures and Computer Vision. Used Azure ML for cloud computing",
					]
				},
				{
					h1: "Programming Languages (Best)",
					list: [
						"**Java | Kotlin:** built 2 Android apps using both legacy Views and Jetpack Compose",
						"**Python:** developed numerous personal utility projects, and a PyTorch Neural Network model for the experiments of my Bachelor's Thesis",
						"**JavaScript:** deployed various small web projects, including fan websites and the builder of this CV",
						"**C:** had extensive practice during educational courses; have experience in embedded programming and have built a Pacman game on a SoC",
					]
				},
				{
					h1: "Soft Skills",
					list: [
						"**Proactive Learning:** eager self-learner and excited to try new skills and processes",
						"**Leadership:** led every group project in university as Team Leader, always achieving the best grades, and also winning an award for one of our projects",
						"**Teamwork:** education was filled with group projects, where I learned the most about collaboration",
						"**Coaching:** able to lead colleagues and teammates to a standardized workflow",
						"**Precision:** have particular care for quality, tidiness, and completeness in my work",
						"**Critical Thinking:** analyze problems and ask whys behind decisions to draw thoughtful conclusions",
						"**Problem Solving:** work smart to efficiently analyze problems and find solutions",
					]
				},
			]
		},
		{
			sectionTitle: "Hard Skills List",
			type: "nested-lists",
			content: [
				{
					h1: "Developing Skills",
					list: [
						{
							h2: "Software Engineering Skills",
							list: [
								"Software Architecture Design",
								"App Development",
								"Web Development",
								"Embedded Development",
								"Agile Methodologies (SCRUM)",
								"Database Design",
								"Software Testing & Debugging",
								"Software Documentation",
								"Software UML Design",
							],
						},
						{
							h2: "Programming Techniques and Technologies",
							list: [
								"Unit Testing",
								"REST API & Swagger",
								"Relational DBMS",
								"NoSQL Databases",
							]
						},
						{
							h2: "Data Science and Machine Learning Skills",
							list: [
								"Intelligent Data Analysis",
								"Artificial Intelligence",
								"Machine Learning",
								"Deep Learning",
								"Hyperparameter Optimization",
							],
						},
						{
							h2: "Programming Paradigms",
							list: [
								"Imperative and Modular Programming",
								"Object-Oriented Programming (OOP)",
								"Event-Driven Programming",
								"Web Programming",
								"Embedded Programming",
							],
						},
					]
				},
				{
					h1: "Computer Languages and Coding Tools",
					list: [
						{
							h2: "Programming Languages",
							list: [
								"Java",
								"Python",
								"JavaScript",
								"C",
								"C++",
								"Kotlin",
								"SQL",
								"Assembly (ARM)",
								"Rust",
								"MATLAB",
							]
						},
						{
							h2: "Markup, Styling, Scripting and Other Languages",
							list: [
								"HTML",
								"CSS",
								"XML",
								"JSON",
								"Markdown",
								"Regex",
								"Latex"
							]
						},
						{
							h2: "Libraries and Services - Software Development",
							list: [
								"Android SDK",
								"Jetpack Compose",
								"Maven",
								"Gradle",
								"Node.js",
							]
						},						{
							h2: "Libraries and Services - Data Science",
							list: [
								"Hadoop",
								"Spark",
								"MapReduce",
								"Pandas",
								"NumPy",
								"Matplotlib",
								"Scikit-learn",
								"PyTorch",
							]
						},
						{
							h2: "IDEs and Code Editors",
							list: [
								"Visual Studio Code",
								"Android Studio",
								"Jetbrains IDEs (Pycharm, IntelliJ, RustRover)",
								"Visual Studio",
								"MySQL",
								"Keil",
								"Eclipse (C/C++)",
								"Eclipse (Java)",
								"Oracle Express",
								"MATLAB",
							]
						},
					]
				},
				{
					h1: "Other Skills and Tools",
					list: [
						{
							h2: "Generic Computer Skills",
							list: [
								"Microsoft Office (Word, Excel, ...)",
								"Google Workspace (Docs, Sheets, ...)",
								"Linux",
							]
						},
						{
							h2: "Project Management",
							list: [
								"Git",
								"GitHub",
								"GitLab",
								"Subversion (SVN)",
								"Redmine",
							]
						},
						{
							h2: "Other Developing Tools",
							list: [
								"Figma",
								"Visual Paradigm",
								"Draw.io",
							]
						},
						{
							h2: "Other Services and Tools",
							list: [
								"SSH",
								"SonarCloud",
								"Fortify",
								"Google Firebase",
								"Azure ML",
							]
						}
					]
				},
			]
		},
		{
			sectionTitle: "Studies and Courses List",
			type: "nested-lists",
			content: [
				{
					h1: "Computer Science Field",
					list: [
						"Computer Architectures",
						"Operating Systems",
						"Formal Languages and Compilers",
						"Imperative and Modular Programming",
						"Object-Oriented Programming",
						"Algorithms and Data Structures",
						"Database Architecture Design and DBMS",
						"Computer Networks",
						"Software Engineering",
						"Software Quality Management",
						"Human Computer Interaction",
						"Software Testing Principles and Technologies",
						"Mobile Software Developing",
						"Computational Intelligence",
						"Data Analysis",
						"Embedded Computer Architectures",
						"Big Data Processing and Analytics",
						"Data Science and Database Technologies",
						"Computer Networks Technologies and Services",
						"Advanced Software Engineering",
						"Web Applications",
						"System and Device Programming",
						"Machine Learning",
						"Model-based Software Design",
					],
				},
				{
					h1: "Mathematics Field",
					list: [
						"Numerical Methods",
						"Discrete Mathematics",
						"Calculus",
						"Probability and Statistics",
					],
				},
				{
					h1: "Other Fields",
					list: [
						"Physics",
						"Economics and Corporate Business",
						"Innovation",
						"Business",
					],
				},
			]
		},
		{
			sectionTitle: "Languages",
			type: "generic-table",
			content: [
				{
					entryKey: "::Italian::",
					title: "Native",
					subtitle: "",
					description: "",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/italian.png"
				},
				{
					entryKey: "::English::",
					title: "Fluent (C2)",
					subtitle: "Cambridge Certificate of Proficiency in English (CPE) (C2)",
					description: "",
					grade: "Score 213 (Grade B) (Equivalent to **IELTS 9**)",
					extra: "",
					media: [],
					icon: "./images/icons/english.png"
				}
			]
		},
		{
			sectionTitle: "Projects and Competitions",
			type: "generic-table",
			content: [
				{
					entryKey: "28/03 - 03/04\n(2019)",
					title: "Change the World Model United Nations (CWMUN) 2019",
					subtitle: "United Nations Headquarters - New York City, NY, USA",
					description: "CWMUN is one of the most important multidisciplinary United Nations forums.\nIt takes place at the UN Headquarters in New York and is attended by over 3000 people, including high school and university students, ambassadors, former ministers and prime ministers, sport champions and UN Officials.\nAfter over 60 hours of seminars and individual study in preparation for the event, I had the opportunity to actively discuss the most important global geopolitical topics with other participants from all over the world.",
					grade: "",
					extra: "",
					media: ["./images/media/cwmun_guinea.jpg", "./images/media/cwmun_general_assembly.jpg"],
					icon: "./images/icons/cwmun.jpg"
				},
				{
					entryKey: "16/05/2015",
					title: "International Competition for Mathematical and Logical Games - 22nd Edition - Italian Finals",
					subtitle: "Bocconi University - Milan, Italy",
					description: "The \"Championnat International des Jeux Mathématiques et Logiques\" is an international mathematics competition.\nAfter achieving 2nd place in the regional competition, I participated in the national final held at \"Centro PRISTEM\" in Bocconi University.",
					grade: "",
					extra: "",
					media: ["./images/media/mathematical_games_certificate.jpg"],
					icon: "./images/icons/giochi_matematici.jpg"

				}
			]
		},
		{
			sectionTitle: "Competitive Sports",
			type: "generic-table",
			content: [
				{
					entryKey: "2020 - 2021",
					title: "Athletics (Track and Field) - Regional and National Competitions",
					subtitle: "",
					description: "12/14 hours of training per week\nParticipation in 12 competitions per year",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/federazione_italiana_atletica.png"
				},
				{
					entryKey: "2012 - 2020",
					title: "Fencing (Olympic Fencing) - Regional and National Competitions",
					subtitle: "",
					description: "12 hours of training per week\nParticipation in 8 competitions per year",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/federazione_italiana_scherma.png"
				},
			]
		},
		{
			sectionTitle: "Awards",
			type: "entries-list",
			content: [
				{
					title: "\"Premio Caso di Studio\" (\"Project Award\")",
					subtitle: "For having developed an excellent project in Software Engineering (2022/2023)",
					description: "Award granted to the team that developed the best Project of the academic year\n[Bari, 7 December 2023 - Università degli Studi di Bari - Prof. Danilo Caivano]",
					extra: "",
					media: ["./images/media/premio_caso_di_studio.png", "./images/media/premio_caso_di_studio_pic.jpg"]
				}
			]
		},
		{
			sectionTitle: "Certifications and Certified Courses",
			type: "generic-table",
			content: [
				{
					entryKey: "Aug 2026",
					title: "Google Learning Badge - Android Development",
					subtitle: "Google Developer Program",
					description: "Combined 100h of learning pathways on Android Development",
					grade: "",
					extra: "!!<Credential Link><https://developers.google.com/profile/badges/profile/created-profile?u=107089590517794247041>",
					media: [],
					icon: "./images/icons/google_developer.png"
				},
				{
					entryKey: "Jul 2024",
					title: "Cambridge Certificate of Proficiency in English (CPE) (C2)",
					subtitle: "Cambridge English",
					description: "",
					grade: "Score 213 (Grade B) (Equivalent to **IELTS 9**)",
					extra: "!!<Credential Link><https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/>",
					media: ["./images/media/c2_certificate.png", "./images/media/c2_statement_result.png"],
					icon: "./images/icons/cambridge.jpg"
				},
				{
					entryKey: "Jun 2023",
					title: "Coding for Intelligent Data Analysis",
					subtitle: "Università degli Studi di Bari",
					description: "",
					grade: "",
					extra: "!!<Credential Link><https://openbadges.bestr.it/public/assertions/14vOSACGRp2l717PISaj_A>",
					media: ["./images/media/badge_c4ida.png"],
					icon: "./images/icons/uniba.png"
				}
			]
		}
	],
	footer: {
		pageUrl: "Expanded full version of the CV with descriptions, full skills list, and pictures is available at: !!<Full Curriculum Vitae><https://filippochinni.github.io/Curriculum-Vitae/>",
		signature: "./images/signature.png",
		law: "I hereby consent to the processing of this CV and the personal data contained within, by anyone who receives this document for the sole purpose of considering my application for employment opportunities, in accordance with Article 6.1(a) of GDPR (EU) 2016/679.",
		date: `${new Date().toISOString().split('T')[0]}`,
	}
}
