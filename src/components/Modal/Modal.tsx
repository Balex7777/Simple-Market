import React, { ReactNode } from 'react'
import styles from "./Modal.module.css"

interface IModalProps{
	title: string
	children: ReactNode
	onClose: () => void
}

export default function Modal({title, children, onClose}:IModalProps) {
	return (
		<>
			<div className={styles.background} onClick={onClose}/>
			<div className={styles.modal}>
				<h2 className={styles.title}>{title}</h2>
				{children}
			</div>
		</>
	)
}
