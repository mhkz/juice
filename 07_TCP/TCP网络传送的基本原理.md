### IP地址和端口

- IP地址：所有接入互联网的网络终端，都会有一个地址（可以想象每个），IP地址不能相同

- IP 地址的方式有 ipv4， ipv6。网络设备增多，ipv4 的范围已经不够。ipv6 是 ipv4 的扩充。
    - ipv4: 格式为 x x x . x x x . x x x . x x x。 x x x在[0, 255]这个区间内
    - ipv6 x x x x : x x x x : x x x x : x x x x。 x x x x : x x x x : x x x x : x x x x ; x x x x 在[0, 0xffff]区间内

- 端口：端口的作用在于，不同的应用可以通过端口来获取到自己想要的数据。在 [0, 65535] 之间，之前有同事竟然把端口设置超过 65535 了，出现bug，也是人才。

通过IP+端口的方式，很容易进行数据交换，如下图

![](https://user-gold-cdn.xitu.io/2019/2/19/169035c801569d22?w=516&h=151&f=png&s=8899)

### TCP/IP 传输协议
TCP 是一种可靠的
