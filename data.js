export const DATA = {
	version: "v1.0.0",
	header: {
		picture: "./images/picture.png",
		fullName: "Filippo Chinni Carella",
		nationality: "Italian",
		birthDate: "27/06/2002",
		location: "Turin (TO), Italy",
		email: "!!<filippochinni02@gmail.com><filippochinni02@gmail.com>",
		other: "!!<LinkedIn><https://www.linkedin.com/in/filippo-chinni-carella> | !!<GitHub><https://github.com/filippochinni>"
	},
	sections: [
		{
			sectionTitle: "Presentation",
			type: "text-only",
			content: "Graduate Student in Computer Science. Software Engineer and Developer."
		},
		{
			sectionTitle: "Education",
			type: "generic-table",
			content: [
				{
					entryKey: "Sep 2024 - Present",
					title: "::M.sc Degree::: Computer Engineering (Curriculum:\nArtificial Intelligence and Data Analytics)",
					subtitle: "Politecnico di Torino, Turin",
					description: "",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/politecnico_torino.jpg"
				},
				{
					entryKey: "Oct 2021 - Jul 2024",
					title: "::B.sc Degree::: Computer Science and Technologies\nfor Software Production",
					subtitle: "University of Bari \"Aldo Moro\", Bari",
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
					entryKey: "Mar 2025 - Sep 2025",
					title: "DeepTree | ::Student Consultant::",
					subtitle: "Milan, Italy (Hybrid)",
					description: "",
					grade: "",
					extra: "",
					media: [],
					icon: "./images/icons/deeptree.jpg"
				},
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
			sectionTitle: "Hard Skills",
			type: "nested-lists",
			content: [
				{
					h1: "Developing Skills",
					list: [
						{
							h2: "Software Engineering Skills",
							list: [
								"Software Architecture Design",
								"Web Development",
								"Mobile Software Development",
								"Embedded Development",
								"Agile Methodologies (SCRUM)",
								"Database Design",
								"Software Testing & Debugging",
								"Software Documentation",
								"Software UML Design",
							],
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
							h2: "Programming Skills",
							list: [
								"Imperative and Modular Programming",
								"Object-Oriented Programming",
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
								"C",
								"C++",
								"Java",
								"JavaScript",
								"Python",
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
							h2: "Notable Services and Libraries",
							list: [
								"Node.js",
								"Maven",
								"Gradle",
								"Hadoop",
								"Spark",
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
								"Google Firebase",
								"Fortify",
								"Azure ML",
							]
						}
					]
				},
			]
		},
		{
			sectionTitle: "Full Studies and Courses",
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
					],
				},
			]
		},
		{
			sectionTitle: "Soft Skills",
			type: "entries-list",
			content: [
				{
					title: "Proactive Learning",
					subtitle: "",
					description: "Very good at self-learning and master new skills and processes.",
					extra: "",
					media: []
				},
				{
					title: "Problem Solving",
					subtitle: "",
					description: "Working smart to efficiently solve problems and find solutions.",
					extra: "",
					media: []
				},
				{
					title: "Leadership and Team Management",
					subtitle: "",
					description: "Was the Team Leader of every group project in university.",
					extra: "",
					media: []
				}
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
					media: ["./images/media/c2_certificate.png", "./images/media/c2_statement_result.png"],
					icon: "./images/icons/english.png"
				}
			]
		},
		{
			sectionTitle: "Projects and Competitions",
			type: "generic-table",
			content: [
				{
					entryKey: "Nov 2024 - Sep 2025",
					title: "Alta Scuola Politecnica",
					subtitle: "Politecnico di Milano & Politecnico di Torino",
					description: "Alta Scuola Politecnica (lit. Higher Polytechnic School) is a Multidisciplinary and unique international honour program created by Politecnico di Milano and Politecnico di Torino.\nOnly the best 150 students from all master\'s courses of the two universities are selected each academic year.\nASP students are initiated into a path of advanced interdisciplinary training to understand the complex relationships between science, innovation, technology and socio-economic systems.",
					grade: "",
					extra: "!!<Official Admitted Candidates List><https://www.polito.it/sites/default/files/2024-11/DD%202280%20del%2018%20novembre%202024_ASP_Graduatoria%20finale%202024_25_F.pdf> | [!!<Alt Link><https://web.archive.org/web/20250613133423/https:/www.polito.it/sites/default/files/2024-11/DD%202280%20del%2018%20novembre%202024_ASP_Graduatoria%20finale%202024_25_F.pdf>]",
					media: [],
					icon: "./images/icons/alta_scuola_politecnica.jpg"
				},
				{
					entryKey: "28/03 - 03/04 (2019)",
					title: "Change the World Model United Nations (CWMUN) 2019",
					subtitle: "United Nations Headquarters - New York City, NY, USA",
					description: "CWMUN is one of the most important multidisciplinary United Nations forums.\nIt takes place at the UN Headquarters in New York and is attended by over 3000 people, including high school and university students, ambassadors, former ministers and prime ministers, sport champions and UN Officials.\nAfter over 60 hours of seminars and individual study in preparation for the event, I had the opportunity to actively discuss the most important global geopolitical topics with the other participants from all over the world.",
					grade: "",
					extra: "",
					media: ["./images/media/cwmun_guinea.jpg", "./images/media/cwmun_general_assembly.jpg"],
					icon: "./images/icons/cwmun.jpg"
				},
				{
					entryKey: "16/05/2015",
					title: "International Competition for Mathematical and Logical Games - Italian Finals - 22nd Edition",
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
					description: "Award granted to the team that developed the best Project of the academic year\n[Bari, 7 December 2023 - University of Bari \"Aldo Moro\" - Prof. Danilo Caivano]",
					extra: "",
					media: ["./images/media/premio_caso_di_studio.png", "./images/media/premio_caso_di_studio_pic.jpg"]
				}
			]
		}
	],
	footer: {
		signature: "./images/signature.png",
		law: "I hereby consent to the processing of this CV and the personal data contained within, by anyone who receives this document for the sole purpose of considering my application for employment opportunities, in accordance with Article 6.1(a) of GDPR (EU) 2016/679.",
		date: `Turin, ${new Date().toISOString().split('T')[0]}`,
	}
}
