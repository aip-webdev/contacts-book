import React, { useEffect, useState } from 'react'

import ReactDOM from 'react-dom'

export function Loading() {
	const [node, setNode] = useState<Element>()
	useEffect(() => {
		setNode(document.querySelector('#modal__root') ?? undefined)
	}, [])
	if (!node) {
		return null
	}
	return ReactDOM.createPortal(
		<div >
			<div >
				<div>Loading</div>
			</div>
		</div>,
		node,
	)
}
