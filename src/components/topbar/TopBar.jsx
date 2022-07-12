import React from 'react'
import './topbar.scss'
import { Person, Mail } from "@material-ui/icons"
function TopBar({menuOpen,setMenuOpen}) {
	return (
		<div className={"topbar " + (menuOpen && "active") }  >
			<div className='wrapper' >
				<div className='left' >
					<a href="#intro" className='logo' >Sellak-Mouad</a>
					<div className='itemContainer' >
						<Person />
						<span>+212 637499636</span>
					</div>
					<div className='itemContainer' >
						<Mail /> 
						<span>mouaadsellak123@gmail.com</span>
					</div>
				</div>
				<div className='right' >
					<div className='humburger' onClick={()=>setMenuOpen(!menuOpen)} >
						<span className='line1'>1</span>
						<span className='line2'>2</span>
						<span className='line3'>3</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBar