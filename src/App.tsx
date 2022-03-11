import React, { useState } from 'react';
import { a, config, useSpring } from 'react-spring';
import { TextSiteLink } from './components/TextSiteLink';

export const App: React.FC = () => {
	const siteAnimation = useSpring({
		to: { opacity: 1, transform: 'translateY(0vh)' },
		from: { opacity: 0, transform: 'translateY(4vh)' },
		config: config.molasses,
	});

	return (
		<div className='bg-white dark:bg-black'>
			<a.div className='p-12 space-y-8' style={siteAnimation}>
				<h1 className='text-4xl'>Gavin Fogel</h1>
				<h2 className='text-2xl'>
					Working on building the future of finance. Previously Cornell student.
				</h2>
				<p>
					Currently interested in consumer fintech and all aspects of engeering to enable such.
				</p>
				<div className='flex flex-row space-x-12'>
					<TextSiteLink site='gavin@fogel.io' link='mailto:gavin@fogel.io' />
					<TextSiteLink site='Twitter' link='https://twitter.com/gavinfogel' />
				</div>
			</a.div>
		</div>
	);
};
