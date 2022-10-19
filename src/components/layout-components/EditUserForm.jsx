import React, { useState } from 'react'
import { Button, Form, Input, Divider, message } from 'antd'
const EditUserForm = ({ user, close }) => {
    const [data, setData] = useState(user)
    const key = 'updatable';
    const [form] = Form.useForm()
    console.log(user)
    const onFinish = () => {
        openMessage()
        setTimeout(() => {
            close()
        }, 1000)
    }

    const openMessage = () => {
        message.loading({
            content: 'Идет сохранение изменений',
            key,
        })
        setTimeout(() => {
            message.success({
                content: 'Выполнено!',
                key,
                duration: 2,
            })
        }, 1000)
    }

    return (
        <>

            <Form
                form={form}
                name="Edit-form"
                layout="horizontal"
                colon={true}
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
            >
                <Form.Item name="name" label="Имя" initialValue={data.name}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }}
                        type="text"
                    />
                </Form.Item>

                <Form.Item name="username" label="Ник" initialValue={data.username}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, username: e.target.value })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Form.Item name="phone" label="Телефон" initialValue={data.phone}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, phone: e.target.value })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Form.Item name="email" label="Email" initialValue={data.email}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }}
                        type="email"
                    />
                </Form.Item>
                <Form.Item name="website" label="Сайт" initialValue={data.website}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, website: e.target.value })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Divider orientation="left" plain>
                    Адрес
                </Divider>
                <Form.Item name="city" label="Город" initialValue={data.address.city}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, address: { ...data.address, city: e.target.value } })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Form.Item name="street" label="Улица" initialValue={data.address.street}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, address: { ...data.address, street: e.target.value } })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Form.Item name="suite" label="Дом" initialValue={data.address.suite}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, address: { ...data.address, suite: e.target.value } })
                        }}
                        type="text"
                    />
                </Form.Item>
                <Form.Item name="zipcode" label="Индекс" initialValue={data.address.zipcode}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, address: { ...data.address, zipcode: e.target.value } })
                        }}
                        type="text"
                    />
                </Form.Item>

                <Divider orientation="left" plain>
                    Компания
                </Divider>

                <Form.Item name="company-name" label="Компания" initialValue={data.company.name}>
                    <Input
                        onChange={(e) => {
                            setData({ ...data, company: { ...data.company, name: e.target.value } })
                        }}
                        type="text"
                    />
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                        <Button type="primary" htmlType="submit">
                            Сохранить изменения
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </>
    )
}

export default EditUserForm
