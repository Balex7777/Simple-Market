import React, { ReactNode } from 'react'
import "./Modal.css"

interface IModalProps{
	title: string
	children: ReactNode
	onClose: () => void
}

export default function Modal({title, children, onClose}:IModalProps) {
	return (
		<>
			<div className='modal__background' onClick={onClose}/>
			<div className='modal'>
				<h2 className="modal__title">{title}</h2>
				{children}
			</div>
		</>
	)
}
