import React, { useState, useRef, useCallback } from 'react'

function TemptPage() {
	return (
		<div className="container mx-auto max-w-sm h-screen flex flex-col space-y-4 justify-center items-center">
			<div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
				<div className="flex items-center space-x-4">
					<img
						src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
						alt="My profile"
						className="w-16 h-16 rounded-full"
					/>
				</div>
				<div className="flex-grow p-3">
					<div className="font-semibold text-gray-700">Antério Vieira da Silva Lima</div>
					<div className="text-sm text-gray-500">You: Thanks, sounds good! . 8hr</div>
				</div>
				<div className="p-2">
					<img
						src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
						alt="My profile"
						className="w-4 h-4 rounded-full order-1"
					/>
				</div>
			</div>

			<div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
				<div className="relative flex items-center space-x-4">
					<img
						src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
						alt="My profile"
						className="w-16 h-16 rounded-full"
					/>
					<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
				</div>
				<div className="flex-grow p-3">
					<div className="font-semibold text-gray-700">Antério Vieira da Silva Lima</div>
					<div className="text-sm text-gray-500">@ktquez sent a image . 2hr</div>
				</div>
				<div className="p-2">
					<span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
				</div>
			</div>
		</div>
	)
}

export default TemptPage
