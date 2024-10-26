import React from 'react'

interface IErrorMessageProps {
	error : string
}

export default function ErrorMesage({error}: IErrorMessageProps) {
	return (
		<p>{error}</p>
	)
}
