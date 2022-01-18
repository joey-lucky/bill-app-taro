import {Button, Form, Input, Text, View} from '@tarojs/components'
import styles from './index.module.less'

export default function Login() {

  return (
    <View className={styles.login}>
      <Text className={styles.title}>账单管理</Text>
      <Form>
        <Input className={styles.input} placeholder='请输入账号' />
        <Input className={styles.input}  placeholder='请输入密码'  password />
        <Button className={styles.submit} type='primary' formType='submit'>登录</Button>
      </Form>
    </View>
  );
};
