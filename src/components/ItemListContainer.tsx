import React from 'react';
import '../styles/styles.scss';

interface Props {
	greeting: string;
}

export const ItemListContainer = ({ greeting }: Props) => {
	return (
		<div style={{ flex: 1, textAlign: 'center' }}>
			<h1 style={{ color: '#ffffff', alignSelf: 'center' }}>{greeting}</h1>
		</div>
	);
};
