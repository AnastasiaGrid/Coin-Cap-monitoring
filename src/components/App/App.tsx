import styles from './App.module.scss'
import {Table} from "antd";
import {getData} from "../../utils/api.ts";

const dataSource = [
    {
        key: 1,
        name:"ddd"
    }
]
const columns = [
    {title: 'Name',
    dataIndex: 'name',
    key: 'name',}
]
function App() {
  const data = getData()
    console.log(data)
    return (
      <div className={styles.container}>
          <div className={styles.colorBlock}></div>
        <Table dataSource={dataSource} columns={columns} className={styles.table}>
        </Table>
      </div>
  )
}

export default App
