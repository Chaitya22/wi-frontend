import React from 'react';
import Navbar from './Navbar';

const Profile = () => {
	return (
		<React.Fragment>
			<div className='container'>
				{/* {Name component} */}
				<div className='card'>
					<div className='card-body'>
						<div className='card-title'>
							<div className='edit-icon'>
								<i className='fa fa-pencil' aria-hidden='true' />
							</div>
							<h3 className='company-name'>S and S Technologies</h3>
						</div>
						<hr style={{ width: '100%' }} />
						<div className='card-text'>
							<div className='row ' style={{ fontSize: '0.9rem' }}>
								<div className='col-md-4 col-sm-6 col-6 '>
									<i className='fa fa-phone' aria-hidden='true' /> 12345678
								</div>
								<div className='col-md-4 col-sm-6 col-6 '>
									<i className='fa fa-envelope' aria-hidden='true' /> john@example.com
								</div>
								<div className='col-md-4 col-sm-6 col-6 '>
									<i className='fa fa-briefcase' aria-hidden='true' /> some id
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* {Wallet} */}
				<div className='card' style={{ marginTop: '35px' }}>
					<div className='card-body'>
						<div className='btn btn-success' style={{ float: 'right', display: 'inline' }}>
							Recharge
						</div>
						<div className='amount text-center'>
							<span style={{ fontSize: '25px', fontWeight: 'bolder' }}>₹2345</span>
							<br />
							<span style={{ fontSize: '12px', margin: '0 auto' }}>Wallet</span>
						</div>
					</div>
				</div>

				{/* {Lists} */}
				<div className='card' style={{ marginTop: '35px' }}>
					<div className='card-body'>
						<ul class='list-group'>
							<li class='list-group-item'>
								<i class='fa fa-google-wallet' aria-hidden='true' /> <span>My transaction</span>
							</li>
							<li class='list-group-item'>
								<i class='fa fa-share-alt' aria-hidden='true' /> <span>Share this app</span>
							</li>
							<li class='list-group-item'>
								<i class='fa fa-star-o' aria-hidden='true' /> <span>Rate Us</span>
							</li>
							<li class='list-group-item'>
								<i class='fa fa-sign-out' aria-hidden='true' /> <span>Sign Out</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Navbar />
		</React.Fragment>
	);
};

export default Profile;
