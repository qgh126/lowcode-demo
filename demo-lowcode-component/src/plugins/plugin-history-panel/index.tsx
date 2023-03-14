/*
 * @Author: qgh126 qinguanghe126@126.com
 * @Date: 2023-03-15 00:05:37
 * @LastEditors: qgh126 qinguanghe126@126.com
 * @LastEditTime: 2023-03-15 01:14:02
 * @FilePath: \git_test\react-work-lowcode\test\lowcode-demo\demo-lowcode-component\src\plugins\plugin-history-panel\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React  from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button } from '@alifd/next';
import {
  saveSchema,
   
} from '../../services/mockService';
import Panel from './panel/index'

class History extends React.Component{
    state = { historyList: [{id:"1",name:"11"},{id:"2",name:"11"},{id:"3",name:"33"}]  };
    componentDidMount(){
        this.setState({
            historyList:[{id:"1a",name:"1a"},{id:"2a",name:"2a"},{id:"3a",name:"3a"}]  
        })
    }
    render(){
        return(
            <div>
            <p>历史面板</p>
            <Panel historyList={this.state.historyList}></Panel>
          </div>
          ) 
    } 
}
 
// 保存功能示例
const HistoryPanelPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, hotkey, config } = ctx;
      const scenarioName = config.get('scenarioName');
      let isShow = false;
     
      const toShow=()=>{
        console.log('00');
        if(!isShow){
            
            skeleton.showPanel('historyPanel');
        }else{
            skeleton.hidePanel('historyPanel');
        }
        isShow= !isShow;
        
      }
      skeleton.add({
        name: 'historyPanel',
        area: 'rightArea',
        type: 'PanelDock',
        props: {
          align: 'right',
        },
        content: (
         <History></History>
        ),
      });
      skeleton.hidePanel('historyPanel');
      skeleton.add({
        name: 'historyButton',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button onClick={ toShow}>
            历史记录11
          </Button>
        ),
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        saveSchema(scenarioName);
      });
    },
  };
}
HistoryPanelPlugin.pluginName = 'HistoryPanelPlugin';
HistoryPanelPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default HistoryPanelPlugin;