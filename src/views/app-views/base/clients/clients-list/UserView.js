import React, { Component } from 'react';
import { Drawer, Divider } from 'antd';
import {
	MailOutlined,
	PhoneOutlined,
	IeOutlined,
	BankOutlined,
	NodeIndexOutlined,
	HomeOutlined,
	FieldNumberOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
	render() {
		const { data, open, close} = this.props;

		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				open={open}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{data?.name}</h3>
					<span className="text-muted">Ник: @{data?.username}</span>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Контакты</h6>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">mail: {data?.email}</span>
					</p>
					<p>
						<PhoneOutlined />
						<span className="ml-3 text-dark">Phone: {data?.phone}</span>
					</p>
					<p>
						<IeOutlined />
						<span className="ml-3 text-dark">Website: {data?.website}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">АДРЕС</h6>
					<p>
						<BankOutlined />
						<span className="ml-3 text-dark">Город: {data?.address.city}</span>
					</p>
					<p>
						<NodeIndexOutlined />
						<span className="ml-3 text-dark">Улица: {data?.address.street}</span>
					</p>
					<p>
						<HomeOutlined />
						<span className="ml-3 text-dark">Дом: {data?.address.street}</span>
					</p>
					<p>
						<FieldNumberOutlined />
						<span className="ml-3 text-dark">Индекс: {data?.address.zipcode}</span>
					</p>

				</div>

			</Drawer>
		)
	}
}

export default UserView
