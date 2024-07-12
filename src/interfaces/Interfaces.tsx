import { ReactNode } from 'react';

/// interfaz para datos de experiencias
export interface ExperiencesInt {
	title: string;
	startDate: string;
	endDate?: string;
	status: string | boolean;
	charge?: string;
	description: string;
	icon: ReactNode;
}

export interface ProjectsInt {
	title: string;
	description: string;
	link: string;
	github: string;
	image: string;
	tags: string[];
}

export interface MyTitleInterface {
	name: string;
	intro: string;
	openToWork: boolean;
	image?: any;
}

export interface TitleInterface {
	title: string;
	icon: ReactNode;
}

export interface IconIntercface {
	color?: string;
	name: string;
	size: string;
}
