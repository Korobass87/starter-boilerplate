import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Spin, Modal } from 'antd'
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import axios from 'axios'
import UserView from './UserView'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import EditUserForm from 'components/layout-components/EditUserForm.jsx'
// import userData from "assets/data/user.json";

export class UserList extends Component {
    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null,
        loading: false,
        isModalOpen: false,
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: true,
        })
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((data) => {
                this.setState({
                    ...this.state,
                    users: data.data,
                })
            })
            .finally(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                })
            })
    }

    deleteUser = (userId) => {
        this.setState({
            users: this.state.users.filter((item) => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 })
    }

    showUserProfile = (userInfo) => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo,
        })
    }

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
        })
    }

    modalOpen = () => {
        this.setState({
            isModalOpen: true,
        })
    }



    handleCancel = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    editUser = (userInfo) => {
        this.setState({
            selectedUser: userInfo,
        })

        this.modalOpen()
    }

    render() {
        const { users, userProfileVisible, selectedUser, loading, isModalOpen } = this.state

        const tableColumns = [
            {
                title: 'Клиент',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase()
                        b = b.name.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: 'Телефон',
                dataIndex: 'phone',
                sorter: {
                    compare: (a, b) => a.phone.length - b.phone.length,
                },
            },
            {
                title: 'Город',
                dataIndex: 'address',
                render: (address) => <span>{address.city}</span>,
                sorter: {
                    compare: (a, b) => {
                        a = a.address.city.toLowerCase()
                        b = b.address.city.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: 'Status',
                dataIndex: 'status',
                render: (status) => (
                    <Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>
                        {status}
                    </Tag>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase()
                        b = b.name.toLowerCase()
                        return a > b ? -1 : b > a ? 1 : 0
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button
                                className="mr-2"
                                icon={<EditOutlined />}
                                onClick={() => {
                                    this.editUser(elm)
                                }}
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="View">
                            <Button
                                type="primary"
                                className="mr-2"
                                icon={<EyeOutlined />}
                                onClick={() => {
                                    this.showUserProfile(elm)
                                }}
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => {
                                    this.deleteUser(elm.id)
                                }}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ]
        return (
            <>
                <Card bodyStyle={{ padding: '0px' }}>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Spin tip="Loading..."></Spin>
                        </div>
                    ) : (
                        <Table columns={tableColumns} dataSource={users} rowKey="id" />
                    )}
                    <UserView data={selectedUser} open={userProfileVisible} close={() => this.closeUserProfile()} />
                </Card>
                {isModalOpen && (
                    <Modal
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                Cancel
                            </Button>,
                        ]}
                        width={700}
                        centered={true}
                        title=""
                        open={isModalOpen}
                    >
                        <EditUserForm close={this.handleCancel} user={selectedUser} />
                    </Modal>
                )}
            </>
        )
    }
}

export default UserList
