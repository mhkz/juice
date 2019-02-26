var netpkg = {
    // 根据包体协议，读取包的长度
    readPkgSize: function(pkgData, offset) {
        console.log("pkgData", pkgData)
        if(offset >= pkgData.length - 2) {
            return -1;
        }

        var len = pkgData.readUInt16LE(offset);
        
        return len;
    },

    // 把一个要发送的数据封包 2 个字节长度+数组
    packageData: function(data) {
        var buf = Buffer.allocUnsafe(2 + data.length);
        buf.writeInt16LE(2 + data.length, 0);
        buf.fill(data, 2)

        return buf;
    }
};

module.exports = netpkg;