/*
 * @Author: qgh126 qinguanghe126@126.com
 * @Date: 2023-03-15 00:24:07
 * @LastEditors: qgh126 qinguanghe126@126.com
 * @LastEditTime: 2023-03-15 01:11:39
 * @FilePath: \git_test\react-work-lowcode\test\lowcode-demo\demo-lowcode-component\src\plugins\plugin-history-panel\panel\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE}
 */
import React from "react"
import { List    } from '@alifd/next';
interface hisObj{
    id:string,
    name:string,
}
 
export default class Panel extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            list:[{id:"aa",name:"aa"},{id:"bb",name:"bb"},{id:"cc",name:"cc"}]
        }

    }
    componentDidMount(): void {
        console.log('this.props.history :>> ', this.props.historyList);
    }
    render(){
        return(
        <div>
          <h1>Hello组件</h1>
          <div>{this.props.historyList.join('')}</div>
          <List
            size="small"
            header={<div>Notifications</div>}
            dataSource={this.props.historyList}
            renderItem={(item, i) => (
                <List.Item
                key={i}
                 
                title={item.name }
               
                >
                 {item.name }--{item.id }
                </List.Item>
            )}
            />
        </div>) 
    }

}