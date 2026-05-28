import { ProjectsInt } from 'src/interfaces/Interfaces';
import PresProjectOne from './../assets/img-project-presentation-1.webp';
import PresProjectTwo from './../assets/img-project-presentation-2.webp';

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
