import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';

function Navbar() {
	const [ value, setValue ] = React.useState(0);
	return (
		<div className=' xs card fixed-bottom '>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label='Home' icon={<BusinessCenterIcon />} />
				<BottomNavigationAction label='Recharge' icon={<AccountBalanceWalletIcon />} />
				<BottomNavigationAction label='Post Job' icon={<AddCircleOutlineIcon />} />
				<BottomNavigationAction label='Help' icon={<HelpIcon />} />
				<BottomNavigationAction label='Profile' icon={<PersonIcon />} />
			</BottomNavigation>
		</div>
	);
}

export default Navbar;
