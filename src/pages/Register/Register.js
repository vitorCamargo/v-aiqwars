import React from 'react'

import moment from 'moment'

import { Button, Card, Col, Form, Input, Row, Typography, Upload } from 'antd'

import { formatPhone, onlyNumbers } from 'utils/formatter'

const { Title, Text } = Typography

export const Register = () => {
  const onSubmit = (values = {}) => {
    console.log('success', values)
  }

  const formatBirth = (value = '') => {
    const date = onlyNumbers(value)
    let day = date.substring(0, 2)
    let month = date.substring(2, 4)
    const year = date.substring(4, 8)

    if (day > 31) day = '31'
    if (day === '00') day = '01'
    if (month > 12) month = '12'
    if (month === '00') month = '01'

    const newDate = `${day}${month}${year}`
      .replace(/^(\d{2})(\d)/g, '$1/$2')
      .replace(/^(\d{2})\/(\d{2})(\d)/g, '$1/$2/$3')

    return newDate
  }

  const onValidateDate = (_, value = '') => {
    const date = moment(value, 'DD/MM/YYYY')
    const valid = date.isValid()

    if (valid && date.isBefore(moment())) return Promise.resolve()

    return Promise.reject(new Error('uma data válida, você deve digitar!'))
  }

  return (
    <Form
      name='register'
      layout='vertical'
      autoComplete='off'
      onFinish={onSubmit}
      requiredMark={false}
    >
      <Row justify='center' style={{ width: '100%' }}>
        <Col span={24}>
          <Title
            level={1}
            className='primary-color'
            style={{ textAlign: 'center', fontSize: 40, marginBottom: 20 }}
          >
            participe do próximo filme
          </Title>
        </Col>

        <Col xs={24} md={20} lg={16} xxl={12} style={{ marginTop: '30px' }}>
          <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
            <Text
              className='primary-color'
              style={{ fontSize: '18px', marginBottom: '24px' }}
            >
              digite suas informações
            </Text>

            <Text style={{ fontSize: '14px', marginBottom: '8px' }}>
              informações gerais
            </Text>

            <Row gutter={32}>
              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='name'
                  label='NOME'
                  rules={[
                    { required: true, message: 'seu nome, você deve digitar!' }
                  ]}
                >
                  <Input placeholder='Digite seu nome' />
                </Form.Item>
              </Col>

              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='birth'
                  validateFirst
                  normalize={formatBirth}
                  label='DATA DE NASCIMENTO'
                  rules={[
                    {
                      required: true,
                      message: 'sua data de nascimento, você deve digitar!'
                    },
                    {
                      min: 10,
                      message: 'uma data válida, você deve digitar!'
                    },
                    { validator: onValidateDate }
                  ]}
                >
                  <Input
                    maxLength={10}
                    placeholder='Digite sua data de nascimento'
                  />
                </Form.Item>
              </Col>

              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='email'
                  label='EMAIL'
                  rules={[
                    {
                      type: 'email',
                      message: 'um email válido, você deve digitar!'
                    },
                    { required: true, message: 'seu email, você deve digitar!' }
                  ]}
                >
                  <Input placeholder='Digite seu email comercial' />
                </Form.Item>
              </Col>

              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='phone'
                  label='TELEFONE'
                  normalize={formatPhone}
                  rules={[
                    {
                      required: true,
                      message: 'um telefone, você deve digitar!'
                    },
                    {
                      min: 14,
                      message: 'um telefone válido, você deve digitar!'
                    }
                  ]}
                >
                  <Input maxLength={15} placeholder='Digite seu telefone' />
                </Form.Item>
              </Col>

              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='password'
                  label='CRIE SUA SENHA'
                  rules={[
                    { required: true, message: 'sua senha, você deve digitar!' }
                  ]}
                >
                  <Input.Password placeholder='Digite sua senha' />
                </Form.Item>
              </Col>

              <Col xs={24} lg={12}>
                <Form.Item
                  required
                  name='confirm-password'
                  label='CONFIRME SUA SENHA'
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'sua senha, você deve digitar!'
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('suas senhas, iguais não estão!')
                        )
                      }
                    })
                  ]}
                >
                  <Input.Password placeholder='Repita sua senha' />
                </Form.Item>
              </Col>
            </Row>

            <Text style={{ fontSize: '14px', marginBottom: '8px' }}>
              sobre seu contato com star wars
            </Text>

            <Form.Item
              required
              name='resume'
              label='ANEXE O SEU CURRÍCULO'
              rules={[
                { required: true, message: 'seu currículo, você deve enviar!' }
              ]}
            >
              <Upload name='file' maxCount={1}>
                <Button type='ghost' size='small'>
                  escolher arquivo
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item
              required
              name='description'
              label='UM RESUMO DA SUA CARREIRA ARTÍSTICA'
              rules={[
                { required: true, message: 'um resumo, você deve digitar!' }
              ]}
            >
              <Input.TextArea placeholder='Escreva aqui o resumo' />
            </Form.Item>

            <Row justify='center' style={{ marginTop: '24px' }}>
              <Button
                type='ghost'
                htmlType='submit'
                style={{ width: '100%', maxWidth: '370px' }}
              >
                enviar
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form>
  )
}
