// (1)给定一个大小
// (2)会给内存一个初始值，如果没有制定，那么这个初始值为0
var　buf = Buffer.alloc(10, 0xff);
console.log(buf)

// (1)给定分配一个大小的Buffer内存
// (2)不会对这些内存区域赋初值，随机的数据，原来是什么就是什么
var buf1 = Buffer.allocUnsafe(10)
console.log(buf1)


// 不从Buffter 缓存池里面高效的分配，直接从操作系统分配
// slow 值得是没有从内存池高效的分配
// unsafe 值得是没有初始化值
var buf2 = Buffer.allocUnsafeSlow(10)


// 获得 Buffer对象的长度
// Buffer 一经分配，不能改变
console.log(buf.length);

// 方便的创建方式 复制
// 分配一个Buffer对象，用来存放这个字符串的二进制
var buf3 = Buffer.from("Helloworld!")
console.log(buf3)

var buf4 = Buffer.from([11, 22, 34, 12, -1])

console.log( buf4)

// 重新创建一个Buffer， 把原来的Buffer的数据拷贝给新的Buffer
var buf5 = Buffer.from(buf4);
console.log(buf5)


// buf[index] index[0, length - 1];
console.log(buf[0], buf[4])


// 以大尾写四个字节的整数到Buffer里
// 0x0000ffff
buf.writeInt32BE(11, 0);
console.log(buf)
buf.writeInt32LE(11, 0);
console.log(buf)


var value = buf.readInt32LE(0)
console.log(value)