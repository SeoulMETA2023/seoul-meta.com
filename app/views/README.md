# views

모든 view들은 `register()`함수가 있어야합니다.
```python
from flask import Flask
from socketio import Server
...
def register(app: Flask, server: Server) -> None:
    app.register_blueprint(...)
    server.register_namespace(...)
    return
```

`register()`함수에서는  매개변수로 받은 app과 server에 각각 blueprint와 namespace를 
register하는 과정을 포함해야합니다. 


## Flask
Blueprint로 구성된 flask의 엔드포인트들이 있습니다.

아래와 같은 패턴으로 작성해야합니다.
```python
from flask import Blueprint


blueprint = Blueprint("app", __name__, url_prefix="/")

@blueprint.route("/")
def my_route():
    ...
```

> `Blueprint`의 `url_prefix` 매개변수는 해당 blueprint의 엔드포인트 접두사를 결정하니 주의하여 주세요. 

## SocketIO

Namespace로 구성된 socketio의 이벤트들이 있습니다.

아래와 같은 패턴으로 작성해야합니다.
```python
from socketio import Namespace

class MyNamespace(Namespace):
    def on_connect(self, sid, environ):
        ...

    def on_disconnect(self, sid):
        ...

    def on_my_event(self, sid, data):
        ...
```

```python
MyNamespace(namespace="/")
```

> `MyNamespace` 생성시, `namespace` 매개변수는 해당 namespace의 엔드포인트 접두사를 결정하니 주의하여 주세요. 

