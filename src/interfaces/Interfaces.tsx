import { ReactNode } from 'react';

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
	job: string;
	intro: string;
	openToWork: boolean;
	openToWorkText: string;
	image?: string;
	downloadText: string;
}

export interface TitleInterface {
	title: string;
	icon: ReactNode;
}

export interface IconInterface {
	color?: string;
	name: string;
	size: string;
}

export interface AccessBtnType {
	classBtn: string;
	href: string;
	nameIcon?: string;
	sizeIcon?: string;
	colorIcon?: string;
	textBtn?: string;
}
