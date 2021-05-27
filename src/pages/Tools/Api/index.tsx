import React, { useState } from 'react'

import { useFetchWithNoRefresh } from 'hooks/useFetchWithNoRefresh'
import api from 'services/api'

import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from 'components/Card'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import Form from 'antd/lib/form/Form'
import { FormItem, Input } from 'components/Input'
import { ButtonForIcons, ButtonPrimary } from 'components/Button'

import { TabCard, TabsPane, TabsPaneBody } from 'components/Tabs'

import { Row, Col } from 'antd'

import { DocumentationText, TextWithIcon } from 'components/Text'

import { Tooltip } from 'antd'

import { FaFileAlt, FaCopy } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'
import { DivFlex, DivFlexColumnCenter } from 'components/Div'

const Api: React.FC = () => {
  const [copyIcon, setCopyIcon] = useState({
    key_tooltip: <FaCopy />,
    key_password: <FaCopy />,
  })

  const [tooltipTexts, setTooltipTexts] = useState({
    key_tooltip: 'Copiar',
    key_password: 'Copiar',
  })

  const { data: keys, mutate } = useFetchWithNoRefresh('/get-key')

  const generateNewKeys = async () => {
    const { data: newKeys } = await api.get('/get-key')
    mutate(newKeys)
  }

  const changeTextAndIconOnCopy = ({ target: { name } }: any) => {
    setCopyIcon({ ...copyIcon, [name]: <MdDone color="green" /> })
    setTooltipTexts({ ...tooltipTexts, [name]: 'Copiado!' })

    setTimeout(() => {
      setTooltipTexts({ ...tooltipTexts, [name]: 'Copiar' })
      setCopyIcon({ ...copyIcon, [name]: <FaCopy /> })
    }, 5000)
  }

  const noTokenYetMessage = () => {
    if (keys) {
      return (
        <>
          <Form layout="vertical">
            <Row gutter={[16, 16]}>
              <Col flex="1 0 50%">
                <FormItem name="key" label="API Key">
                  <DivFlex>
                    <Input
                      value={keys?.keys.api_key || '...'}
                      style={{ width: 'auto', marginRight: '12px' }}
                    />

                    <Tooltip placement="right" title={tooltipTexts.key_tooltip}>
                      <CopyToClipboard text={keys?.keys.api_key}>
                        <ButtonForIcons
                          name="key_tooltip"
                          onClick={changeTextAndIconOnCopy}
                        >
                          {copyIcon.key_tooltip}
                        </ButtonForIcons>
                      </CopyToClipboard>
                    </Tooltip>
                  </DivFlex>
                </FormItem>
              </Col>
              <Col flex="1 0 50%">
                <FormItem name="password" label="API Password">
                  <DivFlex>
                    <Input
                      value={keys?.keys.api_password || '...'}
                      style={{ width: 'auto', marginRight: '12px' }}
                    />

                    <Tooltip
                      placement="right"
                      title={tooltipTexts.key_password}
                    >
                      <CopyToClipboard text={keys?.keys.api_password}>
                        <ButtonForIcons
                          name="key_password"
                          onClick={changeTextAndIconOnCopy}
                        >
                          {copyIcon.key_password}
                        </ButtonForIcons>
                      </CopyToClipboard>
                    </Tooltip>
                  </DivFlex>
                </FormItem>
              </Col>
            </Row>
          </Form>

          <DocumentationText>
            <FaFileAlt /> A documentação da API está disponível em:{' '}
            <a
              href="http://pudim.com.br"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#e6be27',
                textDecoration: 'underline',
              }}
            >
              www.link.com.br
            </a>
          </DocumentationText>
        </>
      )
    } else {
      return (
        <DivFlexColumnCenter>
          <p>
            <b>Por enquanto, não há tokens de acesso :(</b>
          </p>
          <p>Você pode gerar um novo token clicando aqui</p>

          <ButtonPrimary
            onClick={() => {
              generateNewKeys()
            }}
            disabled={keys}
          >
            <TextWithIcon>
              Novo token &nbsp;
              <IoReload />
            </TextWithIcon>
          </ButtonPrimary>
        </DivFlexColumnCenter>
      )
    }
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Chaves da API</CardTitle>
          <CardSubTitle>Veja as chaves de API ou cadastre novas</CardSubTitle>
        </div>
        <ButtonPrimary
          onClick={() => {
            generateNewKeys()
          }}
          disabled={keys}
        >
          <TextWithIcon>
            Novo token &nbsp;
            <IoReload />
          </TextWithIcon>
        </ButtonPrimary>
      </CardHeader>

      <CardContent>
        <TabCard>
          <TabsPane tab="Token de acesso" key="1">
            <TabsPaneBody>{noTokenYetMessage()}</TabsPaneBody>
          </TabsPane>
        </TabCard>
      </CardContent>
    </Card>
  )
}

export default Api
