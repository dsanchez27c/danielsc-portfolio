import { ExperiencesInt, ProjectsInt } from 'src/interfaces/Interfaces';
import PresProjectOne from './../assets/img-project-presentation-1.webp';
import PresProjectTwo from './../assets/img-project-presentation-2.webp';

/// datos para experiencias
export const Experiences: ExperiencesInt[] = [
	{
		title: 'Desarrollador Frontend - Antpack S.A.S.',
		startDate: 'Marzo 01, 2022',
		endDate: 'Abril 04, 2023',
		status: 'Finalizado',
		description:
			'Creación de aplicaciones web funcionales y colaboración con el equipo de Diseño para incorporar componentes a proyectos existentes. Trabajo estrecho con el equipo de Backend para integrar endpoints y optimizar la comunicación entre las partes del sistema. Desarrollo de diversos formularios desde encuestas a registro de usuarios, asegurando usabilidad y validación de datos. Actualización de contenido en proyectos basados en Wordpress y Shopify. Creación de email personalizados para empresas en Colombia.',
	},
];

export const ProjectList: ProjectsInt[] = [
	{
		title: 'tryshipyard - For Agencies, By Agencies',
		description:
			'Proyecto hecho para las agencias y grupos de trabajo, en donde puedes solicitar personal para trabajar en nuevos proyectos o postular tus conocimientos otras emprezas. Proyecto de la empreza Antpack S.A.S. en donde formé parte del equipo de Desarrollo Frontend trabajando estrechamente con el equipo de Diseño y Backend proporcionando la mejor experiencia tanto a los usuarios cómo al cliente.',
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
		title: 'LLM Local',
		description:
			'Este proyecto fue creado utilizando uno de los modelos de lenguaje, cómo ChatGPT, de código abierto. En este caso se utilizó gemma-2b. Se creó una interfaz sencilla a manera de un chat en donde se le pueden hacer preguntar a la IA y esta responde en tiempo real. Al iniciar el proyecto, se descargan los datos del LLM en el ordenador que luego son almacenados en la memoria cache. Luego, si se quiere utilizar de manera offline, el modelo se carga automaticamente del cache.',
		link: '',
		github: '',
		image: PresProjectTwo,
		tags: ['HTML', 'CSS', 'Javascript'],
	},
];
