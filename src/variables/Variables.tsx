import { ProjectsInt } from 'src/interfaces/Interfaces';
import PresProjectOne from './../assets/img-project-presentation-1.webp';
import PresProjectTwo from './../assets/img-project-presentation-2.webp';
// import { Icons } from 'src/components/icons/Icons';

/// datos para experiencias
// export const Experiences: ExperiencesInt[] = [
// 	{
// 		title: 'Desarrollador Frontend - Antpack S.A.S.',
// 		startDate: 'Marzo 01, 2022',
// 		endDate: 'Abril 04, 2023',
// 		status: 'Finalizado',
// 		description:
// 			'Creación de aplicaciones web funcionales y colaboración con el equipo de Diseño para incorporar componentes a proyectos existentes. Trabajo estrecho con el equipo de Backend para integrar endpoints y optimizar la comunicación entre las partes del sistema. Desarrollo de diversos formularios desde encuestas a registro de usuarios, asegurando usabilidad y validación de datos. Actualización de contenido en proyectos basados en Wordpress y Shopify. Creación de email personalizados para empresas en Colombia.',
// 		icon: <Icons name="calendar" color="#ffffff" size="13" />,
// 	},
// ];

export const VAR_ITEM_KEYS: string[] = [
	'header.intro',
	'header.experience',
	'header.projects',
];

export const ProjectList: ProjectsInt[] = [
	{
		title: 'project.card.title',
		description: 'project.card.description',
		link: 'https://tryshipyard.com/',
		github: '',
		image: PresProjectOne,
		tags: [
			'HTML',
			'CSS',
			'SASS',
			'Javascript',
			'ReactJS',
			'Formik',
			'Yup',
			'Material UI',
		],
	},
	{
		title: 'project.card2.title',
		description: 'project.card2.description',
		link: '',
		github: '',
		image: PresProjectTwo,
		tags: ['HTML', 'CSS', 'Javascript'],
	},
];
