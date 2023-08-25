import React, { useState } from 'react';
import '../styles/ToolBox.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub, FaNodeJs } from 'react-icons/fa';

const toolboxData = [
	{ name: 'HTML', skillLevel: 90, icon: <FaHtml5 /> },
	{ name: 'CSS', skillLevel: 85, icon: <FaCss3Alt /> },
	{ name: 'JavaScript', skillLevel: 75, icon: <FaJs /> },
	{ name: 'React', skillLevel: 70, icon: <FaReact /> },
	{ name: 'Bootstrap', skillLevel: 70, icon: <FaBootstrap /> },
	{ name: 'Sass', skillLevel: 65, icon: <FaSass /> },
	{ name: 'GitHub', skillLevel: 70, icon: <FaGithub /> },
	{ name: 'Node.js', skillLevel: 60, icon: <FaNodeJs /> },
];

const ToolBox = () => {
	const [selectedTool, setSelectedTool] = useState(null);

	const handleToolClick = (tool) => {
		if (selectedTool === tool) {
			setSelectedTool(null);
		} else {
			setSelectedTool(tool);
		}
	};

	return (
		<div className="toolbox-container">
			<h2>Tools I Use</h2>
			<div className="tools-list">
				{toolboxData.map((tool) => (
					<div
						key={tool.name}
						className={`tool ${selectedTool === tool.name ? 'active' : ''}`}
						onClick={() => handleToolClick(tool.name)}
					>
						{tool.icon} {tool.name}
					</div>
				))}
			</div>
			<div className="tool-progress">
				{selectedTool && (
					<div className="progress-bar" style={{ width: `${toolboxData.find(tool => tool.name === selectedTool).skillLevel}%` }}>
						{toolboxData.find(tool => tool.name === selectedTool).skillLevel}%
					</div>
				)}
			</div>
		</div>
	);
};

export default ToolBox;
