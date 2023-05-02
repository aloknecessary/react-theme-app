  import React, { Component } from "react";
  import {Layout, Menu } from "antd";
  import Icon from '@ant-design/icons';
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  export class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1" ><a href="/">Home</a></Menu.Item>
              <Menu.Item key="2"><a href="/dashboard">Dashboard</a></Menu.Item>
              <Menu.Item key="3"><a href="/">New</a></Menu.Item>
            </Menu>
        </Header>
        <Content className="full-height">
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
            <Content style={{ padding: '25px', minHeight: 580 }}>I am dashboard content</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>My Dashboard ©2018 Created by Alok Ranjan</Footer>
      </Layout>
    )
  }
}
