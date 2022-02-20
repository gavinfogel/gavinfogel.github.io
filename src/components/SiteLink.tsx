import React from 'react';

interface SiteLinkProps {
	website: string;
	children: React.ReactNode;
	newTab?: boolean;
}

export const SiteLink: React.FC<SiteLinkProps> = ({
	children,
	website,
	newTab = true,
}) => {
	return (
		<a href={website} target={newTab ? '_blank' : '_self'}>
			{children}
		</a>
	);
};
