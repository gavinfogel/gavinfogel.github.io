import React from 'react';
import { SiteLink } from './SiteLink';

interface TextSiteLinkProps {
	site: string;
	link: string;
}

export const TextSiteLink: React.FC<TextSiteLinkProps> = ({ site, link }) => {
	return (
		<SiteLink website={link}>
			<span
				className='hover:text-gray-500 dark:hover:text-gray-400
				transition-colors duration-200'>
				{site}
			</span>
		</SiteLink>
	);
};
