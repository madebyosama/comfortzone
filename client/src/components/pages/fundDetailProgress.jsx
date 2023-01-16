/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from 'react';

const FundDetailProgress = props => (
	<svg {...props} width={427} height={180.051} viewBox='0 0 427 180.051'>
		<defs>
			<style>
				{
					'.a{fill:#fff;}.b{fill:#d6d6d6;}.c,.d,.e{fill:#159570;}.d{font-size:27px;}.d,.e{font-family:ProximaNova-Regular, Proxima Nova;}.e{font-size:15px;}.f{fill:#000;}.g{filter:url(#a);}'
				}
			</style>
			<filter
				id='a'
				x={0}
				y={0}
				width={427}
				height={180.051}
				filterUnits='userSpaceOnUse'
			>
				<feOffset input='SourceAlpha' />
				<feGaussianBlur stdDeviation={3.5} result='b' />
				<feFlood floodOpacity={0.161} />
				<feComposite operator='in' in2='b' />
				<feComposite in='SourceGraphic' />
			</filter>
		</defs>
		<g transform='translate(-870.5 -127.5)'>
			<g transform='translate(0 1)'>
				<g className='g' transform='matrix(1, 0, 0, 1, 870.5, 126.5)'>
					<path
						className='a'
						d='M7,0H399a7,7,0,0,1,7,7V129a7,7,0,0,1-7,7H225.457l-25.072,23.051L176.426,136H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z'
						transform='translate(10.5 10.5)'
					/>
				</g>
				<g transform='translate(0 11)'>
					<rect
						className='b'
						width={348}
						height={14}
						transform='translate(910 194)'
					/>
					<rect
						className='c'
						width={
							(348 * ((props.raisedAmount / props.requiredAmount) * 100)) / 100
						}
						height={14}
						transform='translate(910 194)'
					/>
				</g>
				<text className='d' transform='translate(1090 186)'>
					<tspan x={-160.947} y={0}>
						{'Rs. ' +
							props.raisedAmount +
							' raised of Rs. ' +
							props.requiredAmount}
					</tspan>
				</text>
				<g transform='translate(0 3)'>
					<text className='e' transform='translate(952 243)'>
						<tspan className='f' x={-41.557} y={0}>
							{props.donations}
						</tspan>
						<tspan className='c' y={0} xmlSpace='preserve'>
							{' donations'}
						</tspan>
					</text>
				</g>
				<text className='e' transform='translate(1228 243)'>
					<tspan className='f' x={-29.962} y={0}>
						{props.requiredAmount - props.raisedAmount + ' '}
					</tspan>
					<tspan className='c' y={0}>
						{'left'}
					</tspan>
				</text>
			</g>
		</g>
	</svg>
);

export default FundDetailProgress;
