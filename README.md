Node Redis Samples
==================

이 저장소는 Node.js에서 Redis와 Socket.io를 이용해 만든 샘플을 모아놓은 곳이다.

Chat
----

첫번째는 아주 단순한 채팅 예제로 Redis의 Publish/Subscribe 기능을 이용해서 만들었다.
하나의 채팅 방만을 제공하므로 Subscriber는 하나만 생성하고,
웹소켓에 연결된 각 클라이언트마다 Publisher를 따로 생성한다.

LICENSE
-------

The MIT License (MIT)

Copyright (c) 2013 Daniel Ku kjunine@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
