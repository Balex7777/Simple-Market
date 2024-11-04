import React from 'react'
import styles from "./Header.module.css"

interface IHeaderProps {
	cart: number;
}

export default function Header({cart} : IHeaderProps) {
	return (
		<header className={styles.header}>
			<h1>Market</h1>
			<span>{cart}</span>
		</header>
	)
}
