import React from 'react';
import './index.css';
import {
  RadarChartOutlined,
  DownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
  FrownOutlined,
} from '@ant-design/icons';
import { Collapse, theme, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    background: token.colorFillAlter,
    border: 'none',
  };

  const treeData: DataNode[] = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <SmileOutlined />,
      children: [
        {
          title: 'leaf',
          key: '0-0-0',
          icon: <MehOutlined />,
        },
        {
          title: 'leaf',
          key: '0-0-1',
          icon: ({ selected }) =>
            selected ? <FrownFilled /> : <FrownOutlined />,
        },
      ],
    },
  ];

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => (
        <RadarChartOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer }}
    >
      <Panel header="This is panel header 1" key="1" style={panelStyle}>
        <Tree
          showIcon
          defaultExpandAll
          defaultSelectedKeys={['0-0-0']}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
        />
      </Panel>
      <Panel header="This is panel header 2" key="2" style={panelStyle}>
        <Tree
          showIcon
          defaultExpandAll
          defaultSelectedKeys={['0-0-0']}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
        />
      </Panel>
    </Collapse>
  );
};

export default App;
