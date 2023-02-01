## 测试命令
```bash
node stream.js
node ab.js
```
or
```bash
node string.js
node ab.js
```

## 测试结论
两种模式随着 QPS 的增加内存占用都会升高（每次请求响应的数据越大越明显），甚至 string 略高于 stream


## stream log
```
Process: heapTotal 43.97MB heapUsed 16.81MB rss 68.36MB
Process: heapTotal 43.97MB heapUsed 18.90MB rss 68.39MB
Process: heapTotal 43.97MB heapUsed 20.92MB rss 68.41MB
Process: heapTotal 43.97MB heapUsed 23.11MB rss 68.48MB
Process: heapTotal 43.97MB heapUsed 13.67MB rss 68.83MB
Process: heapTotal 43.97MB heapUsed 15.69MB rss 68.84MB
Process: heapTotal 43.97MB heapUsed 17.78MB rss 68.92MB
Process: heapTotal 43.97MB heapUsed 19.87MB rss 68.97MB
Process: heapTotal 43.97MB heapUsed 21.96MB rss 69.03MB
Process: heapTotal 43.97MB heapUsed 23.99MB rss 69.09MB
Process: heapTotal 44.72MB heapUsed 15.28MB rss 69.48MB
Process: heapTotal 44.72MB heapUsed 17.30MB rss 69.56MB
Process: heapTotal 44.97MB heapUsed 19.57MB rss 69.64MB
Process: heapTotal 44.97MB heapUsed 21.59MB rss 69.72MB
Process: heapTotal 44.97MB heapUsed 23.80MB rss 69.80MB
Process: heapTotal 45.47MB heapUsed 14.82MB rss 70.20MB
Process: heapTotal 45.47MB heapUsed 16.84MB rss 70.22MB
Process: heapTotal 45.47MB heapUsed 18.86MB rss 70.28MB
Process: heapTotal 45.47MB heapUsed 21.05MB rss 70.38MB
Process: heapTotal 45.47MB heapUsed 23.07MB rss 70.44MB
Process: heapTotal 45.47MB heapUsed 25.10MB rss 70.50MB
Process: heapTotal 46.22MB heapUsed 15.80MB rss 70.92MB
Process: heapTotal 46.22MB heapUsed 17.83MB rss 70.98MB
Process: heapTotal 46.22MB heapUsed 19.85MB rss 71.06MB
Process: heapTotal 46.47MB heapUsed 22.12MB rss 71.16MB
Process: heapTotal 42.97MB heapUsed 6.76MB rss 68.02MB
Process: heapTotal 42.97MB heapUsed 8.86MB rss 68.06MB
Process: heapTotal 42.97MB heapUsed 10.95MB rss 68.06MB
Process: heapTotal 42.97MB heapUsed 13.09MB rss 68.06MB
```

## string log
```
Process: heapTotal 43.72MB heapUsed 18.85MB rss 73.25MB
Process: heapTotal 43.72MB heapUsed 20.35MB rss 73.31MB
Process: heapTotal 43.72MB heapUsed 21.67MB rss 73.39MB
Process: heapTotal 43.72MB heapUsed 23.00MB rss 73.47MB
Process: heapTotal 43.97MB heapUsed 13.34MB rss 74.31MB
Process: heapTotal 43.97MB heapUsed 14.67MB rss 74.39MB
Process: heapTotal 43.97MB heapUsed 15.99MB rss 74.45MB
Process: heapTotal 43.97MB heapUsed 17.48MB rss 74.55MB
Process: heapTotal 43.97MB heapUsed 18.80MB rss 74.61MB
Process: heapTotal 44.22MB heapUsed 20.37MB rss 74.69MB
Process: heapTotal 44.47MB heapUsed 21.93MB rss 74.78MB
Process: heapTotal 44.47MB heapUsed 23.26MB rss 74.84MB
Process: heapTotal 44.47MB heapUsed 24.57MB rss 74.92MB
Process: heapTotal 45.97MB heapUsed 14.70MB rss 75.97MB
Process: heapTotal 45.97MB heapUsed 16.26MB rss 77.05MB
Process: heapTotal 45.97MB heapUsed 17.58MB rss 77.11MB
Process: heapTotal 45.97MB heapUsed 18.90MB rss 77.20MB
Process: heapTotal 45.97MB heapUsed 20.22MB rss 77.27MB
Process: heapTotal 45.97MB heapUsed 21.69MB rss 77.33MB
Process: heapTotal 45.97MB heapUsed 23.01MB rss 77.41MB
Process: heapTotal 45.97MB heapUsed 24.32MB rss 77.48MB
Process: heapTotal 43.97MB heapUsed 5.21MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 6.77MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 8.11MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 9.48MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 10.87MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 12.44MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 13.79MB rss 75.88MB
Process: heapTotal 43.97MB heapUsed 15.16MB rss 75.88MB
```